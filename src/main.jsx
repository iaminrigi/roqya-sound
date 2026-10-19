import React, { useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const categories = [
  'همه',
  'آرامش',
  'دفع بدی',
  'تلاوت',
  'دعای روزانه',
  'تمرکز و یادآوری',
]

const tracks = [
  {
    id: 1,
    title: 'آرامش قلب و ذهن',
    category: 'آرامش',
    duration: '08:24',
    description: 'ترکیب آرام‌بخش از آیات و اذکار برای کاهش استرس و ایجاد سکوت درونی.',
    accent: 'emerald',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
    audio:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 2,
    title: 'دفع شر و تردید',
    category: 'دفع بدی',
    duration: '06:48',
    description: 'صوتی برای آرامش، تقویت امید و نیایش در لحظه‌های سخت و ناامنی.',
    accent: 'violet',
    image:
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80',
    audio:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 3,
    title: 'تلاوت قرآن به سبک آرام',
    category: 'تلاوت',
    duration: '10:05',
    description: 'نسخه‌ای روان و آرام از تلاوت‌ها برای تمرکز، آرامش و تفکر.',
    accent: 'blue',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80',
    audio:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 4,
    title: 'دعای صبح و قوت قلب',
    category: 'دعای روزانه',
    duration: '05:13',
    description: 'دعا و ذکرهایی برای آغاز روز با آرامش، امید و تمرکز بر نعمت‌ها.',
    accent: 'gold',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
    audio:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 5,
    title: 'تمرکز در عبادت',
    category: 'تمرکز و یادآوری',
    duration: '07:32',
    description: 'آموزش و ذکرهایی برای افزایش حضور، آرامش ذهنی و تمرکز در نماز و دعا.',
    accent: 'rose',
    image:
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80',
    audio:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: 6,
    title: 'رهایی از اضطراب',
    category: 'آرامش',
    duration: '09:10',
    description: 'کلاس صوتی کوتاه و آرام برای کاهش تنش و بازگشت به حالت تعادل.',
    accent: 'cyan',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
    audio:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
]

const dailyPlans = [
  {
    title: 'برنامه ۷ روزه آرامش',
    text: 'روزانه ۲۰ دقیقه ذکر و تلاوت برای کاهش فشار و افزایش سکوت درونی.',
  },
  {
    title: 'برنامه تقویت ایمان',
    text: 'مجموعه‌ای از دعا و تلاوت کوتاه برای شروع صبح و پایان شب.',
  },
  {
    title: 'برنامه تمرکز در نماز',
    text: 'تمرینات کوتاه برای حضور کامل در نماز و آرامش در خواندن آیات.',
  },
]

const faqs = [
  {
    q: 'Roqya Sound دقیقاً چه محتوایی دارد؟',
    a: 'این پلتفرم شامل دسته‌بندی‌های صوتی مثل آرامش، دفع بدی، تلاوت، دعا و تمرکز است و برای استفاده‌ی شخصی و روزانه طراحی شده است.',
  },
  {
    q: 'آیا برای همه سنین مناسب است؟',
    a: 'بله، محتوای ارائه شده به‌صورت عمومی، ساده و آرام طراحی شده و برای استفاده‌ی افراد مختلف مناسب است.',
  },
  {
    q: 'آیا می‌توانم فایل‌ها را دانلود کنم؟',
    a: 'بله، در نسخه‌ی کامل‌تر وب‌اپ، امکان دانلود و ذخیره‌ی محتوای صوتی و جزوه‌های آموزشی فعال خواهد شد.',
  },
]

const testimonials = [
  'همه چیز خیلی مرتب و آرام است؛ حس خوبی به کاربر می‌دهد و استفاده از آن راحت است.',
  'دسته‌بندی‌ها دقیق و زیبا هستند و برای ورود به محتوای اسلامی خیلی مناسب‌اند.',
  'رابط کاربری مدرن و آرامش‌بخش است و حس اعتماد و معنویت را به خوبی منتقل می‌کند.',
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('همه')
  const [selectedTrack, setSelectedTrack] = useState(tracks[0])
  const [search, setSearch] = useState('')
  const audioRef = useRef(null)

  const filteredTracks = useMemo(() => {
    const query = search.trim().toLowerCase()
    return tracks.filter((track) => {
      const matchCategory =
        selectedCategory === 'همه' || track.category === selectedCategory
      const matchSearch =
        !query ||
        track.title.toLowerCase().includes(query) ||
        track.description.toLowerCase().includes(query) ||
        track.category.toLowerCase().includes(query)
      return matchCategory && matchSearch
    })
  }, [search, selectedCategory])

  const handleTrackSelect = (track) => {
    setSelectedTrack(track)
    if (audioRef.current) {
      audioRef.current.src = track.audio
      audioRef.current.play().catch(() => {})
    }
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">ر</div>
          <div>
            <p className="brand-name">Roqya Sound</p>
            <small>آرامش و هدایت</small>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">خانه</a>
          <a href="#categories">دسته‌بندی</a>
          <a href="#library">کتابخانه</a>
          <a href="#plans">برنامه‌ها</a>
          <a href="#faq">سوالات</a>
        </nav>

        <button className="primary-btn">شروع سریع</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">پلتفرم اسلامی مدرن</span>
            <h1>محیطی آرام، شفاف و هدایت‌محور برای تجربه‌ی معنوی.</h1>
            <p>
              با Roqya Sound به مجموعه‌ای از تلاوت‌ها، اذکار، دعاها و برنامه‌های روزانه
              دسترسی داشته باشید؛ در فضایی آرام، مدرن و کاملاً دسته‌بندی‌شده.
            </p>

            <div className="cta-row">
              <button className="primary-btn">دیدن مجموعه‌ها</button>
              <button className="secondary-btn">مشاهده برنامه‌ها</button>
            </div>

            <div className="stats">
              <div>
                <strong>1.2k+</strong>
                <span>صوت آموزشی</span>
              </div>
              <div>
                <strong>36</strong>
                <span>دسته‌بندی</span>
              </div>
              <div>
                <strong>4.9</strong>
                <span>رضایت کاربران</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="mini-player">
              <div className="mini-player-header">
                <span className="live-dot" />
                در حال پخش
              </div>

              <img src={selectedTrack.image} alt={selectedTrack.title} />

              <div className="track-meta">
                <h3>{selectedTrack.title}</h3>
                <p>{selectedTrack.category}</p>
              </div>

              <audio ref={audioRef} controls src={selectedTrack.audio} />
            </div>
          </div>
        </section>

        <section className="category-strip" id="categories">
          <div className="section-head">
            <div>
              <span className="eyebrow">دسته‌بندی‌ها</span>
              <h2>انتخاب بر اساس نیاز و حس شما</h2>
            </div>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={category === selectedCategory ? 'chip active' : 'chip'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="library" id="library">
          <div className="section-head">
            <div>
              <span className="eyebrow">کتابخانه صوتی</span>
              <h2>محتوای انتخابی برای آرامش و رشد</h2>
            </div>
            <div className="search-box">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجو در محتوا..."
              />
            </div>
          </div>

          <div className="card-grid">
            {filteredTracks.length > 0 ? (
              filteredTracks.map((track) => (
                <article
                  key={track.id}
                  className={track.id === selectedTrack.id ? 'sound-card active' : 'sound-card'}
                  onClick={() => handleTrackSelect(track)}
                >
                  <div className={`card-visual ${track.accent}`}>
                    <img src={track.image} alt={track.title} />
                    <span className="badge">{track.category}</span>
                  </div>
                  <div className="card-body">
                    <div className="meta-row">
                      <h3>{track.title}</h3>
                      <span>{track.duration}</span>
                    </div>
                    <p>{track.description}</p>
                    <button className="ghost-btn">پخش</button>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <h3>محتوایی یافت نشد</h3>
                <p>دسته‌بندی یا عبارت جستجو را تغییر دهید.</p>
              </div>
            )}
          </div>
        </section>

        <section className="feature-panel">
          <div className="section-head">
            <div>
              <span className="eyebrow">دلایل انتخاب</span>
              <h2>چرا Roqya Sound متفاوت است؟</h2>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-box">
              <span>🎧</span>
              <h3>حس آرامش واقعی</h3>
              <p>فرمت صوتی روان، سبک، ساده و فاقد شلوغی بصری برای تمرکز بیشتر.</p>
            </div>
            <div className="feature-box">
              <span>🧭</span>
              <h3>دسته‌بندی دقیق</h3>
              <p>بخش‌های جداگانه برای آرامش، دعا، تلاوت، دفع بدی و برنامه‌های روزانه.</p>
            </div>
            <div className="feature-box">
              <span>📱</span>
              <h3>رابطه‌کاربری مدرن</h3>
              <p>طراحی کاملاً واکنش‌گرا برای موبایل، تبلت و دسکتاپ با حس اسلامی و تمیز.</p>
            </div>
          </div>
        </section>

        <section className="plans" id="plans">
          <div className="section-head">
            <div>
              <span className="eyebrow">برنامه‌های روزانه</span>
              <h2>مسیر ساده برای آرامش و تمرکز</h2>
            </div>
          </div>

          <div className="plan-grid">
            {dailyPlans.map((plan, index) => (
              <div key={plan.title} className="plan-card">
                <div className="plan-index">0{index + 1}</div>
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
                <button className="ghost-btn">مشاهده جزئیات</button>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <div className="section-head">
            <div>
              <span className="eyebrow">نظرات کاربران</span>
              <h2>تجربه‌هایی از آرامش و اعتماد</h2>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((quote, index) => (
              <blockquote key={quote} className="quote-card">
                <span className="quote-mark">“</span>
                <p>{quote}</p>
                <footer>کاربر {index + 1}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="section-head">
            <div>
              <span className="eyebrow">سوالات متداول</span>
              <h2>پاسخ به پرسش‌های رایج</h2>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-name">Roqya Sound</p>
          <small>آرامش، دعا و هدایت در یک تجربه مدرن</small>
        </div>
        <div className="footer-nav">
          <a href="#home">خانه</a>
          <a href="#categories">دسته‌بندی</a>
          <a href="#plans">برنامه‌ها</a>
          <a href="#faq">پرسش‌ها</a>
        </div>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
