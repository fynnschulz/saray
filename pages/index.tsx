import React, { useState, useEffect } from "react";

export default function Home() {
  const year = new Date().getFullYear();
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = isDark 
    ? "bg-gradient-to-br from-black via-[#18181b] to-[#23272f]"
    : "bg-gradient-to-br from-white via-gray-50 to-gray-100";

  return (
    <div className={`min-h-screen flex flex-col ${bgClass} relative overflow-x-hidden font-sans transition-colors duration-500`}>
      {/* Background Image with Aura Effect */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/background.png)',
            opacity: isDark ? '0.35' : '0.90'
          }}
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-black/60 via-black/40 to-black/60' : 'bg-gradient-to-b from-white/40 via-white/20 to-white/40'} transition-colors duration-500`} />
        {/* Glow Aura Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#ff4d4d]/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Decorative gradients and shine */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-72 ${isDark ? 'bg-gradient-to-tr from-white/10 via-white/0 to-white/0' : 'bg-gradient-to-tr from-red-500/20 via-red-300/5 to-red-100/0'} rounded-full blur-3xl opacity-40 transition-colors duration-500`} />
        <div className={`absolute bottom-0 right-0 w-1/3 h-40 ${isDark ? 'bg-gradient-to-tl from-white/5 via-white/0 to-white/0' : 'bg-gradient-to-tl from-red-400/15 via-red-200/5 to-red-50/0'} rounded-full blur-2xl opacity-30 transition-colors duration-500`} />
      </div>

      {/* Navbar */}
      <header className={`fixed top-0 left-0 w-full z-20 backdrop-blur-md ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/60 border-gray-200'} border-b transition-colors duration-500`}>
        <nav className="flex items-center justify-between px-12 py-4">
          <div className="flex items-center ml-[-10px]">
            <img src="/saray.png" alt="Saray Logo" className="h-20 w-auto logo-hover" />
          </div>
          <div className="flex gap-6 mr-10 items-center">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`${isDark ? 'text-white hover:text-[#ff4d4d]' : 'text-gray-800 hover:text-[#ff4d4d]'} transition-colors duration-200`}
              aria-label="Theme Toggle"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <a
              href="tel:+4968317613367"
              className={`${isDark ? 'text-white hover:text-[#ff4d4d]' : 'text-gray-800 hover:text-[#ff4d4d]'} transition-colors duration-200`}
              aria-label="Telefon"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
            <a
              href="mailto:info@saray.de"
              className={`${isDark ? 'text-white hover:text-[#ff4d4d]' : 'text-gray-800 hover:text-[#ff4d4d]'} transition-colors duration-200`}
              aria-label="E-Mail"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4">
        <section className="pt-36 pb-24">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} drop-shadow-md tracking-tight mb-6 animate-fadein transition-colors duration-500`}>
            Saray bei Kumar
            <span className="block text-transparent bg-clip-text gradient-shine-metal glow-hover">
              Döner, Pizza & Pasta
            </span>
          </h1>
          <p className={`max-w-xl mx-auto text-lg sm:text-xl ${isDark ? 'text-white/80' : 'text-gray-700'} mb-10 animate-fadein delay-150 transition-colors duration-500`}>
            Willkommen bei Saray – Ihrem Lieblingslokal in der Altstadt. Genießen Sie orientalische Spezialitäten, italienische Klassiker und köstliche Pizza – stilvoll serviert und immer frisch zubereitet.
          </p>
          <a 
            href="/speisekarte.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-black font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 animate-fadein delay-300 btn-glow-red btn-gradient-animate cursor-pointer"
          >
            Speisekarte ansehen
          </a>

          {/* Phone Number */}
          <div className="mt-16 animate-fadein delay-450">
            <a 
              href="tel:+4968317613367"
              className={`inline-flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} hover:text-[#ff4d4d] transition-all duration-300 group`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="group-hover:tracking-wider transition-all">06831 7613367</span>
            </a>
          </div>

          {/* Address */}
          <div className="mt-8 animate-fadein delay-600">
            <a 
              href="https://maps.google.com/?q=Sonnenstraße+11,+66740+Saarlouis"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold ${isDark ? 'text-white/90' : 'text-gray-800'} hover:text-[#ff4d4d] transition-all duration-300 group`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="group-hover:tracking-wide transition-all">Sonnenstraße 11, 66740 Saarlouis</span>
            </a>
          </div>

          {/* Map Image */}
          <div className="mt-12 animate-fadein delay-750">
            <div className="max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/20 hover:scale-[1.02] transition-transform duration-300">
              <a 
                href="https://maps.google.com/?q=Sonnenstraße+11,+66740+Saarlouis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/map.png" 
                  alt="Karte - Saray bei Kumar" 
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="mt-16 animate-fadein">
            <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8 text-center transition-colors duration-500`}>
              Öffnungszeiten
            </h3>
            <div className="max-w-2xl mx-auto space-y-3">
              <div className={`flex justify-between items-center ${isDark ? 'text-white/90' : 'text-gray-700'} hover:text-[#ff4d4d] transition-colors duration-200`}>
                <span className="font-semibold text-lg">Montag</span>
                <span className="font-mono text-lg">11:00–23:00</span>
              </div>
              <div className={`flex justify-between items-center ${isDark ? 'text-white/90' : 'text-gray-700'} hover:text-[#ff4d4d] transition-colors duration-200`}>
                <span className="font-semibold text-lg">Dienstag</span>
                <span className="font-mono text-lg">11:00–23:00</span>
              </div>
              <div className={`flex justify-between items-center ${isDark ? 'text-white/90' : 'text-gray-700'} hover:text-[#ff4d4d] transition-colors duration-200`}>
                <span className="font-semibold text-lg">Mittwoch</span>
                <span className="font-mono text-lg">11:00–23:00</span>
              </div>
              <div className={`flex justify-between items-center ${isDark ? 'text-white/90' : 'text-gray-700'} hover:text-[#ff4d4d] transition-colors duration-200`}>
                <span className="font-semibold text-lg">Donnerstag</span>
                <span className="font-mono text-lg">11:00–23:00</span>
              </div>
              <div className={`flex justify-between items-center ${isDark ? 'text-white/90' : 'text-gray-700'} hover:text-[#ff4d4d] transition-colors duration-200`}>
                <span className="font-semibold text-lg">Freitag</span>
                <span className="font-mono text-lg">11:00–01:00</span>
              </div>
              <div className={`flex justify-between items-center ${isDark ? 'text-white/90' : 'text-gray-700'} hover:text-[#ff4d4d] transition-colors duration-200`}>
                <span className="font-semibold text-lg">Samstag</span>
                <span className="font-mono text-lg">11:00–01:00</span>
              </div>
              <div className={`flex justify-between items-center ${isDark ? 'text-white/90' : 'text-gray-700'} hover:text-[#ff4d4d] transition-colors duration-200 ${isDark ? 'border-white/20' : 'border-gray-300'} border-t pt-3 mt-3`}>
                <span className="font-semibold text-lg">Sonntag</span>
                <span className="font-mono text-lg">13:00–23:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} text-center mb-16 animate-fadein transition-colors duration-500`}>
            Unsere <span className="text-transparent bg-clip-text gradient-shine-metal">Spezialitäten</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Pizza Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/pizza.png" 
                  alt="Italienische Pizza" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-[#ff4d4d] transition-colors duration-200`}>
                  Leckere Pizza
                </h3>
                <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm transition-colors duration-200`}>
                  Frisch gebacken mit besten Zutaten
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Pasta Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/pasta.png" 
                  alt="Hausgemachte Pasta" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-[#ff4d4d] transition-colors duration-200`}>
                  Herzhafte Pasta
                </h3>
                <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm transition-colors duration-200`}>
                  Traditionelle Rezepte
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Döner/Salad Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/salad.png?v=2" 
                  alt="Frische Salate" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-[#ff4d4d] transition-colors duration-200`}>
                  Genussvoller Salat
                </h3>
                <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm transition-colors duration-200`}>
                  Frische Köstlichkeiten & mehr
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} text-center mb-16 animate-fadein transition-colors duration-500`}>
            Einblicke in unser <span className="text-transparent bg-clip-text gradient-shine-metal">Restaurant</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Video 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/20">
              <div className="aspect-[9/16] overflow-hidden bg-black">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  style={{ pointerEvents: 'auto' }}
                >
                  <source src="/video1.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>

            {/* Video 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/20">
              <div className="aspect-[9/16] overflow-hidden bg-black">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  style={{ pointerEvents: 'auto' }}
                >
                  <source src="/video2.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>

            {/* Video 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/20">
              <div className="aspect-[9/16] overflow-hidden bg-black">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  style={{ pointerEvents: 'auto' }}
                >
                  <source src="/video3.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="w-full max-w-7xl mx-auto px-6 pb-20">
          <p className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} text-center animate-fadein transition-colors duration-500`}>
            Wir freuen uns auf Ihren Besuch!
          </p>
        </section>

        {/* Google Reviews Section */}
        <section className="w-full max-w-7xl mx-auto px-6 pb-20">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} text-center mb-4 animate-fadein transition-colors duration-500`}>
            Was unsere Gäste sagen
          </h2>
          <div className="flex justify-center items-center gap-2 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>5.0</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 - Aylin */}
            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className={`${isDark ? 'text-white/90' : 'text-gray-700'} mb-4 italic transition-colors duration-200`}>
                &ldquo;Ich liebeeee die Pizza und auch die Döner Sauce die angeboten wird! Jedesmal eine erneute Geschmacksexplosion, wir essen super gerne bek Saray Kumar unteranderem tolles Preis-Leistungs-Verhältnis 🔥&rdquo;
              </p>
              <p className={`${isDark ? 'text-white/60' : 'text-gray-500'} text-sm font-semibold transition-colors duration-200`}>
                — Aylin K.
              </p>
            </div>

            {/* Review 2 - DvKa */}
            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className={`${isDark ? 'text-white/90' : 'text-gray-700'} mb-4 italic transition-colors duration-200`}>
                &ldquo;Seit mehr als 8 Jahren einer meiner Lieblingsdöner in Saarlouis! Egal ob Pizza, Nudeln, Döner ect. alles sehr schmackhaft!&rdquo;
              </p>
              <p className={`${isDark ? 'text-white/60' : 'text-gray-500'} text-sm font-semibold transition-colors duration-200`}>
                — DvKa
              </p>
            </div>

            {/* Review 3 - Lisa */}
            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className={`${isDark ? 'text-white/90' : 'text-gray-700'} mb-4 italic transition-colors duration-200`}>
                &ldquo;Beste Rigatoni Rot-Weiß 👌👌👌 Nette Leute, 1a Service - gibt immer Dönersoße und scharfe Soße on top :) dankeeee&rdquo;
              </p>
              <p className={`${isDark ? 'text-white/60' : 'text-gray-500'} text-sm font-semibold transition-colors duration-200`}>
                — Lisa
              </p>
            </div>
          </div>

          {/* Google Button */}
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Sonnenstra%C3%9Fe+11,+66740+Saarlouis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-500"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Alle Bewertungen auf Google ansehen
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`w-full ${isDark ? 'border-white/10 bg-black/70' : 'border-gray-200 bg-white/70'} border-t py-6 mt-auto z-10 relative transition-colors duration-500`}>
        <div className={`max-w-5xl mx-auto px-6 text-center ${isDark ? 'text-white/60' : 'text-gray-500'} text-sm transition-colors duration-500`}>
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

        /* Hide volume control in videos */
        video::-webkit-media-controls-volume-slider,
        video::-webkit-media-controls-mute-button {
          display: none !important;
        }
        video::-moz-media-controls-volume-slider,
        video::-moz-media-controls-mute-button {
          display: none !important;
        }
      `}</style>
    </div>
  );
}