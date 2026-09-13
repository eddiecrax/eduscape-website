import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { VideoShowcase } from '@/components/VideoShowcase';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { Features } from '@/components/Features';
import { WhatItDoes } from '@/components/WhatItDoes';
import { Traction } from '@/components/Traction';
import { News } from '@/components/News';
import { Pricing } from '@/components/Pricing';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <VideoShowcase />
        <Problem />
        <Solution />
        <Features />
        <WhatItDoes />
        <Traction />
        <Pricing />
        <Team />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
