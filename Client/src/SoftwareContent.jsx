import React from 'react';

export default function SoftwareContent() {
  return (
    <div className="software-project-content">
      
      {/* --- Section 1: System Architecture (VS Code File Structure) --- */}
      <section style={{ padding: '100px 6%', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Visual display of the project's directory structure */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
              <img src="/VS Code Structure.png" alt="VS Code Structure" style={{ width: '100%', display: 'block' }} />
            </div>
            {/* Description of the architectural approach */}
            <div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px' }}>VS Code Structure</h3>
              <p style={{ color: '#444', lineHeight: 1.8, fontSize: '1.15rem' }}>
                Project structure showing a modular Python application organised into <strong>controllers, models, and views</strong>, with separate files for student and admin logic. 
                This separation ensures that data handling, business logic, and user interaction are decoupled, following professional software engineering standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Student Interface Workflow --- */}
      <section style={{ padding: '120px 6%', background: '#fdfaf5' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '40px',color: '#000' }}>Student Interface</h2>
          {/* Mockup/Screenshot of the Command Line Interface for students */}
          <div style={{ borderRadius: '25px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.15)', marginBottom: '40px' }}>
            <img src="/Student.png" alt="Student Interface" style={{ width: '100%', display: 'block' }} />
          </div>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.8, maxWidth: '900px', margin: '0 auto' }}>
            Student workflow demonstrating <strong>account registration, login, subject enrolment, grade viewing, average mark calculation, and password update</strong>. 
            The system provides a clear, step-by-step CLI experience for students to manage their academic journey.
          </p>
        </div>
      </section>

      {/* --- Section 3: Admin Management & Version Control --- */}
      <section style={{ padding: '120px 6%', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, marginBottom: '80px',color: '#000' }}>Admin Management</h2>
          {/* Dual-column display for admin specific functionalities */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 700, marginBottom: '20px', color: '#666' }}>Academic Analytics</p>
              <img src="/Adim.png" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} alt="Admin Analytics" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 700, marginBottom: '20px', color: '#666' }}>Record Removal & Management</p>
              <img src="/Adim fonc.png" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} alt="Admin Logic" />
            </div>
          </div>
          {/* Repository overview showing version control usage */}
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '30px' }}>Version Control</h3>
            <img src="/GitHub Repo.png" style={{ width: '100%', borderRadius: '20px', border: '1px solid #ddd', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }} alt="GitHub" />
          </div>
        </div>
      </section>

      {/* --- Section 4: Project Summary & Key Learnings --- */}
      <section style={{ padding: '120px 6%', background: '#1d1d1f', color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '40px', color: '#fff' }}>What I Learned</h2>
          <div style={{ fontSize: '1.3rem', lineHeight: 2, color: '#ccc', fontWeight: 300 }}>
            <p style={{ marginBottom: '30px' }}>
              Through this project, I gained hands-on experience in <strong>designing a structured Python application</strong>, managing program flow across multiple files, handling persistent data storage, and implementing role-based system functionality.
            </p>
            <p>
              It also helped me improve my understanding of <strong>building maintainable software</strong> rather than writing everything in a single script. I learned the importance of clear logic separation and input validation to create a reliable and user-friendly command-line experience.
            </p>
          </div>
          
          {/* Technology badges representing the core skills used */}
          <div style={{ marginTop: '60px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['Python', 'OOP', 'JSON Persistence', 'MVC Design', 'Data Validation'].map((tech) => (
              <span key={tech} style={{ 
                padding: '10px 25px', 
                borderRadius: '50px', 
                border: '1px solid #444', 
                fontSize: '0.9rem', 
                color: '#aaa' 
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}