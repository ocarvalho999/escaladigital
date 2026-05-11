import logo from "@/assets/logo.jpg";

const CTA_LINK = "https://formularioanamnese.lovable.app";

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-card border-b border-primary/15 px-4 sm:px-8 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <img src={logo} alt="Find Impulso" className="w-11 h-11 rounded-full object-cover" />
      <span className="text-primary font-bold text-sm tracking-wider">Find Impulso</span>
    </div>
    <a
      href={CTA_LINK}
      className="bg-primary text-primary-foreground px-5 py-2 rounded-md font-bold text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
    >
      AGENDAR REUNIÃO
    </a>
  </nav>
);

export default Navbar;
