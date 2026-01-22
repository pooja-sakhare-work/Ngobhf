import { Shield, CheckCircle2, FileText, Scale } from 'lucide-react';

export function Transparency() {
  const commitments = [
    'Ethical governance practices',
    'Transparent financial management',
    'Regular public disclosures as operations commence',
    'All statutory compliances will be adhered to as per applicable laws'
  ];

  return (
    <section id="transparency" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 mb-2">Our Commitment</p>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Transparency & Governance
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bharat Hitarth Foundation is committed to:
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment, index) => {
            const icons = [Shield, FileText, Scale, CheckCircle2];
            const Icon = icons[index];
            
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{commitment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
