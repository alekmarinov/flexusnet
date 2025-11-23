'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  jobDescription: string
}

interface ServiceDetails {
  id: string
  title: string
  description: string
  operations: string[]
}

const serviceDetails: Record<string, ServiceDetails> = {
  'laptop-desktop': {
    id: 'laptop-desktop',
    title: 'Laptop/Desktop/Office equipment',
    description: 'Comprehensive installation and setup services for laptops, desktops, and office equipment to ensure your technology works seamlessly.',
    operations: [
      'Hardware installation and configuration',
      'Operating system setup and updates',
      'Software installation and licensing',
      'Printer and scanner setup',
      'Peripheral device configuration (keyboards, mice, monitors)',
      'Network connectivity setup',
      'Data migration and backup',
      'Security software installation',
      'User account setup and permissions',
      'Troubleshooting and optimization'
    ]
  },
  'network': {
    id: 'network',
    title: 'Network Installations',
    description: 'Complete network infrastructure setup and configuration to keep your business connected and secure.',
    operations: [
      'Router and switch installation',
      'Wireless access point configuration',
      'Network cable installation and termination',
      'Firewall setup and configuration',
      'VPN configuration',
      'Network security implementation',
      'IP address management',
      'Network monitoring setup',
      'Bandwidth optimization',
      'Network troubleshooting and maintenance'
    ]
  },
  'pos': {
    id: 'pos',
    title: 'POS Systems',
    description: 'Professional point of sale system installation and configuration to streamline your business operations.',
    operations: [
      'POS hardware installation',
      'Software configuration and setup',
      'Payment processor integration',
      'Receipt printer setup',
      'Barcode scanner configuration',
      'Cash drawer integration',
      'Inventory management setup',
      'Employee access and permissions',
      'Sales reporting configuration',
      'System testing and training'
    ]
  }
}

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    jobDescription: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format'
    }
    if (!formData.jobDescription.trim()) {
      newErrors.jobDescription = 'Job description is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // In a real implementation, this would send to your API endpoint
      // For now, we'll simulate an API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobDescription: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="request" className="py-16 bg-gray-50 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-gradient opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">
            Request Service
          </h2>
          <p className="text-lg text-gray-700">
            Fill out the form below and we&apos;ll get back to you
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            onClick={() => setSelectedService('laptop-desktop')}
            className="bg-white backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/30 text-center cursor-pointer hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-cyan/50">
              <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neon-cyan mb-2">Laptop/Desktop/Office equipment</h3>
            <p className="text-sm text-gray-600">Professional installation and setup</p>
          </div>
          <div 
            onClick={() => setSelectedService('network')}
            className="bg-white backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/30 text-center cursor-pointer hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-cyan/50">
              <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="font-semibold text-neon-cyan mb-2">Network Installations</h3>
            <p className="text-sm text-gray-600">Complete infrastructure setup</p>
          </div>
          <div 
            onClick={() => setSelectedService('pos')}
            className="bg-white backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/30 text-center cursor-pointer hover:border-neon-cyan hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-cyan/50">
              <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neon-cyan mb-2">POS Systems</h3>
            <p className="text-sm text-gray-600">Installation and configuration</p>
          </div>
        </div>

        {/* Service Details Section */}
        {selectedService && serviceDetails[selectedService] && (
          <div className="bg-white backdrop-blur-md rounded-lg border border-neon-cyan/30 shadow-lg p-8 mb-8 animate-fadeIn">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-cyan">
                {serviceDetails[selectedService].title}
              </h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-neon-cyan transition-all duration-300 hover:rotate-90"
                aria-label="Close details"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              {serviceDetails[selectedService].description}
            </p>
            <h3 className="text-xl font-semibold text-neon-cyan mb-4">Our Services Include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {serviceDetails[selectedService].operations.map((operation, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-neon-cyan mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{operation}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSelectedService(null)
                // Scroll to form
                document.getElementById('request')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="bg-neon-cyan hover:bg-neon-cyan/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-neon-cyan/30"
            >
              Request This Service
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white backdrop-blur-md rounded-lg border border-neon-cyan/30 shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neon-cyan mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-gray-900 placeholder-gray-400 transition-all duration-300 ${
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'border-neon-cyan/30'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neon-cyan mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-gray-900 placeholder-gray-400 transition-all duration-300 ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-neon-cyan/30'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neon-cyan mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-gray-900 placeholder-gray-400 transition-all duration-300 ${
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-neon-cyan/30'
                }`}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

          </div>

          <div className="mt-6">
            <label htmlFor="jobDescription" className="block text-sm font-medium text-neon-cyan mb-2">
              Job Description/Requirements *
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-gray-900 placeholder-gray-400 transition-all duration-300 ${
                errors.jobDescription ? 'border-red-500 focus:ring-red-500' : 'border-neon-cyan/30'
              }`}
              placeholder="Please describe your service needs in detail..."
            />
            {errors.jobDescription && (
              <p className="mt-1 text-sm text-red-400">{errors.jobDescription}</p>
            )}
          </div>

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-900/50 border border-green-400 rounded-lg">
              <p className="text-green-300">
                Thank you! Your request has been submitted successfully. We&apos;ll contact you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-400 rounded-lg">
              <p className="text-red-300">
                There was an error submitting your request. Please try again or contact us directly.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full bg-neon-cyan hover:bg-neon-cyan/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg border border-neon-cyan/30"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  )
}

