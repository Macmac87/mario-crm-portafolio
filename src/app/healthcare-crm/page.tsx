import Link from 'next/link'

export default function HealthLevelCRM() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link href="/products" className="text-slate-600 hover:text-slate-900 mb-8 inline-block">
        ← Back to Products
      </Link>
      
      <div className="text-sm text-slate-500 mb-4">HEALTHCARE</div>
      <h1 className="text-5xl font-bold text-slate-900 mb-6">HealthLevel</h1>
      
      <p className="text-xl text-slate-600 mb-12">
        Patient acquisition for private clinics and elective procedures
      </p>

      <div className="prose prose-slate max-w-none">
        <h2>Who It's For</h2>
        <p>
          Cosmetic surgery centers, dental implant practices, fertility clinics, orthopedic surgery (elective), 
          concierge medicine, medical aesthetics, and weight loss surgery centers.
        </p>

        <h2>What It Does</h2>
        <p>
          HealthLevel scores patient inquiries based on procedure value, urgency, payment readiness, and decision stage. 
          High-value patients ($35K+ procedures, immediate timeline, payment ready) trigger instant coordinator alerts. 
          HIPAA-compliant for commercial/marketing use only.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Procedure value scoring:</strong> Cosmetic surgery, fertility, dental implants, etc.</li>
          <li><strong>Payment intelligence:</strong> Cash vs insurance vs financing tracking</li>
          <li><strong>Consultation conversion:</strong> 60-80% target tracking</li>
          <li><strong>Lifetime value calculation:</strong> Repeat patient multipliers (1.5x-3x)</li>
          <li><strong>13-stage pipeline:</strong> Inquiry to completed procedure to referral</li>
          <li><strong>HIPAA-compliant:</strong> Commercial info only, no PHI storage</li>
        </ul>

        <h2>Technical Stack</h2>
        <ul>
          <li>GoHighLevel configuration (50+ custom fields, commercial use only)</li>
          <li>n8n automation workflows</li>
          <li>Slack hot patient alerts</li>
          <li>25+ email/communication templates</li>
          <li>HIPAA compliance documentation included</li>
        </ul>

        <h2>Expected Results</h2>
        <p>
          Practices typically close 3-6 additional procedures per month with improved consultation conversion rates. 
          30% revenue margin average on elective procedures. System complements your EMR/EHR for medical records.
        </p>

        <div className="mt-12 p-8 bg-slate-50 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to grow your practice?</h3>
          <p className="text-slate-700 mb-6">
            HealthLevel helps convert more inquiries into patients while staying HIPAA compliant.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Contact for Pricing
          </Link>
        </div>
      </div>
    </div>
  )
}
