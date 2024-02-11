
import React, { useState, useEffect } from 'react';
import { fishData } from './Data';
import styles from './Game.module.css';
import backcard from '../assets/backcard.jpg';
const Game = () => {
    const [cards, setCards] = useState(() => shuffleFishData());
    const [flipped, setFlipped] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
  
    useEffect(() => {
        // console.log(cards);
      if (flipped.length === 2) {

        //destructure two number of index matched
        const [index1, index2] = flipped;
  
        // compare two name of index
        if (cards[index1].name === cards[index2].name) {
          setMatchedPairs((prev) => [...prev, cards[index1].name]);
          console.log(index1,index2);
    
        }
  
        // Flip back the cards after 1 second
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }, [flipped, cards]);
  
    const handleCardClick = (index) => {
      //compare and match card
      if (matchedPairs.includes(cards[index].name) || flipped.length === 2) {
        return;
      }
  
      // click card and update the state
      setFlipped((prev) => {
        return prev.length === 2 ? [index] : [...prev, index];
      });
    };
  
    return (
      <div className={styles.container}>
        {cards.map((fish , index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(index)}
          >
            {flipped.includes(index) || matchedPairs.includes(fish.name) ? (
              <img className={styles.card_image} src={fish.image} alt={fish.name} />
            ) : (
              <img className={styles.card_image} src={backcard} alt="Back" />
            )}
          </div>
        ))}
      </div>
    );
  };
  
  // Shuffling array
  function shuffleFishData() {
    return fishData.slice().sort(() => Math.random() - 0.5);
  }

export default Game;
