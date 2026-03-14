import {
  Analayse,
  Cadeau,
  Check,
  Collection,
  Phone_Icon,
  About as picture,
  Cartable,
} from '../assets';

const features = [
  {
    icon: Phone_Icon,
    title: 'Activation instantanée',
    desc: 'QR codes uniques sur chaque produit',
  },
  {
    icon: Collection,
    title: 'Collection digitale',
    desc: 'Cartes de joueurs, raretés, échanges',
  },
  {
    icon: Cadeau,
    title: 'Récompenses exclusives',
    desc: 'Tirages au sort, lots partenaires, expériences VIP',
  },
  {
    icon: Analayse,
    title: 'Analytics avancés',
    desc: 'Dashboard temps réel, insights consommateurs',
  },
];

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 px-6 sm:px-12 lg:px-[96px] about-bg py-12 lg:py-[80px]">
      {/* Image */}
      <img
        src={picture}
        alt="about img"
        className="w-full max-w-[500px] mx-auto lg:mx-0 rounded-xl object-cover"
      />

      {/* Content */}
      <div className="flex flex-col gap-5 lg:mt-6">
        {/* Badge */}
        <div className="flex gap-2 bg-[#DCFCE7] px-[12px] py-[4px] rounded-full w-fit items-center">
          <img src={Check} alt="check-icon" className="h-[12px] w-[12px]" />
          <span className="text-dark-green font-black text-xs">
            Solution complète
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-black leading-tight tracking-tight">
          Le terrain de jeu digital de votre marque
        </h2>

        {/* Description */}
        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-[#475569]">
          YouCanWin transforme vos produits en expériences interactives. Chaque
          achat devient une opportunité d'engagement avec vos consommateurs.
        </p>

        {/* Feature List */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <img
                src={f.icon}
                alt="icon"
                className="bg-[#F0FDF4] w-[40px] h-[40px] min-w-[40px] p-2 rounded-md"
              />
              <div>
                <h3 className="text-dark font-black text-[15px] sm:text-[16px]">
                  {f.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[14px]">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="flex items-center px-[28px] sm:px-[32px] py-[14px] sm:py-[17px] bg-red text-white gap-2 text-[14px] w-full sm:w-fit justify-center sm:justify-start rounded-[8px] shadow-lg shadow-dark/10 font-bold hover:bg-dark-red">
          Planifier une démo{' '}
          <img src={Cartable} alt="arrow icon" className="w-[12px] h-[12px]" />
        </button>
      </div>
    </div>
  );
}

export default About;
