* {
  box-sizing: border-box;
}

:root {
  --bg: #071b1a;
  --bg-soft: #0f2b2a;
  --panel: rgba(17, 38, 36, 0.8);
  --panel-strong: rgba(12, 22, 22, 0.95);
  --surface: rgba(18, 45, 42, 0.75);
  --line: rgba(198, 222, 214, 0.1);
  --text: #effaf4;
  --muted: #a7c6bb;
  --gold: #d8bf77;
  --green: #7dd7b5;
  --green-strong: #3fcf99;
  --shadow: rgba(7, 17, 16, 0.35);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Vazirmatn', sans-serif;
  background:
    radial-gradient(circle at top, rgba(62, 132, 117, 0.22), transparent 35%),
    linear-gradient(180deg, #061613 0%, #0b1718 44%, #0d1d1e 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

#root {
  min-height: 100vh;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  background: rgba(11, 24, 24, 0.56);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
  border-radius: 22px;
  position: sticky;
  top: 16px;
  z-index: 20;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, #d5c084, #7ae9c3);
  color: #062b2b;
}

.brand-name {
  margin: 0;
  font-weight: 800;
}

.brand-wrap small,
.site-footer small {
  color: var(--muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav a:hover {
  color: var(--text);
}

.primary-btn,
.secondary-btn,
.ghost-btn,
.chip {
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--gold), #f1d995);
  color: #12231f;
  font-weight: 800;
  padding: 12px 20px;
  border-radius: 14px;
  box-shadow: 0 16px 30px rgba(216, 191, 119, 0.2);
}

.primary-btn:hover,
.secondary-btn:hover,
.ghost-btn:hover,
.chip:hover {
  transform: translateY(-2px);
}

.secondary-btn,
.ghost-btn {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  border: 1px solid var(--line);
  padding: 12px 18px;
  border-radius: 14px;
}

.hero {
  padding: 72px 0 28px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  color: var(--green);
  background: rgba(125, 215, 181, 0.08);
  border: 1px solid rgba(125, 215, 181, 0.2);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 4.4rem);
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 2;
  max-width: 690px;
  margin: 18px 0 0;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.stats {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

.stats div {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stats strong {
  font-size: 1.8rem;
  color: var(--text);
}

.stats span {
  color: var(--muted);
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.mini-player {
  width: min(100%, 430px);
  background: rgba(12, 22, 22, 0.78);
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 18px;
  box-shadow: 0 20px 50px var(--shadow);
}

.mini-player-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 0.86rem;
  margin-bottom: 12px;
}

.live-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff7c7c;
  display: inline-block;
  box-shadow: 0 0 18px rgba(255, 124, 124, 0.7);
}

.mini-player img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
}

.track-meta {
  margin-top: 14px;
}

.track-meta h3 {
  margin: 0;
  font-size: 1.5rem;
}

.track-meta p {
  margin: 6px 0 12px;
  color: var(--muted);
}

audio {
  width: 100%;
  margin-top: 10px;
}

section {
  margin-top: 48px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 24px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.category-list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.chip {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--muted);
  padding: 10px 16px;
  font-weight: 700;
}

.chip.active {
  background: linear-gradient(135deg, var(--green), #356f65);
  color: #041b1c;
  border-color: transparent;
}

.library,
.feature-panel,
.plans,
.testimonials,
.faq {
  padding-top: 12px;
}

.search-box {
  min-width: 240px;
}

.search-box input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.025);
  color: var(--text);
}

.search-box input::placeholder {
  color: var(--muted);
}

.card-grid,
.plan-grid,
.feature-grid,
.testimonial-grid {
  display: grid;
  gap: 22px;
}

.card-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.sound-card {
  border: 1px solid var(--line);
  border-radius: 26px;
  overflow: hidden;
  background: rgba(11, 24, 24, 0.62);
  transition: 0.2s ease;
  cursor: pointer;
}

.sound-card:hover,
.sound-card.active {
  border-color: rgba(125, 215, 181, 0.3);
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.18);
}

.card-visual {
  position: relative;
  height: 180px;
}

.card-visual img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #041b1c;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.76rem;
  font-weight: 800;
}

.card-body {
  padding: 18px 18px 20px;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: baseline;
}

.meta-row h3 {
  margin: 0;
  font-size: 1.3rem;
}

.meta-row span {
  color: var(--muted);
  font-size: 0.8rem;
}

.card-body p {
  color: var(--muted);
  line-height: 1.9;
  margin: 12px 0 18px;
}

.feature-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.feature-box,
.plan-card,
.quote-card,
.faq-item {
  background: rgba(13, 29, 30, 0.7);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
}

.feature-box span {
  font-size: 2rem;
}

.feature-box h3,
.plan-card h3,
.faq-item h3 {
  margin: 16px 0 10px;
}

.feature-box p,
.plan-card p,
.faq-item p,
.quote-card p {
  color: var(--muted);
  line-height: 1.9;
  margin: 0;
}

.plan-grid,
.testimonial-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.plan-card {
  position: relative;
}

.plan-index {
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(212, 186, 116, 0.2);
  color: var(--gold);
  display: grid;
  place-items: center;
  font-weight: 900;
}

.quote-card {
  position: relative;
}

.quote-mark {
  font-size: 3rem;
  color: var(--gold);
  line-height: 1;
}

.quote-card footer {
  color: var(--green);
  margin-top: 18px;
  font-weight: 700;
}

.faq-list {
  display: grid;
  gap: 16px;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-top: 52px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.footer-nav {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.empty-state {
  grid-column: 1 / -1;
  background: rgba(11, 24, 24, 0.56);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 36px 24px;
  text-align: center;
}

.empty-state h3 {
  margin: 0 0 10px;
}

@media (max-width: 900px) {
  .topbar,
  .nav,
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .page-shell {
    padding-inline: 14px;
  }

  .topbar {
    padding: 16px 16px;
  }

  .nav {
    gap: 12px;
    flex-wrap: wrap;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
