import React from "react";
import FooterLinks from "../Constants/footerLinks";

const Footer: React.FC = () => {
  return (
    <nav className="w-full h-[100px]  bg-[#f6f9fc] boroder-t-2  ">
      <section className="flex justify-between max-w-7xl mx-auto items-center h-full">
        <div className="text-slate-700 flex items-center">
          <h1 className="text-2xl font-semibold font-heroSectionFont ">
            Groomer <span className="text-orange-700 text-2xl">.</span>
          </h1>
          <span className="text-slate-600 text-sm">Groomer. 2024</span>
        </div>
        <div className="text-slate-200 ">
          <ul className="flex gap-14 font-semibold text-base">
            {FooterLinks.map(({ Link, Icon }) => {
              return (
                <a href={Link} key={Link}>
                  <li>
                    <Icon className="w-6 h-auto text-slate-600 hover:text-slate-700" />
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Footer;
