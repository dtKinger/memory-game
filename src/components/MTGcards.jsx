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

      console.log('cardsWithImages is: ')
      console.log(cardsWithImages)

      // Pick 5 random cards
      let randomFive = [];
      let a = Math.floor(Math.random() * cardsWithImages.length)
      let b = Math.floor(Math.random() * cardsWithImages.length)
      let c = Math.floor(Math.random() * cardsWithImages.length)
      let d = Math.floor(Math.random() * cardsWithImages.length)
      let e = Math.floor(Math.random() * cardsWithImages.length)

      randomFive.push(cardsWithImages[a])
      randomFive.push(cardsWithImages[b])
      randomFive.push(cardsWithImages[c])
      randomFive.push(cardsWithImages[d])
      randomFive.push(cardsWithImages[e])

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

