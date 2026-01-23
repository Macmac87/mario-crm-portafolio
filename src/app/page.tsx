import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Vertical CRMs built for real operators
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Real Estate · FinTech · Wealth Management · Auto Dealers · Motorcycles · Healthcare
            <br />
            Built for operators, not demos.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/products"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View Products
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 border border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Talk to the Builder
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="text-sm text-slate-500 mb-2">REAL ESTATE</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">InmoLevel</h3>
            <p className="text-slate-600 mb-6">
              Property-client matching engine for real estate agencies and brokers.
            </p>
            <Link 
              href="/real-estate-crm"
              className="text-slate-900 font-medium hover:underline"
            >
              View Product →
            </Link>
          </div>

          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="text-sm text-slate-500 mb-2">FINTECH</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">RAGFIN1</h3>
            <p className="text-slate-600 mb-6">
              B2B sales automation for remittance companies and payment processors.
            </p>
            <Link 
              href="/remittances-crm"
              className="text-slate-900 font-medium hover:underline"
            >
              View Product →
            </Link>
          </div>

          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="text-sm text-slate-500 mb-2">WEALTH MANAGEMENT</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">GlobalTrade</h3>
            <p className="text-slate-600 mb-6">
              Client acquisition for investment brokers and wealth managers.
            </p>
            <Link 
              href="/global-trade-crm"
              className="text-slate-900 font-medium hover:underline"
            >
              View Product →
            </Link>
          </div>

          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="text-sm text-slate-500 mb-2">AUTO DEALERS</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">AutoLevel</h3>
            <p className="text-slate-600 mb-6">
              Lead management and sales automation for vehicle dealerships.
            </p>
            <Link 
              href="/auto-dealers-crm"
              className="text-slate-900 font-medium hover:underline"
            >
              View Product →
            </Link>
          </div>

          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="text-sm text-slate-500 mb-2">MOTORCYCLES</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">MotoLevel</h3>
            <p className="text-slate-600 mb-6">
              Rider acquisition system for motorcycle dealerships and powersports.
            </p>
            <Link 
              href="/motorcycle-dealers-crm"
              className="text-slate-900 font-medium hover:underline"
            >
              View Product →
            </Link>
          </div>

          <div className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
            <div className="text-sm text-slate-500 mb-2">HEALTHCARE</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">HealthLevel</h3>
            <p className="text-slate-600 mb-6">
              Patient acquisition for private clinics and elective procedures.
            </p>
            <Link 
              href="/healthcare-crm"
              className="text-slate-900 font-medium hover:underline"
            >
              View Product →
            </Link>
          </div>
        </div>
      </section>

      {/* How It's Built */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Built vertically. Not generic CRMs.
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
                <p className="text-slate-700">Industry-specific data models</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
                <p className="text-slate-700">Real pipelines</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
                <p className="text-slate-700">Automation-first</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
                <p className="text-slate-700">API-ready</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3"></div>
                <p className="text-slate-700">Built and validated fast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Who This Is For
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-slate-700">Brokers & operators</p>
          </div>
          <div className="text-center">
            <p className="text-slate-700">Boutique firms</p>
          </div>
          <div className="text-center">
            <p className="text-slate-700">Fintech & trade startups</p>
          </div>
          <div className="text-center">
            <p className="text-slate-700">Founders validating vertical SaaS</p>
          </div>
          <div className="text-center">
            <p className="text-slate-700">Buyers seeking CRM assets</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Interested in partnership, licensing or acquisition?
          </h2>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  )
}
