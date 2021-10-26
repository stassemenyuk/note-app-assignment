import React from 'react';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="settings-btn">
        <div className="settings__icon">some icon</div>
        <div className="settings__text">Settings</div>
      </div>
    </header>
  );
}
