export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Normandy Shores HOA. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-500">
          For emergencies, please call (305) 555-0100
        </p>
      </div>
    </footer>
  );
}
