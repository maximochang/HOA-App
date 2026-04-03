export default function HomePage({ onNavigate }) {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Submit a Request',
      description: 'Easily fill out a work request form with details about the issue or service needed.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Track Status',
      description: 'View your submitted requests and monitor the current status of each one.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Stay Informed',
      description: 'Receive confirmation and keep a record of all requests submitted to the HOA.',
    },
  ];

  const categories = [
    { label: 'Lighting', icon: '💡' },
    { label: 'Landscaping', icon: '🌿' },
    { label: 'Plumbing', icon: '🔧' },
    { label: 'Pool & Amenities', icon: '🏊' },
    { label: 'Security', icon: '🔒' },
    { label: 'Common Areas', icon: '🏘️' },
    { label: 'Pest Control', icon: '🐛' },
    { label: 'Other', icon: '📋' },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Normandy Shores HOA Work Request Portal</h2>
          <p className="text-blue-100 text-lg mb-8">
            Need something fixed or improved in our community? Submit a work request and our team will take care of it.
          </p>
          <button
            onClick={() => onNavigate('submit')}
            className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-md"
          >
            Submit a Work Request
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <div className="mb-4">{f.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h4>
                <p className="text-gray-500 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Request Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => onNavigate('submit')}
                className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <span className="text-3xl mb-2">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-blue-50 border-t border-blue-100">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to submit a request?</h3>
          <p className="text-gray-500 mb-6 text-sm">
            Our team reviews all requests and will follow up with you as quickly as possible.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('submit')}
              className="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              New Request
            </button>
            <button
              onClick={() => onNavigate('requests')}
              className="bg-white text-blue-700 border border-blue-300 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View My Requests
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
