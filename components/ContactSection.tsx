export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50 relative overflow-hidden scroll-mt-32">
      <div className="absolute inset-0 cyber-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700">
            We&apos;re here to help with all your IT service needs
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white backdrop-blur-md rounded-lg border border-neon-cyan/30 shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-neon-cyan mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                    <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-600">Email</h4>
                  <a
                    href="mailto:service@flexusnet.com"
                    className="text-lg text-neon-cyan hover:text-neon-cyan/80 transition-all duration-300"
                  >
                    service@flexusnet.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                    <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-600">Phone</h4>
                  <a
                    href="tel:4703003369"
                    className="text-lg text-neon-cyan hover:text-neon-cyan/80 transition-all duration-300"
                  >
                    (470) 300-3369
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                    <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-600">Business Hours</h4>
                  <p className="text-lg text-gray-700">
                    Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                    Saturday: 9:00 AM - 2:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

