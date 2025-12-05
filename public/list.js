const listingLinks = document.getElementById('listing-links');
const listingHeading = document.getElementById('listing-heading');
const listingDesc = document.getElementById('listing-desc');
const listingChip = document.getElementById('listing-chip');
const listingEyebrow = document.getElementById('listing-eyebrow');
const listingGrid = document.getElementById('listing-grid');
const listingCount = document.getElementById('listing-count');
const listingTagline = document.getElementById('listing-tagline');
const listingEmpty = document.getElementById('listing-empty');

const ASSET_VERSION = 'v2';

const params = new URLSearchParams(window.location.search);
const initialSlug = params.get('category') || 'products';

const categoryCopy = {
  macbook: {
    eyebrow: 'Apple Certified Picks',
    title: 'MacBook Lineup',
    desc: 'Air and Pro models with fresh batteries, grade transparency, and doorstep delivery.',
    chip: 'M-series & Intel',
    tagline: 'Every MacBook passes 45-point QC and data sanitization.'
  },
  products: {
    eyebrow: 'All Laptops',
    title: 'Refurbished Laptops',
    desc: 'A single place for every certified laptop we stock—MacBook, business, gaming, and student picks.',
    chip: 'Curated Catalog',
    tagline: 'Sorted for speed, battery health, and price-to-performance.'
  },
  students: {
    eyebrow: 'Study-Ready Picks',
    title: 'Student Laptops',
    desc: 'Lightweight builds with long battery life and value pricing for study and campus life.',
    chip: 'Value + Battery',
    tagline: 'Discounted pricing with warranty for students.'
  },
  'bulk-orders': {
    eyebrow: 'Procurement Desk',
    title: 'Bulk Orders',
    desc: 'Fleet-ready laptops with uniform configs, health reports, and rapid deployment support.',
    chip: 'Volume Friendly',
    tagline: 'Talk to us for volume pricing and asset tagging.'
  },
  'dream-on': {
    eyebrow: 'Flagship Zone',
    title: 'Dream On',
    desc: 'Premium creator and gaming laptops with the best displays, GPUs, and thermals.',
    chip: 'Flagship Spec',
    tagline: 'Pick from the most powerful, well-kept hardware.'
  },
  company: {
    eyebrow: 'IT Approved',
    title: 'Company Ready',
    desc: 'Business-class laptops with security features, docks, and on-site friendly builds.',
    chip: 'Business Class',
    tagline: 'Built for reliability, privacy, and long-term fleets.'
  },
  store: {
    eyebrow: 'Ready to Ship',
    title: 'Store Stock',
    desc: 'Units physically in-store and ready for same-day dispatch or pickup.',
    chip: 'Same-Day Dispatch',
    tagline: 'Limited quantities that can leave the store today.'
  },
  more: {
    eyebrow: 'More to Explore',
    title: 'More Laptops',
    desc: '2-in-1s, featherlight ultrabooks, and specialty builds beyond the usual picks.',
    chip: 'Special Picks',
    tagline: 'Niche builds with big value and warranty.'
  }
};

const fallbackContent = {
  nav: {
    links: ['MacBook', 'Products', 'Students', 'Bulk Orders', 'Dream On', 'Company', 'Store', 'More']
  },
  catalog: [
    {
      title: 'MacBook Air M1 (2020) • 8GB / 256GB • Space Grey',
      price: '₹56,999',
      mrp: '₹92,900',
      badge: 'Grade A',
      stock: '54 in stock',
      imageLocal: 'images/catalog/item-1.svg',
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
      imageLocal: 'images/catalog/item-2.svg',
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
      imageLocal: 'images/catalog/item-3.svg',
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
      imageLocal: 'images/catalog/item-4.svg',
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
      imageLocal: 'images/catalog/item-5.svg',
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
      imageLocal: 'images/catalog/item-6.svg',
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
      imageLocal: 'images/catalog/item-7.svg',
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
      imageLocal: 'images/catalog/item-8.svg',
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
      imageLocal: 'images/catalog/item-9.svg',
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
      imageLocal: 'images/catalog/item-10.svg',
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
      imageLocal: 'images/catalog/item-11.svg',
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
      imageLocal: 'images/catalog/item-12.svg',
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
      imageLocal: 'images/catalog/item-12.svg',
      image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80',
      tags: ['products', 'bulk-orders', 'company', 'store'],
      blurb: 'Fleet-friendly with USB-C docking, Wi-Fi 6, and strong thermals.'
    }
  ]
};

function slugify(label) {
  return (label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'products';
}

function formatTag(tag) {
  return (tag || '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function versioned(path) {
  if (!path) return '';
  return path.includes('?') ? path : `${path}?v=${ASSET_VERSION}`;
}

function resolveImage(local, remote) {
  return {
    src: local ? versioned(local) : remote || '',
    fallback: local && remote ? remote : ''
  };
}

async function loadContent() {
  try {
    const res = await fetch('/api/content', { cache: 'no-store' });
    if (!res.ok) throw new Error('No API available');
    const data = await res.json();
    render(data.nav, data.catalog || []);
  } catch (err) {
    console.warn('Falling back to static listing content', err);
    render(fallbackContent.nav, fallbackContent.catalog);
  }
}

function render(nav, catalog) {
  const activeSlug = categoryCopy[initialSlug] ? initialSlug : 'products';
  renderNav(nav.links || [], activeSlug);
  renderListing(catalog || [], activeSlug);
}

function renderNav(links, activeSlug) {
  listingLinks.innerHTML = (links || [])
    .map((link) => {
      const slug = slugify(link);
      const activeClass = slug === activeSlug ? 'active' : '';
      return `<a class="${activeClass}" href="list.html?category=${slug}" data-slug="${slug}">${link}</a>`;
    })
    .join('');
}

function renderListing(catalog, activeSlug) {
  const copy = categoryCopy[activeSlug] || categoryCopy.products;
  const filtered =
    activeSlug === 'products'
      ? catalog
      : catalog.filter((item) => (item.tags || []).map((t) => t.toLowerCase()).includes(activeSlug));

  listingEyebrow.textContent = copy.eyebrow;
  listingHeading.textContent = copy.title;
  listingDesc.textContent = copy.desc;
  listingChip.textContent = copy.chip;
  listingTagline.textContent = copy.tagline;
  listingCount.textContent = `${filtered.length || 0} laptops`;
  listingEmpty.hidden = filtered.length > 0;
  document.title = `${copy.title} | Dadar Electronics`;

  listingGrid.innerHTML = filtered
    .map((item) => {
      const img = resolveImage(item.imageLocal, item.image);
      const fallbackAttr = img.fallback ? ` onerror="this.onerror=null;this.src='${img.fallback}'"` : '';
      const extraTags = (item.tags || [])
        .filter((tag) => tag !== activeSlug)
        .slice(0, 3)
        .map((tag) => `<span class="tag">${formatTag(tag)}</span>`)
        .join('');

      return `
        <article class="listing-card">
          <img src="${img.src}" alt="${item.title}"${fallbackAttr}>
          <div class="body">
            <div class="meta">
              <span class="badge">${item.badge || 'Featured'}</span>
              <span class="stock">${item.stock || ''}</span>
            </div>
            <h3>${item.title}</h3>
            <p class="listing-desc">${item.blurb || ''}</p>
            <div class="price-row">
              <span class="price">${item.price}</span>
              <span class="mrp">${item.mrp}</span>
            </div>
            <div class="tags">${extraTags}</div>
            <button onclick="window.location.href='tel:+919035009233'">Talk to Sales</button>
          </div>
        </article>
      `;
    })
    .join('');
}

loadContent();
