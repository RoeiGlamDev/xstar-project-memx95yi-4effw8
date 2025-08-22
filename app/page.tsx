'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-red-300">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}