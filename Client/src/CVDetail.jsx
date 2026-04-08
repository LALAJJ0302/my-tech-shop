import React from 'react';

export default function CVDetail({ onBack }) {
  return (
    <div className="cv-wrapper" style={{ backgroundColor: '#fdfaf5', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* --- Fixed Navigation Bar --- */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0 6%', 
        height: '80px',                         // Static height for the nav
        background: 'rgba(255, 255, 255, 0.95)', // Semi-transparent white
        backdropFilter: 'blur(10px)',           // Glassmorphism effect
        borderBottom: '1px solid #eee',
        position: 'fixed',                      // Keep navbar locked at top during scroll
        top: 0,                                 // Align to top edge
        left: 0,                                // Align to left edge
        right: 0,                               // Align to right edge
        zIndex: 9999,                           // Ensure it stays above the PDF/Iframe
        boxSizing: 'border-box'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 950, color: '#000', letterSpacing: '-1px' }}>Order Success!</div>
        <button 
          onClick={onBack}
          style={{ 
            padding: '10px 25px', background: '#000', color: '#fff', 
            border: 'none', borderRadius: '50px', cursor: 'pointer', 
            fontWeight: 800, fontSize: '1rem'
          }}
        >
          Back to Shop
        </button>
      </nav>

      {/* --- Main Content Container --- */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 6%' }}>
        
        {/* Header Section: Hero Title and Success Message */}
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            color: '#ff4b3e', 
            fontWeight: 950, 
            fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
            display: 'block', 
            lineHeight: 1,
            letterSpacing: '-2px',
            marginBottom: '20px'
          }}>
            CONGRATULATIONS!
          </span>
          <h1 style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', 
            fontWeight: 900, 
            color: '#000',
            letterSpacing: '-1.5px',
            lineHeight: 1.2
          }}>
            You Just Secured Chun Jie Hsieh's CV
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '25px', maxWidth: '750px', margin: '25px auto 0', lineHeight: 1.6 }}>
            You have successfully purchased the full profile of a high-skilled Technology professional. Below is a detailed look at who you just obtained.
          </p>
        </header>

        {/* PDF Viewer Section: Embedded CV Display */}
        <section style={{ textAlign: 'center', marginBottom: '100px' }}>
            <div style={{ 
                width: '100%', 
                maxWidth: '1050px', 
                height: '1150px', // Fixed height for document readability
                margin: '0 auto', 
                borderRadius: '40px', 
                overflow: 'hidden', 
                boxShadow: '0 60px 150px rgba(0,0,0,0.12)', 
                background: '#fff',
                border: '1px solid #eee'
            }}>
                <iframe 
                    src="/Chun Jie Hsieh (JJ) CV.pdf" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none' }}
                    title="Chun Jie Hsieh CV"
                ></iframe>
            </div>
        </section>

        {/* Contact & Offer Activation Section */}
        <section style={{ 
            maxWidth: '1000px', margin: '0 auto 100px', padding: '80px 60px', 
            background: '#fff', 
            borderRadius: '40px', textAlign: 'center',
            boxShadow: '0 40px 100px rgba(0,0,0,0.05)'
        }}>
            <small style={{ color: '#4fc3f7', fontWeight: 700, letterSpacing: '2px' }}>NEXT STEPS</small>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '20px', color: '#000' }}>ACTIVATE YOUR OFFER</h2>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '50px', lineHeight: 1.6 }}>
                You have obtained the blueprint. <br/> To fully acquire and deploy the capabilities of <span style={{color:'#4fc3f7', fontWeight: 700}}>"Chun Jie Hsieh"</span>, <br/> please contact the vendor using the secure channels below.
            </p>

            {/* Responsive Grid for Contact Cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                
                {/* Email Contact Card */}
                <div style={{ padding: '30px', border: '1.5px solid #eee', borderRadius: '30px', background: '#fdfdfd', minWidth: '280px', flex: 1 }}>
                    <small style={{ color: '#aaa', fontWeight: 600 }}>DIRECT LINE</small>
                    <h3 style={{ fontSize: '1.1rem', marginTop: '10px', color: '#000', fontWeight: 800 }}>curry520paul@gmail.com</h3>
                    <a href="mailto:curry520paul@gmail.com" style={{ color: '#4fc3f7', textDecoration: 'none', fontSize: '1rem', display: 'block', marginTop: '15px', fontWeight: 700 }}>Send Offer Now →</a>
                </div>

                {/* Phone Contact Card */}
                <div style={{ padding: '30px', border: '1.5px solid #eee', borderRadius: '30px', background: '#fdfdfd', minWidth: '280px', flex: 1 }}>
                    <small style={{ color: '#aaa', fontWeight: 600 }}>CALL SUPPORT</small>
                    <h3 style={{ fontSize: '1.1rem', marginTop: '10px', color: '#000', fontWeight: 800 }}>0491157793</h3>
                    <a href="tel:0491157793" style={{ color: '#4fc3f7', textDecoration: 'none', fontSize: '1rem', display: 'block', marginTop: '15px', fontWeight: 700 }}>Schedule Interview →</a>
                </div>

                {/* LinkedIn Profile Card */}
                <div style={{ padding: '30px', border: '1.5px solid #eee', borderRadius: '30px', background: '#fdfdfd', minWidth: '280px', flex: 1 }}>
                    <small style={{ color: '#aaa', fontWeight: 600 }}>VENDOR PROFILE</small>
                    <h3 style={{ fontSize: '1.1rem', marginTop: '10px', color: '#000', fontWeight: 800 }}>Chun Jie Hsieh</h3>
                    <a href="https://www.linkedin.com/in/chun-jie-hsieh" target="_blank" rel="noreferrer" style={{ color: '#4fc3f7', textDecoration: 'none', fontSize: '1rem', display: 'block', marginTop: '15px', fontWeight: 700 }}>View Credentials →</a>
                </div>
            </div>
        </section>

        {/* Footer Attribution */}
        <footer style={{ textAlign: 'center', paddingBottom: '60px' }}>
            <p style={{ color: '#aaa', fontSize: '1rem' }}>
                © 2026 Chun Jie Hsieh. All Rights Reserved.
            </p>
        </footer>

      </main>
    </div>
  );
}