/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Instagram, Twitter, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

interface Shoe {
  id: string;
  name: string;
  model: string;
  year: string;
  color: string;
  images: string[];
  bgImage: string;
  description: string;
}

const KYRIE_SHOES: Shoe[] = [
  {
    id: 'kyrie-1',
    name: 'Nike Kyrie 1',
    model: 'Dream',
    year: '2014',
    color: '#000000',
    images: [
      'https://drive.google.com/drive/folders/19QNg4tTeG_OHETuFknq6xO2bhh0yiXKq',
      'https://images.nike.com/is/image/DotCom/705277_016_A_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/705277_016_C_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/705277_016_D_PREM?wid=1000&hei=1000&fmt=png-alpha'
    ],
    bgImage: 'https://picsum.photos/seed/kyrie1-slide1/1920/1080?blur=10',
    description: "Kyrie Irving's first signature shoe—the 20th ever from Nike—packs Hyperfuse and Zoom Air tech into a three-quarter cut he personally designed. Easter eggs nod to his youth, with storytelling colorways that make every release a collector's gem."
  },
  {
    id: 'kyrie-2',
    name: 'Nike Kyrie 2',
    model: 'Kyrie-oke',
    year: '2015',
    color: '#1A1A1A',
    images: [
      'https://images.nike.com/is/image/DotCom/819583_001_A_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/819583_001_B_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/819583_001_C_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/819583_001_D_PREM?wid=1000&hei=1000&fmt=png-alpha'
    ],
    bgImage: 'https://picsum.photos/seed/kyrie2/1920/1080?blur=10',
    description: `Built for Kyrie's lightning-quick moves, the Kyrie 2 rocks a curved sole, Zoom Air, and heel strap for lockdown stability. Leo Chang's design shines in the "Ky-Rispy Kreme" edition, channeling his Krispy Kreme obsession with iconic logo colors.`
  },
  {
    id: 'kyrie-3',
    name: 'Nike Kyrie 3',
    model: 'Black Ice',
    year: '2016',
    color: '#000000',
    images: [
      'https://images.nike.com/is/image/DotCom/852395_001_A_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/852395_001_B_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/852395_001_C_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/852395_001_D_PREM?wid=1000&hei=1000&fmt=png-alpha'
    ],
    bgImage: 'https://picsum.photos/seed/kyrie3/1920/1080?blur=10',
    description: `Debuting in 2016, the Kyrie 3 fuels explosive, multi-directional play with dual pivot points, herringbone traction, and a Zoom Air heel capsule. Packed with personal Easter eggs, it's a fan-favorite silhouette celebrating Kyrie's life and game.`
  },
  {
    id: 'kyrie-4',
    name: 'Nike Kyrie 4',
    model: 'Confetti',
    year: '2017',
    color: '#FFD700',
    images: [
      'https://images.nike.com/is/image/DotCom/943806_400_A_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/943806_400_B_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/943806_400_C_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/943806_400_D_PREM?wid=1000&hei=1000&fmt=png-alpha'
    ],
    bgImage: 'https://picsum.photos/seed/kyrie4/1920/1080?blur=10',
    description: `Leo Chang's Kyrie 4, designed by Ben Nethongkome for a 2017 World Champ, masters Irving's herky-jerky style. The Flex Groove outsole delivers zigzag traction and flexibility for elite stability on every cut.`
  },
  {
    id: 'kyrie-5',
    name: 'Nike Kyrie 5',
    model: 'Ikhet',
    year: '2018',
    color: '#D2B48C',
    images: [
      'https://images.nike.com/is/image/DotCom/AO2918_102_A_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/AO2918_102_B_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/AO2918_102_C_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/AO2918_102_D_PREM?wid=1000&hei=1000&fmt=png-alpha'
    ],
    bgImage: 'https://picsum.photos/seed/kyrie5/1920/1080?blur=10',
    description: `Flexible and fierce, the Kyrie 5 features an Air Zoom Turbo airbag and Venus flytrap-inspired lacing for Kyrie's chaotic quick-stops. The 2019 "Friends" collab turns this into a cultural icon for sitcom fans and hoopers alike.`
  },
  {
    id: 'kyrie-6',
    name: 'Nike Kyrie 6',
    model: 'Jet Black',
    year: '2019',
    color: '#000000',
    images: [
      'https://images.nike.com/is/image/DotCom/BQ4630_001_A_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/BQ4630_001_B_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/BQ4630_001_C_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/BQ4630_001_D_PREM?wid=1000&hei=1000&fmt=png-alpha'
    ],
    bgImage: 'https://picsum.photos/seed/kyrie6/1920/1080?blur=10',
    description: `'90s vibes meet modern tech in the Kyrie 6—Nethongkome's nod to Irving's vintage love. Air Zoom Turbo, 360° traction, and midfoot strap deliver court feel and support tailored to his dynamic play.`
  },
  {
    id: 'kyrie-7',
    name: 'Nike Kyrie 7',
    model: 'Soundwave',
    year: '2020',
    color: '#1A1A1A',
    images: [
      'https://images.nike.com/is/image/DotCom/CQ9326_002_A_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/CQ9326_002_B_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/CQ9326_002_C_PREM?wid=1000&hei=1000&fmt=png-alpha',
      'https://images.nike.com/is/image/DotCom/CQ9326_002_D_PREM?wid=1000&hei=1000&fmt=png-alpha'
    ],
    bgImage: 'https://picsum.photos/seed/kyrie7/1920/1080?blur=10',
    description: `The 2020 finale of Nike x Kyrie boasts a Zoom Air heel and personal touches from Irving's life. Ending a legendary partnership, this shoe cements their iconic status in basketball history.`
  }
];

function ShoeSection({ shoe, index }: { shoe: Shoe; index: number; key?: string }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % shoe.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev - 1 + shoe.images.length) % shoe.images.length);
  };

  return (
    <section 
      id={`shoe-${index}`}
      className="relative h-screen w-full flex items-center px-12 md:px-24 snap-start overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={shoe.bgImage}
          alt="background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-12 z-10">
        {/* Left Side: Info */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="flex flex-col items-start space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-nike-orange font-mono text-sm font-bold">*</span>
              <span className="text-xs font-mono tracking-widest uppercase opacity-50">{shoe.year} COLLECTION</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              {shoe.name}
              <br />
              <span className="text-nike-orange opacity-80">"{shoe.model}"</span>
            </h1>

            <p className="max-w-md text-sm text-black/60 font-medium leading-relaxed">
              {shoe.description}
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase pt-8 group"
            >
              VISIT ICON <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Shoe Image Carousel */}
        <div className="relative flex justify-center items-center group/carousel">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.span 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.05 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-[25vw] font-display font-black uppercase whitespace-nowrap"
            >
              {shoe.model}
            </motion.span>
          </div>

          <motion.div
            initial={{ x: 200, opacity: 0, rotate: 15 }}
            whileInView={{ x: 0, opacity: 1, rotate: -15 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ 
              scale: 1.05, 
              rotate: -12,
              filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.25))' 
            }}
            transition={{ 
              type: 'spring', 
              damping: 15, 
              stiffness: 80,
              filter: { duration: 0.3 }
            }}
            className="relative z-20 w-full max-w-2xl cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={imageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={shoe.images[imageIndex]}
                alt={shoe.name}
                className="w-full h-auto shoe-shadow"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Off-White Style Tag */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/4 right-1/4 bg-nike-orange text-white px-3 py-1 text-[10px] font-mono font-bold rotate-12 shadow-lg z-30"
            >
              "ZIP-TIE"
            </motion.div>

            {/* Carousel Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-40">
              <button 
                onClick={prevImage}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-40">
              {shoe.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImageIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${imageIndex === i ? 'w-8 bg-nike-orange' : 'bg-black/20 hover:bg-black/40'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Index Indicator */}
      <div className="absolute bottom-24 left-12 md:left-24 font-display font-bold text-6xl opacity-5">
        0{index + 1}
      </div>
    </section>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`shoe-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full bg-white overflow-hidden font-sans select-none">
      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
      >
        {/* Navigation Header - Non-sticky (Absolute inside scrollable) */}
        <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none">
          <div className="flex flex-col pointer-events-auto">
            <div className="flex items-center gap-6 pointer-events-auto">
              <div className="flex items-center justify-center w-20 h-20 overflow-hidden">
                <img 
                  src="https://drive.google.com/thumbnail?id=1tiLO27nUyWfk81_BYfzlo84K6l9H7t-h&sz=w500" 
                  alt="Kyrie Logo" 
                  className="w-16 h-16 object-contain drop-shadow-sm"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://logos-world.net/wp-content/uploads/2020/11/Kyrie-Irving-Logo.png";
                  }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm md:text-base font-mono font-bold tracking-tighter uppercase text-black">NIKE INC. c/o Kyrie Irving</span>
                <span className="text-xs font-mono opacity-50 uppercase tracking-[0.2em] text-black">"ARCHIVE"</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-5 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white transition-all duration-300 pointer-events-auto shadow-lg"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {KYRIE_SHOES.map((shoe, index) => (
          <ShoeSection key={shoe.id} shoe={shoe} index={index} />
        ))}
      </div>

      {/* Footer Controls - Fixed */}
      <footer className="fixed bottom-0 left-0 w-full p-8 z-50 flex justify-between items-end pointer-events-none">
        <div className="flex gap-8 pointer-events-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest mb-2">Socials</span>
            <div className="flex gap-4">
              <Instagram size={18} className="cursor-pointer hover:text-nike-orange transition-colors" />
              <Twitter size={18} className="cursor-pointer hover:text-nike-orange transition-colors" />
              <Facebook size={18} className="cursor-pointer hover:text-nike-orange transition-colors" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12 pointer-events-auto">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest mb-2">Navigation</span>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const current = Math.round((containerRef.current?.scrollTop || 0) / window.innerHeight);
                  scrollToSection(Math.max(0, current - 1));
                }}
                className="w-12 h-12 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <ArrowRight size={20} className="rotate-180" />
              </button>
              <button 
                onClick={() => {
                  const current = Math.round((containerRef.current?.scrollTop || 0) / window.innerHeight);
                  scrollToSection(Math.min(KYRIE_SHOES.length - 1, current + 1));
                }}
                className="w-12 h-12 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"
            >
              <X size={24} />
            </button>
            
            {KYRIE_SHOES.map((shoe, index) => (
              <motion.button
                key={shoe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  scrollToSection(index);
                  setIsMenuOpen(false);
                }}
                className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter hover:text-nike-orange transition-colors text-black"
              >
                {shoe.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Text */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 vertical-rl rotate-180 hidden xl:block z-50">
        <span className="text-[10px] font-mono tracking-[0.5em] uppercase opacity-30">
          Kyrie Irving Signature Series — Nike Basketball Archive — 2014-2021
        </span>
      </div>
    </div>
  );
}
