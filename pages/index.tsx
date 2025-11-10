import React from "react";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Menü", href: "#menu" },
  { name: "Über uns", href: "#about" },
  { name: "Kontakt", href: "#contact" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#18181b] to-[#23272f] relative overflow-x-hidden font-sans">
      {/* Decorative gradients and shine */}
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
          <div className="flex items-center ml-[-10px]">
            <img src="/saray-logo.png" alt="Saray Logo" className="h-20 w-auto logo-hover" />
          </div>
          <ul className="flex gap-10 text-white text-base font-medium mr-10">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[#ff4d4d] focus:text-[#ff4d4d] outline-none"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4">
        <section className="pt-36 pb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md tracking-tight mb-6 animate-fadein">
            Saray bei Kumar
            <span className="block text-transparent bg-clip-text gradient-shine-metal glow-hover">
              Döner, Pizza & Pasta
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg sm:text-xl text-white/80 mb-10 animate-fadein delay-150">
            Willkommen bei Saray – Ihrem stilvollen Restaurant für orientalische Spezialitäten, italienische Klassiker und köstliche Pizza. Erleben Sie Genuss auf höchstem Niveau.
          </p>
          <a
            href="#menu"
            className="inline-block px-8 py-3 rounded-full text-black font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 animate-fadein delay-300 btn-glow-red btn-gradient-animate"
          >
            Speisekarte ansehen
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/70 py-6 mt-auto z-10 relative">
        <div className="max-w-5xl mx-auto px-6 text-center text-white/60 text-sm">
          © {year} Saray – Döner, Pizza & Pasta
        </div>
      </footer>

      {/* Styles for fade-in and gradient shine */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fadein {
          animation: fadein 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fadein.delay-150 {
          animation-delay: .15s;
        }
        .animate-fadein.delay-300 {
          animation-delay: .3s;
        }
        @keyframes gradient-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-shine {
          background-size: 200% 200%;
          animation: gradient-shine 3s linear infinite alternate;
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
        .glow-hover:hover {
          text-shadow:
            0 0 6px rgba(255,77,77,0.6),
            0 0 12px rgba(255,128,128,0.4);
          transform: scale(1.02);
          transition: all 0.3s ease;
        }
        .logo-hover {
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .logo-hover:hover {
          transform: scale(1.1) rotate(-2deg);
        }
        .logo-hover:hover ~ * {
          animation: bg-flash 2s ease-in-out;
        }
        @keyframes bg-flash {
          0% { background: #000; }
          10% { background: #330000; }
          30% { background: #660000; }
          50% { background: #ff0000; }
          70% { background: #660000; }
          90% { background: #330000; }
          100% { background: #000; }
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