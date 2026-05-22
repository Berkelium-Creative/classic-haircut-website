"use client";
import { Barlow_Condensed, Barlow, Caveat } from "next/font/google";
import content from "../data/content.json";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-display" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const script = Caveat({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-script" });

const CRIMSON = "#B91C1C";
const CHARCOAL = "#18181B";
const ASH = "#52525B";
const CREAM = "#FAF4ED";
const WHITE = "#FFFFFF";
const MUTED = "#71717A";

const HERO_PHOTO = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1800&q=80&auto=format&fit=crop";
const SHOP_PHOTO = "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${script.variable} min-h-screen`} style={{ backgroundColor: CREAM, color: CHARCOAL, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-2 { animation-delay: 0.24s; }
        .display-text { font-family: var(--font-display); letter-spacing: -0.01em; }
        .script-text { font-family: var(--font-script); }
        .stripe-row { background: repeating-linear-gradient(90deg, ${CRIMSON} 0 12px, ${WHITE} 12px 24px, ${CHARCOAL} 24px 36px, ${WHITE} 36px 48px); }
      `}</style>

      <header className="border-b-4" style={{ borderColor: CHARCOAL, backgroundColor: CREAM }}>
        <div className="h-2 stripe-row" />
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="display-text text-4xl font-black uppercase tracking-tight" style={{ color: CRIMSON }}>Classic Haircut</div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ color: CHARCOAL }}>· EST COLORADO ST</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.3em] font-bold">
            <a href="#about" style={{ color: CHARCOAL }}>About</a>
            <a href="#services" style={{ color: CHARCOAL }}>Services</a>
            <a href="#reviews" style={{ color: CHARCOAL }}>Reviews</a>
            <a href="#visit" style={{ color: CHARCOAL }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text uppercase font-black px-6 py-3 text-sm tracking-widest" style={{ backgroundColor: CRIMSON, color: WHITE }}>Reserve →</a>
        </nav>
      </header>

      <section className="relative py-24 border-b-4" style={{ borderColor: CHARCOAL }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-[0.35em] font-bold mb-6" style={{ backgroundColor: CHARCOAL, color: CREAM }}>
              {c.hero.eyebrow}
            </div>
            <h1 className="display-text text-7xl md:text-[11rem] leading-[0.85] uppercase font-black mb-8 tracking-tight" style={{ color: CHARCOAL }}>
              {c.hero.heading}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: ASH }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text uppercase font-black px-10 py-4 text-xl tracking-widest inline-flex items-center gap-3" style={{ backgroundColor: CRIMSON, color: WHITE }}>
                {c.hero.ctaText} <span>→</span>
              </a>
              <div className="text-sm">
                <div className="display-text text-2xl font-black uppercase leading-none" style={{ color: CRIMSON }}>★ 4.1 · 8 REVIEWS</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-1" style={{ color: ASH }}>1023 E Colorado St</div>
              </div>
            </div>
            <div className="script-text text-3xl mt-8" style={{ color: CRIMSON }}>walk-ins welcome.</div>
          </div>
          <div className="md:col-span-5 fade-up delay-2">
            <div className="overflow-hidden border-4" style={{ borderColor: CHARCOAL, aspectRatio: "4/5" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(15%) contrast(105%)" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b-4" style={{ borderColor: CHARCOAL, backgroundColor: CHARCOAL }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.4em] mb-3 font-black" style={{ color: CRIMSON }}>· {c.about.label}</div>
            <h2 className="display-text uppercase font-black text-6xl md:text-7xl leading-[0.9]" style={{ color: CREAM }}>{c.about.heading}</h2>
            <div className="script-text text-3xl mt-6" style={{ color: CRIMSON }}>open six days a week.</div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: CREAM, opacity: 0.9 }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 border-b-4" style={{ borderColor: CHARCOAL, backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.4em] mb-3 font-black" style={{ color: CRIMSON }}>· The menu</div>
            <h2 className="display-text uppercase font-black text-7xl md:text-9xl leading-none" style={{ color: CHARCOAL }}>What we do.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: CHARCOAL }}>
            {c.services.map((s: any, i: number) => (
              <article key={i} className="p-7" style={{ backgroundColor: CREAM }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="display-text text-6xl font-black leading-none" style={{ color: CHARCOAL }}>0{i + 1}</div>
                  <div className="display-text text-3xl font-black uppercase" style={{ color: CRIMSON }}>{s.price}</div>
                </div>
                <h3 className="display-text text-3xl uppercase mb-2 font-black leading-tight tracking-tight" style={{ color: CHARCOAL }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b-4" style={{ borderColor: CHARCOAL, backgroundColor: CRIMSON }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.4em] mb-3 font-black" style={{ color: CREAM, opacity: 0.85 }}>· The chair</div>
            <h2 className="display-text uppercase font-black text-7xl md:text-8xl leading-none" style={{ color: CREAM }}>What they say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-7" style={{ backgroundColor: CREAM, border: `4px solid ${CHARCOAL}` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: CRIMSON, fontSize: 22 }}>★</span>)}
                </div>
                <blockquote className="text-base leading-relaxed mb-6" style={{ color: CHARCOAL }}>"{r.text}"</blockquote>
                <figcaption>
                  <div className="display-text uppercase text-2xl font-black leading-tight" style={{ color: CHARCOAL }}>{r.name}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: CRIMSON }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] mb-4 font-black" style={{ color: CRIMSON }}>· Find the shop</div>
            <h2 className="display-text uppercase font-black text-7xl md:text-[10rem] leading-[0.85] mb-3" style={{ color: CHARCOAL }}>Find us.</h2>
            <div className="script-text text-3xl mb-8" style={{ color: CRIMSON }}>on east colorado street.</div>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: ASH }}>On East Colorado Street between Glendale Ave and Verdugo Road. Walk in or call ahead — we hold the chair either way.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] mb-1 font-black" style={{ color: ASH }}>Address</dt>
                <dd className="text-xl font-bold" style={{ color: CHARCOAL }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] mb-1 font-black" style={{ color: ASH }}>Call</dt>
                <dd className="display-text text-5xl font-black"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: CRIMSON }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] mb-2 font-black" style={{ color: ASH }}>Hours</dt>
                <dd>
                  <table className="text-sm" style={{ color: CHARCOAL }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-bold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden border-4" style={{ borderColor: CHARCOAL, minHeight: 420 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: CHARCOAL, color: CREAM }}>
        <div className="display-text uppercase text-5xl font-black mb-2">Classic Haircut</div>
        <div className="script-text text-2xl" style={{ color: CRIMSON }}>colorado street · glendale</div>
        <div className="text-xs uppercase tracking-[0.4em] mt-4 opacity-60 font-bold">© {new Date().getFullYear()} Classic Haircut · Glendale, CA</div>
      </footer>
    </main>
  );
}
