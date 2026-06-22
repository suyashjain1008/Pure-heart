import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Droplet,
  Leaf,
  Thermometer,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Check,
  Lock,
  Zap,
  Heart,
  Info
} from 'lucide-react';

// Product type definition
interface Product {
  id: string;
  name: string;
  capacity: string;
  description: string;
  image: string;
  color: string;
  price: string;
  features: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 'sports',
    name: 'Insulated Sports Bottle',
    capacity: '750 ml',
    description: 'Engineered for high-intensity athletes. High-flow nozzle, rugged build, and sleek ergonomics keep you refreshed in stride.',
    image: '/sports_bottle.png',
    color: 'Matte Black & Cobalt',
    price: '₹1,299',
    features: ['Double-wall insulation', 'Leak-proof sports cap', 'Ergonomic silicone grip', 'Impact resistant base']
  },
  {
    id: 'office',
    name: 'Minimalist Office Flask',
    capacity: '1,000 ml',
    description: 'A sophisticated addition to your workspace. Vacuum sealed to preserve taste and temperature from your morning commute to late-night productivity.',
    image: '/office_bottle.png',
    color: 'Sleek Stainless Silver',
    price: '₹1,599',
    features: ['24h cold, 12h hot', 'Food-grade 304 steel', 'Zero sweat exterior', 'Silent anti-slip base']
  },
  {
    id: 'travel',
    name: 'Pastel Travel Sipper',
    capacity: '500 ml',
    description: 'Perfectly compact and vibrantly styled. Dual-tone pastel gradient blends high fashion with state-of-the-art leak prevention.',
    image: '/kids_bottle.png',
    color: 'Blush Pink & Powder Blue',
    price: '₹999',
    features: ['Fits in standard cup holders', 'Integrated carrying loop', 'BPA-free toxin-shield', 'Easy-clean wide mouth']
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Fitness Enthusiast',
    rating: 5,
    review: 'The cold retention is mind-blowing. I left my Pure Heart bottle in my car under direct sunlight for 6 hours, and the water was still ice-cold! Absolute premium quality.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Corporate Lawyer',
    rating: 5,
    review: 'Sleek, minimal, and premium. The stainless steel finish looks incredibly professional in board meetings. No condensation or sweating at all.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Rohan Verma',
    role: 'Adventure Photographer',
    rating: 5,
    review: 'I take this bottle everywhere — from dusty mountain hikes to humid beaches. It is practically indestructible and keeps liquids fresh and metallic-taste free.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeQuickView, setActiveQuickView] = useState<Product | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [sustainabilityCount, setSustainabilityCount] = useState(245389);

  // Auto-increment sustainability stats to make it feel "alive"
  useEffect(() => {
    const timer = setInterval(() => {
      setSustainabilityCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const hotspots = [
    {
      id: 1,
      x: '50%',
      y: '22%',
      title: 'Double-Wall Vacuum Insulation',
      desc: 'Creates a thermal barrier between walls, locking in temperatures for 24 hours cold and 12 hours hot.'
    },
    {
      id: 2,
      x: '38%',
      y: '50%',
      title: 'Durable Stainless Steel Construction',
      desc: 'Forged with food-grade 18/8 (304) stainless steel. Dent-resistant and completely odor-free.'
    },
    {
      id: 3,
      x: '62%',
      y: '78%',
      title: 'Sweat-Free Exterior',
      desc: 'Engineered condensation-free surface keeps your hands dry and bags free of moisture.'
    },
    {
      id: 4,
      x: '48%',
      y: '90%',
      title: 'Toxin-Shield & BPA Free',
      desc: 'Every cap and seal is crafted from food-grade silicone and BPA-free polymers for certified pure hydration.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-blue selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="Pure Heart Logo" 
              className="h-7 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-black/70">
            <a href="#showcase" className="hover:text-black transition-colors">Products</a>
            <a href="#why-us" className="hover:text-black transition-colors">Why Pure Heart</a>
            <a href="#technology" className="hover:text-black transition-colors">Technology</a>
            <a href="#testimonials" className="hover:text-black transition-colors">Reviews</a>
            <a href="#sustainability" className="hover:text-black transition-colors">Sustainability</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#showcase" 
              className="px-4 py-2 bg-brand-black text-white hover:bg-black/90 text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-white border-b border-black/10 z-40 md:hidden p-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#showcase" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-black/80 hover:text-black transition-colors py-2 border-b border-black/5"
              >
                Products
              </a>
              <a 
                href="#why-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-black/80 hover:text-black transition-colors py-2 border-b border-black/5"
              >
                Why Pure Heart
              </a>
              <a 
                href="#technology" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-black/80 hover:text-black transition-colors py-2 border-b border-black/5"
              >
                Technology
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-black/80 hover:text-black transition-colors py-2 border-b border-black/5"
              >
                Reviews
              </a>
              <a 
                href="#sustainability" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-black/80 hover:text-black transition-colors py-2 border-b border-black/5"
              >
                Sustainability
              </a>
              <a 
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-brand-black text-white text-center font-semibold rounded-xl mt-4 block"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#F5F5F7]/30 to-white">
        
        {/* Apple Style Soft Radial Gradients */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
                Hydration,<br />
                <span className="gradient-text-blue">Perfected.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-brand-grayText max-w-lg mb-8 leading-relaxed"
            >
              Designed for everyday life. Built to perform. Crafted to inspire. Pure Heart brings modern luxury to your daily hydration.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a 
                href="#showcase" 
                className="w-full sm:w-auto px-8 py-4 bg-brand-black hover:bg-black/90 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl text-center"
              >
                Shop Collection
              </a>
              <a 
                href="#technology" 
                className="w-full sm:w-auto px-8 py-4 bg-brand-grayBg hover:bg-[#E8E8ED] text-black font-semibold rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                Learn More 
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Floating Bottle Render */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center"
            >
              
              {/* Floating Container */}
              <div className="animate-float w-full h-full flex items-center justify-center relative">
                
                {/* Premium studio lighting back glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-brand-blue/10 rounded-full blur-3xl scale-95 pointer-events-none" />
                
                {/* Bottle Render Image */}
                <img 
                  src="/hero_bottle.png" 
                  alt="Pure Heart Premium Stainless Steel Bottle" 
                  className="h-full w-auto object-contain max-h-[500px] z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] filter saturate-105" 
                />

                {/* Simulated Premium Glassy Floor Reflection */}
                <div 
                  className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[70%] h-[30px] rounded-full bg-black/5 blur-md"
                  style={{ transform: 'rotateX(75deg)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT SHOWCASE */}
      <section id="showcase" className="py-24 bg-brand-grayBg">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-black mb-4">
              Every Sip Matters
            </h2>
            <p className="text-lg text-brand-grayText">
              Engineered with premium materials to keep your drinks colder, fresher, and ready for every adventure.
            </p>
          </div>

          {/* Alternating layout container */}
          <div className="space-y-24">
            {PRODUCTS.map((prod, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={prod.id} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Grid Panel */}
                  <div className={`lg:col-span-6 flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group overflow-hidden bg-white rounded-3xl p-12 w-full max-w-[500px] aspect-square flex items-center justify-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5">
                      
                      {/* Interactive soft ambient circles */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="h-[75%] w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]" 
                      />
                    </div>
                  </div>

                  {/* Text Description Panel */}
                  <div className={`lg:col-span-6 flex flex-col justify-center text-center lg:text-left ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                    <span className="text-xs uppercase tracking-widest text-brand-blue font-bold mb-3 block">
                      Capacity: {prod.capacity}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                      {prod.name}
                    </h3>
                    <p className="text-md text-brand-grayText mb-2 italic">
                      Colorways: {prod.color}
                    </p>
                    <p className="text-brand-grayText leading-relaxed mb-6">
                      {prod.description}
                    </p>
                    
                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                      {prod.features.slice(0, 2).map((feat, i) => (
                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-white border border-black/5 rounded-full text-black/70">
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <button 
                        onClick={() => setActiveQuickView(prod)}
                        className="px-6 py-3 bg-brand-black text-white hover:bg-black/90 font-semibold rounded-full transition-all duration-300 shadow-sm"
                      >
                        Quick View
                      </button>
                      <span className="text-xl font-bold text-brand-black">
                        {prod.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY PURE HEART */}
      <section id="why-us" className="py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black mb-2">
              Unmatched Performance
            </h2>
            <p className="text-md text-brand-grayText max-w-xl mx-auto">
              Every detail is engineered for durability, utility, and modern style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 bg-brand-grayBg rounded-3xl border border-black/5 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform">
                <Thermometer size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">24-Hour Cold Retention</h3>
              <p className="text-brand-grayText text-sm leading-relaxed">
                Advanced dual-chamber vacuum seals maintain icy temperatures for up to 24 hours, or hot beverages for up to 12.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-brand-grayBg rounded-3xl border border-black/5 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">Sustainable Materials</h3>
              <p className="text-brand-grayText text-sm leading-relaxed">
                100% recyclable, premium 304 food-grade stainless steel. Totally free from BPA, phthalates, and single-use toxins.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-brand-grayBg rounded-3xl border border-black/5 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-blue-400/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">Leak-Proof Technology</h3>
              <p className="text-brand-grayText text-sm leading-relaxed">
                State of the art leak-tight threading and compression gaskets guarantee no leaks, even when tossed upside-down in gym bags.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: LIFESTYLE EXPERIENCE */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Panel */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter saturate-[0.85] brightness-[0.7]"
          style={{ backgroundImage: `url('/lifestyle_bg.png')` }}
        />
        
        {/* Dark Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />

        {/* Text Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Made for Every Moment.
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8 font-light">
              From morning workouts to late-night productivity, Pure Heart keeps you hydrated wherever life takes you.
            </p>
            <a 
              href="#showcase" 
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-brand-grayBg transition-all duration-300 shadow-lg inline-block"
            >
              Explore Collection
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT TECHNOLOGY (Interactive Hotspots) */}
      <section id="technology" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black mb-2">
              Anatomy of the Perfect Bottle
            </h2>
            <p className="text-brand-grayText">
              Hover or click the interactive hotspot indicators to explore the high-end material engineering that powers Pure Heart.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Interactive Hotspot Render (Left) */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative max-w-[340px] aspect-[1/2] w-full flex items-center justify-center bg-brand-grayBg/40 rounded-3xl p-8 border border-black/5 shadow-inner">
                
                <img 
                  src="/hero_bottle.png" 
                  alt="Anatomy bottle" 
                  className="h-[85%] w-auto object-contain filter saturate-105 z-10" 
                />

                {/* Hotspot indicators */}
                {hotspots.map((spot, i) => (
                  <div
                    key={spot.id}
                    className="absolute z-20 cursor-pointer"
                    style={{ left: spot.x, top: spot.y }}
                    onMouseEnter={() => setActiveHotspot(i)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    onClick={() => setActiveHotspot(i === activeHotspot ? null : i)}
                  >
                    {/* Ring animation */}
                    <span className="absolute flex h-6 w-6 -left-3 -top-3">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-blue/40 opacity-75"></span>
                      <span className="pulse-dot relative inline-flex rounded-full h-6 w-6 bg-brand-blue border-2 border-white items-center justify-center shadow-lg">
                        <span className="text-[10px] font-bold text-white leading-none">{spot.id}</span>
                      </span>
                    </span>

                    {/* Popover overlay for small screens / hover click */}
                    <AnimatePresence>
                      {activeHotspot === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          className="absolute w-[220px] p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-black/10 text-left z-30 pointer-events-none"
                          style={{
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bottom: '25px',
                          }}
                        >
                          <h4 className="text-xs font-bold text-brand-black mb-1">{spot.title}</h4>
                          <p className="text-[10px] leading-relaxed text-brand-grayText">{spot.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrolling feature details (Right) */}
            <div className="lg:col-span-6 space-y-6">
              {hotspots.map((spot, index) => {
                const isSelected = activeHotspot === index;
                return (
                  <motion.div
                    key={spot.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? 'bg-brand-grayBg border-brand-blue/30 shadow-md scale-[1.02]' 
                        : 'bg-white border-black/5 hover:border-black/10'
                    }`}
                    onClick={() => setActiveHotspot(index)}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        isSelected ? 'bg-brand-blue text-white' : 'bg-brand-grayBg text-black/50'
                      }`}>
                        {spot.id}
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-black text-lg mb-2">
                          {spot.title}
                        </h3>
                        <p className="text-brand-grayText text-sm leading-relaxed">
                          {spot.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: CUSTOMER TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-brand-grayBg relative overflow-hidden">
        
        {/* Soft Background circles */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-blue font-bold mb-2 block">
              Pure Heart Community
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black">
              Hydration Stories
            </h2>
          </div>

          {/* Glassmorphism Slider */}
          <div className="glass p-8 md:p-12 rounded-3xl shadow-xl relative min-h-[300px] flex flex-col justify-between">
            
            {/* Stars rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-brand-blue text-brand-blue" />
              ))}
            </div>

            {/* Testimonial body */}
            <blockquote className="text-lg md:text-xl text-brand-black leading-relaxed font-light italic mb-8">
              "{TESTIMONIALS[testimonialIndex].review}"
            </blockquote>

            {/* Customer Details */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <img 
                  src={TESTIMONIALS[testimonialIndex].avatar} 
                  alt={TESTIMONIALS[testimonialIndex].name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/40" 
                />
                <div>
                  <cite className="not-italic font-bold text-brand-black block">
                    {TESTIMONIALS[testimonialIndex].name}
                  </cite>
                  <span className="text-xs text-brand-grayText">
                    {TESTIMONIALS[testimonialIndex].role}
                  </span>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-white/80 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-white/80 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: COLLECTION PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black mb-3">
              Explore Our Collections
            </h2>
            <p className="text-brand-grayText text-sm">
              Discover the perfect match for your hydration lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Category 1: Sports */}
            <div className="group rounded-3xl overflow-hidden relative aspect-[4/5] bg-brand-grayBg border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent z-10" />
              <img 
                src="/sports_bottle.png" 
                alt="Sports Bottles Category" 
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">Sports Bottles</h3>
                <p className="text-xs text-white/70 mb-4 font-light">Engineered for training, trails, and gym.</p>
                <a href="#showcase" className="text-xs font-semibold px-4 py-2 bg-white text-black rounded-full hover:bg-brand-grayBg transition-colors inline-block">
                  Explore
                </a>
              </div>
            </div>

            {/* Category 2: Office */}
            <div className="group rounded-3xl overflow-hidden relative aspect-[4/5] bg-brand-grayBg border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent z-10" />
              <img 
                src="/office_bottle.png" 
                alt="Office Bottles Category" 
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">Office Bottles</h3>
                <p className="text-xs text-white/70 mb-4 font-light">Sleek styling for corporate desk spaces.</p>
                <a href="#showcase" className="text-xs font-semibold px-4 py-2 bg-white text-black rounded-full hover:bg-brand-grayBg transition-colors inline-block">
                  Explore
                </a>
              </div>
            </div>

            {/* Category 3: Travel */}
            <div className="group rounded-3xl overflow-hidden relative aspect-[4/5] bg-brand-grayBg border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent z-10" />
              <img 
                src="/hero_bottle.png" 
                alt="Travel Bottles Category" 
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">Travel Flasks</h3>
                <p className="text-xs text-white/70 mb-4 font-light">Packable, robust designs for adventurers.</p>
                <a href="#showcase" className="text-xs font-semibold px-4 py-2 bg-white text-black rounded-full hover:bg-brand-grayBg transition-colors inline-block">
                  Explore
                </a>
              </div>
            </div>

            {/* Category 4: Kids */}
            <div className="group rounded-3xl overflow-hidden relative aspect-[4/5] bg-brand-grayBg border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent z-10" />
              <img 
                src="/kids_bottle.png" 
                alt="Kids Bottles Category" 
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-lg font-bold mb-1">Kids Bottles</h3>
                <p className="text-xs text-white/70 mb-4 font-light">Compact gradient sippers for school days.</p>
                <a href="#showcase" className="text-xs font-semibold px-4 py-2 bg-white text-black rounded-full hover:bg-brand-grayBg transition-colors inline-block">
                  Explore
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: SUSTAINABILITY SECTION */}
      <section id="sustainability" className="py-24 bg-gradient-to-b from-white to-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-3 block">
                Pure Heart, Green Planet
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-black mb-6 leading-tight">
                Better for You.<br />Better for the Planet.
              </h2>
              <p className="text-brand-grayText text-base leading-relaxed mb-6">
                Millions of plastic bottles are tossed into landfills and oceans every single day. Pure Heart was founded to halt this cycle. By creating beautifully engineered, lifetime stainless steel hydration bottles, we help you eliminate single-use waste.
              </p>
              <p className="text-brand-grayText text-base leading-relaxed mb-8">
                Every detail, from our recyclable steel body to our eco-conscious packaging, is designed to reduce environmental impact. Sip clean, live sustainably, and safeguard our oceans with every bottle.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="p-4 bg-white rounded-2xl border border-black/5 shadow-sm">
                  <h4 className="text-xs font-bold text-brand-grayText mb-1 uppercase tracking-wider">Plastic Bottles Prevented</h4>
                  <div className="text-2xl font-black text-emerald-600">
                    {sustainabilityCount.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-black/5 shadow-sm">
                  <h4 className="text-xs font-bold text-brand-grayText mb-1 uppercase tracking-wider">Liters of Clean Water Saved</h4>
                  <div className="text-2xl font-black text-brand-blue">
                    {(sustainabilityCount * 1.5).toLocaleString(undefined, { maximumFractionDigits: 0 })}L
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Panel */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center p-8 shadow-inner overflow-hidden">
                
                {/* Glowing fluid gradient bubble */}
                <div className="absolute w-[260px] h-[260px] rounded-full bg-emerald-200/40 blur-[40px] animate-pulse" />

                <div className="relative text-center z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 text-emerald-600">
                    <Leaf size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">Ocean-Bound Plastic Reduced</h3>
                  <p className="text-sm text-emerald-800 font-medium">1 Bottle = 150+ Disposable Bottles/Year</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: NEWSLETTER */}
      <section className="py-24 bg-brand-black text-white relative overflow-hidden">
        
        {/* Soft Background Accent Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Stay Refreshed.
          </h2>
          <p className="text-base text-white/70 max-w-md mx-auto mb-8 font-light">
            Get product launches, exclusive offers, and expert hydration tips delivered directly to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.form 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-5 py-4 rounded-full bg-white/10 hover:bg-white/15 focus:bg-white/25 focus:ring-2 focus:ring-brand-blue outline-none text-white placeholder-white/40 transition-all border border-white/5 text-sm"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-brand-grayBg transition-all text-sm shrink-0 shadow-lg"
                >
                  Subscribe
                </button>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 text-emerald-400 font-semibold"
              >
                <Check size={20} />
                Subscription confirmed. Welcome to Pure Heart!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <footer className="bg-brand-grayBg py-16 text-xs text-brand-grayText border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            {/* Logo + Mission */}
            <div className="col-span-2 flex flex-col space-y-4">
              <img src="/logo.png" alt="Pure Heart Logo" className="h-6 w-auto object-contain self-start" />
              <p className="max-w-xs leading-relaxed text-[11px] text-brand-grayText">
                Pure Heart designs premium, sustainable hydration products engineered to keep your water fresh, your body fueled, and our planet clean.
              </p>
            </div>

            {/* Shop Categories */}
            <div>
              <h4 className="font-bold text-brand-black mb-4 uppercase tracking-wider">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#showcase" className="hover:text-black transition-colors">Sports Bottles</a></li>
                <li><a href="#showcase" className="hover:text-black transition-colors">Office Bottles</a></li>
                <li><a href="#showcase" className="hover:text-black transition-colors">Travel Flasks</a></li>
                <li><a href="#showcase" className="hover:text-black transition-colors">Kids Sippers</a></li>
              </ul>
            </div>

            {/* Brand Links */}
            <div>
              <h4 className="font-bold text-brand-black mb-4 uppercase tracking-wider">Brand</h4>
              <ul className="space-y-3">
                <li><a href="#why-us" className="hover:text-black transition-colors">Why Pure Heart</a></li>
                <li><a href="#sustainability" className="hover:text-black transition-colors">Sustainability</a></li>
                <li><a href="#testimonials" className="hover:text-black transition-colors">Customer Stories</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Press & Media</a></li>
              </ul>
            </div>

            {/* Support / Contact */}
            <div>
              <h4 className="font-bold text-brand-black mb-4 uppercase tracking-wider">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Warranty & Returns</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Find a Store</a></li>
              </ul>
            </div>

          </div>

          {/* Socials / Copyright */}
          <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <p className="text-[11px]">
              © 2026 Pure Heart. All Rights Reserved. Designed in compliance with premium accessibility standards.
            </p>

            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-black transition-colors">Instagram</a>
              <a href="#" className="hover:text-black transition-colors">Facebook</a>
              <a href="#" className="hover:text-black transition-colors">Twitter</a>
              <a href="#" className="hover:text-black transition-colors">YouTube</a>
            </div>

          </div>

        </div>
      </footer>

      {/* QUICK VIEW PANEL MODAL (AnimatePresence) */}
      <AnimatePresence>
        {activeQuickView && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            
            {/* Modal backdrop closer */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setActiveQuickView(null)} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full relative z-10 shadow-2xl overflow-hidden border border-black/10 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveQuickView(null)}
                className="absolute top-4 right-4 p-2 bg-brand-grayBg hover:bg-[#E8E8ED] text-black rounded-full transition-colors z-20"
                aria-label="Close Modal"
              >
                <X size={16} />
              </button>

              {/* Product Image Column */}
              <div className="bg-brand-grayBg rounded-2xl p-6 flex items-center justify-center aspect-square md:aspect-auto md:h-full relative shadow-inner">
                <img 
                  src={activeQuickView.image} 
                  alt={activeQuickView.name} 
                  className="h-[80%] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)]" 
                />
              </div>

              {/* Product Info Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2 block">
                    Capacity: {activeQuickView.capacity}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-brand-black mb-3">
                    {activeQuickView.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-blue mb-4">
                    {activeQuickView.price}
                  </p>
                  <p className="text-brand-grayText text-xs leading-relaxed mb-6">
                    {activeQuickView.description}
                  </p>

                  <h4 className="text-xs font-bold text-brand-black mb-3 uppercase tracking-wider">Key Details</h4>
                  <ul className="space-y-2 mb-6">
                    {activeQuickView.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-brand-grayText font-medium">
                        <Check size={12} className="text-brand-blue shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      alert(`${activeQuickView.name} added to cart!`);
                      setActiveQuickView(null);
                    }}
                    className="flex-grow py-3 bg-brand-black text-white hover:bg-black/90 text-xs font-bold rounded-xl transition-all duration-300 shadow-sm"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => setActiveQuickView(null)}
                    className="px-4 py-3 bg-brand-grayBg hover:bg-[#E8E8ED] text-black text-xs font-bold rounded-xl transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
