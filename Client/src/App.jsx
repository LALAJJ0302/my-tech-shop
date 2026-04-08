import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css'
import ProjectDetail from './ProjectDetail';
import CVDetail from './CVDetail'; 

// Backend API Base URL
const API = 'http://localhost:5001/api'

// Define Product Categories and their UI metadata
const CATEGORIES = [
  { 
    name: 'Software', 
    id: 'soft-sec', 
    cls: 'link-soft', 
    label: 'ENTERPRISE SOLUTIONS', 
    desc: 'Scalable retail and management POS systems for modern business.',
    displayImage: '/VS Code Structure.png' 
  },
  { 
    name: 'Data', 
    id: 'data-sec', 
    cls: 'link-data', 
    label: 'DATA INTELLIGENCE', 
    desc: 'Transform raw metrics into actionable growth insights.',
    displayImage: '/IT ERD.png' 
  },
  { 
    name: 'iOS App', 
    id: 'ios-sec', 
    cls: 'link-ios', 
    label: 'APPLE ECOSYSTEM', 
    desc: 'Premium native iOS experiences built for high performance.',
    displayImage: '/Linc1.png' 
  }
]

export default function App() {
  // --- Application State ---
  const [currentPage, setCurrentPage] = useState('home');      // Controls view switching (home, detail, cv-detail)
  const [selectedCategory, setSelectedCategory] = useState(null); // Stores current category for the detail page
  const [projects, setProjects] = useState([])                 // Stores product data from backend
  const [cart, setCart] = useState([])                         // Stores current items in the shopping cart
  const [isCartOpen, setIsCartOpen] = useState(false)          // Controls cart sidebar visibility
  
  // Create refs for smooth scrolling to specific sections
  const refs = { Software: useRef(), Data: useRef(), 'iOS App': useRef() }

  // Initial data fetch on component mount
  useEffect(() => { fetchData() }, [])

  // Sync projects and cart data with the database
  const fetchData = async () => {
    try {
      const pRes = await axios.get(`${API}/projects`)
      const cRes = await axios.get(`${API}/cart`)
      setProjects(pRes.data)
      setCart(cRes.data)
    } catch (err) { console.error("API Error:", err) }
  }

  // Helper function: Maps raw titles to marketing skill names based on category
  const getDisplayTitle = (title, category) => {
    if (category === 'Software') return "Full-Stack Development";
    if (category === 'Data') return "Data Intelligence Service";
    if (category === 'iOS App') return "Premium iOS App Design";
    return title;
  }

  // Add item to cart and refresh data
  const addToCart = async (id) => {
    await axios.post(`${API}/cart`, { project_id: id })
    fetchData()
    setIsCartOpen(true) // Auto-open cart after adding
  }

  // Change quantity of items in cart (deletes if quantity becomes 0)
  const updateQty = async (id, newQty) => {
    if (newQty < 1) {
      deleteFromCart(id)
    } else {
      await axios.put(`${API}/cart/${id}`, { quantity: newQty })
      fetchData()
    }
  }

  // Remove item from cart completely
  const deleteFromCart = async (id) => {
    await axios.delete(`${API}/cart/${id}`)
    fetchData()
  }

  // Handle Checkout: Redirects user to the CV/Success page
  const submitOrder = () => {
    setIsCartOpen(false);
    setCurrentPage('cv-detail');
    window.scrollTo(0, 0); // Reset scroll position to top
  }

  // Handle Navigation: Smooth scroll to specific category sections
  const scrollTo = (name) => {
    if (currentPage !== 'home') {
      setCurrentPage('home'); // Switch back to home if user is on a different page
      setTimeout(() => {
        refs[name]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100);
    } else {
      refs[name]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // --- Conditional Rendering for Different Views ---

  // Show Project Detail View
  if (currentPage === 'detail') {
    return <ProjectDetail category={selectedCategory} onBack={() => setCurrentPage('home')} />;
  }

  // Show CV / Success View (after Submit Order)
  if (currentPage === 'cv-detail') {
    return <CVDetail onBack={() => setCurrentPage('home')} />;
  }

  // Default: Main Shop Page View
  return (
    <div className="site-root-wrapper">
      
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="brand-logo" onClick={() => setCurrentPage('home')}>JJ's Tech Shop</div>
        <div className="nav-links">
          {CATEGORIES.map(c => (
            <span key={c.name} className={c.cls} onClick={() => scrollTo(c.name)}>{c.name}</span>
          ))}
        </div>
        <button className="cart-btn-red" onClick={() => setIsCartOpen(true)}>
          MY CART ({cart.reduce((a,c) => a + c.quantity, 0)})
        </button>
      </nav>

      {/* Hero Header Section */}
      <section className="hero-full-width">
        <div className="hero-inner-split">
          <div className="hero-text-left">
            <small className="hero-tag">PREMIUM TECHNOLOGY SELECTION</small>
            <h1 className="hero-art-title">JJ'S Tech</h1>
            <p>Welcome! Browse and select the high-quality digital products <br/> and technical solutions you need below.</p>
            <button className="cart-btn-red" style={{padding: '18px 45px', fontSize: '1.2rem'}} onClick={() => scrollTo('Software')}>
              Shop Now
            </button>
          </div>
          <div className="hero-visual-right">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200" alt="Hero Tech" style={{ borderRadius: '25px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Main Product Feed */}
      <main>
        {CATEGORIES.map((cat, index) => (
          <section key={cat.name} ref={refs[cat.name]} className="ls-section">
            <div className="ls-inner" style={{ 
              display: 'flex', 
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Zig-zag layout logic
              alignItems: 'center',
              gap: '60px',
              padding: '100px 0'
            }}>
              
              {/* Left Side: Product Image Display */}
              <div className="ls-display-visual" style={{ flex: 1.2 }}>
                <img src={cat.displayImage} alt={cat.name} style={{ width: '100%', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
              </div>

              {/* Right Side: Category Info and Add to Cart Area */}
              <div className="ls-content-text" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="ls-text" style={{ marginBottom: '10px' }}> 
                  <small style={{ color: '#6c47ff', fontWeight: 700 }}>{cat.label}</small>
                  <h2 style={{ fontSize: '3.5rem', margin: '10px 0' }}>{cat.name}</h2>
                  <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '20px', maxWidth: '500px' }}>{cat.desc}</p>
                  
                  {/* Enter Project Detail Page */}
                  <button className="main-btn-outline" style={{ padding: '18px 45px', fontWeight: 800, fontSize: '1.1rem', border: '2px solid #000', marginBottom: '0px' }} onClick={() => {
                    setSelectedCategory(cat.name);
                    setCurrentPage('detail');
                    window.scrollTo(0,0);
                  }}>
                    LEARN MORE
                  </button>
                </div>

                {/* Grid for individual skill items (Cards) */}
                <div className="ls-product-grid" style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    width: '100%',
                    marginTop: '-5px' 
                }}>
                  {projects.filter(p => p.category === cat.name).map(p => (
                    <div key={p.id} className="ls-product-card" style={{ 
                        background: '#fff', 
                        padding: '30px', 
                        borderRadius: '35px', 
                        boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                        width: '320px',
                        marginTop: '0px' 
                    }}>
                      {/* Product Title mapped to skill name */}
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', fontWeight: 800 }}>{getDisplayTitle(p.title, p.category)}</h3>
                      
                      <div className="price-tag" style={{fontWeight: 800, color: '#6c47ff', fontSize: '1.8rem', marginBottom: '20px'}}>${p.price}</div>
                      
                      <button 
                        className="add-to-cart-btn" 
                        style={{ 
                          width: '100%', 
                          padding: '18px',
                          backgroundColor: '#1d1d1f',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '15px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'center',
                          fontSize: '1rem'
                        }} 
                        onClick={() => addToCart(p.id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Shopping Cart Sidebar Overlay */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <button className="close-x" onClick={() => setIsCartOpen(false)}>✕ Close</button>
        <h2 style={{fontSize: '2.4rem', fontWeight: 950, marginBottom: '30px', color: '#000', paddingLeft: '40px'}}>Your Cart</h2>
        
        {/* Render Cart List Items */}
        <div className="cart-list" style={{ flex: 1, overflowY: 'auto' }}>
          {cart.length === 0 ? (
            <p className="empty-msg" style={{color: '#999', textAlign: 'center', marginTop: '50px'}}>Empty cart.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-row" style={{ padding: '20px 40px' }}> 
                <div className="cart-item-info">
                  {/* Item title synced with the main feed names */}
                  <h4 style={{fontSize: '1.1rem', marginBottom: '8px', color: '#000', fontWeight: 800}}>
                    {getDisplayTitle(item.title, item.category)}
                  </h4>
                  {/* Quantity Adjustment Controls */}
                  <div className="qty-controls" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button onClick={() => updateQty(item.id, item.quantity - 1)} style={{ width: '30px', height: '30px', cursor: 'pointer', border: '1.5px solid #000', background: '#fff', fontSize: '18px', fontWeight: '900', color: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> - </button>
                    <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#000' }}>{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)} style={{ width: '30px', height: '30px', cursor: 'pointer', border: '1.5px solid #000', background: '#fff', fontSize: '18px', fontWeight: '900', color: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> + </button>
                  </div>
                </div>
                <div className="cart-item-right" style={{textAlign: 'right'}}>
                  <p style={{fontWeight: 900, fontSize: '1rem', color: '#000'}}>${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="del-btn" onClick={() => deleteFromCart(item.id)} style={{color:'red', border:'none', background:'none', cursor:'pointer', fontWeight: 800, marginTop: '8px', fontSize: '0.9rem'}}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Bottom Summary Area */}
        {cart.length > 0 && (
          <div className="cart-footer" style={{ padding: '30px 40px', background: '#fff' }}>
            <div className="cart-total" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.6rem', fontWeight: 950, color: '#000', marginBottom: '20px' }}>
              <span>Total:</span>
              <span>${cart.reduce((s,i) => s + i.price * i.quantity, 0).toFixed(2)}</span>
            </div>
            {/* Submit Order Action Button */}
            <button 
              className="submit-order-btn" 
              style={{ width: '100%', padding: '20px', backgroundColor: '#ff4b3e', color: '#fff', border: 'none', borderRadius: '15px', fontSize: '1.2rem', fontWeight: 950, cursor: 'pointer', boxShadow: '0 10px 20px rgba(255, 75, 62, 0.3)' }} 
              onClick={submitOrder}
            >
              Submit Order
            </button>
          </div>
        )}
      </div>

      {/* Semi-transparent dark background for the sidebar */}
      {isCartOpen && <div className="backdrop" onClick={() => setIsCartOpen(false)}></div>}
    </div>
  )
}