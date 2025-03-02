import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Home",
    icon: "house",
    link: "/"
  },
  {
    text: "Technology",
    icon: "code",
    link: "/posts/tech/",
  },
  {
    text: "Lifestyle",
    icon: "star",
    link: "/posts/life/",
  },
  {
    text: "Contact",
    icon: "briefcase",
    link: "/posts/intro.md",
  },
]);
