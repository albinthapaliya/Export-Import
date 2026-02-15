export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  imageUrl: string;
  benefits: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
