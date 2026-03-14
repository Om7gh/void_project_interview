import {
  Bell,
  CloudDownload,
  GalleryVerticalEnd,
  Gift,
  QrCode,
  Settings,
  SlidersVertical,
} from 'lucide-react';
import { Arrow } from '../assets';
import { FaUsers } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';

const FeaturesList = [
  {
    icon: (
      <QrCode className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Générateur QR Codes',
    description: 'Créez et téléchargez vos QR codes uniques en masse',
  },
  {
    icon: (
      <FaUsers className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'CRM Participants',
    description:
      'Collectez et gérez vos participants avec segmentation avancée',
  },
  {
    icon: (
      <SlidersVertical className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Configuration jeux',
    description:
      'Paramétrez entièrement vos jeux : règles, lots, durée, visuels',
  },
  {
    icon: (
      <SiGoogleanalytics className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Analytics temps réel',
    description: 'Suivez vos KPIs : scans, conversions, engagement, ROI',
  },
  {
    icon: (
      <Gift className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Gestion des lots',
    description: 'Définissez vos récompenses et gérez les tirages au sort',
  },
  {
    icon: (
      <Bell className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Notifications',
    description: 'Envoyez des push, emails et SMS à vos participants',
  },
  {
    icon: (
      <CloudDownload className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Export données',
    description: 'Téléchargez vos données en CSV, Excel ou via API',
  },
  {
    icon: (
      <GalleryVerticalEnd className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Multi-campagnes',
    description: 'Gérez plusieurs campagnes simultanément',
  },
];

function Features() {
  return (
    <div className="grid place-items-center about-bg px-6 sm:px-12 lg:px-[96px] py-12 lg:py-[80px] border border-black/20">
      <div className="flex gap-2 bg-[#DCFCE7] px-[12px] py-[4px] rounded-full w-fit items-center">
        <Settings className="w-[12px] h-[12px] text-green" />
        <span className="text-green font-black text-xs">
          Backoffice tout-en-un
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] text-[#0F172A] font-black text-center mt-2">
        Gérez tout depuis une interface unique
      </h2>

      {/* Subtitle */}
      <p className="text-[#475569] text-[15px] sm:text-[16px] lg:text-[18px] w-full sm:w-3/4 lg:w-1/2 text-center mt-1">
        Notre backoffice intuitif vous permet de créer, configurer et piloter
        vos campagnes en toute autonomie
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 my-8 lg:my-10 w-full">
        {FeaturesList.map((el, i) => (
          <div
            key={i}
            className="bg-white border border-[#E2E8F0] space-y-2 p-4 rounded-[12px] hover:shadow-lg hover:shadow-black/10 cursor-pointer"
          >
            {el.icon}
            <h3 className="text-[15px] sm:text-[16px] text-[#0F172A] font-bold">
              {el.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] text-[#475569]">
              {el.description}
            </p>
          </div>
        ))}
      </div>

      <button className="flex items-center w-full sm:w-auto justify-center px-[24px] py-[12px] bg-green text-white gap-2 text-[14px] rounded-[8px] shadow-lg shadow-dark/10 hover:bg-dark-green ">
        <span>Demander un accès au backoffice</span>
        <img src={Arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default Features;
