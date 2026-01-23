import Link from 'next/link'

export default function RemittancesCRM() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="mb-16">
        <div className="text-sm text-slate-500 mb-2">REMITTANCES / FINTECH</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          RAGFIN1 CRM
        </h1>
        <p className="text-xl text-slate-700">
          B2B sales automation system for remittance companies and payment processors.
        </p>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Intelligent lead scoring (0-200 points) based on company size, decision-maker role, and engagement</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Hot lead alerts (150+ score) via Slack for immediate follow-up</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">LinkedIn prospect enrichment and automated outreach templates</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Email sequence automation with behavioral tracking</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">10-stage pipeline optimized for $25K+ B2B deals</p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Use Cases</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              MTOs selling competitive intelligence APIs to fintech companies
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Payment processors targeting mid-market remittance operators
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              FinTech consultancies managing enterprise sales cycles
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Bootstrap SaaS founders automating outbound without hiring SDRs
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Interested in RAGFIN1 CRM?
        </h3>
        <Link 
          href="/contact"
          className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
        >
          Request Access
        </Link>
      </div>
    </div>
  )
}
