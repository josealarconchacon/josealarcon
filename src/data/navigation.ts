export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  id: string;
  url: string;
  icon: string;
  color: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/jose-alarcon-chacon/",
    icon: "linkedin",
    color: "blue",
  },
  {
    id: "github",
    url: "https://github.com/josealarconchacon",
    icon: "github",
    color: "gray",
  },
];
