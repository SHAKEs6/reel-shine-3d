export default function StatsSection() {
  const stats = [
    {
      number: '247+',
      label: 'Movies Released',
      description: 'in 2024'
    },
    {
      number: '156+', 
      label: 'Animations',
      description: 'this year'
    },
    {
      number: '8.5M+',
      label: 'Total Views',
      description: 'across platform'
    },
    {
      number: '94%',
      label: 'User Rating',
      description: 'satisfaction'
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            By The Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            The impact of cinema in 2024
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-black bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}