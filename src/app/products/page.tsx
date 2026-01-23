import Link from 'next/link'

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          CRM Portfolio
        </h1>
        <p className="text-xl text-slate-600">
          Production-ready systems for specific verticals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Real Estate CRM */}
        <div className="border border-slate-200 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">InmoLevel</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              LIVE
            </span>
          </div>
          <div className="text-sm text-slate-500 mb-4">REAL ESTATE</div>
          <p className="text-slate-700 mb-6">
            Property-client matching with intelligent lead scoring and broker pipeline management.
          </p>
          <div className="space-y-3">
            <Link 
              href="/real-estate-crm"
              className="block w-full text-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Product
            </Link>
            <Link 
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>

        {/* Remittances CRM */}
        <div className="border border-slate-200 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">RAGFIN1</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              LIVE
            </span>
          </div>
          <div className="text-sm text-slate-500 mb-4">FINTECH</div>
          <p className="text-slate-700 mb-6">
            B2B sales automation for remittance companies with LinkedIn integration and deal scoring.
          </p>
          <div className="space-y-3">
            <Link 
              href="/remittances-crm"
              className="block w-full text-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Product
            </Link>
            <Link 
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>

        {/* Global Trade CRM */}
        <div className="border border-slate-200 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">GlobalTrade</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              LIVE
            </span>
          </div>
          <div className="text-sm text-slate-500 mb-4">WEALTH MANAGEMENT</div>
          <p className="text-slate-700 mb-6">
            Client acquisition for investment brokers with AUM-based scoring and compliance-ready fields.
          </p>
          <div className="space-y-3">
            <Link 
              href="/global-trade-crm"
              className="block w-full text-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Product
            </Link>
            <Link 
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>

        {/* AutoLevel CRM */}
        <div className="border border-slate-200 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">AutoLevel</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              LIVE
            </span>
          </div>
          <div className="text-sm text-slate-500 mb-4">AUTO DEALERS</div>
          <p className="text-slate-700 mb-6">
            Lead management for vehicle dealerships with trade-in tracking and deal value calculation.
          </p>
          <div className="space-y-3">
            <Link 
              href="/auto-dealers-crm"
              className="block w-full text-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Product
            </Link>
            <Link 
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>

        {/* MotoLevel CRM */}
        <div className="border border-slate-200 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">MotoLevel</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              LIVE
            </span>
          </div>
          <div className="text-sm text-slate-500 mb-4">MOTORCYCLES</div>
          <p className="text-slate-700 mb-6">
            Rider acquisition for motorcycle dealerships with safety-focused education and gear tracking.
          </p>
          <div className="space-y-3">
            <Link 
              href="/motorcycle-dealers-crm"
              className="block w-full text-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Product
            </Link>
            <Link 
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>

        {/* HealthLevel CRM */}
        <div className="border border-slate-200 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">HealthLevel</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              LIVE
            </span>
          </div>
          <div className="text-sm text-slate-500 mb-4">HEALTHCARE</div>
          <p className="text-slate-700 mb-6">
            Patient acquisition for private clinics with HIPAA-compliant commercial tracking.
          </p>
          <div className="space-y-3">
            <Link 
              href="/healthcare-crm"
              className="block w-full text-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Product
            </Link>
            <Link 
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
