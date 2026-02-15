export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight mb-4">
              ABOUT
            </h2>
            <div className="w-16 h-px bg-foreground mx-auto" />
          </div>

          <div className="space-y-6 sm:space-y-8 text-center">
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
              Column and Case is a modern menswear brand built on the principles of architectural precision and understated elegance.
            </p>
            <p className="text-base sm:text-lg font-light leading-relaxed text-muted-foreground">
              We believe in the power of restraint. Each piece in our collection is designed to transcend seasonal trends, offering timeless silhouettes that speak to the discerning individual who values quality over quantity.
            </p>
            <p className="text-base sm:text-lg font-light leading-relaxed text-muted-foreground">
              Our approach is simple: clean lines, exceptional fabrics, and meticulous attention to detail. From tailored outerwear to refined essentials, every garment is crafted to become a permanent fixture in your wardrobe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
