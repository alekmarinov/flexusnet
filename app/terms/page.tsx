export const metadata = {
  title: 'Terms of Service - Flexus Net',
  description: 'Terms of Service for Flexus Net - IT MSP Services',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the Flexus Net website and services ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Flexus Net operates as a two-sided marketplace connecting customers needing IT and office technology services with qualified technicians. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Laptop/Desktop/Office equipment installation and setup</li>
              <li>Network infrastructure installation and configuration</li>
              <li>POS (Point of Sale) system installation and setup</li>
              <li>Matching customers with verified, qualified technicians</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a user of our Service, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate, current, and complete information when submitting service requests</li>
              <li>Maintain the security of your account information</li>
              <li>Use the Service only for lawful purposes</li>
              <li>Not interfere with or disrupt the Service or servers</li>
              <li>Not use the Service to transmit any harmful or malicious code</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Requests and Matching</h2>
            <p className="text-gray-700 mb-4">
              When you submit a service request:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We will attempt to match you with qualified technicians based on your service needs and location</li>
              <li>We do not guarantee that a technician will be available for your specific request</li>
              <li>Technicians are independent contractors, not employees of Flexus Net</li>
              <li>You are responsible for providing accurate location and service details</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms will be agreed upon between you and the assigned technician. Flexus Net may facilitate payment processing but is not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Payment disputes between customers and technicians</li>
              <li>Refund requests (subject to individual technician policies)</li>
              <li>Pricing variations between different technicians</li>
            </ul>
            <p className="text-gray-700">
              All payments are processed through secure third-party payment processors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Technician Qualifications</h2>
            <p className="text-gray-700 mb-4">
              While we strive to match you with qualified technicians, Flexus Net:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Conducts background checks and verification processes</li>
              <li>Does not guarantee the quality or outcome of services provided by technicians</li>
              <li>Is not liable for technician errors, omissions, or damages</li>
              <li>Encourages customers to verify technician credentials independently</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLEXUS NET SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Damages resulting from technician services or work performed</li>
              <li>Service interruptions or unavailability</li>
              <li>Errors or omissions in the Service</li>
            </ul>
            <p className="text-gray-700">
              Our total liability shall not exceed the amount paid by you for the specific service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless Flexus Net, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms of Service</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit or transmit through the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are owned by Flexus Net and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our content without our prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Breach of these Terms of Service</li>
              <li>Fraudulent or illegal activity</li>
              <li>Violation of any applicable laws</li>
              <li>At our sole discretion</li>
            </ul>
            <p className="text-gray-700">
              Upon termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes arising out of or relating to these Terms of Service or the Service shall be resolved through:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation, if negotiation fails</li>
              <li>Binding arbitration in accordance with applicable arbitration rules</li>
            </ul>
            <p className="text-gray-700">
              You agree to waive any right to a jury trial or to participate in a class action lawsuit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-gray-700">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms of Service is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Entire Agreement</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service constitute the entire agreement between you and Flexus Net regarding the use of the Service and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:service@flexusnet.com" className="text-primary-600 hover:underline">service@flexusnet.com</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:4703003369" className="text-primary-600 hover:underline">(470) 300-3369</a>
              </p>
              <p className="text-gray-700">
                <strong>Business Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM EST, Saturday: 9:00 AM - 2:00 PM EST
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

