import React, { useState, useEffect } from 'react';
import './App.css'; 
import IOSContent from './IOSContent'; 
import SoftwareContent from './SoftwareContent'; 
import DataContent from './DataContent'; 

export default function ProjectDetail({ category, onBack }) {
  
  // --- Category Logic: Determine which specific content to display ---
  const isIOS = category === 'iOS App';
  const isSoftware = category === 'Software';
  const isData = category === 'Data';

  return (
    <div className="detail-page" style={{ 
      backgroundColor: '#fdfaf5', 
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      
      {/* --- 1. Sticky Navigation Bar --- */}
      <div style={{ width: '100%', height: '80px' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '0 6%',
          height: '80px',
          backgroundColor: 'rgba(253, 250, 245, 0.95)', // Background with slight transparency
          backdropFilter: 'blur(15px)',                // Glassmorphism effect
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10001,                               // Ensure nav is always on top
          boxSizing: 'border-box',
          borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
          {/* Navigation Action Area */}
          <div style={{ flex: 1 }}>
            <div onClick={onBack} style={{ cursor: 'pointer', fontWeight: 600, color: '#6e6e73', fontSize: '1rem' }}>
              ← Back to Store
            </div>
          </div>
          {/* Centered Page Title */}
          <div style={{ flex: 2, textAlign: 'center', fontWeight: 800, letterSpacing: '3px', fontSize: '1.2rem', color: '#1d1d1f' }}>
            JJ'S {category ? category.toUpperCase() : 'PROJECT'} DESIGN
          </div>
          {/* Empty Spacer for balance */}
          <div style={{ flex: 1 }}></div> 
        </nav>
      </div>

      {/* --- 2. Dynamic Header Area: Renders content based on Project Category --- */}
      <header style={{ textAlign: 'center', padding: '80px 6% 0' }}>
        
        {/* --- Category: iOS Specific Header --- */}
        {isIOS && (
          <>
            <div style={{ marginBottom: '40px' }}>
                <img src="/Logo.png" alt="Logo" style={{ width: '180px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.0rem)', fontWeight: 800, color: '#8B4513', margin: '0 0 60px 0', letterSpacing: '-3px' }}>
              Where's Grandma?
            </h1>
            <div style={{ maxWidth: '900px', margin: '0 auto 100px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '30px', color: '#6c47ff', letterSpacing: '2px' }}>PROJECT OVERVIEW</h2>
              <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: '1.8' }}>
                Where’s Grandma? is a human-centred iOS app designed to raise awareness of dementia through interactive storytelling and simple mini-games.
              </p>
            </div>
          </>
        )}

        {/* --- Category: Software Specific Header --- */}
        {isSoftware && (
          <>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.2rem)', fontWeight: 800, color: '#1d1d1f', margin: '40px 0 60px 0', letterSpacing: '-2px' }}>
              CLI University Management System
            </h1>
            <div style={{ maxWidth: '900px', margin: '0 auto 100px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '25px', color: '#6c47ff', letterSpacing: '2px' }}>PROJECT OVERVIEW</h2>
              <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.8' }}>
                A Python-based command-line university management system that supports student registration, login, subject enrolment, and admin management functions. Built with MVC architecture and persistent JSON storage.
              </p>
            </div>
          </>
        )}

        {/* --- Category: Data Specific Header --- */}
        {isData && (
          <>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.2rem)', fontWeight: 800, color: '#003366', margin: '40px 0 60px 0', letterSpacing: '-2px' }}>
              IT Jobs Database Analysis
            </h1>
            <div style={{ maxWidth: '900px', margin: '0 auto 100px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '25px', color: '#6c47ff', letterSpacing: '2px' }}>PROJECT OVERVIEW</h2>
              <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.8' }}>
                A relational database project inspired by real-world SEEK job listings. This system tracks industry needs, technical skills, and salary ranges within the IT market through a structured PostgreSQL implementation and complex data analysis.
              </p>
            </div>
          </>
        )}
      </header>

      {/* --- 3. Component Switching: Loads independent content components based on Category --- */}
      {isIOS && <IOSContent />}
      {isSoftware && <SoftwareContent />}
      {isData && <DataContent />} 

      {/* --- 4. Footer Section --- */}
      <footer style={{ padding: '80px', textAlign: 'center', background: '#fff', borderTop: '1px solid #eee' }}>
        <p style={{ color: '#ccc', fontSize: '0.9rem' }}>© 2026 JJ's Design Studio. UTS Assignment 1.</p>
      </footer>
    </div>
  );
}