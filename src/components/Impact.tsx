import { Users, MapPin, Heart, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Lives Transformed',
    description: 'Individuals benefited from our programs'
  },
  {
    icon: MapPin,
    number: '15+',
    label: 'States',
    description: 'Presence across India'
  },
  {
    icon: Heart,
    number: '50+',
    label: 'Active Projects',
    description: 'Ongoing community initiatives'
  },
  {
    icon: Award,
    number: '200+',
    label: 'Volunteers',
    description: 'Dedicated team members'
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
          <p className="text-orange-200 mb-2">Our Achievements</p>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Creating Real Impact
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Numbers that reflect our commitment to building a better tomorrow
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-4xl text-white mb-2">{stat.number}</p>
                <p className="text-xl text-orange-100 mb-2">{stat.label}</p>
                <p className="text-sm text-orange-200">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1714949308848-d117347154d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNtaWxpbmclMjBoYXBweXxlbnwxfHx8fDE3NjUxNTcyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community member"
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-white mb-4 leading-relaxed">
                &quot;Bharath Hitarth Foundation has been a beacon of hope for our village. 
                The education program has opened doors for our children that we never thought possible. 
                We are forever grateful for their dedication and support.&quot;
              </p>
              <div>
                <p className="text-white">Rajesh Kumar</p>
                <p className="text-orange-200 text-sm">Village Head, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
