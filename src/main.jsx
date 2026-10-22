import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, Sprout, Leaf, BookOpen, Sun, Flower2, Menu, X,
  Check, ShieldCheck, Heart, Sparkles, ChevronDown
} from "lucide-react";
import "./styles.css";

const AFFILIATE_URL = "https://medicinalseedkit.com/kit/#aff=habeeb63";

const herbs = [
  { name: "Chamomile", note: "A familiar garden favorite with delicate, daisy-like flowers.", image: "photo-1603909223429-69bb7101f420" },
  { name: "Lavender", note: "Fragrant purple blooms that bring color and pollinators to a garden.", image: "photo-1499002238440-d264edd596ec" },
  { name: "Yarrow", note: "An airy flowering perennial often found in traditional herb gardens.", image: "photo-1490750967868-88aa4486c946" },
  { name: "Chicory", note: "Bright blue flowers and a deep taproot make this plant distinctive.", image: "photo-1466692476868-aef1dfb1e735" },
  { name: "Echinacea", note: "A bold, pollinator-friendly flower with a striking central cone.", image: "photo-1497250681960-ef046c08a56e" },
  { name: "Evening Primrose", note: "Soft, open blooms that add a relaxed, natural feel to a planting.", image: "photo-1470252649378-9c29740c9fa8" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      q: "What is the Medicinal Garden Kit?",
      a: "The offer describes a collection of seeds for 10 herbs together with a companion guide. Check the official offer page for the current contents, availability, and delivery details."
    },
    {
      q: "Do I need gardening experience?",
      a: "The companion guide is presented as a starting point for learning about growing and using the featured plants. Growing conditions vary by climate, soil, season, and plant."
    },
    {
      q: "Can herbs replace professional medical care?",
      a: "No. This website is for gardening education only. Plants and herbal preparations can have side effects or interact with medicines. Speak with a qualified healthcare professional before using herbs for health purposes."
    },
    {
      q: "Where can I see the latest price and shipping information?",
      a: "Use one of the buttons on this page to visit the official offer page. Pricing, shipping, refund terms, and availability can change, so confirm them there before ordering."
    }
  ];

  return (
    <div className="site-shell">
      <div className="announcement"><Sprout size={15} /> A little more green. A little more growing. <span>Explore the kit <ArrowRight size={13}/></span></div>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Root and Remedy home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Sprout size={24}/></span>
          <span>root<span className="brand-amp">&</span>remedy<small>GROW WITH PURPOSE</small></span>
        </a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <button onClick={() => goTo("the-kit")}>The Kit</button>
          <button onClick={() => goTo("garden")}>Herb Garden</button>
          <button onClick={() => goTo("how-it-works")}>How It Works</button>
          <button onClick={() => goTo("faq")}>FAQs</button>
          <a className="nav-cta" href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">Explore the Kit <ArrowRight size={16}/></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line"></span> YOUR GARDEN, YOUR JOURNEY</div>
            <h1>Grow a garden<br/>full of <em>possibilities.</em></h1>
            <p className="hero-lede">Bring the quiet joy of growing herbs into your own backyard. Discover a seed kit and companion guide designed to help you begin exploring the world of traditional herb gardening.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">Discover the Garden Kit <ArrowRight size={18}/></a>
              <button className="text-link" onClick={() => goTo("the-kit")}>See what’s included <ArrowDown size={16}/></button>
            </div>
            <div className="hero-proof">
              <span className="proof-icon"><Leaf size={18}/></span>
              <span><strong>A more hands-on way to learn</strong><small>Seeds, growing inspiration & a companion guide</small></span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo" role="img" aria-label="Sunlit green herb garden" />
            <div className="photo-stamp"><Sprout size={25}/><span>Start small.<br/><i>Grow naturally.</i></span></div>
            <div className="floating-note"><span className="note-icon"><Flower2 size={20}/></span><span><b>10 featured herbs</b><small>Explore the collection</small></span></div>
          </div>
          <div className="hero-bottom-note"><span>01 / THE ART OF GROWING</span><span>SCROLL TO EXPLORE <ArrowDown size={14}/></span></div>
        </section>

        <section className="intro section-pad" id="the-kit">
          <div className="section-kicker">THE IDEA IS SIMPLE</div>
          <div className="intro-grid">
            <h2>A little patch of green.<br/><em>A whole new ritual.</em></h2>
            <div className="intro-text">
              <p>There’s something special about planting a seed, tending it patiently, and watching it become part of your everyday landscape.</p>
              <p>The Medicinal Garden Kit brings together seeds for 10 herbs and a companion guide to help you learn more about growing and traditional herbal preparations.</p>
              <a className="underlined-link" href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">See the official kit details <ArrowRight size={16}/></a>
            </div>
          </div>
          <div className="feature-strip">
            <div className="feature"><span><Sprout/></span><div><b>Seed collection</b><small>Explore 10 featured herbs</small></div></div>
            <div className="feature"><span><BookOpen/></span><div><b>Companion guide</b><small>Learn as you grow</small></div></div>
            <div className="feature"><span><Sun/></span><div><b>Garden inspiration</b><small>Build a hands-on hobby</small></div></div>
          </div>
        </section>

        <section className="garden-section section-pad" id="garden">
          <div className="garden-heading">
            <div><div className="section-kicker">MEET A FEW GARDEN FAVORITES</div><h2>Rooted in nature.<br/><em>Made for discovery.</em></h2></div>
            <p>Every plant has its own character, growing needs, and story. Here are a few of the herbs featured in the kit.</p>
          </div>
          <div className="herb-grid">
            {herbs.map((herb, i) => (
              <article className="herb-card" key={herb.name} style={{"--delay": `${i * 70}ms`}}>
                <div className="herb-image-wrap">
                  <img src={`https://images.unsplash.com/${herb.image}?auto=format&fit=crop&w=900&q=85`} alt={`${herb.name} plant`} loading="lazy"/>
                  <span className="herb-number">0{i + 1}</span>
                </div>
                <div className="herb-card-body"><h3>{herb.name}</h3><p>{herb.note}</p></div>
              </article>
            ))}
          </div>
          <p className="small-note">The images are illustrative. Plant varieties and kit contents should be confirmed on the official offer page.</p>
        </section>

        <section className="guide-section section-pad" id="how-it-works">
          <div className="guide-image">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1300&q=90" alt="Hands caring for seedlings in a garden" loading="lazy"/>
            <div className="guide-image-label"><Leaf size={18}/> GROW AT YOUR OWN PACE</div>
          </div>
          <div className="guide-copy">
            <div className="section-kicker">A GENTLE PLACE TO START</div>
            <h2>From tiny seeds<br/>to <em>new knowledge.</em></h2>
            <p>The kit pairs a seed collection with a guide that introduces the featured plants and traditional ways people have prepared herbs.</p>
            <div className="steps">
              <div className="step"><span>1</span><div><b>Explore the collection</b><p>Review the featured herbs and check which growing conditions suit your space.</p></div></div>
              <div className="step"><span>2</span><div><b>Learn the basics</b><p>Use the companion guide to build your understanding of each plant.</p></div></div>
              <div className="step"><span>3</span><div><b>Make room to grow</b><p>Start with suitable containers or a garden bed, then care for plants according to their needs.</p></div></div>
            </div>
            <a className="button button-primary" href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">View the Medicinal Garden Kit <ArrowRight size={18}/></a>
          </div>
        </section>

        <section className="quote-band">
          <div className="quote-leaf"><Sprout size={34}/></div>
          <p>“The love of gardening is a seed once sown that never dies.”</p>
          <span>A LITTLE INSPIRATION FOR YOUR NEXT CHAPTER</span>
        </section>

        <section className="included section-pad">
          <div className="included-copy">
            <div className="section-kicker">WHAT TO EXPLORE</div>
            <h2>Your next garden<br/><em>starts here.</em></h2>
            <p>Curious about the seed varieties, guide, price, or delivery? The official page has the latest offer details, so you can review everything before deciding.</p>
            <a className="button button-dark" href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">Explore the Official Offer <ArrowRight size={18}/></a>
            <div className="trust-line"><ShieldCheck size={17}/> Check current details directly with the seller.</div>
          </div>
          <div className="included-card">
            <div className="included-card-top"><span>THE GARDEN KIT</span><Sparkles size={19}/></div>
            <div className="kit-art"><div className="kit-circle"><Sprout size={78} strokeWidth={1.1}/></div><div className="kit-leaf leaf-a"><Leaf/></div><div className="kit-leaf leaf-b"><Leaf/></div></div>
            <h3>Medicinal Garden Kit</h3>
            <p>Seed collection + companion guide</p>
            <div className="included-list"><span><Check size={16}/> Seeds for 10 featured herbs</span><span><Check size={16}/> Herbal growing and preparation guide</span><span><Check size={16}/> Details available on the official page</span></div>
            <a href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="card-link">See kit details <ArrowRight size={16}/></a>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="faq-intro"><div className="section-kicker">GOOD TO KNOW</div><h2>Questions before<br/><em>you dig in?</em></h2><p>A few helpful notes before you explore the offer.</p></div>
          <div className="faq-list">
            {faqs.map((faq, i) => <div className={`faq-item ${activeFaq === i ? "faq-active" : ""}`} key={faq.q}>
              <button onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} aria-expanded={activeFaq === i}><span>{faq.q}</span><ChevronDown size={19}/></button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </div>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-orb orb-one"></div><div className="final-cta-orb orb-two"></div>
          <div className="section-kicker">YOUR GARDEN STORY BEGINS WITH A SEED</div>
          <h2>Ready to grow<br/><em>something meaningful?</em></h2>
          <p>Explore the kit, review the details, and decide if it’s right for your garden.</p>
          <a className="button button-light" href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">Explore the Medicinal Garden Kit <ArrowRight size={18}/></a>
          <small>Review current contents, pricing, shipping, and terms on the official offer page.</small>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Sprout size={22}/></span><span>root<span className="brand-amp">&</span>remedy<small>GROW WITH PURPOSE</small></span></a>
        <p className="footer-disclosure">Affiliate disclosure: This page contains an affiliate link. If you purchase through it, we may earn a commission at no additional cost to you.</p>
        <p className="footer-disclaimer">Educational content only. This website does not provide medical advice, diagnose conditions, or recommend replacing professional care with herbs. Herbs may cause side effects or interact with medicines; consult a qualified healthcare professional before medicinal use.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Root & Remedy</span><a href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">Official offer page <ArrowRight size={14}/></a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);