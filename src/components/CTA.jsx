import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const CTA = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
  };


  return (
    <section className="cta">
      <p className="cta-text">
      {t("contact.me")}<br className="sm:block hidden" />
      </p>
      <Link to="/contact" className='btn'>{t("contact.btn")}</Link>
    </section>
  );
};

export default CTA;
