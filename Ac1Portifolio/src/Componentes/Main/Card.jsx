import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const nomesIntegrantes =  ['Henrique', 'Daniel', 'Eric'] ;

  return (
    <section>
      <div>
        <div className="areaCards">
          Integrantes (hover)
        </div>
        <div className="cardsContainer" >
          {nomesIntegrantes.map((nome, index) => (
            <div key={index} className={`card card-${index + 1}`} data-aos="fade-up">
              {nome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;