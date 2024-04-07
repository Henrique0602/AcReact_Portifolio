import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header>
      <div className="banner" data-aos="fade-down">
        <h1>Bem-Vindo ao nosso Portfólio</h1>
      </div>
    </header>
  );
}

export default Header;
