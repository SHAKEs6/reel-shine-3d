export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-black text-lg">N</span>
              </div>
              <span className="text-2xl font-black text-foreground">
                NUT_<span className="text-primary">JOB</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Your ultimate destination for the latest movies and animations released in 2025. 
              Experience cinema like never before.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+254702060628" className="text-muted-foreground hover:text-primary transition-colors">
                  +254 702 060 628
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:shakesian6@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  shakesian6@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#movies" className="block text-muted-foreground hover:text-primary transition-colors">Movies</a>
              <a href="#animations" className="block text-muted-foreground hover:text-primary transition-colors">Animations</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 NUT_JOB. All rights reserved. | Bringing you the best in cinema.
          </p>
        </div>
      </div>
    </footer>
  );
}