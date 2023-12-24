import { footprintku, meta, shopify, starbucks, tesla } from "../assets/images";

import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nodejs,
  react,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  figma,
} from "../assets/icons";
//技能樹

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },
  
];
//經驗
export const experiences = [
  {
    title: "Software business developer",
    company_name: "Footprintku",
    icon: footprintku,
    iconBg: "#a2d2ff",
    date: "May 2023 - August 2023",
    point: [
      'point.1', 'point.2', 'point.3', 'point.4'
    ],
  },
];
//社交媒體帳號
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/valenli",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://linkedin.com/in/valen-lee",
  },
];
//作品
export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "Admin Dashboard",
    description:
    "晚點再修改",
    github: "https://github.com/valenli/Admin_Dashboard",
    url: "https://google.com",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "Portfolio",
    description:
    '此項作品利用到了React框架，並使用了Three.js與Email.js以及其他動畫庫來呈現，在未來會持續更新內容',
    github: "https://github.com/valenli/3D_Portfolio?tab=readme-ov-file",
    url: "https://google.com",
  },
];
