import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "主页",
    icon: "house",
    link: "/zh/"
  },
  {
    text: "科技",
    icon: "code",
    link: "/zh/posts/tech/",
  },
  {
    text: "生活",
    icon: "star",
    link: "/zh/posts/life/",
  },
  {
    text: "合作",
    icon: "briefcase",
    link: "/zh/posts/intro.md",
  },
]);
