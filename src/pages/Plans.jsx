import { Check, Earth, TrendingUp, Zap } from 'lucide-react';

function Plans() {
  return (
    <div
      className="grid place-items-center px-6 sm:px-12 lg:px-[80px] py-12 lg:py-[80px]"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-black tracking-[-0.9px] text-[#0F172A] text-center">
        Des formules adaptées à votre échelle
      </h2>
      <p className="text-[#475569] text-[15px] sm:text-[16px] lg:text-[18px] text-center mt-1">
        Choisissez la solution qui correspond à vos besoins et votre ambition
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-8 lg:my-10 w-full">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

const CardData1 = [
  "Jusqu'à 1 000 utilisateurs",
  "Jusqu'à 10K QR codes",
  '1 pays / région',
  'Album standard (équipe nationale)',
  'Hébergement Cloud sécurisé',
  'Backoffice simplifié',
  'Support par email',
  '1 marque',
];

const CardData2 = [
  "Jusqu'à 50 000 utilisateurs",
  'QR codes illimités',
  "Multi-pays (jusqu'à 5)",
  'Album complet (toutes les équipes)',
  'Cloud ou On-Premise',
  'Backoffice avancé avec analytics',
  'Support prioritaire 24/7',
  "Jusqu'à 3 marques",
  'API REST disponible',
];

const CardData3 = [
  'Utilisateurs illimités',
  'QR codes illimités',
  'Déploiement mondial',
  'Albums personnalisés par région',
  'Infrastructure dédiée (On-Premise)',
  'Multi-marques illimité',
  'Développements sur-mesure',
  'Account manager dédié',
  'SLA garanti 99.9%',
  'Formation et onboarding complet',
];

function Card1() {
  return (
    <div className="border border-[#E2E8F0] p-6 sm:p-[33px] rounded-[16px] space-y-5">
      <Zap className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
      <div className="-space-y-1">
        <h3 className="font-semiblack text-[20px]">Starter</h3>
        <span className="text-green font-[500] text-[14px]">
          Campagne locale
        </span>
      </div>
      <p className="text-[#475569] text-[16px] leading-[24px]">
        Idéal pour tester sur un marché
      </p>
      <p className="py-[17px] border-y border-[#F1F5F9] text-[#64748B] text-[14px]">
        Tarification sur mesure selon vos volumes
      </p>
      <div className="space-y-4">
        {CardData1.map((data, i) => (
          <div key={i} className="flex items-center gap-3">
            <Check className="text-green size-4 shrink-0" />
            <p className="text-[#64748B] text-[14px]">{data}</p>
          </div>
        ))}
      </div>
      <button className="px-[17px] py-[11px] border border-[#E2E8F0] text-[#334155] text-[15px] sm:text-[16px] w-full rounded-[8px] font-medium">
        Demander un devis
      </button>
    </div>
  );
}

function Card2() {
  return (
    <div className="border border-[#FECACA] p-6 sm:p-[33px] rounded-[16px] space-y-5 shadow relative">
      <span className="absolute top-0 text-white bg-linear-to-r from-red to-dark-red -translate-y-1/2 left-1/2 -translate-x-1/2 py-[6px] px-[16px] rounded-full text-[12px] md:text-[16px] font-semibold">
        POPULAIRE
      </span>
      <TrendingUp className="text-red bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
      <div className="-space-y-1">
        <h3 className="font-semiblack text-[20px]">Scale</h3>
        <span className="text-green font-[500] text-[14px]">
          Expansion nationale
        </span>
      </div>
      <p className="text-[#475569] text-[16px] leading-[24px]">
        Pour des campagnes d'envergure
      </p>
      <p className="py-[17px] border-y border-[#F1F5F9] text-[#64748B] text-[14px]">
        Tarification sur mesure selon vos volumes
      </p>
      <div className="space-y-4">
        {CardData2.map((data, i) => (
          <div key={i} className="flex items-center gap-3">
            <Check className="text-red size-4 shrink-0" />
            <p className="text-[#64748B] text-[14px]">{data}</p>
          </div>
        ))}
      </div>
      <button className="px-[17px] py-[11px] border border-[#E2E8F0] text-white text-[15px] sm:text-[16px] bg-red w-full rounded-[8px] font-medium">
        Planifier une démo
      </button>
    </div>
  );
}

function Card3() {
  return (
    <div className="border border-[#E2E8F0] p-6 sm:p-[33px] rounded-[16px] space-y-5">
      <Earth className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
      <div className="-space-y-1">
        <h3 className="font-semiblack text-[20px]">Enterprise</h3>
        <span className="text-green font-[500] text-[14px]">
          Solution globale
        </span>
      </div>
      <p className="text-[#475569] text-[16px] leading-[24px]">
        Pour les groupes internationaux
      </p>
      <p className="py-[17px] border-y border-[#F1F5F9] text-[#64748B] text-[14px]">
        Tarification sur mesure selon vos volumes
      </p>
      <div className="space-y-4">
        {CardData3.map((data, i) => (
          <div key={i} className="flex items-center gap-3">
            <Check className="text-green size-4 shrink-0" />
            <p className="text-[#64748B] text-[14px]">{data}</p>
          </div>
        ))}
      </div>
      <button className="px-[17px] py-[11px] border border-[#E2E8F0] text-[#334155] text-[15px] sm:text-[16px] w-full rounded-[8px] font-medium">
        Contactez-nous
      </button>
    </div>
  );
}

export default Plans;
