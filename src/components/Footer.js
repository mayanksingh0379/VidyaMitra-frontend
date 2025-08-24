import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <small style={{ color: 'inherit' }}>© {year} VidyaMitra. All rights reserved.</small>
          <small style={{ color: 'inherit' }}>•</small>
          <small style={{ color: 'inherit' }}>Made with <span aria-hidden>❤️</span> by team AttenX</small>
        </div>
      </div>
    </footer>
  );
}
