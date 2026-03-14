import React from 'react';
import { Arrow, Lamp, Phone, Shape } from '../assets';

function Home() {
  return (
    <div className="home-bg grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-12 lg:px-[80px] pt-16 sm:pt-24 lg:pt-[128px] pb-10 sm:pb-16 lg:pb-[80px] gap-10 lg:gap-0">
      <div className="flex flex-col gap-4 lg:gap-[16px]">
        <h2 className="-tracking-[1.8px] leading-15 text-[40px] sm:text-[56px] lg:text-[72px] font-black text-[#0F172A]">
          Transformez chaque{' '}
          <span className="bg-linear-to-r w-fit text-transparent bg-clip-text from-green to-dark-green relative inline-block">
            produit{' '}
            <img
              src={Shape}
              alt="shape"
              className="absolute left-1/2 top-full -translate-x-1/2 w-full"
            />
          </span>{' '}
          en expérience de jeu
        </h2>

        <p className="text-[16px] md:mt-5 sm:text-[20px] lg:text-[24px] text-[#475569] leading-7 lg:leading-7">
          YouCanWin connecte vos marques aux fans de football à travers des
          mécaniques de gamification innovantes.{' '}
          <span className="font-semiblack text-dark">
            Codes QR, cartes digitales, défis et récompenses.
          </span>
        </p>

        <div className="flex gap-6 sm:gap-[32px] pt-2">
          <div>
            <p className="text-[28px] sm:text-[36px] font-black text-dark-green">
              500k +
            </p>
            <p className="text-[12px] sm:text-[14px] font-medium text-[#475569]">
              Interactions/mois
            </p>
          </div>
          <div>
            <p className="text-[28px] sm:text-[36px] font-black text-dark-red">
              50+
            </p>
            <p className="text-[12px] sm:text-[14px] font-medium text-[#475569]">
              Marques actives
            </p>
          </div>
          <div>
            <p className="text-[28px] sm:text-[36px] font-black text-dark-green">
              x3.5
            </p>
            <p className="text-[12px] sm:text-[14px] font-medium text-[#475569]">
              ROI moyen
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[16px] items-start sm:items-center">
          <button className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-[32px] py-3 sm:py-[17px] bg-linear-90 from-green to-dark-green text-white group  hover:shadow-lg hover:shadow-black/15 gap-2 text-[14px] rounded-[8px] shadow-lg shadow-dark/10">
            <span>Voir la démo</span>
            <img
              src={Arrow}
              alt="arrow"
              className="group-hover:translate-x-1 duration-150"
            />
          </button>
          <button className="border border-border flex items-center justify-center w-full sm:w-auto px-6 sm:px-[32px] py-3 sm:py-[17px] text-dark gap-2 text-[14px] rounded-[8px] group  hover:shadow-lg hover:shadow-black/15 shadow-lg shadow-dark/10 hover:border">
            <img
              src={Lamp}
              alt="lamp"
              className="fill-white group-hover:border-ghost-white"
            />
            <span className="font-medium text-[#334155]">
              Comment ça marche
            </span>
          </button>
        </div>

        <div className="text-xs text-[#64748B] space-y-3 border-t border-dark/20 pt-6 mt-4 lg:mt-6">
          <p>Ils nous font confiance</p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <p>Maroc Telecom</p>
            <p>Inwi</p>
            <p>Orange</p>
            <p>Carrefour</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end">
        <img
          src={Phone}
          alt="home"
          className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-full lg:h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Home;
