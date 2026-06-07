export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Model",
    href: "/analysis",
  },
  {
    label: "History",
    href: "/history",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const backMap: Record<
  string,
  {
    href: string;
    label: string;
  }
> = {
  "/analysis": {
    href: "/",
    label: "Home",
  },

  "/dashboard": {
    href: "/analysis",
    label: "Analysis",
  },

  "/about": {
    href: "/",
    label: "Home",
  },
};
