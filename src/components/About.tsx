import { Heart, Users, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 mb-2">About Us</p>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1765015981578-ba6b98a43493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwaW5kaWF8ZW58MXx8fHwxNzY1MTc3NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community service"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl mb-2">5+</p>
              <p>Years of Dedicated Service</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl text-gray-900 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bharat Hitarth Foundation is a non-profit organization dedicated to accelerating 
              sustainable development in India through community-led, evidence-based interventions 
              aligned with the United Nations Sustainable Development Goals (SDGs).
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-orange-600">
                <Heart className="w-5 h-5" />
                <span>Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <Users className="w-5 h-5" />
                <span>Community First</span>
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <Target className="w-5 h-5" />
                <span>Goal Oriented</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              To enable equitable development by strengthening education, health, livelihoods, 
              and environmental resilience while ensuring no one is left behind.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              A resilient and inclusive India where development is sustainable, equitable, 
              and future-ready.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-4">Our Approach</h3>
            <ul className="space-y-4 list-disc list-inside text-gray-600 leading-relaxed flex-grow">
              <li>Community-centric program design</li>
              <li>Alignment with national priorities and SDGs</li>
              <li>Partnerships with institutions and local stakeholders</li>
              <li>Focus on long-term, scalable impact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
