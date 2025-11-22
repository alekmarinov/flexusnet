import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-2 border-neon-cyan/20 text-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-neon-cyan text-xl font-bold mb-4">Flexus Net</h3>
            <p className="mb-4 text-gray-400">
              Professional IT and office technology services. Connecting customers with qualified technicians nationwide.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Flexus Net. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neon-cyan font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-neon-cyan transition-all duration-300 relative group">
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/#request" className="hover:text-neon-cyan transition-all duration-300 relative group">
                  <span className="relative z-10">Request</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neon-cyan transition-all duration-300 relative group">
                  <span className="relative z-10">About Us</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-neon-cyan transition-all duration-300 relative group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-neon-cyan font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-neon-cyan transition-all duration-300 relative group">
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-neon-cyan transition-all duration-300 relative group">
                  <span className="relative z-10">Terms of Service</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

