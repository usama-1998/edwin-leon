'use client';

import React from 'react';
import {
  Navbar,
  HeroSection,
  ScarsSection,
  ReceiptsSection,
  PartnershipSection,
  ContactSection,
  Footer,
} from '@/components';

const Page = () => {
  return (
    <div className="min-h-screen paper-texture text-slate-900 selection:bg-slate-200 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ScarsSection />
      <ReceiptsSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
