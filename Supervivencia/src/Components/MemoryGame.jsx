import React, { useState, useEffect } from "react";
import './CSS/MemoryGame.css';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [shouldFlipIncorrect, setShouldFlipIncorrect] = useState(false);

  // Función para mezclar las cartas
  const shuffleCards = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Inicializar el juego al cargar el componente
  useEffect(() => {
    // Cargar imágenes
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
        setMatchedCards([...matchedCards, firstCardIndex, secondCardIndex]);
        setFlippedCards([]);
      } else {
        setShouldFlipIncorrect(true);
      }
    }
  };

  // Función para manejar el clic en el botón de reinicio de cartas incorrectas
  const handleResetIncorrectCards = () => {
    setFlippedCards([]);
    setShouldFlipIncorrect(false);
  };

  const isCardFlipped = index => {
    return flippedCards.includes(index) || matchedCards.includes(index);
  };

  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <p>Movimientos: {moves}</p>
      {shouldFlipIncorrect && (
        <button onClick={handleResetIncorrectCards} className="btn btn-primary">
          Voltear Cartas Incorrectas
        </button>
      )}
      <div className="cards-grid">
        {Array.from({ length: 4 }, (_, rowIndex) => (
          <div key={rowIndex} className="card-group">
            {Array.from({ length: 2 }, (_, colIndex) => (
              <div
                key={rowIndex * 2 + colIndex}
                className={`card ${isCardFlipped(rowIndex * 2 + colIndex) ? "flipped" : ""}`}
                onClick={() => handleCardClick(rowIndex * 2 + colIndex)}
                style={{ width: '17vw', maxWidth: '100px', height: 'auto' }}
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
    </div>
  );
};

export default MemoryGame;
