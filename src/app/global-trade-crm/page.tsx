import Link from 'next/link'

export default function GlobalTradeCRM() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="mb-16">
        <div className="text-sm text-slate-500 mb-2">WEALTH MANAGEMENT</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          GlobalTrade CRM
        </h1>
        <p className="text-xl text-slate-700">
          Client acquisition platform for investment brokers and wealth managers.
        </p>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">AUM-based lead scoring prioritizing high-net-worth prospects</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Compliance-ready data model with audit trails and confidential notes</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Referral tracking and automated thank-you workflows</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Long-cycle nurture sequences for 6-24 month sales processes</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Revenue potential calculator based on estimated assets</p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Use Cases</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Independent RIAs managing prospect pipeline and client onboarding
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Wealth management teams tracking family office opportunities
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Investment brokers optimizing referral-driven growth
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Financial advisors transitioning from wirehouse to independence
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Interested in GlobalTrade CRM?
        </h3>
        <Link 
          href="/contact"
          className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
        >
          Talk Integration
        </Link>
      </div>
    </div>
  )
}
