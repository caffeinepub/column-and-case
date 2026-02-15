export default function HeroSection() {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/generated/column-and-case-hero.dim_2400x1200.png"
          alt="Column and Case Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 sm:mb-8">
          COLUMN AND CASE
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
          Modern menswear defined by precision, restraint, and timeless design.
        </p>
        <button
          onClick={scrollToCollection}
          className="inline-block px-8 sm:px-12 py-3 sm:py-4 border border-foreground text-sm tracking-widest uppercase font-light hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
}
