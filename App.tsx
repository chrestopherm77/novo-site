import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ImplementationProcess from './components/ImplementationProcess';
import ChatDemo from './components/ChatDemo';
import KanbanDemo from './components/KanbanDemo';
import TimelineDemo from './components/TimelineDemo';
import DashboardDemo from './components/DashboardDemo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden selection:bg-brand-purple selection:text-white">
      <Header />
      <ExitPopup />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="features">
          <Features />
        </div>

        <ImplementationProcess />
        
        <div id="solutions">
          <ChatDemo />
          <KanbanDemo />
          <TimelineDemo />
          <DashboardDemo />
        </div>
        
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;