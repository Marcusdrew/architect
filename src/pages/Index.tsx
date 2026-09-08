import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/atelier-hero.jpg";
import villaImage from "@/assets/projet-villa.jpg";
import centreImage from "@/assets/projet-centre.jpg";

const principles = [
  {
    number: "01",
    title: "La matière brute",
    text: "Pierre, bois et béton sont choisis pour leur vérité, leur patine et leur dialogue avec le climat.",
  },
  {
    number: "02",
    title: "La clarté naturelle",
    text: "Nous dessinons avec le soleil pour révéler les volumes, rythmer les heures et apaiser les usages.",
  },
  {
    number: "03",
    title: "L’usage sensible",
    text: "Chaque geste quotidien devient le point de départ d’un espace fluide, juste et profondément humain.",
  },
];

const projects = [
  {
    image: villaImage,
    title: "Maison N’Sele",
    meta: "Habitat · Kinshasa · 2026",
    description: "Une maison-patio ouverte sur la canopée, où l’eau et l’ombre tempèrent la lumière équatoriale.",
    width: 1600,
    height: 1072,
  },
  {
    image: centreImage,
    title: "Forum des Savoirs",
    meta: "Culture · Afrique centrale · 2025",
    description: "Une colonnade monumentale pensée comme un seuil public, entre paysage, transmission et silence.",
    width: 1600,
    height: 1072,
  },
];

const navItems = [
  ["Projets", "#projets"],
  ["Expertise", "#expertise"],
  ["Le studio", "#studio"],
  ["Contact", "#contact"],
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-7 md:px-10 lg:px-16" aria-label="Navigation principale">
          <a href="#accueil" className="font-display text-xl font-medium uppercase md:text-2xl">
            Arch Studio
          </a>

          <div className="hidden items-center gap-10 md:flex lg:gap-14">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link text-xs font-medium uppercase text-foreground/70">
                {label}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {menuOpen && (
          <div className="mx-5 border-y border-border bg-background px-5 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="font-display text-2xl">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="accueil" className="viewport-panel relative flex min-h-[100svh] items-center pt-28">
          <div className="mx-auto grid w-full max-w-[1600px] items-end gap-12 px-5 pb-16 md:px-10 lg:grid-cols-12 lg:px-16 lg:pb-20">
            <div className="relative z-10 lg:col-span-7 lg:pb-6">
              <p className="reveal mb-8 text-xs font-medium uppercase text-primary">Architecture · Intérieurs · Territoires</p>
              <h1 className="reveal-delay font-display text-[clamp(4.25rem,10vw,9.5rem)] leading-[0.82]">
                L’alchimie
                <span className="mt-3 block pl-[8%] italic">du lieu.</span>
              </h1>
              <div className="mt-10 max-w-lg lg:ml-2 lg:mt-14">
                <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  Nous sculptons le vide par la matière et la lumière. Une architecture sensible où chaque volume devient une émotion tangible.
                </p>
                <Button asChild variant="link" className="group mt-8 h-auto p-0 text-xs uppercase text-foreground no-underline">
                  <a href="#projets">
                    Explorer nos projets
                    <span className="h-px w-12 bg-primary transition-[width] duration-500 group-hover:w-20" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="image-reveal aspect-[4/5] overflow-hidden bg-muted">
                <img src={heroImage} alt="Intérieur contemporain sculpté par la lumière naturelle" width={1200} height={1504} className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-[10px] uppercase text-muted-foreground lg:absolute lg:-bottom-8 lg:left-0">Kinshasa · Concevoir l’essentiel</p>
            </div>
          </div>
          <a href="#expertise" aria-label="Découvrir notre approche" className="absolute bottom-7 right-6 hidden text-muted-foreground transition-colors hover:text-primary md:block lg:right-16">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </section>

        <section id="expertise" className="viewport-panel flex min-h-[100svh] items-center border-y border-border bg-secondary py-24 md:py-28">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-12">
              <p className="section-label lg:col-span-3">Notre approche</p>
              <h2 className="font-display text-4xl leading-tight md:text-6xl lg:col-span-8 lg:text-7xl">
                Moins de gestes. <span className="italic text-primary">Plus de présence.</span>
              </h2>
            </div>
            <div className="mt-20 grid gap-px border-y border-border bg-border md:grid-cols-3">
              {principles.map((principle) => (
                <article key={principle.number} className="bg-secondary px-1 py-10 md:px-8 md:py-14 first:pl-0 last:pr-0">
                  <span className="text-xs text-primary">{principle.number}</span>
                  <h3 className="mt-12 font-display text-3xl italic">{principle.title}</h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projets" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
            <div className="viewport-panel flex min-h-[42svh] items-end justify-between gap-8 pb-14 md:pb-16">
              <div>
                <p className="section-label">Projets choisis</p>
                <h2 className="mt-5 font-display text-5xl md:text-7xl">Des lieux à ressentir.</h2>
              </div>
              <p className="hidden max-w-xs text-sm leading-6 text-muted-foreground md:block">Chaque projet est une réponse unique à un climat, une histoire et une manière d’habiter.</p>
            </div>

            <div>
              {projects.map((project, index) => (
                <article key={project.title} className={`viewport-panel flex min-h-[100svh] flex-col justify-center py-12 md:py-16 ${index === 1 ? "md:ml-[17%]" : "md:mr-[9%]"}`}>
                  <div className="project-image aspect-[3/2] max-h-[58svh] overflow-hidden bg-muted">
                    <img src={project.image} alt={project.title} width={project.width} height={project.height} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
                  </div>
                  <div className="mt-7 grid gap-4 md:grid-cols-12">
                    <div className="md:col-span-5">
                      <p className="text-xs uppercase text-primary">{project.meta}</p>
                      <h3 className="mt-3 font-display text-4xl md:text-5xl">{project.title}</h3>
                    </div>
                    <p className="max-w-lg text-sm leading-7 text-muted-foreground md:col-span-5 md:col-start-8">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="studio" className="viewport-panel flex min-h-[100svh] items-center bg-foreground py-24 text-background md:py-28">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase text-background/60">Le studio</p>
                <h2 className="mt-8 font-display text-5xl leading-tight md:text-7xl">Créer aujourd’hui, <span className="italic text-accent">habiter longtemps.</span></h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 lg:pt-20">
                <p className="text-lg font-light leading-8 text-background/70">Nous réunissons architecture, design intérieur et paysage autour d’une conviction : la beauté naît lorsque l’intuition rencontre la précision.</p>
                <Button asChild variant="outline" className="mt-10 border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground">
                  <a href="#contact">Rencontrer le studio <ArrowUpRight /></a>
                </Button>
              </div>
            </div>
            <dl className="mt-24 grid gap-10 border-t border-background/20 pt-10 sm:grid-cols-3">
              <div><dt className="text-xs uppercase text-background/50">Projets livrés</dt><dd className="mt-3 font-display text-5xl">42</dd></div>
              <div><dt className="text-xs uppercase text-background/50">Années d’expérience</dt><dd className="mt-3 font-display text-5xl">14</dd></div>
              <div><dt className="text-xs uppercase text-background/50">Disciplines réunies</dt><dd className="mt-3 font-display text-5xl">03</dd></div>
            </dl>
          </div>
        </section>

        <section id="contact" className="viewport-panel flex min-h-[100svh] items-center bg-primary py-24 text-primary-foreground md:py-28">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
            <p className="text-xs uppercase text-primary-foreground/70">Votre projet commence ici</p>
            <div className="mt-8 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
              <h2 className="max-w-5xl font-display text-5xl leading-none md:text-7xl lg:text-8xl">Imaginons un lieu qui vous ressemble.</h2>
              <Button asChild variant="secondary" size="lg" className="shrink-0">
                <a href="mailto:bonjour@archstudio.cd">Écrivez-nous <ArrowUpRight /></a>
              </Button>
            </div>
            <footer className="mt-24 flex flex-col gap-4 border-t border-primary-foreground/25 pt-8 text-xs text-primary-foreground/70 md:flex-row md:justify-between">
              <p>ARCH STUDIO · Kinshasa</p>
              <p>Architecture · Intérieurs · Territoires</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;