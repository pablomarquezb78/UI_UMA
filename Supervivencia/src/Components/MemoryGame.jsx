import React, { useState, useEffect } from "react";
import './CSS/MemoryGame.css';
import helpIcon from '../Selva/FotosAlimentos/ayuda.png';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [shouldFlipIncorrect, setShouldFlipIncorrect] = useState(false);
  const [difficulty, setDifficulty] = useState("button"); // Por defecto, elige la dificultad de botón
  const [showResult, setShowResult] = useState(false);
  const [showHelp, setShowHelp] = useState(false); // Nuevo estado para controlar la visibilidad de la ayuda

  // Función para mezclar las cartas
  const shuffleCards = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Inicializar el juego al cargar el componente
  useEffect(() => {
    // Cargar imágenes
    const backgroundImage = "src/assets/Mountain/fondomont.jpg";
    const image1 = "src/assets/Mountain/numero1.png";
    const image2 = "src/assets/Mountain/numero2.png";
    const image3 = "src/assets/Mountain/numero3.png";
    const image4 = "src/assets/Mountain/numero4.png";
    const image5 = "src/assets/Mountain/numero5.png";
    const image6 = "src/assets/Mountain/numero6.png";
    const image7 = "src/assets/Mountain/numero7.png";
    const image8 = "src/assets/Mountain/numero8.png";

    // Crear lista de pares de imágenes
    const cardPairs = [
      { id: 1, image: image1 },
      { id: 1, image: image2 },
      { id: 2, image: image3 },
      { id: 2, image: image4 },
      { id: 3, image: image5 },
      { id: 3, image: image6 },
      { id: 4, image: image7 },
      { id: 4, image: image8 }
    ];

    // Mezclar las cartas y establecerlas en el estado
    setCards(shuffleCards(cardPairs));
  }, []);

  // Función para manejar el clic en una carta
  const handleCardClick = index => {
    if (matchedCards.includes(index) || flippedCards.includes(index) || flippedCards.length >= 2) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);

      const firstCardIndex = newFlippedCards[0];
      const secondCardIndex = newFlippedCards[1];
      const firstCard = cards[firstCardIndex];
      const secondCard = cards[secondCardIndex];

      if (firstCard.id === secondCard.id) {
        const newMatchedCards = [...matchedCards, firstCardIndex, secondCardIndex];
        setMatchedCards(newMatchedCards);
        setFlippedCards([]);

        // Mostrar el modal si todas las cartas están emparejadas
        if (newMatchedCards.length === cards.length) {
          setShowResult(true);
        }
      } else {
        if (difficulty === "button") {
          setShouldFlipIncorrect(true);
        } else if (difficulty === "time") {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000); // Espera 1 segundo antes de voltear las cartas incorrectas
        }
      }
    }
  };

  // Función para manejar el clic en el botón de ayuda
  const toggleHelp = () => {
    setShowHelp(!showHelp); // Cambia el estado de la visibilidad de la ayuda
  };

  // Función para manejar el clic en el botón de reinicio de cartas incorrectas
  const handleResetIncorrectCards = () => {
    setFlippedCards([]);
    setShouldFlipIncorrect(false);
  };

  const cancelGame = () => {
    setShowHelp(false); // Cambia el estado de la visibilidad de la ayuda
  };

  const handleResetGame = () => {
    setMoves(0);
    setMatchedCards([]);
    setFlippedCards([]);
    setShouldFlipIncorrect(false);
    setShowResult(false);
    setCards(shuffleCards(cards));
  };

  const isCardFlipped = index => {
    return flippedCards.includes(index) || matchedCards.includes(index);
  };

  return (
    <div className="memory-game">
      <h1>Juego de Memoria</h1>
      <p>Relaciona a cada animal con su huella</p>
      <div>
        <label>
          Dificultad:
          <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="form-select">
            <option value="button">FÁCIL</option>
            <option value="time">DIFÍCIL</option>
          </select>
        </label>
      </div>
        {/* Botón de ayuda */}
      <img className='helpmont position-absolute' style={{ right: '10%', top: '35%', marginRight: '12px' }} src={helpIcon} alt="Ayuda" onClick={() => { toggleHelp() }}/>
      {/* Sección de ayuda */}
      {showHelp && (
        <div className="resultmont position-absolute top-50 start-50 translate-middle bg-white rounded p-3 z-1 border border-dark">
        <h2 style={{fontSize:'calc(20px + (30 - 20) * ((100vmin - 350px) / (1080 - 350)))'}}>Ayuda</h2>
        <p style={{ whiteSpace: 'normal' }}>En este juego de memoria, empareja imágenes de seres vivos con sus huellas.
        El borde de cada huella refleja el color del animal asociado.</p>
        <button className='custom-button m-2' onClick={cancelGame}>Volver al juego</button>         
        </div>
      )}
      {/* Resto de tu JSX */}
      <div style={{ visibility: shouldFlipIncorrect ? 'visible' : 'hidden' }}>
        <button onClick={handleResetIncorrectCards} className="btn btn-primary">
          Volver a Intentar
        </button>
      </div>
      <div className="cards-grid">
        {Array.from({ length: 4 }, (_, rowIndex) => (
          <div key={rowIndex} className="card-group">
            {Array.from({ length: 2 }, (_, colIndex) => (
              <div
                key={rowIndex * 2 + colIndex}
                className={`card ${isCardFlipped(rowIndex * 2 + colIndex) ? "flipped" : ""}`}
                onClick={() => handleCardClick(rowIndex * 2 + colIndex)}
                style={{ width: '17vw', maxWidth: '130px', height: 'auto' }}
              >
                <img
                  src={isCardFlipped(rowIndex * 2 + colIndex) ? cards[rowIndex * 2 + colIndex].image : "src/assets/Mountain/interrogacion.png"}
                  alt="Card"
                  className="card-image"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {showResult && (
        <div className="resultmont position-absolute top-50 start-50 translate-middle bg-white rounded p-3 z-1 border border-dark">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center">¡Has completado el juego en {moves} movimientos!</h2>
            <button className="btn btn-dark m-2" onClick={handleResetGame}>Reiniciar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
