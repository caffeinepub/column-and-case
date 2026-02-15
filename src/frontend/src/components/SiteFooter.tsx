export default function SiteFooter() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'column-and-case'
  );

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-wider uppercase mb-4">
              Column and Case
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Modern menswear defined by precision, restraint, and timeless design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-light tracking-wider uppercase mb-4">
              Navigate
            </h3>
            <nav className="space-y-2">
              {['collection', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light capitalize"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-light tracking-wider uppercase mb-4">
              Connect
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              For inquiries, please use our contact form.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-muted-foreground font-light">
            © {currentYear} Column and Case. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-light">
            Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
