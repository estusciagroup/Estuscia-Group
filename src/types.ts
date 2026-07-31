/**
 * Shared Type Definitions for Estuscia Group LLP Corporate Portal
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  inquiryType: 'Financial Services' | 'Business Consulting' | 'Tech & Media' | 'Global Trade' | 'Venture Incubator' | 'General Inquiry';
  message: string;
  createdAt: string;
  status: 'new' | 'in_review' | 'contacted';
}

export interface EcosystemEntity {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: string[];
  gradient: string;
  statsLabel: string;
  statsValue: string;
}

export interface CorporateService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
  category: string;
}

export interface PipelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverables: string[];
  iconName: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  linkedInUrl?: string;
  emailUrl?: string;
  expertise: string[];
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  description: string;
  iconName: string;
  focusAreas: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string;
}

export interface CorporateStat {
  label: string;
  value: string;
  change: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  sector: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ecosystem' | 'services' | 'incubation' | 'partnerships';
}
