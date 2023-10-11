import "../styles/mtg-cards.css"
import { useState, useEffect } from "react";

export function MTGcards () {
  const [fiveCards, setFiveCards] = useState([])
  
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

      console.log(randomFive)

      setFiveCards(randomFive)
      } catch (error) {
        console.log(error);
      }
    }
    initialFetch();
  }, []);

  
  const cardsList = fiveCards.map(item => {
    const backgroundImageURL = item.imageUrl;
      return (
      <li className="card" key={item.id} id={item.id}>
        <img src={backgroundImageURL}></img>
      </li>
      )
    })
  

  return (
    <div className="cards-container">
      <ul className="cards-list">
      {cardsList}
      </ul>
    </div>
  )
}

