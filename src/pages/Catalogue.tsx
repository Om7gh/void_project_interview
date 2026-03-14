import { Catalog1, Catalog2, Catalog3, Catalog4 } from '../assets';

const CatalogData = [
  {
    img: Catalog1,
    title: 'Album Digital 2025',
    description: 'Collection de cartes avec échanges et défis.',
    decouvrir: true,
    badge: 'STAR',
    badgeColor: 'bg-green-500',
  },
  {
    img: Catalog2,
    title: 'Quiz Football',
    description: "Questions sur l'actualité et l'histoire du foot.",
    badge: 'BIENTÔT',
    badgeColor: 'bg-green-500',
  },
  {
    img: Catalog3,
    title: 'Tombola digitale',
    description: 'Tirages au sort avec lots sponsorisés.',
  },
  {
    img: Catalog4,
    title: 'Pronostics',
    description: 'Prédictions de matchs et classements.',
  },
];

function Catalogue() {
  return (
    <div className="px-6 sm:px-12 lg:px-20 py-10 lg:py-12 bg-[#F8FAFC]">
      <div className="text-center mb-8 lg:mb-10">
        <h2 className="text-[#0F172A] font-black text-[26px] sm:text-[32px] lg:text-4xl mb-2">
          Catalogue de jeux
        </h2>
        <p className="text-[#475569] text-[15px] sm:text-[16px] lg:text-lg">
          Des mécaniques éprouvées pour engager vos audiences
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {CatalogData.map((data, i) => (
          <div
            key={i}
            className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-200 group"
          >
            <div className="relative w-full h-[200px] overflow-hidden">
              <img
                src={data.img}
                alt={data.title}
                className="object-cover w-full h-full group-hover:scale-[1.1]"
              />
              {data.badge && (
                <span
                  className={`absolute top-3 right-3 ${data.badgeColor} text-white text-[11px] font-bold px-2 py-0.5 rounded-full tracking-wide`}
                >
                  {data.badge}
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-[#0F172A] font-bold text-[15px] mb-1">
                {data.title}
              </h3>
              <p className="text-[#475569] text-[13px] leading-snug mb-3">
                {data.description}
              </p>
              {data.decouvrir && (
                <p className="inline-flex items-center gap-1 text-green-600 font-semibold text-[14px] hover:text-green-700 transition-colors cursor-pointer">
                  Découvrir
                  <span className="text-[16px]">›</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
