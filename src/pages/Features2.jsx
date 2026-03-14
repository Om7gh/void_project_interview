import { QrCode } from 'lucide-react';

const FeaturesList = [
  {
    icon: (
      <QrCode className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Utilisateurs',
    description: 'De 1K à illimité',
  },
  {
    icon: (
      <QrCode className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'QR Codes',
    description: 'Volume adapté',
  },
  {
    icon: (
      <QrCode className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Couverture',
    description: 'Local à mondial',
  },
  {
    icon: (
      <QrCode className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Albums',
    description: 'Standard ou custom',
  },
  {
    icon: (
      <QrCode className="text-green bg-[#F0FDF4] p-4 size-13 rounded-[8px]" />
    ),
    title: 'Infrastructure',
    description: 'Cloud ou On-Premise',
  },
];

function Features2() {
  return (
    <div className="grid place-items-center px-6 sm:px-12 lg:px-[96px] py-10 lg:py-[96px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 w-full">
        {FeaturesList.map((el, i) => (
          <div key={i} className="bg-white space-y-2 p-4 rounded-[12px]">
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
    </div>
  );
}

export default Features2;
