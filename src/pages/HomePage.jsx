import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mountain, Truck, Snowflake, Bike, KeyRound, Phone, Mail, Star, ArrowRight, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import LeadForm from '@/components/LeadForm';
const HERO = 'https://images.hostinger.com/11af544f-b37f-49f3-b68e-424bec6fc950.png';
const TEAM = 'https://horizons-cdn.hostinger.com/65a08d3f-ef05-4abc-8929-6505e6e98d67/e0d548f1356c623c3140818400beb359.png';
const RV_HOME = 'https://images.hostinger.com/bfa00926-4e22-4ed9-b3b8-1c31a7bc2ce6.png';
const SLED = 'https://images.hostinger.com/bc52257a-262f-4d3b-9ae0-54b0413a4932.png';
const FREEWAY = 'https://images.hostinger.com/923564aa-d3f7-494d-be1d-5e5e23557681.png';
const ticker = ['Southern California to Northern Utah relocation', 'Wasatch Front recreational properties', 'Northern Utah real estate', 'RV garages & toy-hauler parking', 'Dual-licensed CA + UT agents'];
const nicheItems = [{
  icon: Truck,
  title: 'RV garages & toy-hauler parking',
  body: 'We track Wasatch Front listings with 14-foot doors, 40-foot depth, drive-through bays, and HOA rules that actually allow the trailer to stay home.'
}, {
  icon: Bike,
  title: 'Dirt bike trail access',
  body: 'From Five Mile Pass to the Nebo Loop, we know which subdivisions in Eagle Mountain, Erda, and Heber put you on dirt without loading up first.'
}, {
  icon: Snowflake,
  title: 'Snowmobile & winter staging',
  body: 'Homes near Daniels Summit, Strawberry, and Mirror Lake trailheads — plus heated shops and plowed private lanes for December-to-March riding.'
}, {
  icon: Mountain,
  title: 'Acreage & horse property',
  body: 'Utah County, Wasatch County, Tooele Valley, and Cache Valley parcels with water rights, outbuildings, and room for the whole fleet.'
}];
const testimonials = [{
  rating: 5,
  date: '10/17/2017',
  reviewer: 'Mark Teidel',
  title: 'Bought a Condo home in 2014 in Huntington Beach, CA.',
  quote: 'Mark assisted my wife and I during our first home buying process back in 2014. Not only did he make sure we were getting into a place that was right for us he made the experience an easy one. There were many questions that came up along the way and Mark\'s knowledge made it a breeze.',
  skills: [{
    label: 'Local knowledge',
    stars: 5
  }, {
    label: 'Process expertise',
    stars: 5
  }, {
    label: 'Responsiveness',
    stars: 5
  }, {
    label: 'Negotiation skills',
    stars: 5
  }]
}, {
  rating: 5,
  date: '10/16/2017',
  reviewer: 'myblue65',
  title: 'Sold a Single Family home in 2017 in Valencia, Santa Clarita, CA.',
  quote: 'We had a great experience working with Mark. We had a challenging sale for him to handle and it went very smoothly. He kept us informed during the entire process and was always available to answer questions. In our opinion, he went above and beyond to make sure we were taken care of.',
  skills: [{
    label: 'Local knowledge',
    stars: 4
  }, {
    label: 'Process expertise',
    stars: 4
  }, {
    label: 'Responsiveness',
    stars: 4
  }, {
    label: 'Negotiation skills',
    stars: 4
  }]
}, {
  rating: 5,
  date: '3/2/2022',
  reviewer: 'zuser20210528103554267',
  title: 'Bought a home in 2022 in Ogden, UT.',
  quote: 'Calvo was fantastic to work with. Flexible with our schedule and availability and kept us well informed on updates. Went the extra mile to ensure that our requirements were met and explained options to us that we did not know were available during negotiations and initial offers.',
  skills: [{
    label: 'Local knowledge',
    stars: 5
  }, {
    label: 'Process expertise',
    stars: 5
  }, {
    label: 'Responsiveness',
    stars: 5
  }, {
    label: 'Negotiation skills',
    stars: 5
  }]
}, {
  rating: 5,
  date: '1/11/2022',
  reviewer: 'Shelley Hall',
  title: 'Sold a Single Family home in 2021 in North Long Beach, Long Beach, CA.',
  quote: 'Mark was referred to me through a friend. I was selling a house and this was one of the easiest and most pleasant experiences I have had. He was in contact with me when he needed to be and was responsive when I had a question. I would recommend him to anyone looking to buy or sell.',
  skills: [{
    label: 'Local knowledge',
    stars: 5
  }, {
    label: 'Process expertise',
    stars: 5
  }, {
    label: 'Responsiveness',
    stars: 5
  }, {
    label: 'Negotiation skills',
    stars: 5
  }]
}, {
  rating: 5,
  date: '11/23/2020',
  reviewer: 'Helen Becerra',
  title: 'Sold a Single Family home in 2020 in Artesia Pilar, Santa Ana, CA.',
  quote: 'Very happy client! My husband and I needed to sell our house quickly due to an unexpected job relocation and contacted Mark to get it listed. We had no experience with being sellers but Mark went above and beyond to explain everything to us, help us make informed choices.',
  skills: [{
    label: 'Local knowledge',
    stars: 5
  }, {
    label: 'Process expertise',
    stars: 5
  }, {
    label: 'Responsiveness',
    stars: 5
  }, {
    label: 'Negotiation skills',
    stars: 5
  }]
}, {
  rating: 5,
  date: '10/19/2017',
  reviewer: 'gibdallas',
  title: 'Sold a Single Family home in 2016 in Quartz Hill, CA.',
  quote: 'Mark and Lauren helped me to sell my home in Quartz Hill. It was a cold market and my house was a cosmetic fixer-upper. They were very supportive during this challenging process and found me a fair offer. They were knowledgeable, gave great suggestions and assisted me throughout.',
  skills: [{
    label: 'Local knowledge',
    stars: 5
  }, {
    label: 'Process expertise',
    stars: 5
  }, {
    label: 'Responsiveness',
    stars: 5
  }, {
    label: 'Negotiation skills',
    stars: 5
  }]
}];
const steps = [{
  n: '01',
  t: 'Relocation strategy call',
  d: 'Equity, timeline, riding priorities, commute reality, and target counties on one 45-minute call.'
}, {
  n: '02',
  t: 'Sell in California',
  d: 'Prep, pricing, and marketing on your CA home so the proceeds land when your Utah offer needs them.'
}, {
  n: '03',
  t: 'Utah buying tours',
  d: 'Two-day itineraries along the Wasatch Front built around properties that fit your gear, not just your square footage.'
}, {
  n: '04',
  t: 'Dual-state closing',
  d: 'One team coordinating both escrow tables, moving windows, and possession dates.'
}];
const HomePage = () => {
  return <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Calvo Real Estate | Southern California to Northern Utah Relocation Experts</title>
                <meta name="description" content="Mark and Lauren Calvo are dual-licensed California and Utah real estate agents specializing in Southern California to Northern Utah relocation and Wasatch Front recreational properties with RV garages and trail access." />
                <link rel="canonical" href="https://calvorelocation.com/" />
            </Helmet>
            <Seo title="Calvo Real Estate | SoCal to Northern Utah Relocation Experts" description="Dual-licensed CA and UT agents specializing in Southern California to Northern Utah relocation and Wasatch Front recreational properties." image={HERO} siteName="Mark & Lauren Calvo Real Estate" />

            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-30">
                <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-5 lg:px-10">
                    <a href="#top" className="flex items-center gap-3 text-white">
                        <Mountain className="h-7 w-7" strokeWidth={1.5} />
                        <span className="font-display text-lg font-semibold uppercase leading-none tracking-widest">
                            Calvo
                            <span className="block text-[0.6rem] font-medium tracking-[0.35em] text-white/70">CA + UT Real Estate</span>
                        </span>
                    </a>
                    <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider text-white/85 md:flex">
                        <a href="#about" className="transition-colors hover:text-white">About</a>
                        <a href="#niche" className="transition-colors hover:text-white">Recreational Homes</a>
                        <a href="#clients" className="transition-colors hover:text-white">Client Success</a>
                    </nav>
                    <a href="#contact" className="inline-flex min-h-[44px] items-center rounded-sm bg-accent px-5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform duration-200 ease-out active:scale-[0.98]">
                        Relocation Guide
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section id="top" className="relative flex min-h-[100dvh] items-end overflow-hidden">
                <img src={HERO} alt="Wasatch Front canyon in Northern Utah at golden hour" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_28%_12%)] via-[hsl(215_28%_15%/0.72)] to-[hsl(215_28%_15%/0.35)]" />
                <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-16 pt-32 lg:px-10 lg:pb-24">
                    <motion.p initial={{
          opacity: 0,
          y: 16
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          ease: 'easeOut'
        }} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                        <span className="h-px w-10 bg-accent" /> Dual-licensed in California & Utah
                    </motion.p>
                    <motion.h1 initial={{
          opacity: 0,
          y: 26
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.08,
          ease: 'easeOut'
        }} className="font-display mt-5 max-w-5xl text-[2.75rem] font-bold uppercase leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
                        Trade the commute for the canyons:
                        <span className="mt-2 block text-accent">SoCal to Northern Utah relocation experts.</span>
                    </motion.h1>
                    <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.18,
          ease: 'easeOut'
        }} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                        Mark and Lauren Calvo sell your California home and buy your Wasatch Front property — one husband-and-wife
                        team, two active licenses, zero handoffs to a stranger in another state.
                    </motion.p>
                    <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.26,
          ease: 'easeOut'
        }} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a href="#contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-accent px-8 text-base font-bold uppercase tracking-wider text-accent-foreground transition-transform duration-200 ease-out hover:brightness-95 active:scale-[0.98]">
                            Get Your Relocation Guide <ArrowRight className="h-5 w-5" />
                        </a>
                        <a href="#niche" className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/40 px-8 text-base font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10">Book your Free CONSULTATION</a>
                    </motion.div>
                </div>
            </section>

            {/* Keyword ticker */}
            <div className="border-y border-border bg-[hsl(215_28%_17%)] py-3">
                <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-5">
                    {[...ticker, ...ticker].map((t, i) => <span key={i} className="font-display flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                            {t} <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        </span>)}
                </div>
            </div>

            {/* About */}
            <section id="about" className="mx-auto max-w-[72rem] px-5 py-20 lg:px-8 lg:py-28">
                <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
                    <Reveal y={28}>
                        <div className="relative">
                            <img src={TEAM} alt="Mark and Lauren Calvo, husband and wife real estate team, outside a mountain home in Utah" className="w-full rounded-sm object-cover shadow-[0_24px_60px_-24px_hsl(215_28%_17%/0.45)]" />
                            <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-primary px-6 py-5 text-primary-foreground sm:block">
                                <p className="font-display text-3xl font-bold leading-none">
                                    <CountUp value={14} suffix="+" />
                                </p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/75">Years in real estate</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} y={28}>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">About Mark & Lauren</p>
                        <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[1.02] lg:text-5xl">
                            One team. Two licenses. Both sides of your move.
                        </h2>
                        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                            <p>We are Mark and Lauren Calvo — a husband-and-wife team licensed in <strong className="text-foreground">both California and Utah</strong>. Mark grew up riding and snowboarding in SoCal; Lauren fell in love with the Wasatch outdoor lifestyle. We made the same move our clients are making, and we built our practice around it.</p>
                            <p>
                                Most cross-state moves break in the middle: a California listing agent who cannot advise on Utah value, and a
                                Utah buyer's agent with no visibility into whether your CA sale will fund the purchase. We handle both files
                                ourselves, so your equity, timelines, and possession dates line up.
                            </p>
                        </div>
                        <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-border pt-7 sm:grid-cols-3">
                            {[{
              k: 'Relocation families served',
              v: 95,
              s: '+'
            }, {
              k: 'Average CA days on market',
              v: 19,
              s: ''
            }, {
              k: 'Utah counties covered',
              v: 6,
              s: ''
            }].map(s => <div key={s.k}>
                                    <dd className="font-display text-4xl font-bold text-primary">
                                        <CountUp value={s.v} suffix={s.s} />
                                    </dd>
                                    <dt className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.k}</dt>
                                </div>)}
                        </dl>
                    </Reveal>
                </div>
            </section>

            {/* Niche */}
            <section id="niche" className="relative overflow-hidden bg-[hsl(215_28%_17%)] py-20 text-white lg:py-28">
                <div className="topo-lines pointer-events-none absolute inset-0 opacity-40" />
                <div className="relative mx-auto max-w-[90rem] px-5 lg:px-10">
                    <Reveal y={24}>
                        <div className="max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">The niche</p>
                            <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[1.02] lg:text-[3.5rem]">
                                Wasatch Front recreational properties
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-white/75">
                                Northern Utah real estate is not just square footage and school ratings. If your weekends involve a
                                toy hauler, a trailer full of sleds, or a garage that needs a 14-foot door, the search looks different.
                                This is the search we specialize in.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
                        <div className="space-y-6">
                            {nicheItems.map((item, i) => <Reveal key={item.title} delay={i * 0.06} y={20}>
                                    <div className="flex gap-5 border-t border-white/15 pt-6">
                                        <item.icon className="mt-1 h-7 w-7 shrink-0 text-accent" strokeWidth={1.5} />
                                        <div>
                                            <h3 className="font-display text-2xl font-semibold uppercase">{item.title}</h3>
                                            <p className="mt-2 leading-relaxed text-white/70">{item.body}</p>
                                        </div>
                                    </div>
                                </Reveal>)}
                        </div>
                        <Reveal delay={0.12} y={24}>
                            <div className="grid gap-4">
                                <img src={RV_HOME} alt="Northern Utah home with an oversized RV garage and toy hauler parked in the driveway" className="h-64 w-full rounded-sm object-cover lg:h-80" />
                                <div className="grid grid-cols-2 gap-4">
                                    <img src={SLED} alt="Snowmobile at a snowy Wasatch mountain trailhead" className="h-40 w-full rounded-sm object-cover lg:h-48" />
                                    <img src={FREEWAY} alt="Southern California freeway traffic at rush hour" className="h-40 w-full rounded-sm object-cover grayscale lg:h-48" />
                                </div>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Trade the 5 and the 15 at 5pm for a trailhead 20 minutes from the garage door.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="mx-auto max-w-[72rem] px-5 py-20 lg:px-8 lg:py-24">
                <Reveal y={22}>
                    <h2 className="font-display text-4xl font-bold uppercase leading-[1.02] lg:text-5xl">How the dual-state move works</h2>
                </Reveal>
                <div className="mt-12 divide-y divide-border border-t border-border">
                    {steps.map((s, i) => <Reveal key={s.n} delay={i * 0.05} y={16}>
                            <div className="grid gap-3 py-7 sm:grid-cols-[5rem_1fr_1.4fr] sm:items-baseline sm:gap-8">
                                <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
                                <h3 className="font-display text-2xl font-semibold uppercase">{s.t}</h3>
                                <p className="leading-relaxed text-muted-foreground">{s.d}</p>
                            </div>
                        </Reveal>)}
                </div>
            </section>

            {/* Client success */}
            <section id="clients" className="bg-card py-20 lg:py-28">
                <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
                    <Reveal y={22}>
                        <div className="border-b border-border pb-10">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Client success</p>
                            <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[1.02] lg:text-5xl">
                                A track record built on relocations, not one-off deals
                            </h2>
                        </div>
                    </Reveal>

                    {/* Zillow review preview */}
                    <Reveal y={20} delay={0.05}>
                        <div className="mt-10 overflow-hidden rounded-sm border border-[#006aff]/25 bg-white shadow-sm">
                            {/* Zillow header bar */}
                            <div className="flex flex-col gap-4 border-b border-[#006aff]/15 bg-[#f9fbff] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#006aff]">
                                        <span className="font-display text-lg font-bold text-white">Z</span>
                                    </div>
                                    <div>
                                        <p className="font-display text-lg font-bold uppercase text-foreground">Mark &amp; Lauren Calvo — Zillow</p>
                                        <div className="mt-1 flex flex-wrap items-center gap-2">
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#006aff] text-[#006aff]" />)}
                                            </div>
                                            <span className="text-sm font-semibold text-foreground">5.0 / 5.0</span>
                                            <span className="text-sm text-muted-foreground">· Verified Zillow reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="https://www.zillow.com/profile/CalvoRE" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-sm border border-[#006aff] px-6 text-sm font-bold uppercase tracking-wider text-[#006aff] transition-colors hover:bg-[#006aff] hover:text-white active:scale-[0.98]">
                                    <Star className="h-4 w-4" /> View all reviews on Zillow
                                </a>
                            </div>
                            {/* Review cards */}
                            <div className="divide-y divide-border">
                                {testimonials.map(t => {
                const StarRow = ({
                  count,
                  total = 5
                }) => <span className="flex items-center gap-0.5">
                                            {[...Array(total)].map((_, i) => <Star key={i} className={`h-3.5 w-3.5 ${i < count ? 'fill-[#006aff] text-[#006aff]' : 'fill-none text-[#ccc]'}`} />)}
                                        </span>;
                return <div key={t.reviewer} className="p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-2">
                                                    <StarRow count={t.rating} />
                                                    <span className="text-sm font-semibold text-foreground">{t.rating}.0</span>
                                                </div>
                                            </div>
                                            <p className="mt-1 text-xs text-muted-foreground">{t.reviewer}</p>
                                            <p className="mt-2 text-sm font-bold text-foreground">{t.title}</p>
                                            <p className="mt-2 text-[0.88rem] leading-relaxed text-foreground/80">{t.quote}</p>
                                            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-1.5">
                                                {t.skills.map(s => <div key={s.label} className="flex items-center gap-1.5">
                                                        <StarRow count={s.stars} />
                                                        <span className="text-xs text-muted-foreground">{s.label}</span>
                                                    </div>)}
                                            </div>
                                        </div>;
              })}
                            </div>
                            <div className="border-t border-border bg-[#f9fbff] px-6 py-3 text-center">
                                <p className="text-xs text-muted-foreground">
                                    Reviews from verified Zillow clients. &nbsp;
                                    <a href="https://www.zillow.com/profile/CalvoRE" target="_blank" rel="noopener noreferrer" className="text-[#006aff] underline-offset-2 hover:underline">
                                        See all reviews on Zillow.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mx-auto max-w-[72rem] px-5 py-20 lg:px-8 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <Reveal y={24}>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Get your relocation guide</p>
                        <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[1.02] lg:text-5xl">
                            Tell us where you are and when you want to be in Utah
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                            You will get our Southern California to Northern Utah relocation guide: equity timing, Wasatch Front
                            community comparisons, RV-garage inventory notes, and the closing calendar we use for dual-state moves.
                        </p>
                        <ul className="mt-8 space-y-4 text-base">
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary" /> <span>714-588-5898 — call or text</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary" /> <span>markcalvo1@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <KeyRound className="h-5 w-5 text-primary" /> <span>Serving Utah, Wasatch, Salt Lake, Tooele, Davis & Cache counties</span>
                            </li>
                        </ul>
                    </Reveal>
                    <Reveal delay={0.1} y={24}>
                        <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
                            <LeadForm />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[hsl(215_28%_17%)] py-14 text-white/70">
                <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
                    <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-3">
                        <div>
                            <div className="flex items-center gap-3 text-white">
                                <Mountain className="h-6 w-6" strokeWidth={1.5} />
                                <span className="font-display text-lg font-semibold uppercase tracking-widest">Mark & Lauren Calvo</span>
                            </div>
                            <p className="mt-4 max-w-sm text-sm leading-relaxed">
                                Dual-licensed California and Utah real estate agents specializing in Southern California to Northern
                                Utah relocation and Wasatch Front recreational properties.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white">Explore</h3>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><a href="#about" className="transition-colors hover:text-white">About the team</a></li>
                                <li><a href="#niche" className="transition-colors hover:text-white">Recreational properties</a></li>
                                <li><a href="#clients" className="transition-colors hover:text-white">Client success</a></li>
                                <li><a href="#contact" className="transition-colors hover:text-white">Relocation guide</a></li>
                                <li>
                                    <a href="https://www.zillow.com/profile/CalvoRE" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                                        Zillow reviews
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white">Licensing & compliance</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                                <li>Sponsoring referral brokerage: [Brokerage Name Placeholder]</li>
                                <li>California DRE License #: [DRE #0000000 — Mark Calvo] / [DRE #0000000 — Lauren Calvo]</li>
                                <li>Utah Division of Real Estate License #: [UT #0000000-SA00 — Mark Calvo] / [UT #0000000-SA00 — Lauren Calvo]</li>
                                <li>Utah brokerage of record: [Utah Brokerage Placeholder]</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
                        <p>&copy; {new Date().getFullYear()} Mark & Lauren Calvo Real Estate. All rights reserved.</p>
                        <p>Equal Housing Opportunity. Information deemed reliable but not guaranteed.</p>
                    </div>
                </div>
            </footer>
        </div>;
};
export default HomePage;