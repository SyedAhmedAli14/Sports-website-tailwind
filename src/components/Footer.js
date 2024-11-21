export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Syed Ahmed Ali Shah. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }