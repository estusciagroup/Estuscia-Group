import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { LeadSubmission } from "./src/types";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory lead storage
const leadsList: LeadSubmission[] = [
  {
    id: "lead-1",
    fullName: "Arun Kumar",
    email: "arun.kumar@gmail.com",
    phone: "+91 98765 43210",
    organization: "Astra Ventures",
    inquiryType: "Venture Incubator",
    message: "Interested in the 0-to-1 startup acceleration program.",
    createdAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString(),
    status: "new"
  },
  {
    id: "lead-2",
    fullName: "Priya Sharma",
    email: "priya.sharma@outlook.com",
    phone: "+91 99112 23344",
    organization: "Global Trade Corp",
    inquiryType: "Global Trade",
    message: "Seeking import-export channel guidance in Middle East corridors.",
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    status: "contacted"
  }
];

// Initialize Gemini SDK with telemetry headers
const geminiApiKey = process.env.GEMINI_API_KEY || "";
let ai: GoogleGenAI | null = null;

if (geminiApiKey) {
  ai = new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("Warning: GEMINI_API_KEY is not set. AI Advisor will operate in fallback mock mode.");
}

// 1. API: Get all leads
app.get("/api/leads", (req, res) => {
  res.json(leadsList);
});

// 2. API: Submit a new lead
app.post("/api/leads", (req, res) => {
  const { fullName, email, phone, organization, inquiryType, message } = req.body;

  if (!fullName || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields: fullName, email, phone, and message are required." });
  }

  const newLead: LeadSubmission = {
    id: `lead-${Date.now()}`,
    fullName,
    email,
    phone,
    organization: organization || undefined,
    inquiryType: inquiryType || "General Inquiry",
    message,
    createdAt: new Date().toISOString(),
    status: "new"
  };

  leadsList.unshift(newLead);
  res.status(201).json({ success: true, lead: newLead });
});

// 3. API: Update lead status
app.patch("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status || !["new", "contacted", "approved"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value." });
  }

  const leadIndex = leadsList.findIndex(l => l.id === id);
  if (leadIndex === -1) {
    return res.status(404).json({ error: "Lead not found." });
  }

  leadsList[leadIndex].status = status;
  res.json({ success: true, lead: leadsList[leadIndex] });
});

// 4. API: Delete lead
app.delete("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const index = leadsList.findIndex(l => l.id === id);
  if (index !== -1) {
    leadsList.splice(index, 1);
    return res.json({ success: true });
  }
  res.status(404).json({ error: "Lead not found" });
});

// 5. API: Chat with Gemini AI Advisor
app.post("/api/gemini/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!ai) {
    // Elegant fallback if API key is missing
    return res.json({
      text: `Hello! Thank you for inquiring about Estuscia Group. I am operating in offline mode right now as the backend key is being configured. \n\nTo answer your question directly based on our official prospectus: Estuscia Group offers 3 primary wealth creation models: \n1. **40-Day Plan**: 10% Return (Short-term liquidity) \n2. **5-Month Plan**: 50% Return (10% Monthly Option) \n3. **8-Month Plan**: 82% Return (10.25% Monthly Option) \n\nFor personalized onboarding, please give us a call at **+91 7907 046 955** or email us at **estusciagroup@gmail.com**. You can also submit the inquiry form right here on our page!`
    });
  }

  try {
    const systemInstruction = `You are an elite, highly professional Executive Business Consultant for Estuscia Group.
Your goal is to guide prospective enterprise clients, investors, and startup founders who visit the official Estuscia Group Website.
Be extremely polite, formal, objective, confident, and professional.

Core Information about Estuscia Group:
- Company Name: Estuscia Group
- Tagline: Building Businesses. Creating Opportunities. Empowering the Future.
- Corporate Ecosystem Verticals:
  1. Estuscia Financial Services: Capital engineering, debt/equity advisory, private equity & asset preservation.
  2. Estuscia Business Consulting: Cross-border corporate advisory, governance, M&A strategy, and market expansion.
  3. Estuscia Tech & Media: Custom software, cloud infrastructure, AI automation, and digital media production.
  4. Estuscia Global Trade & Commerce: International trade channels, supply chain logistics, and customs clearance.
  5. Estuscia Venture Studio: Startup acceleration, seed funding, technical co-building, and mentorship.
- Startup Financial Planning Pipeline: 5-step framework (Feasibility, Capital Structuring, Digital Tech, Operational Scaling, Ecosystem Integration).
- Contact Info: Email contact@estuscia.com, Phone +1 (800) 458-7824 / +91 (80) 4567-8900.

Instructions:
- Address the visitor respectfully.
- Answer questions about our ecosystem entities, consulting capabilities, startup incubation, or global trade.
- Encourage visitors to submit an inquiry through the Contact Us form on the website for tailored proposals.`;

    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const responseText = response.text || "I apologize, but I could not formulate a response. Please reach out directly to +91 7907 046 955.";
    res.json({ text: responseText });

  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({
      error: "Failed to query Gemini API",
      text: "I am experiencing some connectivity issues with my advanced AI core. However, I can confirm that our 30-day investment program offers a fixed 50% profit share on investments starting from ₹10,000. Please reach out to our team at +91 7907 046 955 or estusciagroup@gmail.com."
    });
  }
});

// Vite Integration
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Estuscia Server] Running on http://localhost:${PORT}`);
  });
}

start();
