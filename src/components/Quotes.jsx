import "../styles/quotes.css"
import { useState, useEffect } from "react";

export function Quotes (fetchedQuotes) {
  // let nextId = 0;
  const [twoQuotes, setTwoQuotes] = useState([])
  
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
      setTwoQuotes(data)
      } catch (error) {
        console.log(error);
      }
    }
    initialFetch();
  }, []);

  
  const quoteList = twoQuotes.map(item => {
    // nextId++
    return <li className="quote-card" key={item.id} id={`quote-${item.id}`}><span className="quote-text">{item.text}</span><br></br><br></br><span className="quote-author">~ {item.author}</span></li>
  })

  return (
    <div className="quotes-container">
      <ul className="quotes-list">
      {quoteList}
      </ul>
    </div>
  )
}

