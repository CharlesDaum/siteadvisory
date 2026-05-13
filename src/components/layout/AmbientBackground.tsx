export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#0B1220]">
      {/* Halo teal en haut, statique et subtil */}
      <div
        className="absolute inset-x-0 top-0 h-[720px]"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(20, 184, 166, 0.15), transparent 70%)',
        }}
      />

      {/* Glow secondaire en bas droite, très diffus */}
      <div
        className="absolute bottom-0 right-0 w-[50%] h-[50%]"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 100% 100%, rgba(45, 212, 191, 0.08), transparent 70%)',
        }}
      />

      {/* Grain subtil pour éviter l'aspect plat */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
