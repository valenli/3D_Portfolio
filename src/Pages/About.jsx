import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import { skills, experiences } from "../constants/index";
import CTA from "../components/CTA";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section className="max-container">
      <h1 className="head-text">
        {t("Hello")}{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Valen
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t("introduction.2")}</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">{t("skill")}</h3>

        <div className='mt-16 flex flex-wrap gap-9 md:gap-9 justify-center xl:justify-start'>
          {skills.map((skill) => (
            <div key={skill.name} className=''>
              <div className='block-container w-16 h-16 md:w-20 md:h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-evenly items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div
                key={skill.name}
                className='flex justify-center flex-wrap w-16 md:w-20 mt-1.5 text-center text-xs md:text-sm text-[#eeeeee]'
              >
                <p className='text-slate-500'>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">{t("experience")}</h3>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {t(experience.title)}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.point.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-100/50 font-normal pl-1 text-sm"
                    >
                      {t(point)}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
