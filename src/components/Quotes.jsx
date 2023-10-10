import { useState, useEffect } from "react";

export function Quotes (fetchedQuotes) {
  // let nextId = 0;
  const [twoQuotes, setTwoQuotes] = useState([])
  
  useEffect( () => {
    const initialFetch = async () => {
      
      try{
      const response = await fetch('https://famous-quotes4.p.rapidapi.com/random?count=2&category=all',
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
    return <li key={item.id} id={`quote-${item.id}`}>{item.text} ~ {item.author}</li>
  })

  return (
    <div>
      <ul>
        
      {quoteList}
      </ul>
    </div>
  )
}

