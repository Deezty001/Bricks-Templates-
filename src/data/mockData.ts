export interface Template {
  id: string;
  title: string;
  website: string;
  category: string;
  imageUrl: string;
  demoUrl: string;
  content: string; // The Bricks JSON/Code
  createdAt: number;
}

export const mockTemplates: Template[] = [
  {
    id: '1',
    title: 'Agency Hero Section',
    website: 'studio-alpha.com',
    category: 'Hero',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800',
    demoUrl: 'https://bricksbuilder.io/',
    content: '{"bricks":{"section":"hero","style":"modern"}}',
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'SaaS Pricing Table',
    website: 'saas-builder.dev',
    category: 'Pricing',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800',
    demoUrl: 'https://bricksbuilder.io/',
    content: '{"bricks":{"section":"pricing","style":"saas"}}',
    createdAt: Date.now()
  }
];

export const STORAGE_KEY = 'bricks_templates_v1';

export const loadTemplates = (): Template[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse stored templates', e);
    }
  }
  return mockTemplates;
};

export const saveTemplates = (templates: Template[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
};
