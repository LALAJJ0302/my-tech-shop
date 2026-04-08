import React, { useState, useEffect } from 'react';

export default function DataContent() {
  const [sqlContent, setSqlContent] = useState("Loading SQL code...");

  // 🚀 Logic: Automatically fetch the SQL content for the IT Job project
  useEffect(() => {
    fetch('/ IT Data.txt')
      .then(response => response.text())
      .then(data => setSqlContent(data))
      .catch(err => setSqlContent("Error loading SQL file."));
  }, []);

  return (
    <div className="data-project-content" style={{ overflowX: 'hidden', backgroundColor: '#fdfaf5' }}>
      
      {/* ============================================================
          SECTION 1: IT Job & Salary Insights (SQL)
          Focus: Relational Database Design and Normalization
      ============================================================ */}
      <div className="it-job-project">
        {/* Project Introduction Section */}
        <section style={{ padding: '100px 6%', background: '#fff' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                <img src="/IT ERD.png" alt="ERD" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <h3 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: '1.1', marginBottom: '40px', color: '#000' }}>
                Relational <br /> Database Design
              </h3>
              <p style={{ color: '#333', fontSize: '1.25rem', lineHeight: '1.8' }}>
                Built a SEEK-inspired relational database to analyse IT job listings and salary patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Highlights and Implementation Details */}
        <section style={{ padding: '80px 4%', background: '#fdfaf5' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {/* Highlights Column */}
            <div style={{ flex: '1', minWidth: '550px', background: '#fff', padding: '50px', borderRadius: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '40px', color: '#003366', textAlign: 'center' }}>Highlights</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Modelled companies, jobs, skills, and salaries in a normalised schema.",
                  "Implemented many-to-many relationships using bridge tables.",
                  "Used Joins, GROUP BY, HAVING, and Subqueries for market analysis.",
                  "Applied Integrity Constraints to maintain data consistency."
                ].map((text, i) => (
                  <li key={i} style={{ color: '#444', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#003366', marginRight: '15px', fontWeight: 'bold' }}>•</span> <span style={{ whiteSpace: 'normal' }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Implementation Details Column */}
            <div style={{ flex: '1', minWidth: '550px', background: '#fff', padding: '50px', borderRadius: '40px', boxShadow: '0 15px 45px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '40px', color: '#003366', textAlign: 'center' }}>What I Implemented</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Designed an ERD with complex entities and relational mapping.",
                  "Built a schema with strict one-to-many and many-to-many logic.",
                  "Wrote analytical SQL views to explore real-world hiring trends.",
                  "Added salary bounds and delete rules to preserve data quality."
                ].map((text, i) => (
                  <li key={i} style={{ color: '#444', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#003366', marginRight: '15px', fontWeight: 'bold' }}>•</span> <span style={{ whiteSpace: 'normal' }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Code Block: Displaying raw SQL script content */}
        <section style={{ padding: '120px 6%', background: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '3.8rem', fontWeight: 900, marginBottom: '20px', color: '#000' }}>SQL Implementation</h2>
            <div style={{ width: '100%', background: '#1e1e1e', borderRadius: '25px', padding: '40px', boxShadow: '0 50px 100px rgba(0,0,0,0.3)', height: '600px', overflowY: 'auto', border: '1px solid #333' }}>
              <pre style={{ margin: 0, color: '#d4d4d4', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.6', textAlign: 'left', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{sqlContent}</pre>
            </div>
          </div>
        </section>

        {/* PDF Viewer: Database Project Documentation */}
        <section style={{ padding: '120px 6%', background: '#fdfaf5', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', color: '#000' }}>Full Technical Case Study</h2>
          <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', height: '900px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 60px 150px rgba(0,0,0,0.2)', background: '#fff', border: '1px solid #eee' }}>
            <iframe src="/IT_Jobs_Database.pdf" width="100%" height="100%" style={{ border: 'none' }} title="PDF Report"></iframe>
          </div>
        </section>
      </div>

      {/* Visual Divider between projects */}
      <div style={{ height: '4px', background: '#eee', width: '80%', margin: '100px auto' }} />

      {/* ============================================================
          SECTION 2: Python Data Analysis Projects
          Focus: EDA, Data Cleaning, and Visualization
      ============================================================ */}
      
      {/* 🚀 Case Study 1: Global Condom Usage Analysis */}
      <section style={{ padding: '100px 6%', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '50px', color: '#000', textAlign: 'center' }}>
            Rich Global Condom Usage Data Analysis
          </h2>
          
          <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Overview & Tech Stack Tags */}
            <div style={{ flex: '1', minWidth: '400px' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', color: '#003366' }}>Project Overview</h3>
              <p style={{ color: '#333', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '30px' }}>
                A Python data analysis project exploring global trends through data cleaning and visualisation. Worked on handling messy real-world data and turning it into clear insights using <strong>Pandas</strong> and <strong>Seaborn</strong>.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Data Cleaning'].map(tag => (
                  <span key={tag} style={{ padding: '8px 16px', background: '#f0f4f8', borderRadius: '50px', fontSize: '0.9rem', color: '#003366', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* 🚀 Python Highlights Column: Single-line formatted bullet points */}
            <div style={{ flex: '1', minWidth: '600px', background: '#f8f9fa', padding: '45px', borderRadius: '35px', borderLeft: '10px solid #003366' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '25px', color: '#000' }}>Highlights:</h4>
              <ul style={{ color: '#444', lineHeight: '1.8', fontSize: '1.05rem', paddingLeft: '20px' }}>
                <li style={{ whiteSpace: 'nowrap' }}> Cleaned global datasets using Python and Pandas library. </li>
                <li style={{ whiteSpace: 'nowrap' }}> Implemented Median and Mode imputation for missing values.</li>
                <li style={{ whiteSpace: 'nowrap' }}> Removed statistical outliers using the IQR method.</li>
                <li style={{ whiteSpace: 'nowrap' }}> Built visualisations to explore sales, awareness, and pricing.</li>
                <li style={{ whiteSpace: 'nowrap' }}> Identified market patterns using Seaborn and Matplotlib charts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Methodology: Data Processing Pipeline */}
      <section style={{ padding: '80px 6%', background: '#fdfaf5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '30px', color: '#000' }}>
            Python Data Processing & Exploratory Analysis
          </h2>
          <p style={{ color: '#333', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '950px', margin: '0 auto 50px' }}>
            Applied <strong>Pandas</strong> and <strong>Jupyter Notebook</strong> to load, inspect, and clean real-world datasets. Focused on descriptive statistics and duplicate checking to ensure data quality.
          </p>
        </div>
      </section>

      {/* 🚀 PDF Viewer: Python Analysis Case Study Report */}
      <section style={{ padding: '100px 6%', background: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', color: '#000' }}>Full Analysis Report</h2>
        <div style={{ 
          width: '100%', maxWidth: '1100px', margin: '0 auto', height: '900px', 
          borderRadius: '40px', overflow: 'hidden', boxShadow: '0 60px 150px rgba(0,0,0,0.2)', background: '#fff', border: '1px solid #eee'
        }}>
          <iframe 
            src="/Global Condom Usage Analysis with Python2.pdf" 
            width="100%" height="100%" style={{ border: 'none' }} 
            title="Python Analysis PDF"
          ></iframe>
        </div>
      </section>

    </div>
  );
}