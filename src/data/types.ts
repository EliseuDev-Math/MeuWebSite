export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string;
  published: boolean;
  createdAt: string;
}

export interface Material {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  fileUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string;
  repoUrl: string;
  liveUrl: string;
  featured: boolean;
  sortOrder: number;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  currentFocus: string;
  formation: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  avatarUrl: string;
}
