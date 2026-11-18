import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesBento from './components/ServicesBento';
import ProceduresSection from './components/ProceduresSection';
import DoctorProfile from './components/DoctorProfile';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import LocationFooter from './components/LocationFooter';
import ClinicChatbot from './components/ClinicChatbot';

export default function App() {
  const [selectedService, setSelectedService] = useState('NT / NB Scan');

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FAF9F6] text-slate-900">
      <Navbar />
      <div id="scroll-area" className="relative flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <Hero />
          <ServicesBento onSelectService={setSelectedService} />
          <ProceduresSection onSelectService={setSelectedService} />
          <DoctorProfile />
          <BookingForm
            selectedService={selectedService}
            onServiceChange={setSelectedService}
          />
          <Reviews />
          <LocationFooter />
        </main>
      </div>
      <ClinicChatbot />
    </div>
  );
}
