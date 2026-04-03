import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkRequestForm from './pages/WorkRequestForm';
import SuccessPage from './pages/SuccessPage';
import RequestsPage from './pages/RequestsPage';

const STORAGE_KEY = 'normandy-hoa-requests';

function loadRequests() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRequests(requests) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
  } catch {
    // ignore
  }
}

export default function App() {
  const [page, setPage] = useState('home');
  const [requests, setRequests] = useState(loadRequests);
  const [lastRequest, setLastRequest] = useState(null);

  useEffect(() => {
    saveRequests(requests);
  }, [requests]);

  function handleSubmit(request) {
    setRequests((prev) => [...prev, request]);
    setLastRequest(request);
    setPage('success');
  }

  function navigate(target) {
    setPage(target);
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header currentPage={page} onNavigate={navigate} />

      {page === 'home' && <HomePage onNavigate={navigate} />}
      {page === 'submit' && <WorkRequestForm onSubmit={handleSubmit} />}
      {page === 'success' && lastRequest && (
        <SuccessPage
          request={lastRequest}
          onNewRequest={() => navigate('submit')}
          onViewRequests={() => navigate('requests')}
        />
      )}
      {page === 'requests' && <RequestsPage requests={requests} onNavigate={navigate} />}

      <Footer />
    </div>
  );
}
