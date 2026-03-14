import { CalendarDays, Mail } from 'lucide-react';

function Pub() {
  return (
    <div className="w-full bg-[#CC1A1A] py-12 lg:py-16 px-6 sm:px-12 lg:px-8 flex flex-col items-center text-center gap-6">
      <div>
        <h2 className="text-white font-black text-[24px] sm:text-[28px] lg:text-[32px] mb-2">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-white/80 text-[14px] sm:text-[15px] lg:text-[16px]">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <button className="flex items-center justify-center gap-2 bg-white text-[#CC1A1A] font-semibold text-[14px] sm:text-[15px] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
          <CalendarDays size={18} />
          Planifier une démo gratuite
        </button>

        <button className="flex items-center justify-center gap-2 bg-transparent border border-white/50 text-white font-semibold text-[14px] sm:text-[15px] px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
          <Mail size={18} />
          Nous contacter
        </button>
      </div>
    </div>
  );
}

export default Pub;
