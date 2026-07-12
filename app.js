/**
 * AuraMarket - E-Commerce Consumer Storefront Engine
 * Built using Vanilla JS. Runs all 28 views as a responsive client-side SPA.
 */

// ==========================================
// 1. DYNAMIC PRODUCT DATABASE
// ==========================================
const CATEGORIES = {
  fashion: { label: "Fashion Collection", metricType: "Apparel", sizes: ["S", "M", "L", "XL"] },
  mobile: { label: "Mobile Phones", metricType: "Core Speed", sizes: ["128GB", "256GB", "512GB"] },
  electronics: { label: "Laptops & Audio", metricType: "Acoustics/Graphics", sizes: ["Pro Specs", "Ultra Specs", "Default Specs"] },
  grocery: { label: "Fresh Grocery", metricType: "Freshness", sizes: ["1-Pack", "3-Pack", "500g", "1kg"] },
  beauty: { label: "Cosmetics & Beauty", metricType: "Volume", sizes: ["30ml", "50ml", "100ml"] },
  furniture: { label: "Design Furniture", metricType: "Weight Capacity", sizes: ["Max 100kg", "Max 150kg", "Max 200kg"] },
  sports: { label: "Sports & Gear", metricType: "Equipment Size", sizes: ["Standard", "Pro", "Aerodynamic", "Medium"] }
};

const SEEDS = {
  fashion: {
    adjectives: ["Premium", "Designer", "Classic", "Urban", "Vintage", "Luxury", "Slim-Fit", "Casual", "Tailored", "Waterproof", "Cozy", "Modern", "Retro", "Athletic", "Heavyweight", "Bohemian", "Formal", "Sleek", "Textured", "Handcrafted"],
    nouns: ["Denim Hoodie", "Leather Jacket", "Velvet Dress", "Wool Coat", "Silk Shirt", "Cargo Pants", "Chino Shorts", "Windbreaker", "Trench Coat", "Knit Sweater", "Blazer Jacket", "Cardigan", "Cargo Vest", "Puffer Coat", "Active Joggers", "Linen Shirt", "Running Socks", "Leather Belt", "Canvas Sneaker", "Winter Scarf"],
    tech: ["Organic Cotton", "Double-Stitched", "YKK Zippers", "Hi-Elasticity", "Waterproof membrane", "Full-Grain Leather", "Satin Liners", "Merino Wool", "Concealed Zips", "French Terry", "Italian Silk", "Reinforced Seams", "Relaxed Fit", "Flex Thread", "Breathable Mesh", "Recycled Poly", "Vegan Leather", "Cashmere Blend", "Thermal Layer", "Windproof Shield"]
  },
  mobile: {
    adjectives: ["Aura", "Galaxy", "Pixel", "Horizon", "Nebula", "Nova", "Stellar", "Quantum", "Apex", "Matrix", "Titanium", "Sigma", "Vector", "Cosmic", "Alpha", "Omega", "Infinity", "Helios", "Zenith", "Prime"],
    nouns: ["Phone 15 Pro", "Fold S-Line", "Pro Horizon", "Lite Sync", "Ultra Glide", "Flex Core", "Pocket Mini", "Edge Max", "Prime X", "One Z", "Tab Pro", "Pad Horizon", "Fold Duo", "Symmetric X", "Compact 8", "Stellar Phone", "Quantum Fold", "Apex Edge", "Vibe Flip", "Nexus Prime"],
    tech: ["Titanium Body", "3nm Compute Chip", "120Hz OLED", "Liquid Retina", "Dual Battery System", "gRPC Syncing", "Gorilla Glass Victus", "AI Tensor Core", "5x Optical Zoom", "Active Cooling Vents", "Wireless Charging", "IP68 Waterproof", "Neural Engine", "5G HyperSync", "UWB Positioning", "Under-display Camera", "Biometric Scan", "Fast Charge 100W", "Dual SIM Standby", "Hardware Cryptography"]
  },
  electronics: {
    adjectives: ["Carbon", "Studio", "UltraWide", "Wireless", "Mechanical", "Noise-Isolating", "Portable", "Ergonomic", "Quad-Core", "Bluetooth", "Tactile", "Haptic", "Precision", "Modular", "Dynamic", "High-Resolution", "Spatial", "Multi-Point", "Active", "Pro"],
    nouns: ["MacBook Pro", "ANC Headphones", "Curved Monitor", "Mechanical Keyboard", "Gaming Mouse", "Bluetooth Speaker", "Solid State Drive", "Smart Watch", "VR Headset", "USB Hub", "Desktop Dock", "Noise Mic", "Power Bank", "Sound Bar", "Projector Pro", "Drawing Tablet", "Earbuds Lite", "Router Hub", "Keypad Elite", "Capture Card"],
    tech: ["M3 Pro Processor", "Liquid Retina XDR", "Unibody Design", "40mm Dome Drivers", "Hi-Res Audio", "Memory Foam Pads", "34-inch IPS Panel", "144Hz Refresh", "USB-C Power Delivery", "Cherry MX Switches", "16000 DPI Sensor", "Bluetooth 5.3", "NVMe PCIe 4.0", "OLED Touch Bar", "Active Airflow", "CNC Aluminum", "Multi-device Pairing", "Spatial Tracking", "IPX7 Rating", "GaN Charger Tech"]
  },
  grocery: {
    adjectives: ["Organic", "Fresh", "Imported Premium", "Artisan", "Locally Sourced", "Raw", "Natural", "Sweet", "Ripe", "Handpicked", "Gluten-Free", "Cold-Pressed", "Whole Grain", "Unsalted", "Sun-Dried", "Pure", "Gourmet", "Stone-Ground", "Non-GMO", "Eco-Friendly"],
    nouns: ["Haas Avocados", "Coffee Beans", "Citrus Oranges", "Honey Jar", "Almond Butter", "Whole Wheat Bread", "Green Tea Bags", "Dark Chocolate Bar", "Olive Oil Bottle", "Greek Yogurt", "Chia Seeds", "Maple Syrup", "Blueberries Pack", "Quinoa Bag", "Peanut Butter", "Oat Milk Carton", "Sea Salt Jar", "Granola Pack", "Apple Cider Vinegar", "Basmati Rice"],
    tech: ["Rich Nutrients", "Pesticide-Free", "Freshly Sourced", "Shade-Grown", "Single-Origin", "Grade-A Raw", "Stone-Ground", "High-Fiber", "Antioxidant Rich", "Extra Virgin", "Live Cultures", "Cold-Pressed", "Slow-Roasted", "No Preservatives", "Naturally Dried", "Unfiltered", "Organic Certified", "Fair-Trade", "Non-GMO Verified", "BPA-Free Package"]
  },
  beauty: {
    adjectives: ["Advanced Hydration", "Organic Clay", "Glow", "Anti-Aging", "Gentle Cleansing", "Radiance", "Vitamin C", "Matte", "Mineral", "Peptide", "Soothing", "Brightening", "Vegan", "Botanical", "Intense Recovery", "Pore-Minimizing", "Calming", "Firming", "Repairing", "Clarifying"],
    nouns: ["Facial Serum", "Face Mask", "Lipstick", "Moisturizer", "Eye Cream", "Cleansing Gel", "Night Cream", "Face Oil", "Sunscreen Lotion", "Exfoliating Scrub", "Toner Splash", "Lip Balm", "Face Primer", "Blush Cream", "Foundation Liquid", "Micellar Water", "Peel Solution", "Body Butter", "Hand Cream", "Hair Mask"],
    tech: ["Hyaluronic Acid", "Vitamin B5", "Fragrance-Free", "Detoxifying", "Collagen Peptide", "Retinol Infused", "SPF 50 Protection", "Cruelty-Free", "Natural Extracts", "Aloe Vera Base", "Niacinamide", "Salicylic Acid", "Shea Butter", "Rosehip Seed Oil", "Tea Tree Extract", "Jojoba Esters", "Ceramides", "Antioxidant CoQ10", "Coconut Water", "Kaolin Clay"]
  },
  furniture: {
    adjectives: ["Minimalist Solid", "Premium Ergonomic", "Modular Slate", "Vintage Oak", "Contemporary", "Industrial", "Walnut", "Scandinavian", "Mid-Century", "Luxurious", "Space-Saving", "Floating", "Reclining", "Padded", "Sleek", "Distressed", "Convertible", "Tufted", "Geometric", "Rustic"],
    nouns: ["Dining Table", "Office Chair", "Grey Sofa", "Bookshelf", "Coffee Table", "Desk Lamp", "Wardrobe", "Sideboard", "Recliner Chair", "Bed Frame", "Nightstand", "Standing Desk", "Ottoman Seat", "Media Console", "Accent Mirror", "Coat Rack", "Bar Stool", "Shoe Bench", "Console Table", "Drawer Dresser"],
    tech: ["Solid Oak Wood", "Powder-Coated Steel", "High-Elasticity Mesh", "Pneumatic Cylinder", "Adjustable Lumbar", "Slate Fabric", "Walnut Veneer", "Tempered Glass", "Memory Foam Support", "LED Smart Control", "Dovetail Joints", "Soft-Close Slides", "High-Density Foam", "Eco-Varnish", "Brass Accents", "Stain-Resistant", "Solid Pine Slats", "Hydraulic Lift", "Water-Repellent Poly", "Hidden Cable Routing"]
  },
  sports: {
    adjectives: ["Carbon Road", "Hand-Stitched Leather", "High-Performance", "Aerodynamic", "Water-Resistant", "Thermoregulating", "Adjustable", "Heavy-Duty", "Foldable", "Weighted", "Ergonomic", "Shock-Absorbing", "Reflective", "Quick-Dry", "Polarized", "Anti-Slip", "Breathable", "Compact", "Insulated", "Telescopic"],
    nouns: ["Racer Bicycle", "Soccer Ball", "Fitness Tracker", "Yoga Mat", "Dumbbells Set", "Running Shoes", "Tennis Racket", "Backpack", "Sleeping Bag", "Golf Clubs Set", "Water Bottle", "Smart Scale", "Jump Rope", "Resistance Bands", "Swim Goggles", "Hiking Poles", "Ski Helmet", "Gym Duffel", "Camping Tent", "Bicycle Helmet"],
    tech: ["Carbon Fiber Frame", "Electronic Shifting", "Hydraulic Brakes", "Grade-A Latex bladder", "Smart PPG Sensor", "High-Grip TPE", "Neoprene Coating", "Memory cushioning", "Graphite Composite", "Ripstop Nylon", "Thermal Insulation", "Titanium shaft", "Double-Wall Steel", "Bio-impedance Sensors", "Ball Bearing Hub", "Thermoregulating Liner", "Anti-fog coating", "Shock absorption EPS", "Aerodynamic venting", "Dri-Fit technology"]
  }
};

const IMAGE_POOLS = {
  fashion: [
    "photo-1483985988355-763728e1935b",
    "photo-1490481651871-ab68de25d43d",
    "photo-1515886657613-9f3515b0c78f",
    "photo-1434389677669-e08b4cac3105",
    "photo-1539109136881-3be0616acf4b",
    "photo-1554412933-514a83d2f3c8",
    "photo-1578587018452-892bacefd3f2",
    "photo-1544441893-675973e31985"
  ],
  mobile: [
    "photo-1511707171634-5f897ff02aa9",
    "photo-1598327105666-5b89351aff97",
    "photo-1565849906660-bf9693630c88",
    "photo-1580910051074-3eb694886505",
    "photo-1592899677977-9c10ca588bbd",
    "photo-1574755393849-623942496936",
    "photo-1616348436168-de43ad0db179"
  ],
  electronics: [
    "photo-1531297484001-80022131f5a1",
    "photo-1484788984921-03950022c9ef",
    "photo-1542751371-adc38448a05e",
    "photo-1505740420928-5e560c06d30e",
    "photo-1527443224154-c4a3942d3acf",
    "photo-1587829741301-dc798b83add3",
    "photo-1618424181497-157f25b6ddd5"
  ],
  grocery: [
    "photo-1540420773420-3366772f4999",
    "photo-1447933601403-0c6688de566e",
    "photo-1610832958506-ee563361f155",
    "photo-1587049352846-4a222e784d38",
    "photo-1563245372-f21724e3856d",
    "photo-1506806732259-39c2d0268443",
    "photo-1550258987-190a2d41a8ba"
  ],
  beauty: [
    "photo-1556228720-195a672e8a03",
    "photo-1596462502278-27bfdc403348",
    "photo-1522335789203-aabd1fc54bc9",
    "photo-1601049541289-9b1b7bbbfe19",
    "photo-1608248597279-f99d160bfcbc",
    "photo-1570172619644-dfd03ed5d881"
  ],
  furniture: [
    "photo-1524758631624-e2822e304c36",
    "photo-1505693416388-ac5ce068fe85",
    "photo-1586023492125-27b2c045efd7",
    "photo-1567538096630-e0c55bd6374c",
    "photo-1592078615290-033ee584e267",
    "photo-1581428982868-e410dd047a90"
  ],
  sports: [
    "photo-1485968579580-b6d095142e6e",
    "photo-1508098682722-e99c43a406b2",
    "photo-1571019613454-1cb2f99b2d8b",
    "photo-1599058917212-d750089bc07e",
    "photo-1517838277536-f5f99be501cd",
    "photo-1506784983877-45594efa4cbe"
  ]
};

const PROJECTS_DATABASE = [];
let idCounter = 1;

Object.entries(CATEGORIES).forEach(([catKey, catInfo]) => {
  const seed = SEEDS[catKey];
  const images = IMAGE_POOLS[catKey];
  for (let i = 0; i < 20; i++) {
    const adj = seed.adjectives[i % seed.adjectives.length];
    const noun = seed.nouns[i % seed.nouns.length];
    const title = `${adj} ${noun}`;
    
    const basePrice = Math.round((Math.random() * (120 - 15) + 15) * 10) / 10;
    const priceMultiplier = catKey === 'mobile' ? 8 : 
                            catKey === 'electronics' ? 6 :
                            catKey === 'furniture' ? 5 :
                            catKey === 'sports' ? 4 : 1;
    const price = Math.round(basePrice * priceMultiplier * 10) / 10;

    const techItems = [
      seed.tech[i % seed.tech.length],
      seed.tech[(i + 5) % seed.tech.length],
      seed.tech[(i + 12) % seed.tech.length]
    ];
    
    const desc = `Selected premium ${title.toLowerCase()} configured with ${techItems[0].toLowerCase()} and ${techItems[1].toLowerCase()} design elements.`;
    const longDesc = `Experience state-of-the-art styling and structural integrity with our new ${title.toLowerCase()}. Engineered using high-grade ${techItems[0].toLowerCase()}, and refined with ${techItems[1].toLowerCase()} and ${techItems[2].toLowerCase()} specs to ensure premium performance, durability, and visual aesthetic excellence. Perfect for daily high-demand routines.`;
    
    const metricVal = catKey === 'mobile' ? `${(2.5 + Math.random()).toFixed(1)}GHz` : 
                      catKey === 'electronics' ? `${Math.round(20 + Math.random() * 40)}ms` :
                      catKey === 'fashion' ? "Apparel Style" : "Premium Grade";

    const imgId = images[i % images.length];
    const imageUrl = `https://images.unsplash.com/${imgId}?w=400&auto=format&fit=crop&q=80`;

    PROJECTS_DATABASE.push({
      id: idCounter++,
      title: title,
      category: catKey,
      categoryLabel: catInfo.label,
      price: price,
      tech: techItems,
      image: imageUrl,
      description: desc,
      longDescription: longDesc,
      metrics: {
        rating: Math.floor(Math.random() * 2) + 4,
        difficulty: catInfo.metricType,
        speed: metricVal,
        size: catInfo.sizes[i % catInfo.sizes.length]
      }
    });
  }
});

// ==========================================
// 2. STATE MANAGER
// ==========================================
class StateManager {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('devstore_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('devstore_wishlist')) || [];
    this.compare = JSON.parse(localStorage.getItem('devstore_compare')) || [];
    this.currentUser = JSON.parse(localStorage.getItem('devstore_user')) || null;
    this.couponCode = localStorage.getItem('devstore_coupon') || null;
  }

  save() {
    localStorage.setItem('devstore_cart', JSON.stringify(this.cart));
    localStorage.setItem('devstore_wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('devstore_compare', JSON.stringify(this.compare));
    localStorage.setItem('devstore_user', JSON.stringify(this.currentUser));
    if (this.couponCode) {
      localStorage.setItem('devstore_coupon', this.couponCode);
    } else {
      localStorage.removeItem('devstore_coupon');
    }
    this.updateBadges();
  }

  addToCart(projectId) {
    if (!this.cart.includes(projectId)) {
      this.cart.push(projectId);
      this.save();
      app.showToast("Product added to Cart!", "success");
    } else {
      app.showToast("Product already in Cart", "warning");
    }
  }

  removeFromCart(projectId) {
    this.cart = this.cart.filter(id => id !== projectId);
    this.save();
    app.showToast("Removed from Cart", "info");
  }

  toggleWishlist(projectId) {
    const idx = this.wishlist.indexOf(projectId);
    if (idx === -1) {
      this.wishlist.push(projectId);
      app.showToast("Added to Wishlist", "success");
    } else {
      this.wishlist.splice(idx, 1);
      app.showToast("Removed from Wishlist", "info");
    }
    this.save();
  }

  toggleCompare(projectId) {
    const idx = this.compare.indexOf(projectId);
    if (idx === -1) {
      if (this.compare.length >= 3) {
        app.showToast("Can only compare up to 3 products", "warning");
        return;
      }
      this.compare.push(projectId);
      app.showToast("Added to Compare Stacks", "success");
    } else {
      this.compare.splice(idx, 1);
      app.showToast("Removed from Compare", "info");
    }
    this.save();
  }

  applyCoupon(code) {
    if (code.toUpperCase() === "AURA20") {
      this.couponCode = "AURA20";
      this.save();
      app.showToast("Discount Applied: 20% Off Coupon!", "success");
      return true;
    }
    app.showToast("Invalid Coupon Code", "error");
    return false;
  }

  updateBadges() {
    document.getElementById('cart-count').textContent = this.cart.length;
    document.getElementById('wishlist-count').textContent = this.wishlist.length;
    document.getElementById('compare-count').textContent = this.compare.length;
  }
}

// ==========================================
// 3. APPLICATION INITIALIZATION & ROUTER
// ==========================================
class AppController {
  constructor() {
    this.state = new StateManager();
    this.activeView = null;
    this.featuredSlideInterval = null;
    this.countdownInterval = null;
    this.draggedTaskId = null;
    
    // Bind Event Listeners
    window.addEventListener('hashchange', () => this.handleRouting());
    window.addEventListener('load', () => this.init());
  }

  init() {
    // Hide splash screen after delay
    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.style.opacity = '0';
        setTimeout(() => splash.style.display = 'none', 500);
      }
    }, 1500);

    // Initial theme check
    const savedTheme = localStorage.getItem('devstore_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);

    // Register UI listeners
    document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
    document.getElementById('search-nav-btn').addEventListener('click', () => this.openSearchModal());
    document.getElementById('close-search-modal').addEventListener('click', () => this.closeSearchModal());
    document.getElementById('close-qv-modal').addEventListener('click', () => this.closeQVModal());
    
    // AI search inputs
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => this.handleSearchInput());
    document.getElementById('voice-search-btn').addEventListener('click', () => this.triggerVoiceSearch());

    // Back to top scroll listener
    const btt = document.getElementById('back-to-top');
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / docHeight) * 100;
      document.getElementById('scroll-progress').style.width = progress + '%';
      
      const header = document.getElementById('site-header');
      if (scrolled > 50) {
        header.classList.add('scrolled');
        btt.classList.add('show');
      } else {
        header.classList.remove('scrolled');
        btt.classList.remove('show');
      }
    });

    this.state.updateBadges();
    this.handleRouting();
  }

  // Hash-based router with animations
  handleRouting() {
    // Clear page active intervals
    if (this.featuredSlideInterval) clearInterval(this.featuredSlideInterval);
    if (this.countdownInterval) clearInterval(this.countdownInterval);

    const hash = window.location.hash || '#/home';
    const mainView = document.getElementById('app-view');

    // Fade-out transition
    mainView.style.opacity = '0';
    mainView.style.transform = 'translateY(15px)';
    mainView.style.transition = 'opacity 0.25s, transform 0.25s';

    setTimeout(() => {
      // Clear navigation active classes
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

      // Check detail routes
      if (hash.startsWith('#/details/')) {
        const id = parseInt(hash.replace('#/details/', ''));
        this.renderDetailsView(id);
      } else if (hash.startsWith('#/category/')) {
        const cat = hash.replace('#/category/', '');
        this.renderCategoryView(cat);
      } else {
        // Normal template routing
        const route = hash.replace('#/', '');
        const template = document.getElementById(`tpl-${route}`);
        
        if (template) {
          mainView.innerHTML = '';
          mainView.appendChild(template.content.cloneNode(true));
          
          // Set active menu item
          const navEl = document.getElementById(`nav-${route}`);
          if (navEl) navEl.classList.add('active');
          
          this.initViewComponents(route);
        } else {
          // Fallback home
          window.location.hash = '#/home';
        }
      }

      // Fade-in transition
      mainView.style.opacity = '1';
      mainView.style.transform = 'translateY(0)';
      
      // Trigger scroll reveals
      setTimeout(() => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(r => r.classList.add('active'));
        this.initCounters();
      }, 50);
    }, 250);
  }

  // Initialize specific page JS scripts
  initViewComponents(route) {
    if (route === 'home') {
      this.initHomeHeroSlider();
      this.renderFeaturedCatalog();
    } else if (route === 'categories') {
      this.renderCategoriesGrid();
    } else if (route === 'listing') {
      this.initProjectListing();
    } else if (route === 'wishlist') {
      this.renderWishlistView();
    } else if (route === 'compare') {
      this.renderCompareView();
    } else if (route === 'cart') {
      this.renderCartView();
    } else if (route === 'checkout') {
      this.initCheckoutForm();
    } else if (route === 'payment') {
      this.initPaymentMock();
    } else if (route === 'success') {
      this.triggerCelebration();
    } else if (route === 'login') {
      this.initAuthForms('login');
    } else if (route === 'register') {
      this.initAuthForms('register');
    } else if (route === 'forgot') {
      this.initAuthForms('forgot');
    } else if (route === 'profile') {
      this.initProfileDashboard();
    } else if (route === 'offers') {
      this.initOffersCountdown();
    } else if (route === 'contact') {
      this.initContactCanvasMap();
    } else if (route === 'admin') {
      this.initAdminDashboard();
    } else if (route === 'faq') {
      this.initFaqAccordion();
    }
  }

  // ==========================================
  // CORE COMPONENT METHODS
  // ==========================================

  // Toast systems
  showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast glass-panel ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    
    // Slide in
    setTimeout(() => toast.classList.add('show'), 50);
    
    // Fade out and remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  // Theme Toggler
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('devstore_theme', newTheme);
    this.updateThemeIcon(newTheme);
    this.showToast(`Switched to ${newTheme} mode`, "success");
  }

  updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (theme === 'dark') {
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  }

  // Count Up Counters
  initCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(c => {
      const target = parseInt(c.getAttribute('data-target'));
      const duration = 1200; // ms
      const startTime = performance.now();
      
      const updateCount = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const count = Math.floor(progress * target);
        
        c.textContent = count;
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          c.textContent = target;
        }
      };
      requestAnimationFrame(updateCount);
    });
  }

  // 3D Card Tilt Effect
  applyTiltEffect() {
    const cards = document.querySelectorAll('.product-card, .category-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        const tiltX = (yc - y) / 12;
        const tiltY = (x - xc) / 12;
        
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }

  // Parabolic fly item animation
  animateFlyToCart(event) {
    const button = event.currentTarget;
    const cartIcon = document.querySelector('a[href="#/cart"]');
    
    if (!button || !cartIcon) return;
    
    const btnRect = button.getBoundingClientRect();
    const iconRect = cartIcon.getBoundingClientRect();
    
    const flyer = document.createElement('div');
    flyer.id = 'flying-cart-item';
    flyer.innerHTML = '🛒';
    flyer.style.top = `${btnRect.top + btnRect.height/2 - 20}px`;
    flyer.style.left = `${btnRect.left + btnRect.width/2 - 20}px`;
    
    document.body.appendChild(flyer);
    
    // Parabolic transition path
    setTimeout(() => {
      flyer.style.transform = `translate(${iconRect.left - btnRect.left}px, ${iconRect.top - btnRect.top}px) scale(0.3)`;
      flyer.style.opacity = '0';
      
      setTimeout(() => {
        flyer.remove();
        // Shake badge animation
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => cartIcon.style.transform = 'scale(1)', 200);
      }, 800);
    }, 50);
  }

  // ==========================================
  // PAGE-SPECIFIC INITIALIZERS
  // ==========================================

  // Home Hero Slider
  initHomeHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIdx = 0;

    const showSlide = (idx) => {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      
      slides[idx].classList.add('active');
      dots[idx].classList.add('active');
      currentIdx = idx;
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    // Auto rotate every 6 seconds
    this.featuredSlideInterval = setInterval(() => {
      const nextIdx = (currentIdx + 1) % slides.length;
      showSlide(nextIdx);
    }, 6000);
  }

  // Home Featured Grid
  renderFeaturedCatalog() {
    const target = document.getElementById('home-featured-grid');
    if (!target) return;
    
    // Pick 3 high-value features
    const featured = PROJECTS_DATABASE.slice(3, 6);
    target.innerHTML = featured.map(p => this.createProductCardMarkup(p)).join('');
    this.applyTiltEffect();
  }

  // Categories Grid
  renderCategoriesGrid() {
    const target = document.getElementById('categories-grid');
    if (!target) return;

    const categories = [
      { key: "fashion", title: "Fashion Collection", desc: "Premium fabrics, seasonal leathers, and luxury streetwear.", color: "#7b2cbf" },
      { key: "mobile", title: "Mobile Phones", desc: "Flagship smartphones with titanium frames and computational cameras.", color: "#3a86c8" },
      { key: "electronics", title: "Laptops & Audio", desc: "High compute laptops, gaming curved monitors, and ANC studio headphones.", color: "#38b000" },
      { key: "grocery", title: "Fresh Grocery", desc: "Fresh newly picked organic avocados and premium roasted coffee beans.", color: "#f77f00" },
      { key: "beauty", title: "Cosmetics & Beauty", desc: "Hyaluronic hydration skin serums, makeup lipsticks and clays.", color: "#f72585" },
      { key: "furniture", title: "Design Furniture", desc: "Minimalist solid tables, premium ergonomic postured desk chairs.", color: "#f9c74f" }
    ];

    target.innerHTML = categories.map(cat => `
      <div class="category-card glass-panel spotlight-hover" onclick="window.location.hash='#/category/${cat.key}'">
        <div class="category-card-bg" style="background: linear-gradient(135deg, ${cat.color}33, #121620);"></div>
        <div class="category-card-content">
          <h3 style="font-family:var(--font-heading); margin-bottom:0.5rem;">${cat.title}</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary);">${cat.desc}</p>
        </div>
      </div>
    `).join('');
    this.applyTiltEffect();
  }

  // Dynamic Category View Renderer
  renderCategoryView(categoryKey) {
    const mainView = document.getElementById('app-view');
    const template = document.getElementById(`tpl-category-${categoryKey}`);
    
    if (template) {
      mainView.innerHTML = '';
      mainView.appendChild(template.content.cloneNode(true));
      
      // Inject matching products
      const grid = document.getElementById(`${categoryKey}-projects-grid`);
      if (grid) {
        const matches = PROJECTS_DATABASE.filter(p => p.category === categoryKey);
        grid.innerHTML = matches.map(p => this.createProductCardMarkup(p)).join('');
        this.applyTiltEffect();
      }

      // Page animations triggers
      if (categoryKey === 'fashion') {
        this.initFashionFloatingLeaves();
      } else if (categoryKey === 'grocery') {
        this.initGroceryFloatingFruits();
      } else if (categoryKey === 'beauty') {
        this.initBeautyFloatingBubbles();
      }
    } else {
      window.location.hash = '#/categories';
    }
  }

  // Float items generator
  initFashionFloatingLeaves() {
    const target = document.getElementById('leaves-target');
    if (!target) return;
    for (let i = 0; i < 15; i++) {
      const leaf = document.createElement('div');
      leaf.className = 'leaf-particle';
      leaf.innerHTML = '✨';
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.top = `${Math.random() * 100}%`;
      leaf.style.animationDelay = `${Math.random() * 8}s`;
      target.appendChild(leaf);
    }
  }

  initGroceryFloatingFruits() {
    const target = document.getElementById('fruits-target');
    if (!target) return;
    const fruits = ['🥑', '🍍', '🍎', '🍋', '🍇'];
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      particle.className = 'fruit-particle';
      particle.textContent = fruits[i % fruits.length];
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      target.appendChild(particle);
    }
  }

  initBeautyFloatingBubbles() {
    const target = document.getElementById('bubbles-target');
    if (!target) return;
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      const size = Math.random() * 30 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 8 + 5}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      target.appendChild(bubble);
    }
  }

  // Product Listing (Search & Filters)
  initProjectListing() {
    const grid = document.getElementById('listing-projects-grid');
    const filterTags = document.getElementById('filter-tech-tags');
    const sortSelect = document.getElementById('filter-sort');
    const clearBtn = document.getElementById('btn-clear-filters');

    if (!grid) return;

    // Get all unique departments
    const allDepartments = [...new Set(PROJECTS_DATABASE.map(p => p.categoryLabel))];
    filterTags.innerHTML = allDepartments.map(dep => `
      <label class="checkbox-label">
        <input type="checkbox" value="${dep}" class="tag-filter-check">
        <span class="checkbox-custom"></span>
        ${dep}
      </label>
    `).join('');

    // Update filter logic
    const filterProjects = () => {
      const activeDeps = Array.from(document.querySelectorAll('.tag-filter-check:checked')).map(el => el.value);
      let list = [...PROJECTS_DATABASE];

      if (activeDeps.length > 0) {
        list = list.filter(p => activeDeps.includes(p.categoryLabel));
      }

      // Sort
      const sort = sortSelect.value;
      if (sort === 'price-low') {
        list.sort((a,b) => a.price - b.price);
      } else if (sort === 'price-high') {
        list.sort((a,b) => b.price - a.price);
      } else if (sort === 'name') {
        list.sort((a,b) => a.title.localeCompare(b.title));
      }

      grid.innerHTML = list.map(p => this.createProductCardMarkup(p)).join('');
      this.applyTiltEffect();
    };

    // Watch events
    document.querySelectorAll('.tag-filter-check').forEach(chk => chk.addEventListener('change', filterProjects));
    sortSelect.addEventListener('change', filterProjects);
    clearBtn.addEventListener('click', () => {
      document.querySelectorAll('.tag-filter-check').forEach(chk => chk.checked = false);
      sortSelect.value = 'default';
      filterProjects();
    });

    filterProjects();

    // Mock infinite scroll trigger
    const loader = document.getElementById('infinite-scroll-trigger');
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loader.textContent = "All products loaded.";
      }
    }, { threshold: 0.5 });
    observer.observe(loader);
  }

  // Wishlist View
  renderWishlistView() {
    const grid = document.getElementById('wishlist-grid');
    const emptyMsg = document.getElementById('wishlist-empty');
    if (!grid) return;

    if (this.state.wishlist.length === 0) {
      grid.style.display = 'none';
      emptyMsg.style.display = 'block';
    } else {
      grid.style.display = 'grid';
      emptyMsg.style.display = 'none';
      const items = PROJECTS_DATABASE.filter(p => this.state.wishlist.includes(p.id));
      grid.innerHTML = items.map(p => this.createProductCardMarkup(p)).join('');
      this.applyTiltEffect();
    }
  }

  // Compare View
  renderCompareView() {
    const container = document.getElementById('compare-table-container');
    if (!container) return;

    if (this.state.compare.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-muted);">No products selected to compare. Select compare icon on products list cards.</div>`;
      return;
    }

    const items = PROJECTS_DATABASE.filter(p => this.state.compare.includes(p.id));
    
    container.innerHTML = `
      <div class="compare-table-wrapper glass-panel">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Features</th>
              ${items.map(item => `<th>${item.title}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Department</td>
              ${items.map(item => `<td>${item.categoryLabel}</td>`).join('')}
            </tr>
            <tr>
              <td>Retail Price</td>
              ${items.map(item => `<td style="color:var(--accent-cyan); font-weight:bold;">$${item.price.toFixed(2)}</td>`).join('')}
            </tr>
            <tr>
              <td>Primary Composition</td>
              ${items.map(item => `<td>${item.tech.slice(0,2).join(', ')}</td>`).join('')}
            </tr>
            <tr>
              <td>Parameters / Rating</td>
              ${items.map(item => `<td>${item.metrics.speed}</td>`).join('')}
            </tr>
            <tr>
              <td>Dimensions / Weight</td>
              ${items.map(item => `<td>${item.metrics.size}</td>`).join('')}
            </tr>
            <tr>
              <td>Action</td>
              ${items.map(item => `
                <td>
                  <button class="btn-primary" onclick="app.state.addToCart(${item.id}); app.animateFlyToCart(event);" style="padding:0.4rem 0.8rem; font-size:0.8rem;">Add to Cart</button>
                  <button class="btn-secondary" onclick="app.state.toggleCompare(${item.id}); app.handleRouting();" style="padding:0.4rem 0.8rem; font-size:0.8rem; margin-top:0.5rem;">Remove</button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  // Cart Inquiry Basket
  renderCartView() {
    const list = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountEl = document.getElementById('cart-discount');
    const totalEl = document.getElementById('cart-total');

    if (!list) return;

    if (this.state.cart.length === 0) {
      list.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-muted);">Your Shopping Cart is empty.</div>`;
      subtotalEl.textContent = "$0.00";
      discountEl.textContent = "$0.00";
      totalEl.textContent = "$0.00";
      return;
    }

    const items = PROJECTS_DATABASE.filter(p => this.state.cart.includes(p.id));
    
    // Draw items
    list.innerHTML = items.map(item => `
      <div class="cart-item" id="cart-item-${item.id}">
        <div class="cart-item-img">📦</div>
        <div style="flex-grow:1;">
          <h4 style="font-family:var(--font-heading);">${item.title}</h4>
          <p style="font-size:0.8rem; color:var(--text-secondary);">${item.categoryLabel}</p>
        </div>
        <div style="font-weight:bold; color:var(--accent-cyan);">$${item.price.toFixed(2)}</div>
        <button onclick="app.removeItemFromCart(${item.id})" style="color:var(--text-muted); font-size:1.2rem; cursor:pointer;" title="Remove Item">&times;</button>
      </div>
    `).join('');

    // Calculate rates
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;
    if (this.state.couponCode === "AURA20") {
      discount = subtotal * 0.20; // 20% discount
    }

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    discountEl.textContent = `-$${discount.toFixed(2)}`;
    totalEl.textContent = `$${(subtotal - discount).toFixed(2)}`;

    // Apply coupon handler
    document.getElementById('btn-apply-coupon').onclick = () => {
      const code = document.getElementById('cart-coupon-input').value;
      if (this.state.applyCoupon(code)) {
        this.renderCartView();
      }
    };
  }

  removeItemFromCart(id) {
    const el = document.getElementById(`cart-item-${id}`);
    if (el) {
      el.classList.add('removing');
      setTimeout(() => {
        this.state.removeFromCart(id);
        this.renderCartView();
      }, 300);
    }
  }

  // Checkout Multi-step
  initCheckoutForm() {
    const s1 = document.getElementById('checkout-step-1');
    const s2 = document.getElementById('checkout-step-2');
    const s3 = document.getElementById('checkout-step-3');

    const node1 = document.getElementById('step-node-1');
    const node2 = document.getElementById('step-node-2');
    const node3 = document.getElementById('step-node-3');

    document.getElementById('btn-next-step-1').onclick = () => {
      if (document.getElementById('co-name').value && document.getElementById('co-email').value) {
        s1.style.display = 'none';
        s2.style.display = 'block';
        node1.classList.add('completed');
        node2.classList.add('active');
      } else {
        this.showToast("Please fill address details", "warning");
      }
    };

    document.getElementById('btn-prev-step-2').onclick = () => {
      s2.style.display = 'none';
      s1.style.display = 'block';
      node1.classList.remove('completed');
      node2.classList.remove('active');
    };

    document.getElementById('btn-next-step-2').onclick = () => {
      s2.style.display = 'none';
      s3.style.display = 'block';
      node2.classList.add('completed');
      node3.classList.add('active');
      
      // Render summary review
      const name = document.getElementById('co-name').value;
      const email = document.getElementById('co-email').value;
      const sub = document.getElementById('co-subject').value;
      const speed = document.getElementById('co-notes').value;
      const items = PROJECTS_DATABASE.filter(p => this.state.cart.includes(p.id));

      document.getElementById('checkout-review-summary').innerHTML = `
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <p><b>Recipient Name:</b> ${name}</p>
          <p><b>Notification Email:</b> ${email}</p>
          <p><b>Delivery Address:</b> ${sub}</p>
          <p><b>Selected Transit:</b> ${speed.toUpperCase()}</p>
          <p><b>Purchased Items:</b> ${items.map(i => i.title).join(', ')}</p>
        </div>
      `;
    };

    document.getElementById('btn-prev-step-3').onclick = () => {
      s3.style.display = 'none';
      s2.style.display = 'block';
      node2.classList.remove('completed');
      node3.classList.remove('active');
    };
  }

  // Payment mock fields
  initPaymentMock() {
    const nameInput = document.getElementById('pay-holder');
    const numInput = document.getElementById('pay-number');
    const codeSpan = document.getElementById('pay-card-num');
    const holdSpan = document.getElementById('pay-card-holder');

    nameInput.addEventListener('input', (e) => {
      holdSpan.textContent = e.target.value || "Your Name";
    });

    numInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      let formatted = val.match(/.{1,4}/g)?.join(' ') || '';
      e.target.value = formatted;
      codeSpan.textContent = formatted || "•••• •••• •••• ••••";
    });

    document.getElementById('payment-form').onsubmit = (e) => {
      e.preventDefault();
      this.state.cart = [];
      this.state.save();
      window.location.hash = "#/success";
    };
  }

  // Detailed Product View
  renderDetailsView(id) {
    const mainView = document.getElementById('app-view');
    const project = PROJECTS_DATABASE.find(p => p.id === id);
    if (!project) {
      window.location.hash = '#/listing';
      return;
    }

    mainView.innerHTML = `
      <div class="view-section reveal active">
        <a href="#/listing" style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:2rem; font-size:0.9rem; color:var(--text-secondary);">
          &larr; Back to Catalog
        </a>
        
        <div class="details-layout">
          <!-- Left: 360 viewer & Gallery -->
          <div>
            <!-- Gallery Magnifier Screen -->
            <div class="gallery-zoom-container" id="zoom-container">
              <img src="${project.image}" alt="${project.title}" class="gallery-zoom-img" style="width:100%; height:100%; object-fit:cover; border-radius:12px;" id="main-product-img">
              <div class="zoom-lens" id="zoom-lens"></div>
            </div>
            
            <div class="details-gallery">
              <div class="gallery-thumb active" id="thumb-main">🖼️ Grid</div>
              <div class="gallery-thumb" id="thumb-rotator">🔄 360° Rotator</div>
            </div>

            <!-- Draggable 360 Isometric Diagram viewer canvas (switched via thumb-rotator) -->
            <div class="viewer-360-container" id="rotator-container" style="display:none; margin-top:1rem;">
              <span class="viewer-label">Drag horizontally to rotate component specs</span>
              <canvas id="canvas-360" width="400" height="300" style="max-width:100%;"></canvas>
            </div>
          </div>

          <!-- Right: Details contents -->
          <div class="glass-panel" style="padding:2.5rem; height:fit-content;">
            <span style="font-size:0.8rem; text-transform:uppercase; color:var(--accent-cyan); font-weight:bold; letter-spacing:0.05em;">${project.categoryLabel}</span>
            <h2 style="font-size:2.2rem; margin-top:0.5rem; margin-bottom:1rem; font-family:var(--font-heading);">${project.title}</h2>
            <div style="font-size:1.5rem; font-weight:bold; color:var(--accent-cyan); margin-bottom:1.5rem;">$${project.price.toFixed(2)}</div>
            
            <p style="color:var(--text-secondary); margin-bottom:1.5rem;">${project.longDescription}</p>
            
            <h4 style="margin-bottom:0.75rem; font-size:0.95rem;">Key Specifications</h4>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:2rem;">
              ${project.tech.map(t => `<span class="glass-panel" style="padding:0.4rem 0.8rem; font-size:0.8rem; font-weight:bold; border-radius:20px;">${t}</span>`).join('')}
            </div>

            <div style="display:flex; gap:1rem; align-items:center;">
              <button class="btn-primary ripple-btn shine-effect" onclick="app.state.addToCart(${project.id}); app.animateFlyToCart(event);" style="flex:1;">Add to Cart</button>
              <button class="btn-secondary" onclick="app.state.toggleCompare(${project.id}); app.state.updateBadges();" style="padding:0.85rem;" title="Add to Compare">⚖️</button>
              <button class="btn-secondary" onclick="app.state.toggleWishlist(${project.id}); app.state.updateBadges();" style="padding:0.85rem;" title="Add to Wishlist">❤️</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Active Gallery selection switches
    const thumbMain = document.getElementById('thumb-main');
    const thumbRot = document.getElementById('thumb-rotator');
    const zoomCont = document.getElementById('zoom-container');
    const rotCont = document.getElementById('rotator-container');

    thumbMain.onclick = () => {
      thumbMain.classList.add('active');
      thumbRot.classList.remove('active');
      zoomCont.style.display = 'flex';
      rotCont.style.display = 'none';
    };

    thumbRot.onclick = () => {
      thumbRot.classList.add('active');
      thumbMain.classList.remove('active');
      zoomCont.style.display = 'none';
      rotCont.style.display = 'flex';
      this.init360Viewer();
    };

    this.initMagnifier();
  }

  // 360° Rotator Isometric components drawer
  init360Viewer() {
    const canvas = document.getElementById('canvas-360');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let angle = 0; // rotation angle in radians
    let isDragging = false;
    let startX = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);

      // Draw simulated isometric packaging box
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#00f2fe';
      
      // Bottom face
      ctx.beginPath();
      ctx.moveTo(-50, -25);
      ctx.lineTo(50, -25);
      ctx.lineTo(50, 25);
      ctx.lineTo(-50, 25);
      ctx.closePath();
      ctx.stroke();

      // Top face
      ctx.strokeStyle = '#9d4edd';
      ctx.beginPath();
      ctx.moveTo(-50, -75);
      ctx.lineTo(50, -75);
      ctx.lineTo(50, -25);
      ctx.lineTo(-50, -25);
      ctx.closePath();
      ctx.stroke();

      // Vertical connecting edges
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.moveTo(-50, -25); ctx.lineTo(-50, -75);
      ctx.moveTo(50, -25); ctx.lineTo(50, -75);
      ctx.moveTo(50, 25); ctx.lineTo(50, -25);
      ctx.moveTo(-50, 25); ctx.lineTo(-50, -25);
      ctx.stroke();

      ctx.restore();
    };

    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      angle += dx * 0.01;
      startX = e.clientX;
      draw();
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    draw();
  }

  // Magnifying lens zoom handler
  initMagnifier() {
    const container = document.getElementById('zoom-container');
    const lens = document.getElementById('zoom-lens');
    const img = document.getElementById('main-product-img');
    if (!container || !lens || !img) return;

    // Set background properties of the lens
    lens.style.backgroundImage = `url('${img.src}')`;
    lens.style.backgroundSize = `${container.offsetWidth * 2}px ${container.offsetHeight * 2}px`;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left - 50;
      let y = e.clientY - rect.top - 50;

      // Bound within container
      x = Math.max(0, Math.min(x, container.offsetWidth - 100));
      y = Math.max(0, Math.min(y, container.offsetHeight - 100));

      lens.style.display = 'block';
      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;

      // Scale background coordinates
      const px = -((x * 2) + 25);
      const py = -((y * 2) + 25);
      lens.style.backgroundPosition = `${px}px ${py}px`;
    });

    container.addEventListener('mouseleave', () => {
      lens.style.display = 'none';
    });
  }

  // AI Autocomplete suggestions
  openSearchModal() {
    const modal = document.getElementById('search-modal');
    modal.classList.add('active');
    document.getElementById('search-input').focus();
  }

  closeSearchModal() {
    document.getElementById('search-modal').classList.remove('active');
  }

  closeQVModal() {
    document.getElementById('quick-view-modal').classList.remove('active');
  }

  handleSearchInput() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const suggestions = document.getElementById('search-suggestions');
    if (!query) {
      suggestions.innerHTML = '';
      return;
    }

    // Filter projects matching search terms
    const matches = PROJECTS_DATABASE.filter(p => p.title.toLowerCase().includes(query) || p.tech.some(t => t.toLowerCase().includes(query)));
    
    if (matches.length === 0) {
      suggestions.innerHTML = `<div style="padding:1rem; color:var(--text-muted); font-size:0.9rem;">No products found.</div>`;
    } else {
      suggestions.innerHTML = matches.map(p => `
        <div style="padding:0.75rem; border-bottom:1px solid var(--border-glass); cursor:pointer; font-size:0.9rem; display:flex; justify-content:space-between;" onclick="window.location.hash='#/details/${p.id}'; app.closeSearchModal();">
          <span>${p.title} <b>(${p.categoryLabel})</b></span>
          <span style="color:var(--accent-cyan);">$${p.price.toFixed(2)}</span>
        </div>
      `).join('');
    }
  }

  triggerVoiceSearch() {
    this.showToast("Voice search activated. Speak name...", "success");
    setTimeout(() => {
      document.getElementById('search-input').value = "Denim Hoodie";
      this.handleSearchInput();
    }, 1500);
  }

  // Quick View Modal
  triggerQuickView(id) {
    const project = PROJECTS_DATABASE.find(p => p.id === id);
    const body = document.getElementById('qv-modal-body');
    
    body.innerHTML = `
      <h3 style="font-family:var(--font-heading); margin-bottom:1rem; font-size:1.75rem;">${project.title}</h3>
      <p style="color:var(--text-secondary); margin-bottom:1.5rem;">${project.longDescription}</p>
      
      <div class="grid-3" style="margin-bottom:2rem;">
        <div class="glass-panel" style="padding:1rem; text-align:center;">
          <div style="font-weight:bold; color:var(--accent-cyan); font-size:1.15rem;">${project.metrics.speed}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Param Metric</div>
        </div>
        <div class="glass-panel" style="padding:1rem; text-align:center;">
          <div style="font-weight:bold; color:var(--accent-purple); font-size:1.15rem;">${project.metrics.size}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Dimensions / Size</div>
        </div>
        <div class="glass-panel" style="padding:1rem; text-align:center;">
          <div style="font-weight:bold; color:var(--accent-pink); font-size:1.15rem;">${project.metrics.rating} Stars</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Quality Rating</div>
        </div>
      </div>

      <div style="display:flex; gap:1rem;">
        <button class="btn-primary" onclick="app.state.addToCart(${project.id}); app.closeQVModal();">Add to Cart</button>
        <button class="btn-secondary" onclick="app.closeQVModal()">Close</button>
      </div>
    `;
    
    document.getElementById('quick-view-modal').classList.add('active');
  }

  // ==========================================
  // AUTHS & REGISTERS
  // ==========================================
  initAuthForms(type) {
    if (type === 'login') {
      const form = document.getElementById('login-form');
      form.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;

        if (email && pass.length >= 6) {
          this.state.currentUser = { name: "Valued Customer", email: email };
          this.state.save();
          window.location.hash = "#/profile";
        } else {
          document.getElementById('login-email-group').classList.add('shake-error');
          document.getElementById('login-password-group').classList.add('shake-error');
          setTimeout(() => {
            document.getElementById('login-email-group').classList.remove('shake-error');
            document.getElementById('login-password-group').classList.remove('shake-error');
          }, 500);
          this.showToast("Invalid credentials (min password 6 chars)", "error");
        }
      };
    } else if (type === 'register') {
      const form = document.getElementById('register-form');
      const passInput = document.getElementById('reg-password');
      const bar = document.getElementById('reg-pw-bar');

      passInput.addEventListener('input', (e) => {
        const val = e.target.value;
        bar.className = 'strength-bar';
        if (val.length < 5) {
          bar.classList.add('weak');
        } else if (val.length < 8) {
          bar.classList.add('medium');
        } else {
          bar.classList.add('strong');
        }
      });

      form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        
        this.state.currentUser = { name: name, email: email };
        this.state.save();
        window.location.hash = "#/profile";
      };
    } else if (type === 'forgot') {
      const form = document.getElementById('forgot-form');
      form.onsubmit = (e) => {
        e.preventDefault();
        this.showToast("Reset link sent!", "success");
        setTimeout(() => window.location.hash = "#/login", 1500);
      };
    }
  }

  initProfileDashboard() {
    if (!this.state.currentUser) {
      window.location.hash = '#/login';
      return;
    }
    document.getElementById('prof-user-name').textContent = this.state.currentUser.name;
    document.getElementById('prof-user-email').textContent = this.state.currentUser.email;

    document.getElementById('btn-profile-logout').onclick = () => {
      this.state.currentUser = null;
      this.state.save();
      window.location.hash = '#/home';
    };
  }

  // Countdown timer offers
  initOffersCountdown() {
    // Generate mock cards
    const grid = document.getElementById('offers-grid');
    if (!grid) return;

    const deals = [
      { title: "Denim Jackets Special", discount: "20% OFF", cost: "Save on Fashion", duration: "Expires Soon" },
      { title: "Sound Audio Bundle", discount: "15% OFF", cost: "ANC Headphones", duration: "Limited Stock" },
      { title: "Ergonomic Chairs Deal", discount: "30% OFF", cost: "Postured Office Chairs", duration: "Weekend Sale" }
    ];

    grid.innerHTML = deals.map(d => `
      <div class="glass-panel shine-effect hover-lift" style="padding:2.5rem; text-align:center;">
        <span style="font-size:0.75rem; background:var(--accent-pink); padding:0.25rem 0.65rem; border-radius:20px; color:#fff; font-weight:bold;">${d.discount}</span>
        <h3 style="font-family:var(--font-heading); margin-top:1rem; margin-bottom:0.5rem;">${d.title}</h3>
        <div style="font-size:1.5rem; font-weight:bold; color:var(--accent-cyan); margin-bottom:1rem;">${d.cost}</div>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:1.5rem;">${d.duration}</p>
        <button class="btn-primary" onclick="app.showToast('Deal activated in basket!','success')">Claim Deal</button>
      </div>
    `).join('');

    // Timer calculation loop
    let duration = 3 * 3600 + 45 * 60 + 12; // 3h 45m 12s
    this.countdownInterval = setInterval(() => {
      if (duration <= 0) {
        clearInterval(this.countdownInterval);
        return;
      }
      duration--;
      const hrs = Math.floor(duration / 3600);
      const mins = Math.floor((duration % 3600) / 60);
      const secs = duration % 60;
      
      document.getElementById('timer-hours').textContent = String(hrs).padStart(2, '0');
      document.getElementById('timer-minutes').textContent = String(mins).padStart(2, '0');
      document.getElementById('timer-seconds').textContent = String(secs).padStart(2, '0');
    }, 1000);
  }

  // Interactive Office Latency Map Widget (Canvas)
  initContactCanvasMap() {
    const canvas = document.getElementById('canvas-map');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      const box = canvas.parentElement.getBoundingClientRect();
      canvas.width = box.width;
      canvas.height = 250;
    };
    resizeCanvas();

    const nodes = [
      { name: "East Hub Center", x: canvas.width * 0.25, y: canvas.height * 0.4, latency: 12 },
      { name: "Central sorting Facility", x: canvas.width * 0.55, y: canvas.height * 0.35, latency: 34 },
      { name: "West Dispatch Depot", x: canvas.width * 0.8, y: canvas.height * 0.65, latency: 78 }
    ];

    let hoverIdx = null;

    const drawMap = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid pattern lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let j = 0; j < canvas.height; j += 20) {
        ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(canvas.width, j); ctx.stroke();
      }

      // Draw connection routing paths
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      ctx.lineTo(nodes[1].x, nodes[1].y);
      ctx.lineTo(nodes[2].x, nodes[2].y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw router coordinate nodes
      nodes.forEach((n, idx) => {
        const isHovered = hoverIdx === idx;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isHovered ? 8 : 5, 0, Math.PI*2);
        ctx.fillStyle = isHovered ? '#00f2fe' : '#9d4edd';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.stroke();

        ctx.fillStyle = isHovered ? '#fff' : 'rgba(255,255,255,0.6)';
        ctx.font = '10px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(n.name, n.x, n.y - 12);
      });
    };

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found = null;
      nodes.forEach((n, idx) => {
        const dist = Math.hypot(n.x - mx, n.y - my);
        if (dist < 12) found = idx;
      });

      if (found !== hoverIdx) {
        hoverIdx = found;
        drawMap();
      }
    });

    canvas.addEventListener('click', () => {
      if (hoverIdx !== null) {
        this.showToast(`Edge transit latency: ${nodes[hoverIdx].latency}ms`, "info");
      }
    });

    drawMap();

    // Contact form submit trigger
    document.getElementById('contact-form').onsubmit = (e) => {
      e.preventDefault();
      this.showToast("Support ticket registered!", "success");
      document.getElementById('contact-form').reset();
    };
  }

  // Celebration Fireworks / Confetti using requestAnimationFrame
  triggerCelebration() {
    const canvas = document.getElementById('canvas-overlay');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#00f2fe', '#9d4edd', '#f72585', '#38b000', '#f77f00'];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.8,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 12 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
        alpha: 1,
        gravity: 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;

      particles.forEach(p => {
        if (p.alpha > 0) {
          active = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.alpha -= 0.015;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
          ctx.fillStyle = p.color;
          ctx.fill();
          ctx.restore();
        }
      });

      if (active) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animate();
  }

  // Admin Dashboard - Custom Canvas Charts
  initAdminDashboard() {
    const commitsCanvas = document.getElementById('admin-chart-commits');
    const visitorsCanvas = document.getElementById('admin-chart-visitors');

    if (!commitsCanvas || !visitorsCanvas) return;

    // Draw commits line chart
    const drawCommitsChart = () => {
      const ctx = commitsCanvas.getContext('2d');
      commitsCanvas.width = commitsCanvas.parentElement.clientWidth;
      commitsCanvas.height = 200;

      ctx.clearRect(0,0, commitsCanvas.width, commitsCanvas.height);
      
      const data = [120, 190, 300, 500, 200, 800, 940];
      const stepX = commitsCanvas.width / (data.length - 1);
      const scaleY = (commitsCanvas.height - 40) / Math.max(...data);

      // Gradient fill
      const grad = ctx.createLinearGradient(0,0,0, commitsCanvas.height);
      grad.addColorStop(0, 'rgba(0, 242, 254, 0.4)');
      grad.addColorStop(1, 'rgba(0, 242, 254, 0)');

      ctx.beginPath();
      ctx.moveTo(0, commitsCanvas.height);
      data.forEach((val, idx) => {
        ctx.lineTo(idx * stepX, commitsCanvas.height - val * scaleY - 10);
      });
      ctx.lineTo(commitsCanvas.width, commitsCanvas.height);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Line
      ctx.beginPath();
      data.forEach((val, idx) => {
        if (idx === 0) ctx.moveTo(0, commitsCanvas.height - val * scaleY - 10);
        else ctx.lineTo(idx * stepX, commitsCanvas.height - val * scaleY - 10);
      });
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 3;
      ctx.stroke();
    };

    // Draw visitors bar chart
    const drawVisitorsChart = () => {
      const ctx = visitorsCanvas.getContext('2d');
      visitorsCanvas.width = visitorsCanvas.parentElement.clientWidth;
      visitorsCanvas.height = 200;

      ctx.clearRect(0,0, visitorsCanvas.width, visitorsCanvas.height);

      const data = [45, 67, 89, 23];
      const labels = ["Fashion", "Mobile", "Electronics", "Furniture"];
      const barWidth = 40;
      const spacing = (visitorsCanvas.width - (barWidth * data.length)) / (data.length + 1);
      const scaleY = (visitorsCanvas.height - 50) / Math.max(...data);

      data.forEach((val, idx) => {
        const x = spacing + idx * (barWidth + spacing);
        const y = visitorsCanvas.height - val * scaleY - 20;
        const h = val * scaleY;

        ctx.fillStyle = '#9d4edd';
        ctx.fillRect(x, y, barWidth, h);

        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.font = '10px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(labels[idx], x + barWidth/2, visitorsCanvas.height - 5);
      });
    };

    drawCommitsChart();
    drawVisitorsChart();
    
    // Watch resize
    window.addEventListener('resize', () => {
      if (window.location.hash === '#/admin') {
        drawCommitsChart();
        drawVisitorsChart();
      }
    });
  }

  // Kanban Tasks Drag & Drop handlers
  handleDragStart(e) {
    this.draggedTaskId = e.target.id;
    e.dataTransfer.setData('text/plain', e.target.id);
  }

  handleDrop(e, targetColId) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain') || this.draggedTaskId;
    const task = document.getElementById(id);
    const col = document.getElementById(`kanban-${targetColId}`);
    
    if (task && col) {
      col.appendChild(task);
      this.showToast(`Order status updated to ${targetColId.toUpperCase()}`, "success");
    }
  }

  // FAQ Accordion Toggle helper
  initFaqAccordion() {
    const questions = [
      { q: "How long does standard delivery transit take?", a: "Standard mail delivery transitions packages through regional sorting depots within 3-5 business days. Delivery is completely free." },
      { q: "How do I claim a promotional flash code?", a: "Enter the code 'AURA20' in the Shopping Cart coupon section to apply a 20% discount on your estimated catalog order." },
      { q: "How does the 360° Rotator viewer operate?", a: "Click the 360° tab on a product's details page and drag horizontally with your pointer to inspect folding structures." }
    ];

    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = questions.map((item, idx) => `
      <div class="faq-item glass-panel" id="faq-item-${idx}">
        <div class="faq-header" onclick="app.toggleFaqAccordion(${idx})">
          <h4 style="font-family:var(--font-heading); font-size:1.05rem;">${item.q}</h4>
          <span class="faq-arrow">&darr;</span>
        </div>
        <div class="faq-content">
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6;">${item.a}</p>
        </div>
      </div>
    `).join('');
  }

  toggleFaqAccordion(idx) {
    const item = document.getElementById(`faq-item-${idx}`);
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    
    if (!isActive) {
      item.classList.add('active');
    }
  }

  // Helper: Product Card HTML generator
  createProductCardMarkup(project) {
    const inWishlist = this.state.wishlist.includes(project.id) ? 'active' : '';
    return `
      <div class="product-card glass-panel glow-border hover-lift" data-id="${project.id}">
        <div class="product-card-inner">
          <div class="card-img-wrapper" onclick="window.location.hash='#/details/${project.id}'">
            <img src="${project.image}" alt="${project.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover; border-radius:8px; position:absolute; inset:0;">
            <span class="card-tag">${project.categoryLabel}</span>
          </div>
          <span class="card-wishlist ${inWishlist}" onclick="event.stopPropagation(); app.state.toggleWishlist(${project.id}); this.classList.toggle('active'); this.classList.add('heart-pop'); setTimeout(() => this.classList.remove('heart-pop'), 400);">❤️</span>
          
          <div>
            <h4 class="product-title" onclick="window.location.hash='#/details/${project.id}'" style="cursor:pointer;">${project.title}</h4>
            <p class="product-meta">${project.description}</p>
          </div>

          <div class="product-footer">
            <div class="product-price">$${project.price.toFixed(2)}</div>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn-secondary" onclick="app.triggerQuickView(${project.id})" style="padding:0.4rem 0.65rem; font-size:0.75rem; border-radius:4px;">Quick View</button>
              <button class="btn-primary" onclick="app.state.addToCart(${project.id}); app.animateFlyToCart(event);" style="padding:0.4rem 0.65rem; font-size:0.75rem; border-radius:4px;">Add</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// Global instances
const app = new AppController();
window.app = app;
