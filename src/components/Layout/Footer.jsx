import { Shield, Trophy } from 'lucide-react';
import { LiaFacebookF } from 'react-icons/lia';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const quickLinks = ['Nos offres', 'Nos jeux', 'Album 2025', 'À propos'];

const contactLinks = [
  'games@agency.africa',
  'Mentions légales',
  'Protection des données (CNDP)',
  "Conditions d'utilisation",
];

function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] pt-10 lg:pt-12">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-8 mb-10 lg:mb-12">
          <div className="flex-1 lg:flex-[0_0_500px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center">
                <Trophy size={16} className="text-white" />
              </div>
              <span className="text-[18px] font-bold">
                <span className="text-[#CC1A1A]">You</span>
                <span className="text-[#0F172A]">can</span>
                <span className="text-green-700">win</span>
              </span>
            </div>
            <p className="text-[14px] text-[#475569] leading-5 mb-4 max-w-[400px]">
              Plateforme de jeux digitaux pour engager vos communautés autour du
              football. Un service d'Agency.Africa.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <LiaFacebookF size={15} /> },
                { icon: <BsTwitterX size={15} /> },
                { icon: <FaInstagram size={15} /> },
                { icon: <FaLinkedinIn size={15} /> },
              ].map((item, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors bg-[#E2E8F0] text-[#475569] hover:bg-[#CBD5E1]"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Row — stacks on mobile, side by side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-0 lg:flex-1">
            {/* Quick Links */}
            <div className="flex-1 lg:flex-[0_0_240px]">
              <h4 className="text-[16px] font-semibold text-[#0F172A] mb-4">
                Liens rapides
              </h4>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[14px] text-[#475569] no-underline hover:text-[#0F172A] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Legal */}
            <div className="flex-1">
              <h4 className="text-[16px] font-semibold text-[#0F172A] mb-4">
                Contact & Légal
              </h4>
              <div className="flex flex-col gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[14px] text-[#475569] no-underline hover:text-[#0F172A] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E2E8F0] pt-6 lg:pt-8 pb-6 flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 text-center sm:text-left">
            <span className="text-[13px] sm:text-[14px] text-[#475569]">
              © 2025 Youcanwin. Tous droits réservés.
            </span>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-1 text-[13px] sm:text-[14px] text-[#475569]">
              Un service de{' '}
              <strong className="text-green-700 mx-1 font-black">
                Agency.Africa
              </strong>
              — games.agency.africa
            </div>
          </div>

          {/* CNDP Badge */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-[14px] font-medium text-green-700">
              <Shield size={16} />
              Site conforme CNDP Maroc
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
