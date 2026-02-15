import { Wrench, Car, Clock, ShieldCheck, Gauge, Battery } from 'lucide-react';
import { Review, ServiceItem, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Diamanté Auto Repair",
  address: "861 Redrock Rd, St. George, UT 84770",
  phone: "(435) 705-9969",
  rating: 5.0,
  reviewCount: 65,
  googleMapsUrl: "https://maps.google.com/?q=Diamanté+Auto+Repair+861+Redrock+Rd+St+George+UT+84770"
};

export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    text: "I am so grateful he was so kind to a woman traveling alone, home from a funeral. Honest, kind, and incredibly helpful.",
    author: "Google User",
    rating: 5
  },
  {
    id: 2,
    text: "He fixed it quickly and the cost of the service was more than fair. Highly recommend for anyone needing quick, reliable repairs.",
    author: "Google User",
    rating: 5
  },
  {
    id: 3,
    text: "Hours are flexible for those that work long days and prices are very reasonable! The best experience I've had with a mechanic.",
    author: "Google User",
    rating: 5
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Diagnostic & Repair",
    description: "Advanced computer diagnostics to accurately identify and fix issues quickly.",
    icon: Gauge
  },
  {
    title: "General Maintenance",
    description: "Oil changes, fluid checks, and tune-ups to keep your vehicle running smoothly.",
    icon: Wrench
  },
  {
    title: "Brake Services",
    description: "Complete brake inspections, pad replacements, and rotor resurfacing.",
    icon: ShieldCheck
  },
  {
    title: "Suspension & Steering",
    description: "Ensure a smooth ride with professional strut, shock, and alignment services.",
    icon: Car
  },
  {
    title: "Battery & Electrical",
    description: "Battery testing, replacement, and troubleshooting complex electrical systems.",
    icon: Battery
  },
  {
    title: "Flexible Scheduling",
    description: "We understand you work hard. We offer flexible hours to accommodate your schedule.",
    icon: Clock
  }
];