import "../styles/mtg-cards.css"
import { useState, useEffect } from "react";

export function MTGcards () {
  const [fiveCards, setFiveCards] = useState([])
  
  useEffect( () => {
    const initialFetch = async () => {
      
      try{
      const response = await fetch('https://api.magicthegathering.io/v1/cards?pageSize=5',
      {
        cache: 'no-cache',
      })
      const data = await response.json();
      console.log(data)
      setFiveCards(data.cards)
      } catch (error) {
        console.log(error);
      }
    }
    initialFetch();
  }, []);

  
  const cardsList = fiveCards.map(item => {
      return <li className="card" key={item.id} id={item.id}><span className="text">{item.text}</span><br></br><br></br><span className="author">~ {item.author}</span></li>
    })
  

  return (
    <div className="cards-container">
      <ul className="cards-list">
      {cardsList}
      </ul>
    </div>
  )
}

