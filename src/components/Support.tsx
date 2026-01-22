import { Heart, CheckCircle2, DollarSign, Users } from 'lucide-react';

export function Support() {
  const supportEnables = [
    'Program design and pilot implementation',
    'Community engagement activities',
    'Capacity building and governance setup'
  ];

  const waysToSupport = [
    'One-time contribution',
    'Founding supporter engagement'
  ];

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 mb-2">Support Us</p>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Support Our Vision
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your early support will help us build strong foundations for sustainable and accountable development work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Support Enables */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4 font-semibold">
              Support Enables
            </h3>
            <ul className="space-y-3">
              {supportEnables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ways to Support */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4 font-semibold">
              Ways to Support
            </h3>
            <ul className="space-y-3">
              {waysToSupport.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
