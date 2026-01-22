import { Target, Heart, BookOpen, Users, Briefcase, Leaf, Info } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

const focusAreas = [
  {
    sdg: 'SDG 1 & 10',
    title: 'Poverty Reduction and Inclusion',
    description: 'We aim to support vulnerable communities through livelihood enhancement and social inclusion initiatives.',
    icon: Target,
    plannedFocus: [
      'Skill development and employability',
      'Financial literacy and inclusion',
      'Support for marginalized groups'
    ]
  },
  {
    sdg: 'SDG 3',
    title: 'Health and Well-Being',
    description: 'We plan to promote preventive healthcare and awareness to strengthen community health outcomes.',
    icon: Heart,
    plannedFocus: [
      'Health awareness programs',
      'Nutrition and sanitation initiatives',
      'Community health partnerships'
    ]
  },
  {
    sdg: 'SDG 4',
    title: 'Quality Education',
    description: 'We seek to strengthen access to quality education and reduce learning gaps.',
    icon: BookOpen,
    plannedFocus: [
      'Foundational learning support',
      'Digital and life skills education',
      'Mentorship and scholarship facilitation'
    ]
  },
  {
    sdg: 'SDG 5',
    title: 'Gender Equality',
    description: 'We intend to empower women and girls through capacity building and economic participation.',
    icon: Users,
    plannedFocus: [
      'Skill training for women',
      'Leadership and awareness programs',
      'Support for women-led collectives'
    ]
  },
  {
    sdg: 'SDG 8',
    title: 'Decent Work and Economic Growth',
    description: 'We aim to promote sustainable livelihoods and entrepreneurship.',
    icon: Briefcase,
    plannedFocus: [
      'Vocational training',
      'Micro-enterprise support',
      'Market-oriented skill development'
    ]
  },
  {
    sdg: 'SDG 13 & 15',
    title: 'Climate Action and Environment',
    description: 'We plan to integrate environmental sustainability into community development.',
    icon: Leaf,
    plannedFocus: [
      'Environmental awareness',
      'Climate resilience education',
      'Community conservation initiatives'
    ]
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 flex items-center justify-center gap-2">
            Our Intended Focus Areas (SDG-Aligned
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-5 h-5 text-orange-600 cursor-help hover:text-orange-700 transition-colors" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-900 text-white max-w-xs p-3 text-sm">
                <p>SDG-Aligned means our programs are aligned with the United Nations Sustainable Development Goals, ensuring our initiatives contribute to global targets for ending poverty, protecting the planet, and ensuring prosperity for all.</p>
              </TooltipContent>
            </Tooltip>
            )
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-600 mb-1">{area.sdg}</p>
                    <h3 className="text-xl text-gray-900">{area.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {area.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Planned Focus</h4>
                  <ul className="space-y-1.5">
                    {area.plannedFocus.map((focus, focusIndex) => (
                      <li key={focusIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-orange-600 mt-1.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
