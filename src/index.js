import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => { 

  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet',
  color: 'white', border: 'none', borderRadius: 8, width: '100%'}

  const textoDoRotulo = 'Nome:'
  const obterTextDoBotao = () => "Enviar"
  return (
    //css em notação json, primeiras chaves para entrar no javascript, segunda para entrar no json
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, 
    borderRadius: 8}}>
      <label className='rotulo' htmlFor="nome" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
      <input type="text" id='nome' style={{ paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden',
      width: '100%', borderRadius: 8, outline: 'none'}} />

      <button style={estilosBotao}>{obterTextDoBotao()}</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)