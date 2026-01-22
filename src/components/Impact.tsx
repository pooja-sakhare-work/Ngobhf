import React from 'react';
import { Settings, Handshake, Target, Users, Rocket } from 'lucide-react';

const currentActivities = [
  {
    icon: Settings,
    title: 'Establishing governance and compliance frameworks'
  },
  {
    icon: Handshake,
    title: 'Building partnerships with stakeholders'
  },
  {
    icon: Target,
    title: 'Designing pilot programs aligned with SDGs'
  },
  {
    icon: Users,
    title: 'Mobilizing volunteers and supporters'
  },
  {
    icon: Rocket,
    title: 'Program implementation will begin in a phased manner'
  }
];

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-orange-600 to-red-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-200 mb-2">Foundation Status</p>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Our Current Stage
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Bharat Hitarth Foundation is currently:
          </p>
        </div>

        {/* Steps Timeline - Horizontal One Line */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="relative">
            {/* Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-white/30"></div>
            
            {/* Steps in One Line */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4 relative">
              {currentActivities.map((activity, index) => {
                const Icon = activity.icon;
                const stepNumber = index + 1;
                const isLast = index === currentActivities.length - 1;
                
                return (
                  <div key={index} className="relative flex-1 flex flex-col items-center text-center">
                    {/* Step Number & Icon Circle */}
                    <div className="relative flex-shrink-0 mb-3">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl relative z-10">
                        <Icon className="w-12 h-12 text-orange-600" />
                      </div>
                      {/* Step Number Badge */}
                      <div 
                        className="absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-white shadow-lg z-50"
                        style={{ top: '50px', right: '32px', background: 'var(--color-orange-600)' }}
                      >
                        {stepNumber}
                      </div>
                    </div>
                    
                    {/* Step Text */}
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                      {activity.title}
                    </p>
                    
                    {/* Arrow Between Steps */}
                    {!isLast && (
                      <div className="hidden md:block absolute top-16 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                        <span className="text-white text-2xl font-bold opacity-60">→</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
