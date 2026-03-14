import { TrendingUp, Users, Star, Headphones } from 'lucide-react';

const ExtraServicesData = [
  {
    icon: <TrendingUp className="text-green" size={32} />,
    value: '500K+',
    label: 'Interactions mensuelles',
  },
  {
    icon: <Users className="text-green" size={32} />,
    value: '50+',
    label: 'Marques partenaires',
  },
  {
    icon: <Star className="text-green" size={32} />,
    value: '98%',
    label: 'Taux de satisfaction',
  },
  {
    icon: <Headphones className="text-green" size={32} />,
    value: '24/7',
    label: 'Support technique',
  },
];

function ExtraServices() {
  return (
    <div className="w-full border-t border-b border-[#E2E8F0] py-8 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[#E2E8F0]">
        {ExtraServicesData.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 px-6 sm:px-8 py-6 sm:py-0"
          >
            {stat.icon}
            <span className="text-[#0F172A] font-black text-[24px] sm:text-[28px] leading-tight">
              {stat.value}
            </span>
            <span className="text-[#475569] text-[14px] sm:text-[15px] text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtraServices;
