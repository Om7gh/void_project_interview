import { GalleryVerticalEnd, Gift, QrCode, ShoppingCart } from 'lucide-react';
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';

const ParcourData = [
  {
    icon: (
      <ShoppingCart
        className="text-green inline rounded-xl p-4 size-14 border border-[#BBF7D0] my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Achat produit',
    description: 'Le client achète votre produit en magasin',
    isRed: false,
  },
  {
    icon: (
      <QrCode
        className="text-green inline rounded-xl p-4 size-14 border border-[#BBF7D0] my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Scan QR Code',
    description: "Il scanne le code sur l'emballage",
    isRed: false,
  },
  {
    icon: (
      <GalleryVerticalEnd
        className="text-green inline rounded-xl p-4 size-14 border border-[#BBF7D0] my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Vérification',
    description: 'Le code est validé et enregistré',
    isRed: false,
  },
  {
    icon: (
      <HiOutlinePuzzlePiece
        className="text-red inline rounded-xl p-4 size-14 border border-[#FECACA] my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Collection',
    description: 'Il complète sa collection',
    isRed: true,
  },
  {
    icon: (
      <Gift
        className="text-red inline rounded-xl p-4 size-14 border border-[#FECACA] my-3"
        style={{ boxShadow: '0px 2px 4px -2px #0000001A' }}
      />
    ),
    title: 'Récompenses',
    description: 'Participe aux tirages',
    isRed: true,
  },
];

function Parcour() {
  return (
    <div className="grid place-items-center px-6 sm:px-12 lg:px-[80px] py-12 lg:py-[80px]">
      <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-black text-center">
        Un parcours client simple et engageant
      </h2>
      <p className="text-[#475569] text-[15px] sm:text-[16px] lg:text-[18px] text-center mt-1">
        De l'achat du produit à la récompense, en 5 étapes
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 my-8 lg:my-10 gap-6 lg:gap-10 w-full">
        {ParcourData.map((data, i) => (
          <div className="relative text-center" key={i}>
            <span
              className={`font-black absolute right-2 top-0 ${data.isRed ? 'bg-red' : 'bg-green'} px-2 py-1 text-white rounded-full text-xs z-10`}
            >
              {i + 1}
            </span>
            {data.icon}
            <h3 className="font-semibold text-[14px] sm:text-[15px] lg:text-base">
              {data.title}
            </h3>
            <p className="text-[#475569] text-[12px] sm:text-[13px] lg:text-[14px]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parcour;
