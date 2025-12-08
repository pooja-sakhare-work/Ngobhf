import { BookOpen, Heart, Utensils, Users, Briefcase, Droplet } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Education for All',
    description: 'Providing quality education, scholarships, and learning resources to underprivileged children across India.',
    image: 'https://images.unsplash.com/photo-1760267973986-5370a55550f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NTEyMTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '5,000+ Students'
  },
  {
    icon: Heart,
    title: 'Healthcare Services',
    description: 'Mobile health clinics, free medical camps, and essential healthcare services in rural areas.',
    image: 'https://images.unsplash.com/photo-1706806595136-5afefb45da1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzY1MTc3NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '15,000+ Patients Treated'
  },
  {
    icon: Utensils,
    title: 'Nutrition Program',
    description: 'Daily meal programs for malnourished children and food distribution drives for families in need.',
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjaGFyaXR5fGVufDF8fHx8MTc2NTE1MTkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '2,000+ Meals Daily'
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    description: 'Skills training, entrepreneurship programs, and support groups for women to achieve financial independence.',
    image: 'https://images.unsplash.com/photo-1759738099669-d64b0656f6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzfGVufDF8fHx8MTc2NTE3NzQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '1,500+ Women Trained'
  },
  {
    icon: Briefcase,
    title: 'Skill Development',
    description: 'Vocational training programs in various trades to enhance employability and create job opportunities.',
    image: 'https://images.unsplash.com/photo-1764690690771-b4522d66b433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ28lMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjUxNzc0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '3,000+ Youth Skilled'
  },
  {
    icon: Droplet,
    title: 'Clean Water Initiative',
    description: 'Installing water purification systems and wells in villages lacking access to clean drinking water.',
    image: 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzY1MTU3NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '50+ Villages Covered'
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Programs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We run multiple initiatives focused on creating sustainable impact in communities across India
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-orange-600">{program.stats}</span>
                    <button className="text-orange-600 hover:text-orange-700 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
