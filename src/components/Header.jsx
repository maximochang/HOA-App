export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-1.5">
            <svg className="w-7 h-7 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Normandy Shores HOA</h1>
            <p className="text-blue-200 text-xs">Work Request Portal</p>
          </div>
        </div>
        <nav className="flex gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              currentPage === 'home'
                ? 'bg-white text-blue-800'
                : 'text-white hover:bg-blue-700'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('submit')}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              currentPage === 'submit'
                ? 'bg-white text-blue-800'
                : 'text-white hover:bg-blue-700'
            }`}
          >
            Submit Request
          </button>
          <button
            onClick={() => onNavigate('requests')}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              currentPage === 'requests'
                ? 'bg-white text-blue-800'
                : 'text-white hover:bg-blue-700'
            }`}
          >
            My Requests
          </button>
        </nav>
      </div>
    </header>
  );
}
