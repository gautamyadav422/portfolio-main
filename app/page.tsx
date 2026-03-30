import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollyCanvas from "@/components/ScrollyCanvas";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.18a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const SocialLink = ({ href, icon, label, text }: { href: string; icon: React.ReactNode; label: string, text?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-300 hover:text-white group"
    aria-label={label}
  >
    <span className="w-5 h-5 group-hover:scale-110 transition-transform">
      {icon}
    </span>
    {text && <span className="font-medium tracking-wide">{text}</span>}
  </a>
);

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Experience />
      <Projects />

      <section className="relative z-20 bg-[#0a0a0a] py-24 px-4 md:px-12 border-t border-white/5 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">Let's Connect</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg transition-colors">
          Interested in working together or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-6">
          <SocialLink href="mailto:gautamyadav422@gmail.com" icon={<MailIcon />} label="Email" text="gautamyadav422@gmail.com" />
          <SocialLink href="tel:+919930782439" icon={<PhoneIcon />} label="Phone" text="+91 99307 82439" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <SocialLink href="https://www.linkedin.com/in/gautam-yadav-598640ab/" icon={<LinkedInIcon />} label="LinkedIn" text="LinkedIn" />
          <SocialLink href="https://x.com/Gautamy67088704" icon={<TwitterIcon />} label="Twitter" text="Twitter" />
          <SocialLink href="https://www.instagram.com/gautamyadav4220?igsh=YXVnM3RwejVuenMy" icon={<InstagramIcon />} label="Instagram" text="Instagram" />
        </div>
      </section>

      <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/5 bg-[#121212]">
        © {new Date().getFullYear()} Gautam Yadav.
      </footer>
    </main>
  );
}
