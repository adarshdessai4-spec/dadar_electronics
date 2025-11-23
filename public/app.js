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

let heroSlides = [];
let heroIndex = 0;
let heroTimer;

fetch('/api/content')
  .then((res) => res.json())
  .then((data) => {
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
  })
  .catch((err) => {
    console.error('Failed to load content', err);
  });

function renderNav(nav) {
  navPhone.textContent = nav.phone;
  mainLinks.innerHTML = nav.links.map((link) => `<span>${link}</span>`).join('');
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
      (stat) => `
      <div class="metric-card">
        <div class="metric-icon">${stat.icon}</div>
        <div>
          <div class="metric-value">${stat.value}</div>
          <div class="metric-label">${stat.label}</div>
        </div>
      </div>
    `
    )
    .join('');
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
