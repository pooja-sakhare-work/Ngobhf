const images = [
  {
    url: 'https://images.unsplash.com/photo-1760267973986-5370a55550f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NTEyMTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Education Program',
    description: 'Children engaged in learning'
  },
  {
    url: 'https://images.unsplash.com/photo-1706806595136-5afefb45da1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzY1MTc3NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Healthcare Initiative',
    description: 'Medical camp in rural area'
  },
  {
    url: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjaGFyaXR5fGVufDF8fHx8MTc2NTE1MTkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Nutrition Program',
    description: 'Food distribution drive'
  },
  {
    url: 'https://images.unsplash.com/photo-1759738099669-d64b0656f6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzfGVufDF8fHx8MTc2NTE3NzQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Women Empowerment',
    description: 'Skills training workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzY1MTU3NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Community Service',
    description: 'Volunteers helping communities'
  },
  {
    url: 'https://images.unsplash.com/photo-1714949308848-d117347154d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNtaWxpbmclMjBoYXBweXxlbnwxfHx8fDE3NjUxNTcyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Happy Beneficiaries',
    description: 'Smiling children from our programs'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 mb-2">Gallery</p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Capturing the impact of our work and the smiles we bring to communities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
