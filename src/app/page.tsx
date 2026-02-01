'use client';

import React, { useState } from 'react';
import {
  Navbar,
  HeroSection,
  ScarsSection,
  ReceiptsSection,
  PartnershipSection,
  ContactSection,
  Footer,
  BookingModal,
} from '@/components';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen paper-texture text-slate-900 selection:bg-slate-200 overflow-x-hidden">
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <ScarsSection />
      <ReceiptsSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Page;
