import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) =>

(
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      您好，我是 <span className="font-semibold">Valen</span>👋
      <br />一名前端開發人員
    </h1>
  ),
  2: (
    <InfoBox
      text="在自我學習的道路上逐步前進，歡迎點擊下面連結認識更多😀"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <h1>
      <InfoBox
        text="歡迎點下面連結觀看我的個人作品集，未來會持續更新"
        link="/projects"
        btnText="Visit my projects"
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox
        text="感謝您的觀看，歡迎點擊連結留下聯絡方式讓我與您聯絡"
        link="/contact"
        btnText="Let's talk"
      />
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
