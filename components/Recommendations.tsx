import recommendationsData from '@/recomendations.json'
import Image from 'next/image'
import { getAssetPath } from '@/lib/paths'

interface Recommendation {
  name: string
  text: string
  photo: string
}

export default function Recommendations() {
  const recommendations = recommendationsData as Recommendation[]

  return (
    <section id="recommendations" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 cyber-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">
            Recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-lg p-8 border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-neon-cyan/50">
                  <Image
                    src={getAssetPath(`/${rec.photo}`)}
                    alt={rec.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-neon-cyan">{rec.name}</h3>
                  <div className="flex text-neon-cyan mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;{rec.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

