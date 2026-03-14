import { Zap, Heart } from 'lucide-react';
import { TbEyeShare } from 'react-icons/tb';

const ParcourData = [
  {
    icon: (
      <Zap
        className="text-white inline rounded-xl p-4 size-14 bg-white/20 my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Engagement immédiat',
    description: 'Chaque produit devient une opportunité de jeu',
  },
  {
    icon: (
      <Heart
        className="text-white inline rounded-xl p-4 size-14 bg-white/20 my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Fidélisation naturelle',
    description: 'Les clients reviennent pour compléter leur collection',
  },
  {
    icon: (
      <TbEyeShare
        className="text-white inline rounded-xl p-4 size-14 bg-white/20 my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Viralité organique',
    description: 'Les fans partagent et échangent entre eux',
  },
];

function Offers() {
  return (
    <div className="grid place-items-center py-12 lg:py-[80px] px-6 sm:px-12 lg:px-[96px] bg-linear-to-r from-green to-dark-green">
      <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-black text-white mb-3 text-center">
        Transformez vos ventes en expérience mémorable
      </h2>
      <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] w-full sm:w-3/4 lg:w-1/2 text-center">
        YouCanWin offre à vos clients plus qu'un produit : une expérience
        interactive complète autour du football
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 lg:my-10 gap-6 lg:gap-10 w-full">
        {ParcourData.map((data, i) => (
          <div
            className="bg-white/10 rounded-[16px] px-6 sm:px-7 py-8 sm:py-10 text-center backdrop-blur-[8px]"
            key={i}
          >
            {data.icon}
            <h3 className="font-black text-white text-[18px] sm:text-[20px]">
              {data.title}
            </h3>
            <p className="text-white text-[14px] sm:text-[16px]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
