const heroSlider = document.getElementById('hero-slider');
const heroDots = document.getElementById('hero-dots');
const metricsEl = document.getElementById('metrics');
const trendingTrack = document.getElementById('trending-track');
const dealGrid = document.getElementById('deal-grid');
const categoryRow = document.getElementById('category-row');
const hexDesc = document.getElementById('hex-desc');
const hexList = document.getElementById('hex-list');
const hexImage = document.getElementById('hex-image');
const insiderTrack = document.getElementById('insider-track');
const awardsGrid = document.getElementById('awards-grid');
const blogGrid = document.getElementById('blog-grid');
const testimonialTrack = document.getElementById('testimonial-track');
const partnerRow = document.getElementById('partner-row');
const faqList = document.getElementById('faq-list');
const videoFeature = document.getElementById('video-feature');
const videoTitle = document.getElementById('video-title');
const mainLinks = document.getElementById('main-links');
const navPhone = document.getElementById('nav-phone');
const footerAbout = document.getElementById('footer-about');
const footerProducts = document.getElementById('footer-products');
const footerHelp = document.getElementById('footer-help');
const footerContact = document.getElementById('footer-contact');
const drawerList = document.getElementById('drawer-list');
const drawer = document.getElementById('mobile-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const drawerPhone = document.getElementById('drawer-phone');
const hamburger = document.querySelector('.hamburger');
const drawerClose = document.querySelector('.drawer-close');
const drawerTabs = document.querySelectorAll('.drawer-tab');
const searchInput = document.getElementById('nav-search-input');
const searchBtn = document.getElementById('nav-search-btn');
const cartBtn = document.getElementById('nav-cart-btn');
const locationBtn = document.getElementById('nav-location-btn');

let heroSlides = [];
let heroIndex = 0;
let heroTimer;

const fallbackContent = {
  nav: {
    logoText: 'Dadar Electronics',
    phone: '+91-9035009233',
    links: ['MacBook', 'Products', 'Students', 'Bulk Orders', 'Dream On', 'Company', 'Store', 'More']
  },
  heroSlides: [
    {
      title: '#1 India’s Most Trusted Laptop Refurbisher',
      description: 'Awarded for elevating refurbished laptops with sustainable style and reliable performance.',
      cta: 'Shop Now',
      accent: 'Earth-Friendly Vibes',
      image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Certified Quality. Like-New Experience.',
      description: 'Precision tested devices with transparent grading, fair prices, and doorstep delivery nationwide.',
      cta: 'Explore Devices',
      accent: 'HexaTrust Promise',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Smart Tech for Smart Budgets.',
      description: 'Pick from curated laptops, ultrabooks, and 2-in-1s tuned for work, study, and creators.',
      cta: 'Browse Collections',
      accent: 'Fresh Drops Weekly',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1400&q=80'
    }
  ],
  stats: [
    { icon: '😊', label: 'Products Sold', value: '80K+' },
    { icon: '🚚', label: 'Pincodes Delivered', value: '20000+' },
    { icon: '🌍', label: 'CO₂ Reduced', value: '18 Kt' },
    { icon: '⭐', label: 'Google Rating', value: '4.3 (3.8K+)' }
  ],
  trendingTitle: 'Trending Tech, Earth-Friendly Vibes',
  products: [
    {
      title: 'Dell Latitude Laptop | 5420 | Intel i7-11th Gen | 14” HD Touchscreen',
      price: '₹31,949',
      mrp: '₹86,799',
      badge: '70% off',
      stock: 'In stock (398 units)',
      image: 'https://images.unsplash.com/photo-1527443224154-d1af0e9864b4?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Dell Latitude Laptop | 5490 | Intel i7-8th Gen | 14” HD | Win 11 Pro',
      price: '₹22,449',
      mrp: '₹74,079',
      badge: '70% off',
      stock: 'In stock (127 units)',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Lenovo ThinkPad Laptop | L480 | Intel i5-8th Gen | 14” HD | Win 11 Pro',
      price: '₹18,449',
      mrp: '₹61,049',
      badge: '70% off',
      stock: 'In stock (192 units)',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Dell Latitude 5420 Laptop | Intel i5-10th Gen | 14” FHD | Win 11 Pro',
      price: '₹45,549',
      mrp: '₹1,08,653',
      badge: '58% off',
      stock: 'In stock (113 units)',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'HP EliteBook | 840 G5 | Intel i5-8th Gen | 14” | Win 11 Pro',
      price: '₹19,999',
      mrp: '₹64,999',
      badge: '69% off',
      stock: 'In stock (211 units)',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Lenovo IdeaPad Slim 3 Laptop | Ryzen 5 | 15.6” FHD | Win 11',
      price: '₹31,949',
      mrp: '₹68,099',
      badge: '53% off',
      stock: 'In stock (114 units)',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80'
    }
  ],
  categories: [
    { label: 'Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80' },
    { label: 'Desktops', image: 'https://images.unsplash.com/photo-1587202372775-98973f961c78?auto=format&fit=crop&w=300&q=80' },
    { label: 'Mini Laptops', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80' },
    { label: 'ChromeBook', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80' },
    { label: 'All in One', image: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?auto=format&fit=crop&w=300&q=80' },
    { label: 'Accessories', image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=300&q=80' }
  ],
  deals: [
    { title: 'Under ₹9999', subtitle: 'Budget Friendly', desc: 'Great for students & basic use', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80' },
    { title: 'Under ₹14999', subtitle: 'Mid-Range Value', desc: 'Perfect balance of price & performance', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80' },
    { title: 'Under ₹19999', subtitle: 'Premium Experience', desc: 'Top-tier devices for pros & creators', image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80' },
    { title: 'Above ₹20000', subtitle: 'Ultimate Choice', desc: 'Unmatched power for ultimate productivity', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80' }
  ],
  hexatrust: {
    title: 'HexaTrust - The Gold Standard in Refurbished IT Asset',
    desc: 'HexaTrust is our commitment to transparency, quality, and customer satisfaction. It defines the Dadar Electronics promise — to make refurbished IT products not just a smart choice, but a trusted one.',
    bullets: [
      'Price value guarantee',
      'Buyback & return assurance',
      '1 year warranty',
      'Data security',
      'Like new assured',
      'Performance guarantee'
    ],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80'
  },
  awards: [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/The_Economic_Times_logo.svg/512px-The_Economic_Times_logo.svg.png',
      title: 'Top Performing Listed Indian MSME',
      desc: 'Honored at the Economic Times, celebrating excellence and outstanding contribution in MSME sector.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/AMTIVO_logo.png',
      title: 'R2 Standard v3 Certification',
      desc: 'Certified by Amtivo for Responsible Recycling, showcasing downstream vendor management and IT asset repair.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/CNBC_logo.svg',
      title: 'Retail & E-commerce SME of the Year',
      desc: 'Recognized at HSBC-CNBC TV18 SME Champions Awards 2024 for transforming refurbished tech industry.'
    }
  ],
  blogs: [
    {
      title: 'The Cost-Benefit Analysis of Buying Refurbished Laptops',
      date: 'April 19, 2025',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Refurbished Laptops vs Used Laptops: Key Differences',
      date: 'September 02, 2025',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Complete Guide to Refurbished Desktops for Small Businesses',
      date: 'March 20, 2025',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Refurbished Laptops for Students - Affordable and Functional',
      date: 'January 27, 2025',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    }
  ],
  insider: [
    {
      title: 'The Deal Hunters',
      desc: 'Our Deal Hunters source the laptops from top corporates and brands.',
      image: 'https://images.unsplash.com/photo-1515165562835-c3b8c3a7f7c0?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Certified Labs',
      desc: 'Devices undergo 45-point checks to ensure like-new performance.',
      image: 'https://images.unsplash.com/photo-1501250987900-211872d97eaa?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Sustainability Meets Style',
      desc: 'We pair circular economy thinking with sleek, modern hardware.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80'
    }
  ],
  testimonials: [
    {
      name: 'Rakesh',
      role: 'IT Lead',
      quote: 'Staff was super friendly and guided me through all the products.',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Ali',
      role: 'Entrepreneur',
      quote: 'Great pricing, honest grading, and the laptop felt brand new.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Nishant',
      role: 'Student',
      quote: 'Customer support helped me pick the right config for college.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Prerna',
      role: 'Designer',
      quote: 'Loving the balance of price, warranty, and sustainability.',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80'
    }
  ],
  partners: [
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Dell_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Lenovo_logo_2015.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/AsusTek_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/64/AMTIVO_logo.png'
  ],
  videos: [
    {
      title: 'How We Are Changing the Game & the Planet',
      thumb: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'The Dadar Electronics Impact: Sustainability Meets Style',
      thumb: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1400&q=80'
    }
  ],
  faqs: [
    {
      question: 'Why Choose Refurbished Laptops?',
      answer: 'Refurbished laptops offer premium performance at a fraction of the cost with quality checks and warranties.'
    },
    {
      question: 'What are some benefits of buying refurbished laptops from Dadar Electronics?',
      answer: 'You get certified devices, transparent grading, assured warranties, and sustainable tech choices.'
    },
    {
      question: 'How do we know about the support and warranty services at Dadar Electronics?',
      answer: 'Every purchase includes clear warranty terms, easy returns, and quick-response support channels.'
    },
    {
      question: 'How do I Return or Cancel an Order?',
      answer: 'Use your order dashboard or reach out via chat/WhatsApp within the return window to initiate cancellations.'
    }
  ],
  footer: {
    about: ['About Us', 'About Dadar Electronics', 'Refurbishing Story', 'Our Story'],
    products: ['Laptops', 'Desktops', 'Mini Laptops', 'All in One', 'Monitors'],
    help: ['Contact Us', 'Terms of Service', 'Shipping Policy', 'Return Policy', 'Warranty Policy'],
    contact: ['Reach out to us', '+91-9026265699 (Sales)', 'support@dadarelectronics.com']
  }
};

async function loadContent() {
  try {
    const res = await fetch('/api/content', { cache: 'no-store' });
    if (!res.ok) throw new Error('No API available');
    const data = await res.json();
    renderAll(data);
  } catch (err) {
    console.warn('Falling back to static content for GitHub Pages', err);
    renderAll(fallbackContent);
  }
}

function renderAll(data) {
  renderNav(data.nav);
  renderHero(data.heroSlides);
  renderMetrics(data.stats);
  renderProducts(data.products);
  renderCategories(data.categories);
  renderDeals(data.deals);
  renderHexatrust(data.hexatrust);
  renderInsider(data.insider);
  renderAwards(data.awards);
  renderBlogs(data.blogs);
  renderTestimonials(data.testimonials);
  renderPartners(data.partners);
  renderFaqs(data.faqs);
  renderVideo(data.videos?.[0]);
  renderFooter(data.footer);
}

loadContent();

function renderNav(nav) {
  navPhone.textContent = nav.phone;
  mainLinks.innerHTML = nav.links.map((link) => `<span>${link}</span>`).join('');
  renderDrawer(nav);
}

function renderHero(slides) {
  heroSlides = slides || [];
  if (!heroSlides.length) return;
  heroSlider.innerHTML = heroSlides
    .map(
      (slide) => `
      <div class="hero-slide" style="background: linear-gradient(180deg, rgba(15,122,191,0.95), rgba(15,122,191,0.9));">
        <div class="copy">
          <h1>${slide.title}</h1>
          <p>${slide.description}</p>
          <div class="hero-accent accent">${slide.accent}</div>
          <button class="hero-cta">${slide.cta} →</button>
        </div>
        <div class="visual">
          <img src="${slide.image}" alt="${slide.title}">
        </div>
      </div>
    `
    )
    .join('');

  heroDots.innerHTML = heroSlides.map((_, idx) => `<span data-idx="${idx}"></span>`).join('');
  heroDots.querySelectorAll('span').forEach((dot) =>
    dot.addEventListener('click', () => setHeroSlide(Number(dot.dataset.idx)))
  );
  setHeroSlide(0);

  clearInterval(heroTimer);
  heroTimer = setInterval(() => setHeroSlide((heroIndex + 1) % heroSlides.length), 5200);
}

function setHeroSlide(idx) {
  heroIndex = idx;
  heroSlider.style.transform = `translateX(-${idx * 100}%)`;
  heroDots.querySelectorAll('span').forEach((dot, dotIdx) => {
    dot.classList.toggle('active', dotIdx === idx);
  });
}

function renderMetrics(stats) {
  metricsEl.innerHTML = stats
    .map(
      (stat, idx) => `
      <div class="metric-card" data-target="${stat.value}" data-index="${idx}">
        <div class="metric-icon">${stat.icon}</div>
        <div>
          <div class="metric-value" id="metric-${idx}">0</div>
          <div class="metric-label">${stat.label}</div>
        </div>
      </div>
    `
    )
    .join('');
  startCounters(stats);
}

function startCounters(stats) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = entry.target.dataset.index;
          animateCount(idx, stats[idx].value);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.metric-card').forEach((card) => observer.observe(card));
}

function animateCount(idx, targetText) {
  const el = document.getElementById(`metric-${idx}`);
  if (!el) return;

  const parsed = parseMetricValue(targetText);
  const duration = 1200;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.floor(parsed.value * progress);
    el.textContent = formatMetricValue(current, parsed.suffix);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function parseMetricValue(text) {
  const match = text.match(/([0-9.,]+)\s*([A-Za-z+() ]*)?/);
  if (!match) return { value: 0, suffix: '' };
  const num = parseFloat(match[1].replace(/,/g, ''));
  const suffix = (match[2] || '').trim();
  return { value: isNaN(num) ? 0 : num, suffix };
}

function formatMetricValue(value, suffix) {
  return `${value.toLocaleString()}${suffix ? ' ' + suffix : ''}`;
}

function renderProducts(products) {
  trendingTrack.innerHTML = products
    .map(
      (p) => `
      <div class="product-card">
        <img src="${p.image}" alt="${p.title}">
        <div class="product-body">
          <div class="stock">● ${p.stock}</div>
          <div class="product-title">${p.title}</div>
          <div class="price-row">
            <span class="price">${p.price}</span>
            <span class="mrp">${p.mrp}</span>
            <span class="badge">${p.badge}</span>
          </div>
          <button class="quick-view">Quick View</button>
        </div>
      </div>
    `
    )
    .join('');
}

function renderCategories(categories) {
  categoryRow.innerHTML = categories
    .map(
      (c) => `
      <div class="category">
        <img src="${c.image}" alt="${c.label}">
        <span>${c.label}</span>
      </div>
    `
    )
    .join('');
}

function renderDeals(deals) {
  dealGrid.innerHTML = deals
    .map(
      (d) => `
      <div class="deal-card">
        <img src="${d.image}" alt="${d.title}">
        <div class="deal-body">
          <div class="deal-title">${d.title}</div>
          <div class="deal-subtitle">${d.subtitle}</div>
          <div class="deal-desc">${d.desc}</div>
        </div>
      </div>
    `
    )
    .join('');
}

function renderHexatrust(hex) {
  hexDesc.textContent = hex.desc;
  hexList.innerHTML = hex.bullets.map((b) => `<li>${b}</li>`).join('');
  hexImage.src = hex.image;
  hexImage.alt = hex.title;
}

function renderInsider(slides) {
  insiderTrack.innerHTML = slides
    .map(
      (s) => `
      <div class="story-card">
        <img src="${s.image}" alt="${s.title}">
        <div class="story-copy">
          <div class="story-title">${s.title}</div>
          <div class="story-desc">${s.desc}</div>
        </div>
      </div>
    `
    )
    .join('');
}

function renderAwards(awards) {
  awardsGrid.innerHTML = awards
    .map(
      (award) => `
      <div class="award-card">
        <img src="${award.image}" alt="${award.title}">
        <h4>${award.title}</h4>
        <p>${award.desc}</p>
      </div>
    `
    )
    .join('');
}

function renderBlogs(blogs) {
  blogGrid.innerHTML = blogs
    .map(
      (b) => `
      <div class="blog-card">
        <img src="${b.image}" alt="${b.title}">
        <div class="blog-body">
          <div class="blog-date">🗓️ ${b.date}</div>
          <div class="blog-title">${b.title}</div>
        </div>
      </div>
    `
    )
    .join('');
}

function renderTestimonials(testimonials) {
  testimonialTrack.innerHTML = testimonials
    .map(
      (t) => `
      <div class="story-card">
        <img src="${t.image}" alt="${t.name}">
        <div class="story-copy">
          <div class="story-title">${t.name} • ${t.role}</div>
          <div class="story-desc">${t.quote}</div>
        </div>
      </div>
    `
    )
    .join('');
}

function renderPartners(partners) {
  partnerRow.innerHTML = partners
    .map(
      (logo) => `
      <div class="partner-card">
        <img src="${logo}" alt="Partner logo">
      </div>
    `
    )
    .join('');
}

function renderFaqs(faqs) {
  faqList.innerHTML = faqs
    .map(
      (faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}">
        <div class="faq-question">
          <span>${faq.question}</span>
          <span>+</span>
        </div>
        <div class="faq-answer">${faq.answer}</div>
      </div>
    `
    )
    .join('');

  faqList.querySelectorAll('.faq-item').forEach((item) => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

function renderVideo(video) {
  if (!video) return;
  videoFeature.querySelector('.video-overlay').style.backgroundImage = `url('${video.thumb}')`;
  videoTitle.textContent = video.title;
}

function renderFooter(footer) {
  footerAbout.innerHTML = footer.about.map((item) => `<li>${item}</li>`).join('');
  footerProducts.innerHTML = footer.products.map((item) => `<li>${item}</li>`).join('');
  footerHelp.innerHTML = footer.help.map((item) => `<li>${item}</li>`).join('');
  footerContact.innerHTML = footer.contact.map((item) => `<li>${item}</li>`).join('');
}

function renderDrawer(nav) {
  drawerPhone.textContent = nav.phone;
  drawerList.innerHTML = nav.links
    .map(
      (link) => `
      <div class="drawer-item">
        <span>${link}</span>
        <span>⌄</span>
      </div>
    `
    )
    .join('');
}

function toggleDrawer(open) {
  const shouldOpen = open ?? !drawer.classList.contains('open');
  drawer.setAttribute('aria-hidden', String(!shouldOpen));
  drawer.classList.toggle('open', shouldOpen);
  drawerBackdrop.classList.toggle('show', shouldOpen);
  document.body.style.overflow = shouldOpen ? 'hidden' : '';
}

hamburger?.addEventListener('click', () => toggleDrawer(true));
drawerClose?.addEventListener('click', () => toggleDrawer(false));
drawerBackdrop?.addEventListener('click', () => toggleDrawer(false));
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') toggleDrawer(false);
});

drawerTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    drawerTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

function handleSearch() {
  const term = (searchInput?.value || '').trim();
  if (!term) {
    alert('Enter a product or category to search.');
    return;
  }
  alert(`Search for: ${term}\n(Search wiring placeholder)`);
}

function handleCart() {
  alert('Cart is coming soon. For now, pick a product and use Quick View.');
}

function handleLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        alert(`Location captured.\nLat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`);
      },
      () => {
        alert('Unable to fetch location. Please allow location access.');
      }
    );
  } else {
    alert('Geolocation not supported on this browser.');
  }
}

searchBtn?.addEventListener('click', handleSearch);
cartBtn?.addEventListener('click', handleCart);
locationBtn?.addEventListener('click', handleLocation);
searchInput?.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') handleSearch();
});

document.querySelectorAll('.slider-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const dir = btn.dataset.dir;
    const track =
      target === 'testimonials'
        ? testimonialTrack
        : target === 'insider'
        ? insiderTrack
        : trendingTrack;

    if (!track) return;
    const amount = track.clientWidth * 0.9;
    track.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  });
});
