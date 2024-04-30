import React, { useState, useEffect } from "react";
import './CSS/MemoryGame.css';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [clickEnabled, setClickEnabled] = useState(true);

  // Función para mezclar las cartas
  const shuffleCards = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Inicializar el juego al cargar el componente
  useEffect(() => {
    // Aquí puedes cargar tus imágenes desde la carpeta de imágenes
    const image1 = "src/assets/Mountain/numero1.png";
    const image2 = "src/assets/Mountain/numero2.png";
    const image3 = "src/assets/Mountain/numero3.png";
    const image4 = "src/assets/Mountain/numero4.png";
    const image5 = "src/assets/Mountain/numero5.png"; // Nueva imagen
    const image6 = "src/assets/Mountain/numero6.png"; // Nueva imagen
    const image7 = "src/assets/Mountain/numero7.png"; // Nueva imagen
    const image8 = "src/assets/Mountain/numero8.png"; // Nueva imagen

    // Crear una lista de pares de imágenes
    const cardPairs = [
      { id: 1, image: image1 },
      { id: 1, image: image2 },
      { id: 2, image: image3 },
      { id: 2, image: image4 },
      { id: 3, image: image5 }, // Nueva imagen
      { id: 3, image: image6 }, // Nueva imagen ok
      { id: 4, image: image7 }, // Nueva imagen
      { id: 4, image: image8 } // Nueva imagen
    ];

    // Mezclar las cartas y establecerlas en el estado
    setCards(shuffleCards(cardPairs));
  }, []);

  // Función para manejar el clic en una carta
  const handleCardClick = index => {
    // Evitar clics en cartas ya emparejadas, volteadas o si no se puede hacer clic
    if (matchedCards.includes(index) || flippedCards.includes(index) || !clickEnabled) return;

    // Voltear la carta haciendo una copia del estado actual de cartas volteadas
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Si se han volteado dos cartas, comprobar si coinciden
    if (newFlippedCards.length === 2) {
      // Deshabilitar el manejo de clics
      setClickEnabled(false);

      // Incrementar el contador de movimientos
      setMoves(moves + 1);

      // Comprobar si las cartas coinciden
      const firstCardIndex = newFlippedCards[0];
      const secondCardIndex = newFlippedCards[1];
      const firstCard = cards[firstCardIndex];
      const secondCard = cards[secondCardIndex];
      // Verificar si las dos cartas son del mismo par
      if (firstCard.id === secondCard.id) {
        // Si coinciden, agregarlas a las cartas emparejadas
        setMatchedCards([...matchedCards, firstCardIndex, secondCardIndex]);
        // Limpiar las cartas volteadas después de un breve retraso
        setTimeout(() => {
          setFlippedCards([]);
          // Habilitar nuevamente el manejo de clics después del tiempo de espera
          setClickEnabled(true);
        }, 1000);
      } else {
        // Si no coinciden, voltear las cartas de nuevo después de un breve retraso
        setTimeout(() => {
          setFlippedCards([]);
          // Habilitar nuevamente el manejo de clics después del tiempo de espera
          setClickEnabled(true);
        }, 1500);
      }
    }
  };

  // Función para determinar si una carta está volteada
  const isCardFlipped = index => {
    return flippedCards.includes(index) || matchedCards.includes(index);
  };

  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <p>Movimientos: {moves}</p>
      <div className="cards-grid">
        <div className="card-group">
          {cards.slice(0, 4).map((card, index) => (
            <div
              key={index}
              className={`card ${isCardFlipped(index) ? "flipped" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={isCardFlipped(index) ? card.image : "src/assets/Mountain/interrogacion.png"}
                alt="Card"
                className="card-image"
              />
            </div>
          ))}
        </div>
        <div className="card-group">
          {cards.slice(4, 8).map((card, index) => (
            <div
              key={index + 4}
              className={`card ${isCardFlipped(index + 4) ? "flipped" : ""}`}
              onClick={() => handleCardClick(index + 4)}
            >
              <img
                src={isCardFlipped(index + 4) ? card.image : "src/assets/Mountain/interrogacion.png"}
                alt="Card"
                className="card-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
