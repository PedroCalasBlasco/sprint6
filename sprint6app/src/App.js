import React from 'react';
import {useState} from 'react';
import {Escena, Buttons, MiDiv} from './components/escena/escena.js';
import frases from './components/datos/frases.js';


function App() {


  const [isCover, setCover] = useState(true);

  const [count, setCount] = useState(0);
  const [isRight, setRight] = useState(false);

  
  const increment = () => {
    (count >= 3) ? setCount(0) : setCount(count + 1);
  }

  const decrement = () => {
    (count <= 0) ? setCount(3) : setCount(count - 1);
  }

  const coverOf = () => {
    setCover(false);

  }

  const cambiaEstado = (i) =>{
    if(count === i){
      setRight(true);
    }
  }

  return (

    <div className="App">
      {isCover ? 
          <div>
            <h2>Bienvenidos</h2>
            <button onClick={coverOf}>Bienvenidos</button>
          </div>  :
          <MiDiv img={frases[count].img}>
            <Buttons onClick={decrement}>Anterior</Buttons>
            <Buttons onClick={increment}>Seguent</Buttons>
            <div>{frases.map((element,i) => <Escena isWhite={count === i}> {i + ". " + element.txt} </Escena>)}</div>
            {/* <div><img src={Frases[count].img} alt="" /></div> */}
          </MiDiv>
          
      }
    </div>
  );
}

export default App;
