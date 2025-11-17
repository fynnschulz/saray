import React from "react";
import Link from "next/link";

export default function Datenschutz() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#18181b] to-[#23272f] relative overflow-x-hidden font-sans">
      {/* Background Image with Aura Effect */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/background.png)',
            opacity: '0.40'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-radial from-[#ff4d4d]/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-black/60 border-white/10 border-b">
        <nav className="flex items-center justify-between px-12 py-4">
          <div className="flex items-center ml-[-10px]">
            <Link href="/">
              <img src="/saray.png" alt="Saray Logo" className="h-20 w-auto logo-hover" />
            </Link>
          </div>
          <div className="flex gap-6 mr-10 items-center">
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
              href="mailto:sarayimbiss.kumar@gmail.com"
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl w-full">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
              Datenschutzerklärung
            </h1>

            <div className="space-y-8 text-white/90 text-sm leading-relaxed">
              {/* Einleitung */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Datenerfassung auf dieser Website</h3>
                <p className="mb-3">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                </p>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt &bdquo;Hinweis zur verantwortlichen Stelle&ldquo; in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <p className="mb-3">
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                </p>
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder per E-Mail an uns senden.
                </p>
                <p className="mb-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <p className="mb-3">
                  <strong>Wofür nutzen wir Ihre Daten?</strong>
                </p>
                <p className="mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="mb-3">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                </p>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <p className="mt-3">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </section>

              {/* Hosting */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
                <p className="mb-3">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Externes Hosting</h3>
                <p className="mb-3">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="mb-3">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mb-3">
                  Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </p>
              </section>

              {/* Allgemeine Hinweise und Pflichtinformationen */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Datenschutz</h3>
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mb-3">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mb-2">Imbiss Saray</p>
                <p className="mb-2">Veluppillai Ratnakumar</p>
                <p className="mb-2">Sonnenstraße 11</p>
                <p className="mb-4">66740 Saarlouis</p>
                <p className="mb-2">Telefon: 06831 7613367</p>
                <p className="mb-4">E-Mail: sarayimbiss.kumar@gmail.com</p>
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Speicherdauer</h3>
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                <p>
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Empfänger von personenbezogenen Daten</h3>
                <p>
                  Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                <p className="mb-3">
                  <strong>
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                  </strong>
                </p>
                <p>
                  <strong>
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                  </strong>
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
                <p>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Auskunft, Löschung und Berichtigung</h3>
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="mb-3">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>
                <p className="mt-3">
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p className="mt-3">
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
              </section>

              {/* Datenerfassung auf dieser Website */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Cookies</h3>
                <p className="mb-3">
                  Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </p>
                <p className="mb-3">
                  Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>
                <p className="mb-3">
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                </p>
                <p className="mb-3">
                  Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mb-3">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
                <p>
                  Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Server-Log-Dateien</h3>
                <p className="mb-3">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mb-3">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
                <p>
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Kontaktformular</h3>
                <p className="mb-3">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mb-3">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="mb-3">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mb-3">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p>
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </section>

              {/* Google Maps */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Plugins und Tools</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Google Maps</h3>
                <p className="mb-3">
                  Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="mb-3">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
                <p className="mb-3">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mb-3">
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:{" "}
                  <a 
                    href="https://privacy.google.com/businesses/gdprcontrollerterms/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff4d4d] hover:text-[#ff6b6b] underline"
                  >
                    https://privacy.google.com/businesses/gdprcontrollerterms/
                  </a>
                  {" "}und{" "}
                  <a 
                    href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff4d4d] hover:text-[#ff6b6b] underline"
                  >
                    https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                  </a>
                  .
                </p>
                <p>
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                  <a 
                    href="https://policies.google.com/privacy?hl=de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff4d4d] hover:text-[#ff6b6b] underline"
                  >
                    https://policies.google.com/privacy?hl=de
                  </a>
                  .
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Google Fonts (lokales Hosting)</h3>
                <p className="mb-3">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                </p>
                <p>
                  Weitere Informationen zu Google Fonts finden Sie unter{" "}
                  <a 
                    href="https://developers.google.com/fonts/faq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff4d4d] hover:text-[#ff6b6b] underline"
                  >
                    https://developers.google.com/fonts/faq
                  </a>
                  {" "}und in der Datenschutzerklärung von Google:{" "}
                  <a 
                    href="https://policies.google.com/privacy?hl=de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff4d4d] hover:text-[#ff6b6b] underline"
                  >
                    https://policies.google.com/privacy?hl=de
                  </a>
                  .
                </p>
              </section>

              {/* Schlussbemerkung */}
              <section className="mt-8 pt-6 border-t border-white/20">
                <p className="text-xs text-white/70">
                  Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-[#ff4d4d] hover:text-[#ff6b6b] underline">e-recht24.de</a>
                </p>
                <p className="text-xs text-white/70 mt-2">
                  Stand: November 2025
                </p>
              </section>
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-block px-8 py-3 rounded-full text-black font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 btn-glow-red btn-gradient-animate cursor-pointer"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-white/10 bg-black/70 border-t py-6 mt-auto z-10 relative">
        <div className="max-w-5xl mx-auto px-6 text-center text-white/60 text-sm">
          <div className="flex justify-center gap-6 mb-2">
            <Link href="/impressum" className="hover:text-[#ff4d4d] transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[#ff4d4d] transition-colors">
              Datenschutz
            </Link>
          </div>
          © {year} Saray – Döner, Pizza & Pasta
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
          cursor: pointer;
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
      `}</style>
    </div>
  );
}
