import React from 'react';

export default function IOSContent() {
  return (
    <div className="ios-projects-wrapper">
      
      {/* ==========================================
          PROJECT 1: Where's Grandma? 
          Focus: Empathy-driven narrative and SwiftUI development
      ========================================== */}
      <div className="grandma-project-section">
        
        {/* Hero Image Showcase: Primary project visual */}
        <section style={{ padding: '80px 0 100px', textAlign: 'center' }}>
          <div style={{ 
            width: '55%', 
            maxWidth: '1000px', 
            margin: '0 auto', 
            borderRadius: '40px', 
            overflow: 'hidden', 
            boxShadow: '0 40px 100px rgba(0,0,0,0.12)' 
          }}>
            <img src="/grandma-ios.png" alt="Hero" style={{ width: '100%', display: 'block' }} />
          </div>
        </section>

        {/* Visual Flow Section: Introduction and interface snapshots */}
        <section style={{ padding: '120px 6%', background: '#fff' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.2fr', 
            gap: '80px', 
            maxWidth: '1300px', 
            margin: '0 auto', 
            alignItems: 'center', 
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px', color: '#000' }}>Visual Flow</h2>
              <p style={{ fontSize: '1.25rem', color: '#333', lineHeight: 1.8 }}>
                Built with SwiftUI, the project explores how digital experiences can create empathy, emotional connection, and greater understanding of real-world caregiving challenges.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <img src="/Front Page.png" style={{ width: '48%', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} alt="Front Page" />
              <img src="/Chapters.png" style={{ width: '48%', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} alt="Chapters" />
            </div>
          </div>
        </section>

        {/* Interactive Mini Games: Vertical list of game mechanics and narratives */}
        <section style={{ padding: '120px 6%', background: '#fdfaf5' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, textAlign: 'center', marginBottom: '80px', color: '#000' }}>Interactive Mini Games</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '150px', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Chapter 1 Detail */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px', color: '#000' }}>Chapter 1: Object Memory</h3>
              <img src="/Game1.png" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} alt="Game 1" />
              <p style={{ marginTop: '40px', color: '#333', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '900px', margin: '40px auto 0' }}>
                This chapter uses a simple matching activity to represent how dementia can affect short-term memory and object recognition. Players help the grandfather find familiar items, while the game combines light challenge with reflective educational messages.
              </p>
            </div>

            {/* Chapter 2 Detail */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px', color: '#000' }}>Chapter 2: Photo Identity</h3>
              <img src="/Game2.png" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} alt="Game 2" />
              <p style={{ marginTop: '40px', color: '#333', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '900px', margin: '40px auto 0' }}>
                In this chapter, players help the grandfather recognise family members through old photographs. The interaction reflects how faces, names, and relationships can become difficult to identify over time, highlighting the emotional side of memory decline.
              </p>
            </div>

            {/* Chapter 3 Detail */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px', color: '#000' }}>Chapter 3: Reality Orientation</h3>
              <img src="/Game3.png" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} alt="Game 3" />
              <p style={{ marginTop: '40px', color: '#333', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '900px', margin: '40px auto 0' }}>
                Focuses on reality orientation, showing how a person with dementia may confuse past places with the present world around them. Players guide the grandfather through familiar locations that no longer exist, revealing how changes in time and place can create disorientation.
              </p>
            </div>
          </div>
        </section>

        {/* Design & Dev Process: Documentation of the technical journey */}
        <section style={{ padding: '120px 6%', background: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* Figma Subsection */}
            <div style={{ marginBottom: '150px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '40px', color: '#000' }}>Figma Design Process</h2>
              <img src="/Figma .png" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} alt="Figma Design" />
              <p style={{ marginTop: '40px', color: '#333', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '900px', margin: '40px auto 0' }}>
                The Figma design process shows the planning behind the app’s visual language, screen flow, and interaction structure. It was used to explore layout variations, dialogue placement, and overall user experience to shape a consistent emotional tone before development.
              </p>
            </div>

            {/* Xcode Subsection */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '40px', color: '#000' }}>Xcode Development</h2>
              <img src="/Xcode.png" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} alt="Xcode Development" />
              <p style={{ marginTop: '40px', color: '#333', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '900px', margin: '40px auto 0' }}>
                The app was developed in Xcode using SwiftUI, translating the visual design into a functional interactive prototype. Development focused on building narrative flow, mini-game logic, navigation between chapters, and a cohesive interface.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section: Summary of educational impact */}
        <section style={{ padding: '120px 6%', textAlign: 'center', background: '#fdfaf5' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '60px', color: '#000' }}>Educational Ending</h2>
          <div style={{ width: '85%', maxWidth: '1100px', margin: '0 auto', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.15)' }}>
            <img src="/Ending.png" alt="Ending" style={{ width: '100%' }} />
          </div>
          <p style={{ marginTop: '50px', color: '#333', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '900px', margin: '50px auto 0' }}>
            The ending moves from gameplay into reflection and education. It explains the emotional meaning behind the grandfather’s experiences, shares the author’s memory-based inspiration, and provides practical caregiving tips.
          </p>
        </section>
      </div>

      {/* ==========================================
          PROJECT 2: LINC – Link Care 
          Focus: Healthcare transition support for carers
      ========================================== */}
      
      {/* Visual Divider between Project 1 and Project 2 */}
      <div style={{ height: '4px', background: '#eee', width: '80%', margin: '100px auto' }} />

      <section className="linc-project-section" style={{ paddingBottom: '120px' }}>
        
        {/* Project Header: Brand and core value proposition */}
        <header style={{ textAlign: 'center', padding: '100px 6% 40px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.0rem)', fontWeight: 800, color: '#4A5CC4', margin: '0 0 20px 0', letterSpacing: '-3px' }}>
            LINC – Link Care
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#666', maxWidth: '850px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Designed to help family carers manage the transition from hospital discharge to home recovery.
          </p>
        </header>

        {/* High-level Overview Graphic */}
        <section style={{ textAlign: 'center', paddingBottom: '70px' }}>
          <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(74, 92, 196, 0.15)' }}>
            <img src="/Linc1.png" alt="Linc Overview" style={{ width: '100%', display: 'block' }} />
          </div>
        </section>

        {/* Project Specifications: Context, Features, and Role */}
        <div style={{ maxWidth: '900px', margin: '0 auto 80px', textAlign: 'left', background: '#fff', padding: '50px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: '#1d1d1f' }}>PROJECT OVERVIEW</h2>
                <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: '1.8' }}>
                    This project was created to support family carers who often feel uncertain after a loved one returns home from hospital. The app aims to turn complex discharge instructions into clear, practical steps that are easier to follow in daily life.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px' }}>
                <div>
                    <h4 style={{ color: '#4A5CC4', marginBottom: '15px' }}>Key Features</h4>
                    <ul style={{ color: '#555', fontSize: '1rem', lineHeight: 1.8, paddingLeft: '20px' }}>
                        <li>Daily task checklist</li>
                        <li>Personalised care plan</li>
                        <li>Care step explanations</li>
                        <li>Emergency guidance</li>
                        <li>Chatbot support</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: '#4A5CC4', marginBottom: '15px' }}>My Contribution</h4>
                    <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.8 }}>
                        I contributed to the concept development, feature planning, and interface design, with a focus on creating a human-centred and supportive care experience.
                    </p>
                </div>
            </div>
        </div>

        {/* User Experience Section: Breakdown of the 4 core user flows */}
        <section style={{ padding: '100px 6%', background: '#f8f9ff' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '80px', color: '#1d1d1f' }}>
            The User Journey
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '120px', alignItems: 'center' }}>
            
            {/* Journey 1 Detail */}
            <div style={{ width: '60%', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '15px', color: '#4A5CC4' }}>Journey 1 – Daily Tasks</h4>
              <p style={{ marginBottom: '30px', color: '#666' }}>Helps carers manage daily care tasks in a clear checklist format.</p>
              <img src="/Func1.png" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} alt="Func 1" />
            </div>

            {/* Journey 2 Detail */}
            <div style={{ width: '60%', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', color: '#4A5CC4' }}>Journey 2 – Personalised Care Plan</h4>
              <p style={{ marginBottom: '30px', color: '#666' }}>Provides patient-specific guidance for the first stage of recovery.</p>
              <img src="/Func2.png" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} alt="Func 2" />
            </div>

            {/* Journey 3 Detail */}
            <div style={{ width: '60%', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', color: '#4A5CC4' }}>Journey 3 – Understanding Each Step</h4>
              <p style={{ marginBottom: '30px', color: '#666' }}>Explains why each care action is important.</p>
              <img src="/Func3.png" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} alt="Func 3" />
            </div>

            {/* Journey 4 Detail */}
            <div style={{ width: '60%', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', color: '#4A5CC4' }}>Journey 4 – Chatbot</h4>
              <p style={{ marginBottom: '30px', color: '#666' }}>Offers quick answers to common care questions.</p>
              <img src="/Func4.png" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} alt="Func 4" />
            </div>

            {/* Final Project Summary Graphic */}
            <div style={{ width: '70%', marginTop: '60px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '30px' }}>Empowering Carers with Insight</h3>
              <img src="/Linc2.png" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} alt="Linc 2" />
            </div>
          </div>
        </section>
      </section>

    </div>
  );
}