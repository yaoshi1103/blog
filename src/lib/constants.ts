export interface DesktopIconData {
  id: string;
  label: string;
  href?: string;
  isExternal?: boolean;
  column: 'left' | 'right';
  hasFileExtension?: boolean;
}

export const leftIcons: DesktopIconData[] = [
  { id: 'home', label: 'home.mdx', href: '/', column: 'left', hasFileExtension: true },
  { id: 'signup', label: 'Sign up \u2197', href: 'https://app.posthog.com/signup', column: 'left', isExternal: true },
  { id: 'product-os', label: 'Product OS', column: 'left' },
  { id: 'switch-mode', label: 'Switch to website mode', column: 'left' },
  { id: 'pricing', label: 'Pricing', column: 'left' },
  { id: 'customers', label: 'customers.mdx', column: 'left', hasFileExtension: true },
  { id: 'demo', label: 'demo.mov', column: 'left', hasFileExtension: true },
  { id: 'docs', label: 'Docs', column: 'left' },
  { id: 'talk', label: 'Talk to a human', column: 'left' },
];

export const rightIcons: DesktopIconData[] = [
  { id: 'why', label: 'Why PostHog?', column: 'right' },
  { id: 'changelog', label: 'Changelog', column: 'right' },
  { id: 'handbook', label: 'Company handbook', column: 'right' },
  { id: 'store', label: 'Store', column: 'right' },
  { id: 'work', label: 'Work here', column: 'right' },
  { id: 'trash', label: 'Trash', column: 'right' },
];

export const menuLinks = [
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'More', href: '#' },
];