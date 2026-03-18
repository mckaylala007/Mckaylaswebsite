import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, BookOpen, Twitch, Mail, Sparkles, ChevronRight, Download, Youtube, HeartHandshake, Star } from 'lucide-react';

export default function MckaylaMaroneyWebsite() {
  const nav = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Bible Study', href: '#bible-study' },
    { label: 'Books', href: '#books' },
    { label: 'Shop', href: '#shop' },
    { label: 'Twitch', href: '#twitch' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'Contact', href: '#contact' },
  ];

  const books = [
    {
      title: 'McKayla’s First Book',
      status: 'Pre-Order Coming Soon',
      description:
        'A book centered on growth, healing, faith, resilience, and everything McKayla has learned through pressure, rebuilding, and starting a new chapter.',
      cta: 'Join the Pre-Order List',
    },
    {
      title: 'Book Club & Early Access',
      status: 'Founding Readers',
      description:
        'A low-key inner circle for early reads, behind-the-scenes updates, and special access for the community supporting McKayla from the beginning.',
      cta: 'Join the Book Club',
    },
  ];

  const shopCollections = [
    {
      title: 'Merch',
      description: 'One unified merch experience for the whole brand — creator pieces, community favorites, and future drops all in one home.',
      tag: 'Official Merch',
      href: 'https://shop.mckaylamaroney.com',
    },
  ];

  const highlights = [
    'Olympic gold medalist',
    'Olympic vault silver medalist',
    'World vault champion',
    'New weekly Bible study downloads',
  ];

  const youtubeVideos = [
    {
      title: 'Most Recent Upload',
      embed: 'https://www.youtube.com/embed/KuwABqKtkKU',
      description: 'Based on the current channel search results, this is the newest featured Fortnite stream upload from McKayla’s channel.',
    },
    {
      title: 'Most Popular Featured Video',
      embed: 'https://www.youtube.com/embed/zovDXs-fEtY',
      description: 'A faith-centered video from McKayla’s channel focused on trusting God more and calming worry.',
    },
  ];

  const imagePrimary = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/McKayla_Maroney_%28cropped%29.jpg/500px-McKayla_Maroney_%28cropped%29.jpg';
  const imageSecondary = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/SecretUSClassic_Mckayla_Maroney.JPG/500px-SecretUSClassic_Mckayla_Maroney.JPG';
  const imageAccent = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Barack_Obama_with_artistic_gymnastic_McKayla_Maroney_2.jpg/640px-Barack_Obama_with_artistic_gymnastic_McKayla_Maroney_2.jpg';

  const card =
    'rounded-[28px] border border-white/10 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]';

  return (
    <div className="min-h-screen bg-[#f7f1ed] text-[#241c1b]">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-[#c9b8b0]/40 bg-[#f7f1ed]/80 backdrop-blur-xl">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#241c1b] text-sm font-semibold text-white">
              MM
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-[0.18em] text-[#241c1b] uppercase">McKayla Maroney</div>
              <div className="text-xs text-[#6f5d58]">Official author, merch, and media hub</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-[#6f5d58] transition hover:text-[#241c1b]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.twitch.tv/mckaylala007"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[#c9b8b0] bg-[#efe2db] px-4 py-2 text-sm font-medium text-[#241c1b] transition hover:bg-[#ead8cf] md:inline-flex"
            >
              Twitch
            </a>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full border border-[#c9b8b0] bg-[#e8d8d0] px-4 py-2 text-sm font-medium text-[#241c1b] transition hover:bg-[#e2d0c7]"
            >
              Shop
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </header>
      </div>

      <section id="home" className="relative overflow-hidden px-6 pt-28 lg:px-8 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,183,169,0.4),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.8),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#241c1b]/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6f5d58]">
              <Sparkles className="h-4 w-4" />
              Athlete / creator hybrid
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Hey guys — this is my official corner of the internet. A place where I can share my story, the things I'm building, and everything new with you.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f5d58] sm:text-lg">
              I wanted one place where you could find everything I'm working on and so much for my community; books I'm writing, merch I'm creating, my Twitch streams, and the next chapter of my life. If you've supported me over the years, this is where I'll share what comes next.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#books"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9b8b0] bg-[#e8d8d0] px-6 py-3 text-sm font-medium text-[#241c1b] transition hover:bg-[#e2d0c7]"
              >
                <BookOpen className="h-4 w-4" />
                Explore Books
              </a>
              <a
                href="#bible-study"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9b8b0] bg-[#efe2db] px-6 py-3 text-sm font-medium text-[#241c1b] transition hover:bg-[#ead8cf]"
              >
                <Download className="h-4 w-4" />
                Weekly Bible Study
              </a>
              <a
                href="https://www.twitch.tv/mckaylala007"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9b8b0] bg-[#efe2db] px-6 py-3 text-sm font-medium text-[#241c1b] transition hover:bg-[#ead8cf]"
              >
                <Twitch className="h-4 w-4" />
                Visit Twitch
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item} className={`${card} p-4`}>
                  <div className="text-sm font-medium text-[#241c1b]">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-5 lg:grid-cols-[0.6fr_0.4fr]"
          >
            <div className={`${card} overflow-hidden p-3`}>
              <div className="relative overflow-hidden rounded-[24px]">
                <img src={imagePrimary} alt="McKayla Maroney portrait" className="h-[520px] w-full object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/70">Official Brand Direction</div>
                  <div className="mt-2 text-3xl font-semibold leading-tight">Author. Creator. Athlete. Voice.</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className={`${card} overflow-hidden p-3`}>
                <img src={imageSecondary} alt="McKayla Maroney gymnastics image" className="h-[250px] w-full rounded-[24px] object-cover object-top" />
              </div>
              <div className={`${card} p-6`}>
                <div className="text-xs uppercase tracking-[0.22em] text-[#8b726a]">From McKayla</div>
                <div className="mt-3 text-2xl font-semibold leading-tight">The next chapter — books, faith, and building something meaningful together.</div>
                <p className="mt-3 text-sm leading-7 text-[#6f5d58]">
                  This homepage is built to be the central destination for everything ahead: books, merch, YouTube, Twitch, weekly Bible studies, and the community growing with McKayla from the start.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-24 px-6 py-16 lg:px-8 lg:py-24">
        <section id="about" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className={`${card} p-8 lg:p-10`}>
            <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">About McKayla</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">From a little girl in California to an Olympic icon — and now a creator building something deeper.</h2>
            <p className="mt-5 text-base leading-8 text-[#6f5d58]">
              McKayla Maroney grew up in California with huge energy, early talent, and the kind of drive that made people stop and watch. The world first met her as the powerhouse vaulter whose precision, height, and confidence helped lead the Fierce Five to Olympic gold in London, along with an individual silver on vault that became one of the most talked-about moments of those Games. But her story never ended there.
            </p>
            <p className="mt-5 text-base leading-8 text-[#6f5d58]">
              Over time, McKayla became known for more than gymnastics. She spoke up with honesty and courage, became part of a bigger conversation about protecting women and telling the truth, and showed people what it looks like to keep evolving after the world thinks it already knows you. This next chapter brings all of that together — writing, life coaching, faith, streaming, and building a space where her community can grow with her in a more personal way.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] bg-[#f2e7e2] p-4">
                <div className="text-sm font-semibold">Olympic Legacy</div>
                <div className="mt-1 text-sm text-[#6f5d58]">Gold medal team member, vault silver medalist, and one of the most memorable gymnasts of her era.</div>
              </div>
              <div className="rounded-[22px] bg-[#f2e7e2] p-4">
                <div className="text-sm font-semibold">Creator Era</div>
                <div className="mt-1 text-sm text-[#6f5d58]">Books, Twitch, YouTube, merch, community, and a brand that feels direct, thoughtful, and real.</div>
              </div>
            </div>
          </div>

          <div className={`${card} overflow-hidden`}>
            <div className="grid h-full lg:grid-cols-[1.15fr_0.85fr]">
              <img src={imageAccent} alt="McKayla Maroney with President Obama" className="h-full min-h-[320px] w-full object-cover object-top" />
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Cultural Moment</div>
                <p className="mt-4 text-base leading-8 text-[#6f5d58]">
                  The moment with Obama captures exactly why McKayla still resonates online: iconic, funny, self-aware, and instantly recognizable — but also part of a much bigger story about resilience, reinvention, and using your voice.
                </p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#241c1b]">
                  Join the community
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="bible-study" className={`${card} overflow-hidden`}>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#241c1b] p-8 text-white lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75">
                <HeartHandshake className="h-4 w-4" />
                Weekly Bible Study
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">Between streams, let’s stay grounded together.</h2>
              <p className="mt-5 max-w-xl text-sm leading-8 text-white/75">
                This section gives your community a new Bible study download each week — something they can take with them between Twitch streams and come back to throughout the week.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#c9b8b0] bg-[#efe2db] px-5 py-3 text-sm font-medium text-[#241c1b]">
                  <Download className="h-4 w-4" />
                  Unlock This Week’s Study
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white">
                  Join for Weekly Drops
                </a>
              </div>
            </div>
            <div className="p-8 lg:p-10">
              <div className="rounded-[24px] border border-[#241c1b]/10 bg-[#f7f1ed] px-6 py-5 text-sm text-[#6f5d58]">
                <span className="font-semibold text-[#241c1b]">This week:</span> Faith for the week ahead • scripture focus • journal prompts • prayer for the week • reflection before next stream
              </div>
            </div>
          </div>
        </section>

        <section id="books">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Books</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">A polished author home that grows with every release</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#6f5d58]">
              Start with pre-orders, early-reader interest, and book-club signup now. Later, this section can support sample chapters, launch bonuses, appearances, and the full biography rollout.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {books.map((book) => (
              <motion.div
                key={book.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`${card} p-8`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{book.title}</h3>
                  <span className="rounded-full bg-[#f2e7e2] px-3 py-1 text-xs font-medium text-[#6f5d58]">{book.status}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#6f5d58]">{book.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-full border border-[#c9b8b0] bg-[#e8d8d0] px-5 py-3 text-sm font-medium text-[#241c1b]">{book.cta}</button>
                  <button className="rounded-full border border-[#c9b8b0] bg-[#efe2db] px-5 py-3 text-sm font-medium text-[#241c1b]">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="shop">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Shop</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">One merch home that can grow with the community</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#6f5d58]">
              Right now this is built for the first core Twitch community. Later, it can scale into a full Shopify experience when the bigger rollout begins across Instagram, X, and beyond.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            {shopCollections.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`${card} overflow-hidden`}
              >
                <div className="h-2 bg-gradient-to-r from-[#d4b7a9] via-[#cba79a] to-[#f2ddd4]" />
                <div className="p-8">
                  <div className="inline-flex rounded-full bg-[#f2e7e2] px-3 py-1 text-xs font-medium text-[#6f5d58]">{item.tag}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6f5d58]">{item.description}</p>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <a href={item.href} className="inline-flex items-center gap-2 rounded-full border border-[#c9b8b0] bg-[#e8d8d0] px-5 py-3 text-sm font-medium text-[#241c1b] transition hover:bg-[#e2d0c7]">
                      <ShoppingBag className="h-4 w-4" />
                      Visit the Shop
                    </a>
                    <span className="text-sm text-[#8b726a]">Shopify ready</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="grid gap-6">
              <div className={`${card} p-8`}>
                <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Shopify Product Integration</div>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Featured products directly on the homepage</h3>
                <p className="mt-4 text-sm leading-8 text-[#6f5d58]">
                  Once the Shopify store is live, this area can show featured product cards, quick-add buttons, and direct checkout links without making the site feel crowded.
                </p>
                <div className="mt-6 rounded-[24px] border border-dashed border-[#241c1b]/20 bg-white/50 p-6 text-sm text-[#6f5d58]">
                  Shopify Buy Button / Storefront API product grid goes here.
                </div>
              </div>
              <div className={`${card} p-8`}>
                <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Future Booking</div>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Booking calls with McKayla</h3>
                <p className="mt-4 text-sm leading-8 text-[#6f5d58]">
                  This can be turned on later for coaching calls, special sessions, or premium community offerings when you are ready.
                </p>
                <button className="mt-6 rounded-full border border-[#c9b8b0] bg-[#efe2db] px-5 py-3 text-sm font-medium text-[#241c1b]">
                  Booking Calls Coming Soon
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className={`${card} p-8`}>
              <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Amazon Buttons</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Books can sell on-site and on Amazon</h3>
              <p className="mt-4 text-sm leading-8 text-[#6f5d58]">
                When your books are ready, each title can have both a direct pre-order action and an Amazon purchase button for easy conversion.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="rounded-full bg-[#ff9900] px-5 py-3 text-sm font-medium text-black">Buy on Amazon</a>
                <button className="rounded-full border border-[#c9b8b0] bg-[#efe2db] px-5 py-3 text-sm font-medium text-[#241c1b]">Join the Pre-Order List</button>
              </div>
            </div>
            <div className={`${card} p-8`}>
              <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Community First</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Built quietly first, then ready to scale</h3>
              <p className="mt-4 text-sm leading-8 text-[#6f5d58]">
                The structure is intentionally set up for your low-key Twitch audience first, while still being polished enough to expand later into a bigger public launch.
              </p>
            </div>
          </div>
        </section>

        <section id="twitch" className={`${card} overflow-hidden`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Twitch</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Go live right from your homepage</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#6f5d58]">
                This section now supports a true Twitch live embed, so your audience can watch without leaving your site and move seamlessly between streams, Bible studies, merch, and books.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.twitch.tv/mckaylala007"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7c5cff] px-5 py-3 text-sm font-medium text-white"
                >
                  <Twitch className="h-4 w-4" />
                  Open Twitch
                </a>
                <a href="#bible-study" className="inline-flex items-center gap-2 rounded-full border border-[#c9b8b0] bg-[#efe2db] px-5 py-3 text-sm font-medium text-[#241c1b]">
                  <Download className="h-4 w-4" />
                  Weekly Study
                </a>
              </div>
            </div>

            <div className="border-t border-[#241c1b]/10 bg-[#241c1b] p-4 text-white lg:border-l lg:border-t-0 lg:p-5">
              <div className="mb-3 px-3 pt-3 text-sm font-semibold">Live on Twitch</div>
              <div className="overflow-hidden rounded-[24px] bg-black">
                <iframe
                  src="https://player.twitch.tv/?channel=mckaylala007&parent=localhost&parent=mckaylamaroney.com"
                  height="420"
                  width="100%"
                  allowFullScreen
                  title="McKayla Maroney Twitch Stream"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="youtube">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">YouTube</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">A media section for updates, stories, and long-form content</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#6f5d58]">
              Connected to McKayla’s official YouTube channel for the latest upload, popular faith-centered content, and future long-form creator storytelling.
            </p>
          </div>

          <div className="mb-5 flex items-center justify-between rounded-[24px] border border-[#241c1b]/10 bg-white/60 px-5 py-4 text-sm text-[#6f5d58]">
            <span>@McKayla_Maroney</span>
            <a href="https://www.youtube.com/@McKayla_Maroney" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-[#241c1b]">
              Visit Channel
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {youtubeVideos.map((video) => (
              <div key={video.title} className={`${card} p-5`}>
                <div className="aspect-video overflow-hidden rounded-[24px] bg-black">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{video.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#6f5d58]">{video.description}</p>
                  </div>
                  <Youtube className="mt-1 h-6 w-6 text-[#d11f1f]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`${card} p-8 lg:p-10`}>
            <div className="text-xs uppercase tracking-[0.24em] text-[#8b726a]">Email funnel</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Turn visitors into your community</h2>
            <p className="mt-5 text-sm leading-8 text-[#6f5d58]">
              This is the conversion engine underneath the whole brand. Every Bible study, stream, merch drop, book launch, and announcement can flow through one clear email funnel.
            </p>
            <div className="mt-7 space-y-3 text-sm text-[#241c1b]">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> Weekly Bible studies, merch drops, books, and brand announcements</div>
              <div className="flex items-center gap-3"><Star className="h-4 w-4" /> Segment fans by books, merch, Twitch, or all updates</div>
            </div>
          </div>

          <div className={`${card} p-8 lg:p-10`}>
            <form className="grid gap-4">
              <input
                className="rounded-[18px] border border-[#241c1b]/10 bg-white px-4 py-3 text-sm text-[#241c1b] outline-none placeholder:text-[#8b726a]"
                placeholder="Your name"
              />
              <input
                className="rounded-[18px] border border-[#241c1b]/10 bg-white px-4 py-3 text-sm text-[#241c1b] outline-none placeholder:text-[#8b726a]"
                placeholder="Email address"
              />
              <select className="rounded-[18px] border border-[#241c1b]/10 bg-white px-4 py-3 text-sm text-[#241c1b] outline-none">
                <option>I want updates about books</option>
                <option>I want updates about merch</option>
                <option>I want updates about Bible studies</option>
                <option>I want all updates</option>
              </select>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#c9b8b0] bg-[#e8d8d0] px-5 py-3 text-sm font-medium text-[#241c1b] transition hover:bg-[#e2d0c7]">
                Join the Launch List
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#c9b8b0]/40 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#6f5d58] sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 McKayla Maroney. Official website concept preview.</div>
          <div className="flex items-center gap-4">
            <a href="https://www.twitch.tv/mckaylala007" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#241c1b]">
              Twitch
              <ExternalLink className="h-4 w-4" />
            </a>
            <span>Books • Merch • Email</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
