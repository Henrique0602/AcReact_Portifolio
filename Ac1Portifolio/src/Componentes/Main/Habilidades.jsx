import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Habilidades() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main>
      <div className="habilidades" data-aos="fade-up">
        <h1>Todas nossas Habilidades</h1>
      </div>

      <div className="habilidadesDaniel">
        <h1>Daniel, 17 anos, estuda na FIAP desde 2023. Suas principais habilidades na área escolar é : Front-end/Desing. Fora da escola é o futebol, jogos online, xadrez e musculação

        </h1>

      </div>

      <div className="habilidadesEric" >
        <h1>Eric, 17 anos, estuda na FIAP desde 2020. Suas principais habilidades na área escolar é : Front-end e Back-end. Fora da escola so atleta de boxe e pratico musculação</h1>
      </div>

      <div className="habilidadesHenrique">
        <h1>Henrique, 17 anos, estuda na FIAP desde 2022. Suas principais habilidades na área escolar é : Front-end. Fora da escola é o futebol, jogos online e musculação</h1>
      </div>



    </main>
  );
}

export default Habilidades;