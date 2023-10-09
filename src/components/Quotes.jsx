import { useState, useEffect } from "react";

export function Quotes () {
let nextId = 0;
  
  const [twoQuotes, setTwoQuotes] = useState([
    {
      id: 1,
      quote: "Very inspirational",
      author: "Wayne Gretzky"
    },
    {
      id: 2,
      quote: "Yes, I feel very inspired.",
      author: "Michael Scott."
    }
  ])
  
  const quoteList = twoQuotes.map(item => {
    nextId++
    return <li key={nextId} id={`quote-${item.id}`}>{item.quote} ~ {item.author}</li>
  })

  return (
    <div>
      <ul>
      {quoteList}
      </ul>
    </div>
  )
}