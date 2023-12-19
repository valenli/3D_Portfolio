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
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
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
    title: "Software service salesperson",
    company_name: "Footprintku",
    icon: footprintku,
    iconBg: "#a2d2ff",
    date: "May 2023 - August 2023",
    points: [
      "承接業務需求，積極導入客戶專案",
      "配合業務發展，不定時結合內部開發成果，主動提供客戶技術需求及解決方案，確保客戶競爭力",
      "負責客戶資料、廠商資料及相關檔案文件的整理、建檔與維護",
      "了解客戶市場狀況，對客戶未來產能需求合理預估",
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
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/valenli/Admin_Dashboard",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "3D Portfolio",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/valenli/3D_Portfolio?tab=readme-ov-file",
  },
];
