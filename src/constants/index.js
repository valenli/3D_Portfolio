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
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
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
    "以React為主的框架網站，用於模擬業界b2c操控後台數據管理頁面。",
    github: "https://github.com/valenli/Admin_Dashboard",
    url: "https://google.com",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "Portfolio",
    description:
    '觀看 Youtube 的 Clone 影片，Clone 出 3D Portfolio，初步的認識如何使用 React 做出 3D 網站，也將影片中學習到的技術與套件使用到自己的個人網站上。',
    github: "https://github.com/valenli/3D_Portfolio?tab=readme-ov-file",
    url: "https://google.com",
  },
];
