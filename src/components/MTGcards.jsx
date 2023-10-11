import "../styles/mtg-cards.css"
import { useState, useEffect } from "react";

export function MTGcards () {
  const [fiveCards, setFiveCards] = useState([])
  
  useEffect( () => {
    const initialFetch = async () => {
      
      try{
      const response = await fetch('https://famous-quotes4.p.rapidapi.com/random?count=5&category=all',
      {
        cache: 'no-cache',
        headers: 
        {
          'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
          'x-rapidapi-key': import.meta.env.VITE_PRIVATE_RAPID_KEY
        }
      })
      const data = await response.json();
      console.log(data)
      setFiveCards(data)
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

