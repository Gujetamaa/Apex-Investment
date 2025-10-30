import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-accent/30 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="Compass" size={24} className="text-accent" />
                </div>
                <span className="text-gray-300 font-medium text-sm tracking-wide uppercase">
                  Your Leader in Finance
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight">
                About
                <span className="text-accent"> Apex</span>
                <br />Capital
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Apex Capital redefines investment management through clarity, strategy, and leadership — empowering investors to rise with confidence in every market condition.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Founded 2018</p>
                  <p className="text-sm text-white/80">7+ Years of Excellence</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} />
                </div>
                <div>
                  <p className="font-semibold">600+ Clients</p>
                  <p className="text-sm text-white/80">Trusted Partnerships</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="DollarSign" size={20} />
                </div>
                <div>
                  <p className="font-semibold">$2.8B+ AUM</p>
                  <p className="text-sm text-white/80">Assets Under Management</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern office building representing Apex Capital headquarters"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl brand-shadow-strong"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;