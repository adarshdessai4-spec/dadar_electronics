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

const ASSET_VERSION = 'v2';

function slugify(label) {
  return (label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'products';
}

function goToCategory(slug) {
  window.location.href = `list.html?category=${slug || 'products'}`;
}

function versioned(path) {
  if (!path) return '';
  return path.includes('?') ? path : `${path}?v=${ASSET_VERSION}`;
}

function imageTag(local, remote, alt, className = '') {
  const src = local ? versioned(local) : remote || '';
  const fallbackAttr = local && remote ? ` onerror="this.onerror=null;this.src='${remote}'"` : '';
  const classAttr = className ? ` class="${className}"` : '';
  return `<img src="${src}" alt="${alt || ''}"${classAttr}${fallbackAttr}>`;
}

const fallbackContent = {
  nav: {
    logoText: 'Dadar Electronics',
    phone: '+91-9035009233',
    links: ['MacBook', 'Products', 'Students', 'Bulk Orders', 'Dream On', 'Company', 'Store', 'More']
  },
  heroSlides: [
    {
      title: 'Refurbished Laptops That Feel Brand New',
      description: 'Certified MacBooks, ThinkPads, and XPS units tuned for productivity, design, and travel.',
      cta: 'Shop Laptops',
      accent: 'Grade A Quality',
      imageLocal: 'images/hero/hero-1.svg',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Built for Coders, Designers, and Founders',
      description: 'Thin-and-light ultrabooks with pro warranties and zero hidden issues.',
      cta: 'Pick Your Build',
      accent: 'Ready to Work',
      imageLocal: 'images/hero/hero-2.svg',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Save Big. Stay Sustainable.',
      description: 'Laptop-only catalog with transparent grading, fresh batteries, and doorstep delivery.',
      cta: 'See Deals',
      accent: 'Up to 60% Off',
      imageLocal: 'images/hero/hero-3.svg',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80'
    }
  ],
  stats: [
    { icon: '😊', label: 'Products Sold', value: '80K+' },
    { icon: '🚚', label: 'Pincodes Delivered', value: '20000+' },
    { icon: '🌍', label: 'CO₂ Reduced', value: '18 Kt' },
    { icon: '⭐', label: 'Google Rating', value: '4.3 (3.8K+)' }
  ],
  trendingTitle: 'Trending Laptops for Work, Study & Play',
  products: [
    {
      title: 'MacBook Air M1 | 13” Retina | 8GB / 256GB | Space Grey',
      price: '₹56,999',
      mrp: '₹92,900',
      badge: '39% off',
      stock: 'In stock (54 units)',
      imageLocal: 'images/products/product-1.svg',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Lenovo ThinkPad X1 Carbon | i7 10th Gen | 14” FHD | Backlit KB',
      price: '₹48,449',
      mrp: '₹1,19,999',
      badge: '60% off',
      stock: 'In stock (72 units)',
      imageLocal: 'images/products/product-2.svg',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Dell XPS 13 | i7 11th Gen | 16GB | 512GB SSD | InfinityEdge',
      price: '₹62,249',
      mrp: '₹1,38,900',
      badge: '55% off',
      stock: 'In stock (31 units)',
      imageLocal: 'images/products/product-3.svg',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'HP Envy x360 2-in-1 | Ryzen 5 | Touch | 8GB / 512GB SSD',
      price: '₹49,999',
      mrp: '₹98,999',
      badge: '50% off',
      stock: 'In stock (86 units)',
      imageLocal: 'images/products/product-4.svg',
      image: 'https://images.unsplash.com/photo-1527443224154-d1af0e9864b4?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'ASUS ROG Zephyrus G14 | Ryzen 9 | RTX 3060 | 144Hz',
      price: '₹94,499',
      mrp: '₹1,89,999',
      badge: '50% off',
      stock: 'In stock (19 units)',
      imageLocal: 'images/products/product-5.svg',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Acer Swift 3 | Ryzen 7 | 8GB | 512GB SSD | 1.2kg Ultrabook',
      price: '₹38,449',
      mrp: '₹82,999',
      badge: '54% off',
      stock: 'In stock (142 units)',
      imageLocal: 'images/products/product-6.svg',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80'
    }
  ],
  catalog: [
    {
      title: 'MacBook Air M1 (2020) • 8GB / 256GB • Space Grey',
      price: '₹56,999',
      mrp: '₹92,900',
      badge: 'Grade A',
      stock: '54 in stock',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80',
      tags: ['macbook', 'products', 'students', 'store'],
      blurb: 'Fanless performance, Retina display, all-day battery for everyday work.'
    },
    {
      title: 'MacBook Air M2 (2022) • 8GB / 512GB • Midnight',
      price: '₹72,499',
      mrp: '₹1,19,900',
      badge: 'Like New',
      stock: '36 in stock',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      tags: ['macbook', 'products', 'students', 'dream-on', 'store'],
      blurb: 'MagSafe, 1080p camera, and silent M2 power for creators on the go.'
    },
    {
      title: 'MacBook Pro 14” M1 Pro • 16GB / 512GB • Silver',
      price: '₹1,09,999',
      mrp: '₹1,94,900',
      badge: 'Pro Pick',
      stock: '18 in stock',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=900&q=80',
      tags: ['macbook', 'products', 'company', 'dream-on', 'store'],
      blurb: 'ProMotion display, triple mics, and fast media engines for edits.'
    },
    {
      title: 'MacBook Pro 16” M1 Max • 32GB / 1TB • Space Grey',
      price: '₹1,72,499',
      mrp: '₹3,39,900',
      badge: 'Flagship',
      stock: '11 in stock',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
      tags: ['macbook', 'dream-on', 'company'],
      blurb: 'Mini-LED display, 32-core GPU, and studio speakers for serious production.'
    },
    {
      title: 'MacBook Pro 13” (2020) • i5 • 16GB / 512GB',
      price: '₹64,999',
      mrp: '₹1,22,900',
      badge: 'Value Pro',
      stock: '42 in stock',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
      tags: ['macbook', 'products', 'bulk-orders', 'company'],
      blurb: 'Reliable Intel build with Magic Keyboard and Thunderbolt 3.'
    },
    {
      title: 'MacBook Air (2019) • i5 • 8GB / 256GB',
      price: '₹44,499',
      mrp: '₹92,900',
      badge: 'Student Fav',
      stock: '63 in stock',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80',
      tags: ['macbook', 'students', 'bulk-orders', 'store'],
      blurb: 'Featherweight with Retina display and fresh battery health.'
    },
    {
      title: 'Dell XPS 13 9310 • i7 11th • 16GB / 512GB',
      price: '₹62,249',
      mrp: '₹1,38,900',
      badge: 'Slim Power',
      stock: '28 in stock',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'company', 'dream-on', 'store'],
      blurb: 'InfinityEdge display, carbon fiber palm rest, and Thunderbolt 4.'
    },
    {
      title: 'Lenovo ThinkPad X1 Carbon Gen 10 • i7 • 16GB / 512GB',
      price: '₹48,449',
      mrp: '₹1,19,999',
      badge: 'IT Approved',
      stock: '72 in stock',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'company', 'bulk-orders', 'store'],
      blurb: 'MIL-STD build, spill-resistant keyboard, and rapid charge.'
    },
    {
      title: 'HP Envy x360 2-in-1 • Ryzen 5 • 8GB / 512GB',
      price: '₹49,999',
      mrp: '₹98,999',
      badge: '2-in-1',
      stock: '86 in stock',
      image: 'https://images.unsplash.com/photo-1527443224154-d1af0e9864b4?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'students', 'more', 'store'],
      blurb: 'Touchscreen flexibility with fast SSD and strong battery life.'
    },
    {
      title: 'ASUS ROG Zephyrus G14 • Ryzen 9 • RTX 3060',
      price: '₹94,499',
      mrp: '₹1,89,999',
      badge: 'Gaming',
      stock: '19 in stock',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'dream-on', 'more'],
      blurb: '144Hz display, vapor chamber cooling, and creator-ready GPU.'
    },
    {
      title: 'Acer Swift 3 • Ryzen 7 • 8GB / 512GB • 1.2kg',
      price: '₹38,449',
      mrp: '₹82,999',
      badge: 'Featherlight',
      stock: '142 in stock',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'students', 'more'],
      blurb: 'Featherweight build with Wi‑Fi 6 and long-life battery.'
    },
    {
      title: 'HP EliteBook 840 G7 • i5 10th • 16GB / 512GB',
      price: '₹41,999',
      mrp: '₹94,999',
      badge: 'Business',
      stock: '103 in stock',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'company', 'bulk-orders', 'store'],
      blurb: 'On-site friendly with LTE option, privacy shutter, and Sure View.'
    },
    {
      title: 'Dell Latitude 5420 • i7 11th • 16GB / 512GB',
      price: '₹45,499',
      mrp: '₹1,08,999',
      badge: 'Bulk Ready',
      stock: '190 in stock',
      image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'bulk-orders', 'company', 'store'],
      blurb: 'Fleet-friendly with USB-C docking, Wi-Fi 6, and strong thermals.'
    }
  ],
  categories: [
    { label: 'MacBook', imageLocal: 'images/categories/category-1.svg', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80' },
    { label: 'Ultrabooks', imageLocal: 'images/categories/category-2.svg', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80' },
    { label: 'Business Laptops', imageLocal: 'images/categories/category-3.svg', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80' },
    { label: 'Gaming Laptops', imageLocal: 'images/categories/category-4.svg', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=300&q=80' },
    { label: '2-in-1 Convertibles', imageLocal: 'images/categories/category-5.svg', image: 'https://images.unsplash.com/photo-1527443224154-d1af0e9864b4?auto=format&fit=crop&w=300&q=80' },
    { label: 'Student Deals', imageLocal: 'images/categories/category-6.svg', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=300&q=80' }
  ],
  deals: [
    {
      title: 'Under ₹40,000',
      subtitle: 'Value Essentials',
      desc: 'Daily drivers with SSDs and fresh batteries',
      imageLocal: 'images/deals/deal-1.svg',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Under ₹60,000',
      subtitle: 'Premium Ultrabooks',
      desc: 'Featherweight laptops with all-day endurance',
      imageLocal: 'images/deals/deal-2.svg',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Under ₹80,000',
      subtitle: 'Creator Setups',
      desc: 'Color-accurate displays and fast SSDs',
      imageLocal: 'images/deals/deal-3.svg',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Above ₹80,000',
      subtitle: 'Flagship & Gaming',
      desc: 'Maxed-out GPUs, vapor chamber cooling, pro care',
      imageLocal: 'images/deals/deal-4.svg',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    }
  ],
  hexatrust: {
    title: 'HexaTrust - Certified Refurbished Laptops',
    desc: 'Every laptop is keyboard-to-battery tested, data wiped, and backed with a clear warranty so you can upgrade with confidence.',
    bullets: [
      'Price value guarantee',
      'Fresh thermal paste & battery health check',
      '1 year warranty',
      'Secure data sanitization',
      'Like new assured',
      'Performance guarantee'
    ],
    imageLocal: 'images/hex/hex-1.jpg',
    image: 'images/hex/hex-1.jpg'
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
      title: 'How to Pick the Right Refurbished Laptop for Work',
      date: 'April 19, 2025',
      imageLocal: 'images/blogs/blog-1.svg',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'MacBook vs Windows: Refurb Deals Compared',
      date: 'September 02, 2025',
      imageLocal: 'images/blogs/blog-2.svg',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Buying Guide: Best Student Laptops Under ₹50K',
      date: 'March 20, 2025',
      imageLocal: 'images/blogs/blog-3.svg',
      image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Creator Laptops: Displays, GPUs, and Ports Explained',
      date: 'January 27, 2025',
      imageLocal: 'images/blogs/blog-4.svg',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    }
  ],
  insider: [
    {
      title: 'Pro-Grade Refurb Labs',
      desc: 'ESD-safe benches and OEM parts to bring laptops back to life.',
      imageLocal: 'images/insider/insider-1.svg',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: '45-Point Laptop QC',
      desc: 'Displays, hinges, thermals, battery health, and keyboard feel checked.',
      imageLocal: 'images/insider/insider-2.svg',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Sustainability Meets Speed',
      desc: 'We pair circular economy thinking with fast, modern laptops.',
      imageLocal: 'images/insider/insider-3.svg',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80'
    }
  ],
  testimonials: [
    {
      name: 'Rakesh',
      role: 'IT Lead',
      quote: 'ThinkPad arrived spotless with a fresh battery and top-tier keyboard feel.',
      imageLocal: 'images/testimonials/testimonial-1.svg',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Ali',
      role: 'Entrepreneur',
      quote: 'Picked a MacBook Air for travel; performance and price hit the sweet spot.',
      imageLocal: 'images/testimonials/testimonial-2.svg',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Nishant',
      role: 'Student',
      quote: 'Got a Ryzen ultrabook with warranty—perfect for classes and coding.',
      imageLocal: 'images/testimonials/testimonial-3.svg',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Prerna',
      role: 'Designer',
      quote: 'XPS 13 had zero scratches and a color-accurate panel for my Figma work.',
      imageLocal: 'images/testimonials/testimonial-4.svg',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80'
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
      title: 'Inside Our Laptop Refurb Process',
      thumbLocal: 'images/videos/video-1.svg',
      thumb: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Why Refurbished Laptops Make Sense',
      thumbLocal: 'images/videos/video-2.svg',
      thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80'
    }
  ],
  faqs: [
    {
      question: 'Why choose refurbished laptops?',
      answer: 'Refurbished laptops offer premium performance at a fraction of the cost with quality checks and warranties.'
    },
    {
      question: 'What are the benefits of buying refurbished laptops from Dadar Electronics?',
      answer: 'You get certified devices, transparent grading, assured warranties, and sustainable tech choices.'
    },
    {
      question: 'How do you support buyers after purchase?',
      answer: 'Every laptop includes clear warranty terms, easy returns, and quick-response support channels.'
    },
    {
      question: 'How do I return or cancel a laptop order?',
      answer: 'Use your order dashboard or reach out via chat/WhatsApp within the return window to initiate cancellations.'
    }
  ],
  footer: {
    about: ['About Us', 'About Dadar Electronics', 'Refurbishing Story', 'Our Story'],
    products: ['Ultrabooks', 'Gaming Laptops', '2-in-1', 'MacBook', 'Windows Laptops'],
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

function slugify(label) {
  return (label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'products';
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
  mainLinks.innerHTML = nav.links
    .map((link) => {
      const slug = slugify(link);
      return `<a class="nav-link" data-slug="${slug}" href="list.html?category=${slug}">${link}</a>`;
    })
    .join('');
  mainLinks.querySelectorAll('.nav-link').forEach((link) =>
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goToCategory(link.dataset.slug);
    })
  );
  renderDrawer(nav);
}

function renderHero(slides) {
  heroSlides = slides || [];
  if (!heroSlides.length) return;
  heroSlider.innerHTML = heroSlides
    .map(
      (slide) => `
      <div class="hero-slide" style="background: linear-gradient(180deg, rgba(31,26,38,0.95), rgba(196,70,88,0.9));">
        <div class="copy">
          <h1>${slide.title}</h1>
          <p>${slide.description}</p>
          <div class="hero-accent accent">${slide.accent}</div>
          <button class="hero-cta">${slide.cta} →</button>
        </div>
        <div class="visual">
          ${imageTag(slide.imageLocal, slide.image, slide.title)}
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
        ${imageTag(p.imageLocal, p.image, p.title)}
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
        ${imageTag(c.imageLocal, c.image, c.label)}
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
        ${imageTag(d.imageLocal, d.image, d.title)}
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
  hexImage.src = hex.imageLocal ? versioned(hex.imageLocal) : hex.image;
  hexImage.alt = hex.title;
  if (hex.imageLocal && hex.image) {
    hexImage.onerror = () => {
      hexImage.onerror = null;
      hexImage.src = hex.image;
    };
  } else {
    hexImage.onerror = null;
  }
}

function renderInsider(slides) {
  insiderTrack.innerHTML = slides
    .map(
      (s) => `
      <div class="story-card">
        ${imageTag(s.imageLocal, s.image, s.title)}
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
        ${imageTag(b.imageLocal, b.image, b.title)}
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
        ${imageTag(t.imageLocal, t.image, t.name)}
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
  const bg = video.thumbLocal || video.thumb;
  videoFeature.querySelector('.video-overlay').style.backgroundImage = `url('${bg}')`;
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
      <button class="drawer-item" type="button" data-slug="${slugify(link)}">
        <span>${link}</span>
        <span>⌄</span>
      </button>
    `
    )
    .join('');
  drawerList.querySelectorAll('.drawer-item').forEach((item) =>
    item.addEventListener('click', () => {
      goToCategory(item.dataset.slug);
      toggleDrawer(false);
    })
  );
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
