import React, { useState, useEffect } from "react";
import './App.css' 


function App() {

  const [primeiroNumero, setPrimeiroNumero] = useState<number>(0)
  const [operacao, setOperacao] = useState('')
  const [segundoNumero, setSegundoNumero] = useState<number>(0)
  const [resultado, setResultado] = useState<number>(0)

  useEffect(()=>{

    switch (operacao) {
      case '+':
        const resultadoSoma = primeiroNumero + segundoNumero
        if(!isNaN(resultadoSoma)){
          setResultado(primeiroNumero + segundoNumero)
      }
      break;
        
      case '-':
        const resultadoSub = primeiroNumero + segundoNumero
        if(!isNaN(resultadoSub)){
          setResultado(primeiroNumero - segundoNumero)
      }
      break;
        
      case '/':
        const resultadoDiv = primeiroNumero + segundoNumero
        if(!isNaN(resultadoDiv)){
          setResultado(primeiroNumero / segundoNumero)
      }
      break;
          
      case '*':
          const resultadoMult = primeiroNumero + segundoNumero
          if(!isNaN(resultadoMult)){
            setResultado(primeiroNumero * segundoNumero)
      }
      break;
    }
  },[primeiroNumero,operacao,segundoNumero])


  return (
    <>
      <h1>2NumCalc</h1>

      <div className="inputs">

        <div className="primeiroNum">
          <h2>1st Number</h2>
          <input type="number" onChange={(e) => {setPrimeiroNumero(e.target.valueAsNumber)}} value={primeiroNumero}/>
        </div>

        <div className="operator">
          <h2>Operator</h2>
          <select onChange={(e) => {setOperacao(e.target.value)}} value={operacao}>
            <option value="">-- Selecione a operação --</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
        </div>

        <div className="segundoNum">
          <h2>2nd Number</h2>
          <input type="number" onChange={(e) => {setSegundoNumero(e.target.valueAsNumber)}}value={segundoNumero} />
        </div>
      </div>

      <h3 className="result">Result: {resultado.toFixed(2.3)}</h3>
    </>
  );
}

export default App;
