function Card(){
    const nomesIntegrantes = ['Henrique', 'Daniel', 'Eric'];

    return(

    <main>
      return (
        <div>
            <div className="areaCards">Integrantes (hover)</div>
            <div className="cardsContainer">
             {nomesIntegrantes.map((nome, index) => (
              <div key={index} className={`card card-${index + 1}`}>
            {nome}
          </div>
        ))}
      </div>
    </div>
        );
    </main>


        
    )
}

export default Card