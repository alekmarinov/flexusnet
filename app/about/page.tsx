export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neon-cyan">
            About Flexus Net
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-700">
            Connecting businesses with qualified IT professionals across all 50 states
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative bg-gray-50">
        <div className="absolute inset-0 cyber-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300">
              <h2 className="text-3xl font-bold text-neon-cyan mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Flexus Net, our mission is to bridge the gap between businesses in need of 
                professional IT services and skilled technicians ready to deliver exceptional results. 
                We believe that every business, regardless of size or location, deserves access to 
                top-quality IT support and technology solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We&apos;re committed to making IT services accessible, reliable, and affordable for 
                businesses nationwide, ensuring that technology empowers growth rather than 
                hindering it.
              </p>
            </div>

            <div className="bg-white backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300">
              <h2 className="text-3xl font-bold text-neon-cyan mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We envision a future where businesses can seamlessly access professional IT services 
                whenever and wherever they need them. Our platform connects customers with verified, 
                qualified technicians who are committed to delivering excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through innovation, dedication, and a customer-first approach, we&apos;re building the 
                most trusted marketplace for IT services in the United States, setting new standards 
                for quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Flexus Net */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 cyber-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">
              Why Choose Flexus Net?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We&apos;re not just another IT service provider. Here&apos;s what makes us different:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Verified Technicians</h3>
              <p className="text-gray-700">
                All our technicians undergo rigorous verification and background checks. 
                We ensure they have the skills, experience, and professionalism to deliver 
                exceptional service.
              </p>
            </div>

            <div className="bg-gray-50 backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Nationwide Coverage</h3>
              <p className="text-gray-700">
                With 100% coverage across all 50 states, we can connect you with qualified 
                technicians no matter where your business is located. Local expertise, 
                national reach.
              </p>
            </div>

            <div className="bg-gray-50 backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Quality Guarantee</h3>
              <p className="text-gray-700">
                We stand behind every job. Our satisfaction guarantee ensures that if you&apos;re 
                not happy with the service, we&apos;ll make it right. Your success is our success.
              </p>
            </div>

            <div className="bg-gray-50 backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Quick Response</h3>
              <p className="text-gray-700">
                Time is money. We understand the urgency of IT issues and work to match you 
                with available technicians quickly, minimizing downtime and disruption.
              </p>
            </div>

            <div className="bg-gray-50 backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Competitive Pricing</h3>
              <p className="text-gray-700">
                We believe quality IT services shouldn&apos;t break the bank. Our transparent 
                pricing ensures you get fair rates without hidden fees or surprises.
              </p>
            </div>

            <div className="bg-gray-50 backdrop-blur-sm p-8 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Expert Network</h3>
              <p className="text-gray-700">
                Our platform brings together a diverse network of IT professionals with 
                expertise in various technologies, ensuring you find the right specialist 
                for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 cyber-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start group">
              <div className="flex-shrink-0 w-3 h-3 bg-neon-cyan rounded-full mt-2 mr-4"></div>
              <div className="bg-white backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/20 group-hover:border-neon-cyan/40 transition-all duration-300 flex-1">
                <h3 className="text-xl font-semibold text-neon-cyan mb-2">Customer First</h3>
                <p className="text-gray-700">
                  Every decision we make is guided by what&apos;s best for our customers. 
                  Their success is our top priority.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-3 h-3 bg-neon-cyan rounded-full mt-2 mr-4"></div>
              <div className="bg-white backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/20 group-hover:border-neon-cyan/40 transition-all duration-300 flex-1">
                <h3 className="text-xl font-semibold text-neon-cyan mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We operate with honesty, transparency, and ethical practices in everything we do.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-3 h-3 bg-neon-cyan rounded-full mt-2 mr-4"></div>
              <div className="bg-white backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/20 group-hover:border-neon-cyan/40 transition-all duration-300 flex-1">
                <h3 className="text-xl font-semibold text-neon-cyan mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We&apos;re committed to delivering exceptional service quality and continuously 
                  improving our platform and processes.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-3 h-3 bg-neon-cyan rounded-full mt-2 mr-4"></div>
              <div className="bg-cyber-darkblue/30 backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300 flex-1">
                <h3 className="text-xl font-semibold text-neon-cyan mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace new technologies and innovative solutions to better serve our 
                  customers and technicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

