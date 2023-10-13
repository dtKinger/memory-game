import "../styles/mtg-cards.css"
import { useState, useEffect } from "react";

export function MTGcards ({onScoreChange, onGameOver}) {
  const [fiveCards, setFiveCards] = useState([])
  const [gameScore, setGameScore] = useState([]) //  Add successfull clicks to an array.
  // Infer the player score by gameScore.length.
  const [topScore, setTopScore] = useState(0) // Set this to:
  // highestScore = if( gameScore > topScore ? gameScore : topScore)
  // localStore.setItem('highestScore', highestScore);
  
  useEffect( () => {
    const initialFetch = async () => {
      
      try{
      const response = await fetch('https://api.magicthegathering.io/v1/cards',
      {
        cache: 'no-cache',
      })
      const data = await response.json();

      // Filter Out cards that don't have an imageUrl
      const cardsWithImages = data.cards.filter((item) => {
        if(item.imageUrl){
          return item;
        }
      })

      // Pick 5 random cards
      let randomFive = [];
      let noDuplicateCards = new Set()
      for (let i = 0; randomFive.length < 5; i += 1) {
        let randomIndex = Math.floor(Math.random() * cardsWithImages.length);
        if (!noDuplicateCards.has(randomIndex)){
          randomFive.push(cardsWithImages[randomIndex])
          noDuplicateCards.add(randomIndex)
        } else if(noDuplicateCards.has(randomIndex)) {
          console.log('We dodged a duplicate random.')
        };
      }

      setFiveCards(randomFive)
      } catch (error) {
        console.log(error);
      }
    }
    initialFetch();
  }, []);

  const handleCardClick = (e) => {
  
    // Play the round
    playRound(e);

    // Set up for next turn
    shuffleList(fiveCards);
  }
  
  const cardsList = fiveCards.map(item => {
    const backgroundImageURL = item.imageUrl;
    // Resolve mixed content errors by transforming my URLs
    let httpsURL = backgroundImageURL.replace('http:', 'https://')
      return (
      <li className="card" key={item.id} id={item.id} onClick={handleCardClick}>
        <img src={httpsURL}></img>
      </li>
      )
    })
  
  const playRound = (e) => {

    // Get the id
    let selection = e.target.parentElement.id;
    if (!gameScore.includes(selection)){
      // gameScore.push(selection) Don't use a vanilla method
      setGameScore(prev => [
        ...prev,
        selection
      ])
      onScoreChange()
    } else if (gameScore.includes(selection)){
      onGameOver();
    }
  }

  // Make the winner check depend on the gameScore
  useEffect(() => {
    const checkForWinner = () => {
      if (gameScore.length === 5) {
        onGameOver();
      }
    }
  
    checkForWinner();
  }, [gameScore]);

  // Implement the Fisher-Yates Shuffle
  const shuffleList = (fiveCards) => {
    // Copy fiveCards
    let shuffledOrder = [...fiveCards]

    let currentIndex = fiveCards.length
    let randomIndex;

    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Swap the remaining element with the current element.
      [shuffledOrder[currentIndex], shuffledOrder[randomIndex]] = [
        shuffledOrder[randomIndex], shuffledOrder[currentIndex]];
    }
    setFiveCards(shuffledOrder);
  }

  return (
    <div className="cards-container">
      <ul className="cards-list">
      {cardsList}
      </ul>
    </div>
  )
}

export default MTGcards;