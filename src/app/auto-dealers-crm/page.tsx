import Link from 'next/link'

export default function AutoLevelCRM() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link href="/products" className="text-slate-600 hover:text-slate-900 mb-8 inline-block">
        ← Back to Products
      </Link>
      
      <div className="text-sm text-slate-500 mb-4">AUTO DEALERS</div>
      <h1 className="text-5xl font-bold text-slate-900 mb-6">AutoLevel</h1>
      
      <p className="text-xl text-slate-600 mb-12">
        Lead management and sales automation for vehicle dealerships
      </p>

      <div className="prose prose-slate max-w-none">
        <h2>Who It's For</h2>
        <p>
          Independent used car dealers, franchise dealerships, luxury car dealers, and auto brokers managing 20-200 vehicles in inventory.
        </p>

        <h2>What It Does</h2>
        <p>
          AutoLevel automatically scores every inquiry based on budget, timeline, financing status, and trade-in value. 
          Hot buyers (150+ score, high budget, immediate timeline) trigger instant alerts so your sales team knows exactly 
          where to focus their time.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Intelligent lead scoring:</strong> 0-200 points based on budget ($10K vs $150K), timeline, financing readiness</li>
          <li><strong>Trade-in tracking:</strong> Value estimation and negotiation management</li>
          <li><strong>Test drive scheduling:</strong> Automated booking and follow-up</li>
          <li><strong>Deal value calculation:</strong> Automatic profit margin estimates (10% average)</li>
          <li><strong>12-stage pipeline:</strong> From inquiry to delivery</li>
          <li><strong>Financing workflow:</strong> Payment plan presentations and approval tracking</li>
        </ul>

        <h2>Technical Stack</h2>
        <ul>
          <li>GoHighLevel configuration (50+ custom fields)</li>
          <li>n8n automation workflows</li>
          <li>Slack hot lead alerts</li>
          <li>35+ email/sales templates</li>
        </ul>

        <h2>Expected Results</h2>
        <p>
          Most dealers close 2-4 additional vehicles per month by prioritizing high-value buyers and maintaining 
          systematic follow-up. Time spent: 30% admin, 70% selling.
        </p>

        <div className="mt-12 p-8 bg-slate-50 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to sell more vehicles?</h3>
          <p className="text-slate-700 mb-6">
            AutoLevel gives you enterprise-level automation with independent dealer flexibility.
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
