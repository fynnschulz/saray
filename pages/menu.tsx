import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#18181b] to-[#23272f] relative overflow-x-hidden font-sans">
      {/* Decorative gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-72 bg-gradient-to-tr from-white/10 via-white/0 to-white/0 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-1/3 h-40 bg-gradient-to-tl from-white/5 via-white/0 to-white/0 rounded-full blur-2xl opacity-30" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-black/60 border-b border-white/10">
        <nav className="flex items-center justify-between px-12 py-4">
          <Link href="/">
            <div className="flex items-center ml-[-10px] cursor-pointer">
              <img src="/saray.png" alt="Saray Logo" className="h-20 w-auto logo-hover" />
            </div>
          </Link>
          <div className="flex gap-6 mr-10">
            <a
              href="tel:+4968317613367"
              className="text-white hover:text-[#ff4d4d] transition-colors duration-200"
              aria-label="Telefon"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
            <a
              href="mailto:info@saray.de"
              className="text-white hover:text-[#ff4d4d] transition-colors duration-200"
              aria-label="E-Mail"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Menu Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 pt-32 pb-16">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md tracking-tight mb-4">
              Unsere <span className="text-transparent bg-clip-text gradient-shine-metal">Speisekarte</span>
            </h1>
            <Link href="/">
              <span className="text-white/60 hover:text-[#ff4d4d] cursor-pointer transition-colors duration-200">
                ← Zurück zur Startseite
              </span>
            </Link>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-white/10">
            <iframe
              src="/speisekarte.pdf"
              className="w-full h-[80vh] rounded"
              title="Speisekarte"
            />
          </div>
          
          <div className="text-center mt-6">
            <a
              href="/speisekarte.pdf"
              download
              className="inline-block px-6 py-3 rounded-full text-black font-semibold text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 btn-glow-red btn-gradient-animate"
            >
              PDF herunterladen
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/70 py-6 mt-auto z-10 relative">
        <div className="max-w-5xl mx-auto px-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Saray – Döner, Pizza & Pasta
        </div>
      </footer>

      {/* Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        }
        .btn-glow-red {
          box-shadow:
            0 0 4px rgba(255,77,77,0.4),
            0 0 8px rgba(255,128,128,0.3);
          transition: all 0.3s ease;
        }
        .btn-glow-red:hover {
          box-shadow:
            0 0 6px rgba(255,77,77,0.6),
            0 0 12px rgba(255,128,128,0.4);
        }
        .logo-hover {
          transition: transform 0.3s ease;
        }
        .logo-hover:hover {
          transform: scale(1.1) rotate(-2deg);
        }
        .btn-gradient-animate {
          background-size: 200% auto;
          background-image: linear-gradient(to right, #ff4d4d 0%, #ffffff 50%, #ff4d4d 100%);
          transition: background-position 0.5s ease, transform 0.3s ease;
        }
        .btn-gradient-animate:hover {
          background-position: right center;
          box-shadow: 0 0 6px rgba(255,77,77,0.5), 0 0 12px rgba(255,128,128,0.4);
          transform: scale(1.05);
        }
        @keyframes metallic-shine {
          0% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .gradient-shine-metal {
          background-image: linear-gradient(90deg, #ff1a1a, #ffcccc, #ff1a1a);
          background-size: 300% 100%;
          animation: metallic-shine 18s ease-in-out infinite;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
