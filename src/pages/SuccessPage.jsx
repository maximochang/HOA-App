export default function SuccessPage({ request, onNewRequest, onViewRequests }) {
  return (
    <main className="flex-1 bg-gray-50 py-16 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-white rounded-xl shadow p-10">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted!</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Your work request has been received. Our team will review it and follow up with you at{' '}
            <span className="font-medium text-gray-700">{request.email}</span>.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 text-left text-sm space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-gray-500">Reference ID</span>
              <span className="font-mono font-medium text-gray-700">#{request.id.slice(-8)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span className="font-medium text-gray-700">{request.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Priority</span>
              <span className="font-medium text-gray-700">{request.priority}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                {request.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Submitted</span>
              <span className="text-gray-700">{new Date(request.createdAt).toLocaleString()}</span>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={onNewRequest}
              className="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              Submit Another
            </button>
            <button
              onClick={onViewRequests}
              className="bg-white text-blue-700 border border-blue-300 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View All Requests
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
