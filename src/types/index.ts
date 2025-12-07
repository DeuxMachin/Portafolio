export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'languages' | 'frameworks' | 'database' | 'tools' | 'other';
}

export interface Reference {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatarUrl?: string;
  linkedinUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  avatarUrl?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}
