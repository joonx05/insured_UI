import {
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
  Inbox,
  FileText
} from 'lucide-react';

export interface NavItem {
  href: string;
  icon: keyof typeof iconComponents;
  label: string;
  disabled?: boolean;
}

export const iconComponents = {
  Inbox,
  ShoppingCart,
  FileText,
  Package,
  Users2,
  LineChart
};

export const navConfig = [
  { href: '/dashboard', icon: 'Inbox', label: 'Dashboard' },
  // { href: '/dashboard/posts', icon: 'FileText', label: 'Posts' },
  {
    href: '/dashboard/policies',
    icon: 'Users2',
    label: 'Policies',
  },
  {
    href: '/dashboard/claim-submission',
    icon: 'LineChart',
    label: 'Claims',
  }
];
