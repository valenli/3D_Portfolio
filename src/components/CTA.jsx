import React from "react";
import { Link } from "react-router-dom";


const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
      歡迎點擊右邊連結留下訊息與我聯絡 <br className="sm:block hidden" />
      </p>
      <Link to="/contact" className='btn'>Contact</Link>
    </section>
  );
};

export default CTA;
