import Link from 'next/link'

export default function MotoLevelCRM() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link href="/products" className="text-slate-600 hover:text-slate-900 mb-8 inline-block">
        ← Back to Products
      </Link>
      
      <div className="text-sm text-slate-500 mb-4">MOTORCYCLES</div>
      <h1 className="text-5xl font-bold text-slate-900 mb-6">MotoLevel</h1>
      
      <p className="text-xl text-slate-600 mb-12">
        Rider acquisition system for motorcycle dealerships and powersports
      </p>

      <div className="prose prose-slate max-w-none">
        <h2>Who It's For</h2>
        <p>
          Motorcycle dealerships, powersports dealers, custom bike builders, and multi-brand shops managing 
          30-200 bikes in inventory.
        </p>

        <h2>What It Does</h2>
        <p>
          MotoLevel scores riders based on budget, license status, riding experience, and gear needs. 
          First-time riders get education paths while experienced riders get fast-tracked. 
          Hot riders (licensed, high budget, immediate) trigger instant alerts.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Rider-specific scoring:</strong> Budget + license status + experience + timeline</li>
          <li><strong>Safety-focused:</strong> MSF course tracking, gear requirements, appropriate bike recommendations</li>
          <li><strong>Gear revenue tracking:</strong> $500-$1,500 additional per sale opportunity identification</li>
          <li><strong>First-timer education:</strong> Separate nurture paths for new vs experienced riders</li>
          <li><strong>Ergonomics matching:</strong> Height/weight fields for proper bike fitting</li>
          <li><strong>14-stage pipeline:</strong> From inquiry to delivery including insurance verification</li>
        </ul>

        <h2>Technical Stack</h2>
        <ul>
          <li>GoHighLevel configuration (55+ custom fields)</li>
          <li>n8n automation workflows</li>
          <li>Slack hot rider alerts</li>
          <li>30+ email/sales templates with safety focus</li>
        </ul>

        <h2>Expected Results</h2>
        <p>
          Dealers typically sell 2-4 additional bikes per month with 20-30% gear attach rate. 
          First-time buyers stay in the pipeline longer but convert at higher rates with proper education.
        </p>

        <div className="mt-12 p-8 bg-slate-50 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to sell more bikes?</h3>
          <p className="text-slate-700 mb-6">
            MotoLevel helps you convert riders while keeping safety front and center.
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
