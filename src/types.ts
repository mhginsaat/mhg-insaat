/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SubService {
  name: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  subServices: string[];
  stages: string[];
  useCases: {
    corporate: string[];
    individual: string[];
  };
  materials: string[];
  prepWorkTips: string[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string; // 'alci-siva' | 'duvar' | 'alcipan' | 'mantolama' | 'sap' | 'boya' | 'cephe' | 'tamirat' | 'tadilat' | 'kurumsal'
  projectType: string; // e.g., "Toplu Konut", "Rezidans", "Daire Tadilatı", "Ofis Projesi", "Müstakil Villa"
  location: string; // e.g., "Kadıköy", "Ataşehir", "Beşiktaş"
  area: string; // e.g., "140 m²", "2,500 m²"
  scope: string[];
  systemUsed?: string; // e.g., "Taşyünü Mantolama Sistemi", "Saten Alçı ve Silikonlu Boya"
  status: 'completed' | 'ongoing';
  description: string;
  imageUrlBefore?: string;
  imageUrlStage?: string;
  imageUrlAfter: string;
  durationDays?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content?: string;
  readTime: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CorporateQuotePayload {
  companyName: string;
  contactName: string;
  title: string;
  phone: string;
  email: string;
  projectName: string;
  projectType: string;
  location: string;
  services: string[];
  area: string;
  pricingPreference: 'materials-and-labor' | 'labor-only';
  startDate: string;
  deadlineDate: string;
  paymentMethod: string;
  description: string;
  contactPreference: 'phone' | 'whatsapp' | 'email';
}

export interface IndividualQuotePayload {
  fullName: string;
  phone: string;
  email: string;
  district: string;
  address: string;
  services: string[];
  area: string;
  spaceType: string;
  description: string;
  preferredDiscoveryDate: string;
  contactPreference: 'phone' | 'whatsapp' | 'email';
}
