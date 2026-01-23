import Link from 'next/link'

export default function RealEstateCRM() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="mb-16">
        <div className="text-sm text-slate-500 mb-2">REAL ESTATE</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          InmoLevel CRM
        </h1>
        <p className="text-xl text-slate-700">
          Property-client matching engine built for real estate brokers and agencies.
        </p>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Lead & deal pipelines with buyer/seller tracking</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Property-client intelligent matching with scoring algorithm</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Automated property alerts when new listings match client criteria</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Workflow automation for follow-ups and nurturing</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
            <p className="text-slate-700">Broker-focused UX optimized for multiple agents</p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Use Cases</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Residential agencies managing 100+ active buyers and matching them to incoming inventory
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Commercial brokers tracking long-cycle deals with multiple stakeholders
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Property developers nurturing pre-sale leads with automated updates
            </p>
          </div>
          <div className="border-l-4 border-slate-900 pl-4">
            <p className="text-slate-700">
              Independent brokers scaling beyond spreadsheets without enterprise CRM costs
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Interested in InmoLevel CRM?
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
