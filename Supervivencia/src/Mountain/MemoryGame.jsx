import React, { useState, useEffect } from "react";
import './CSS/MemoryGame.css';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SosIcon from '@mui/icons-material/Sos';

const MemoryGame = () => {
  const AnimatedIconButton = styled(IconButton)`
    color: black;
    &:hover {
      color: white;
    }
    .MuiSvgIcon-root {
      width: calc(33px + (64 - 33) * ((100vmin - 350px) / (1080 - 350)));
      height: calc(33px + (64 - 33) * ((100vmin - 350px) / (1080 - 350)));
    }
  `;

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [shouldFlipIncorrect, setShouldFlipIncorrect] = useState(false);
  const [difficulty, setDifficulty] = useState("button");
  const [showResult, setShowResult] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const shuffleCards = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const images = [
      "src/assets/Mountain/huella_de_oso.png",
      "src/assets/Mountain/foto_de_oso.png",
      "src/assets/Mountain/huella_de_lobo.png",
      "src/assets/Mountain/foto_de_lobo.png",
      "src/assets/Mountain/huella_de_ciervo.png",
      "src/assets/Mountain/foto_de_ciervo.png",
      "src/assets/Mountain/huella_de_cabra.png",
      "src/assets/Mountain/foto_de_cabra.png"
    ];

    const cardPairs = images.map((image, index) => ({
      id: Math.floor(index / 2),
      image
    }));

    setCards(shuffleCards(cardPairs));
  }, []);

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
        if (newMatchedCards.length === cards.length) {
          setShowResult(true);
        }
      } else {
        if (difficulty === "button") {
          setShouldFlipIncorrect(true);
        } else if (difficulty === "time") {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1500);
        }
      }
    }
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const handleResetIncorrectCards = () => {
    setFlippedCards([]);
    setShouldFlipIncorrect(false);
  };

  const cancelGame = () => {
    setShowHelp(false);
  };

  const handleCardKeyPress = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCardClick(index);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key >= "1" && e.key <= "8") {
      const cardIndex = parseInt(e.key) - 1;
      if (cardIndex >= 0 && cardIndex < cards.length && !isCardFlipped(cardIndex) && !matchedCards.includes(cardIndex)) {
        handleCardClick(cardIndex);
      }
    } else if (e.key.toUpperCase() === "R") {
      handleResetIncorrectCards();
    } else if (e.key.toUpperCase() === "0") {
      handleResetGame();
    }
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
    <div 
      className="memory-game" 
      tabIndex="0" 
      onKeyDown={handleKeyPress}
      role="application" 
      aria-label="Juego de Memoria">
      {/* <h1>Juego de Memoria</h1> */}
      <h2>Relaciona a cada animal con su huella</h2>
      <div className="controls">
        <label>
          Dificultad:
          <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="form-select">
            <option value="button">FÁCIL</option>
            <option value="time">DIFÍCIL</option>
          </select>
        </label>

        <AnimatedIconButton 
          className='helpmont' 
          title="Ayuda" 
          alt="Botón de Ayuda"
          tabIndex={0} 
          onClick={toggleHelp} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') toggleHelp();
          }}>
          <SosIcon />
        </AnimatedIconButton>

        <button tabIndex="0"
                    style={{ marginTop : 35}}
            onClick={handleResetGame} 
          className="btn btn-dark">
          Reiniciar
        </button>
      </div>

      {showHelp && (
        <div 
          tabIndex="0" 
          className="resultmont position-absolute top-50 start-50 translate-middle bg-white rounded p-3 z-1 border border-dark"
          role="dialog" 
          aria-labelledby="helpTitle"
          aria-describedby="helpDescription">
          <h2 id="helpTitle" style={{fontSize:'calc(20px + (30 - 20) * ((100vmin - 350px) / (1080 - 350)))'}}>Ayuda</h2>
          <p id="helpDescription" style={{ whiteSpace: 'normal' }}>En este juego de memoria, empareja imágenes de seres vivos con sus huellas. El color del borde de cada huella coincide con el color del borde del animal asociado. Si eliges el modo fácil podrás voltear las cartas sin tiempo límite con el botón <span style={{ fontWeight: 'bold' }}>Volver a Intentar</span>.</p>
          <h6> Atajos: </h6>
          <img tabIndex="0"  src="src/assets/Mountain/atajosmont.png"
            style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            alt="Atajos: Con los números 1-8 del teclado se eligen las cartas y con R puedes girarlas en el modo fácil." />
          <button 
            tabIndex="0" 
            className='custom-button m-2' 
            onClick={cancelGame}
            aria-label="Volver al juego">Volver al juego</button>
        </div>
      )}

      

      <div className="cards-grid">
        {Array.from({ length: 8 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className={`card ${isCardFlipped(rowIndex) ? "flipped" : ""}`}
                onClick={() => handleCardClick(rowIndex)}
                onKeyDown={(e) => handleCardKeyPress(e, rowIndex)}
                tabIndex="0"
                role="button"
                aria-pressed={isCardFlipped(rowIndex)}
                aria-label={
                  isCardFlipped(rowIndex) 
                  ? `Carta con imagen de ${cards[rowIndex].image.split('/').pop().replace(/\.[^/.]+$/, "")}`
                  : `Carta Misteriosa ${rowIndex +1}`}                
              >
                <img
                  src={isCardFlipped(rowIndex) ? cards[rowIndex].image : "src/assets/Mountain/interrogacion.png"}
                  alt={isCardFlipped(rowIndex) ? cards[rowIndex].image.split('/').pop().replace(/\.[^/.]+$/, "") : "Carta Misteriosa"}
                  className="card-image"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
      </div>

      <div style={{ visibility: shouldFlipIncorrect ? 'visible' : 'hidden' }}>
        <button onClick={handleResetIncorrectCards} style={{ height: 'auto'}} className="btn btn-primary"> 
          Volver a Intentar
        </button>
      </div>



      {showResult && (
        <div 
          className="resultmont position-absolute top-50 start-50 translate-middle bg-white rounded p-3 z-1 border border-dark"
          role="alertdialog"
          aria-labelledby="resultTitle"
          aria-describedby="resultDescription">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 id="resultTitle" className="text-center">¡Has completado el juego en {moves} movimientos!</h2>
            <button id="resultDescription" className="btn btn-dark m-2" onClick={handleResetGame}>Reiniciar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
