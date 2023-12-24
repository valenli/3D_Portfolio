import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { useTranslation } from 'react-i18next';


const HomeInfo = ({ currentStage }) => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
  };


const InfoBox = ({ text, link, btnText }) =>

(
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{t(text)}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {t(btnText)}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

  const renderContent = {
  
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        {t("Hello")} <span className="font-semibold">Valen</span>👋
        <br />{t("Career")}
      </h1>
    ),
    2: (
      <InfoBox
        text={t("introduction")}
        link="/about"
        btnText={t("more")}
      />
    ),
    3: (
      <h1>
        <InfoBox
          text={t("project")}
          link="/projects"
          btnText={t("visit.btn")}
        />
      </h1>
    ),
    4: (
      <h1>
        <InfoBox
          text={t("thx.watch")}
          link="/contact"
          btnText={t("talk")}
        />
      </h1>
    ),
  };
  
  return renderContent[currentStage] || null;
};

export default HomeInfo;
