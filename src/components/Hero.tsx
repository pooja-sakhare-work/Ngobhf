import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzY1MTU3NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Volunteers helping community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <p className="text-orange-300 text-sm">Making a Difference Since 2020</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Building a Better <span className="text-orange-400">Tomorrow</span> Together
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Bharath Hitarth Foundation is dedicated to empowering communities through education, 
            healthcare, and sustainable development initiatives across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all"
            >
              Get Involved
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <div>
              <p className="text-3xl sm:text-4xl text-orange-400 mb-2">10K+</p>
              <p className="text-gray-300 text-sm sm:text-base">Lives Impacted</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl text-orange-400 mb-2">50+</p>
              <p className="text-gray-300 text-sm sm:text-base">Projects</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl text-orange-400 mb-2">15+</p>
              <p className="text-gray-300 text-sm sm:text-base">States</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
