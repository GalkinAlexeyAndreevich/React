// import Request from "../Requset";
import * as React from "react"

function App() {
  const [item, setItem] = React.useState([])
  React.useEffect(()=>{
      fetch("https://swapi.dev/api/people/1")
      .then((res)=>{
          return res.json()
      })
      .then((data)=>{
        console.log(data)
        setItem(data)  
      })
  },[])
  return (
    <div className="App">
      <p>Имя:{item.name}</p>
      <p>Рост:{item.height}</p>
      <p>Вес:{item.mass} kg</p>
      <p>Цвет волос:{item.hair_color}</p>
      <p>Цвет глаз:{item.eye_color}</p>
      
    </div>
  );
}

export default App;
