
import { useEffect, useState } from 'react';
import './App.css';



function App() {

  const [advice, setAdvice] = useState("Feeling bored?");

  const getAdvice = async() =>{
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setAdvice(data.activity)
  };

  useEffect( () => {
    getAdvice() 
  }, [] )

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={ getAdvice }>Get some advice!</button>
    </div>
  );
}

export default App;
