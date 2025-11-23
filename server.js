const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const content = {
  nav: {
    logoText: 'Dadar Electronics',
    phone: '+91-9035009233',
    links: [
      'MacBook',
      'Products',
      'Students',
      'Bulk Orders',
      'Dream On',
      'Company',
      'Store',
      'More'
    ]
  },
  heroSlides: [
    {
      title: '#1 India’s Most Trusted PC Refurbisher',
      description: 'Awarded by Recommerce for elevating refurbished tech with sustainable style and reliable performance.',
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
      description: 'Pick from curated laptops, desktops, and mini PCs tuned for work, study, and creators.',
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
      title: 'Dell OptiPlex 3080 Mini PC | Intel i5-10th Gen | Win 11 Pro',
      price: '₹23,549',
      mrp: '₹78,653',
      badge: '70% off',
      stock: 'In stock (113 units)',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
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
      title: 'Lenovo ThinkCentre M910 | Mini PC | Intel i5-6th Gen | Win 10 Pro',
      price: '₹11,949',
      mrp: '₹39,099',
      badge: '70% off',
      stock: 'In stock (114 units)',
      image: 'https://images.unsplash.com/photo-1587202372775-98973f961c78?auto=format&fit=crop&w=900&q=80'
    }
  ],
  categories: [
    { label: 'Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80' },
    { label: 'Desktops', image: 'https://images.unsplash.com/photo-1587202372775-98973f961c78?auto=format&fit=crop&w=300&q=80' },
    { label: 'Mini PC', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80' },
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
    products: ['Laptops', 'Desktops', 'Mini PC', 'All in One', 'Monitors'],
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
