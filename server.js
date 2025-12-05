const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const content = {
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
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Built for Coders, Designers, and Founders',
      description: 'Thin-and-light ultrabooks with pro warranties and zero hidden issues.',
      cta: 'Pick Your Build',
      accent: 'Ready to Work',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Save Big. Stay Sustainable.',
      description: 'Laptop-only catalog with transparent grading, fresh batteries, and doorstep delivery.',
      cta: 'See Deals',
      accent: 'Up to 60% Off',
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
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Lenovo ThinkPad X1 Carbon | i7 10th Gen | 14” FHD | Backlit KB',
      price: '₹48,449',
      mrp: '₹1,19,999',
      badge: '60% off',
      stock: 'In stock (72 units)',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Dell XPS 13 | i7 11th Gen | 16GB | 512GB SSD | InfinityEdge',
      price: '₹62,249',
      mrp: '₹1,38,900',
      badge: '55% off',
      stock: 'In stock (31 units)',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'HP Envy x360 2-in-1 | Ryzen 5 | Touch | 8GB / 512GB SSD',
      price: '₹49,999',
      mrp: '₹98,999',
      badge: '50% off',
      stock: 'In stock (86 units)',
      image: 'https://images.unsplash.com/photo-1527443224154-d1af0e9864b4?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'ASUS ROG Zephyrus G14 | Ryzen 9 | RTX 3060 | 144Hz',
      price: '₹94,499',
      mrp: '₹1,89,999',
      badge: '50% off',
      stock: 'In stock (19 units)',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Acer Swift 3 | Ryzen 7 | 8GB | 512GB SSD | 1.2kg Ultrabook',
      price: '₹38,449',
      mrp: '₹82,999',
      badge: '54% off',
      stock: 'In stock (142 units)',
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
    { label: 'MacBook', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80' },
    { label: 'Ultrabooks', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80' },
    { label: 'Business Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80' },
    { label: 'Gaming Laptops', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=300&q=80' },
    { label: '2-in-1 Convertibles', image: 'https://images.unsplash.com/photo-1527443224154-d1af0e9864b4?auto=format&fit=crop&w=300&q=80' },
    { label: 'Student Deals', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=300&q=80' }
  ],
  deals: [
    {
      title: 'Under ₹40,000',
      subtitle: 'Value Essentials',
      desc: 'Daily drivers with SSDs and fresh batteries',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Under ₹60,000',
      subtitle: 'Premium Ultrabooks',
      desc: 'Featherweight laptops with all-day endurance',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Under ₹80,000',
      subtitle: 'Creator Setups',
      desc: 'Color-accurate displays and fast SSDs',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Above ₹80,000',
      subtitle: 'Flagship & Gaming',
      desc: 'Maxed-out GPUs, vapor chamber cooling, pro care',
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
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80'
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
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'MacBook vs Windows: Refurb Deals Compared',
      date: 'September 02, 2025',
      image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Buying Guide: Best Student Laptops Under ₹50K',
      date: 'March 20, 2025',
      image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Creator Laptops: Displays, GPUs, and Ports Explained',
      date: 'January 27, 2025',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    }
  ],
  insider: [
    {
      title: 'Pro-Grade Refurb Labs',
      desc: 'ESD-safe benches and OEM parts to bring laptops back to life.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: '45-Point Laptop QC',
      desc: 'Displays, hinges, thermals, battery health, and keyboard feel checked.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Sustainability Meets Speed',
      desc: 'We pair circular economy thinking with fast, modern laptops.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80'
    }
  ],
  testimonials: [
    {
      name: 'Rakesh',
      role: 'IT Lead',
      quote: 'ThinkPad arrived spotless with a fresh battery and top-tier keyboard feel.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Ali',
      role: 'Entrepreneur',
      quote: 'Picked a MacBook Air for travel; performance and price hit the sweet spot.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Nishant',
      role: 'Student',
      quote: 'Got a Ryzen ultrabook with warranty—perfect for classes and coding.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Prerna',
      role: 'Designer',
      quote: 'XPS 13 had zero scratches and a color-accurate panel for my Figma work.',
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
      thumb: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Why Refurbished Laptops Make Sense',
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

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/content', (req, res) => {
  res.json(content);
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
