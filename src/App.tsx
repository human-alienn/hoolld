import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EntryScreen } from './components/EntryScreen';
import { HeroSection } from './components/HeroSection';
import { WhatIsHold } from './components/WhatIsHold';
import { OurMission } from './components/OurMission';
import { Tokenomics } from './components/Tokenomics';
import { Security } from './components/Security';
import { Roadmap } from './components/Roadmap';
import { TheRules } from './components/TheRules';
import { WhoAcceptedHold } from './components/WhoAcceptedHold';
import { TheChoice } from './components/TheChoice';
import { TheCommunity } from './components/TheCommunity';

export default function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  if (!hasAccepted) {
    return <EntryScreen onAccept={() => setHasAccepted(true)} />;
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="size-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <WhatIsHold />
        <OurMission />
        <Tokenomics />
        <Security />
        <Roadmap />
        <TheRules />
        <WhoAcceptedHold />
        <TheChoice />
        <TheCommunity />
      </motion.div>
    </AnimatePresence>
  );
}