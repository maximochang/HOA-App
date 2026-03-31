const STATUS_COLORS = {
  Submitted: 'bg-blue-100 text-blue-700',
  'In Progress': 'bg-yellow-100 text-yellow-700',
  Completed: 'bg-green-100 text-green-700',
  Cancelled: 'bg-gray-100 text-gray-600',
};

const PRIORITY_COLORS = {
  Low: 'bg-gray-100 text-gray-600',
  Medium: 'bg-blue-50 text-blue-600',
  High: 'bg-orange-100 text-orange-600',
  Urgent: 'bg-red-100 text-red-600',
};

export default function RequestsPage({ requests, onNavigate }) {
  if (requests.length === 0) {
    return (
      <main className="flex-1 bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow p-10">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 rounded-full p-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-700 mb-2">No Requests Yet</h2>
            <p className="text-gray-400 text-sm mb-6">
              You haven&apos;t submitted any work requests. Click below to get started.
            </p>
            <button
              onClick={() => onNavigate('submit')}
              className="bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Submit a Request
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">My Requests</h2>
            <p className="text-gray-500 text-sm mt-1">{requests.length} request{requests.length !== 1 ? 's' : ''} submitted</p>
          </div>
          <button
            onClick={() => onNavigate('submit')}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            + New Request
          </button>
        </div>

        <div className="space-y-4">
          {[...requests].reverse().map((req) => (
            <div key={req.id} className="bg-white rounded-xl shadow p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate">{req.subject}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    #{req.id.slice(-8)} &middot; {new Date(req.createdAt).toLocaleDateString()} &middot; {req.category}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${PRIORITY_COLORS[req.priority] || 'bg-gray-100 text-gray-600'}`}>
                    {req.priority}
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${STATUS_COLORS[req.status] || 'bg-gray-100 text-gray-600'}`}>
                    {req.status}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{req.description}</p>
              {req.location && (
                <p className="text-xs text-gray-400 mt-2">📍 {req.location}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
