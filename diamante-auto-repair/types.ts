import { LucideIcon } from 'lucide-react';

export interface Review {
  id: number;
  text: string;
  author: string;
  rating: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}