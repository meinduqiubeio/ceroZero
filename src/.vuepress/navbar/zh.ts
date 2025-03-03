import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "主页",
    icon: "house",
    link: "/"
  },
  {
    text: "科技",
    icon: "code",
    link: "/posts/tech/intro.md",
  },
  {
    text: "生活",
    icon: "star",
    link: "/posts/life/intro.md",
  },
  {
    text: "合作",
    icon: "briefcase",
    link: "/posts/intro.md",
  },
]);
