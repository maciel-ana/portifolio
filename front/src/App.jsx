import { useState, useEffect } from 'react'
import './SASS/main.scss'
import Eu from './assets/ft-eu.png'

function App() {
  const [ animado, setAnimado ] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimado(true), 500);
  }, []);

  return (
    <>
      <header>
      <h4 className='logo'>Ana Clara Maciel</h4>
      <nav>
        <ul className='nav'>
          <a href='#skills'>Skills</a>
          <a href='#projetos'>Projetos</a>
          <a href='#contato' id='contato'>Contato</a>
        </ul>
      </nav>
     </header>
     <hr />

     <main>
      <div className="conteudo">
        <h1>Olá, eu sou <span className='nome'>Ana Clara Maciel</span></h1>
        <p>Sou desenvolvedora Front-end apaixonada por transformar ideias em interfaces funcionais, intuitivas e agradáveis. Tenho experiência com tecnologias como HTML, CSS, JavaScript e React, e gosto de unir design e código para criar experiências digitais que realmente façam sentido para o usuário.</p>

        <div className="botoes">
          <button id='meusProjetos'>Meus Projetos</button>
        </div>
      </div>

        <div className="imagem">
          <img src={Eu} alt='foto Ana'/>
        </div>
     </main>

     <section className='ferramentas'>
      <div className="ferramentas_introducao">
        <h3>Minhas Ferramentas e Tecnologia</h3>
        <p>O arsenal que uso para construir experiências digitais incríveis.</p>
      </div>
    
      <div className="tecnologias">
        <div className="box">
          <div className="info">
            <i class="fa-brands fa-html5 icon"></i>
            <p className='tipo'>HMTL5</p>
          </div>
          <div className="nivel-container">
            <p className='nivel'>Intermediário</p>
            <div className="barra-progresso">
              <div 
              className="barra-preenchida" 
              style={{width: animado ? '70%' : '0%'}}></div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="info">
            <i class="fa-brands fa-css3 icon"></i>
            <p className='tipo'>CSS</p>
          </div>
          <div className="nivel-container">
            <p className='nivel'>Intermediário</p>
            <div className="barra-progresso">
              <div 
              className="barra-preenchida" 
              style={{width: animado ? '70%': '0%'}}></div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="info">
            <i class="fa-brands fa-js icon"></i>
            <p className='tipo'>JavaScript</p>
          </div>
          <div className="nivel-container">
            <p className='nivel'>Intermediário</p>
            <div className="barra-progresso">
              <div 
              className="barra-preenchida" 
              style={{width: animado ? '70%': '0%'}}></div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="info">
            <i class="fa-brands fa-react icon"></i>
            <p className='tipo'>React.js</p>
          </div>
          <div className="nivel-container">
            <p className='nivel'>Intermediário</p>
            <div className="barra-progresso">
              <div 
              className="barra-preenchida" 
              style={{width: animado ? '70%': '0%'}}></div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="info">
            <i class="fa-brands fa-sass icon"></i>
            <p className='tipo'>SASS</p>
          </div>
          <div className="nivel-container">
            <p className='nivel'>Intermediário</p>
            <div className="barra-progresso">
              <div 
              className="barra-preenchida" 
              style={{width: animado ? '70%' : '0%'}}></div>
            </div>
          </div>
          <span className='porcentagem'></span>
        </div>

        <div className="box">
          <div className="info">
            <i class="fa-brands fa-github icon"></i>
            <p className='tipo'>Git & GitHub</p>
          </div>
          <div className="nivel-container">
            <p className='nivel'>Básico</p>
            <div className="barra-progresso">
              <div 
              className="barra-preenchida" 
              style={{width: animado ? '30%': '0%'}}></div>
            </div>
          </div>
        </div>

      </div>
     </section>
    </>
  )
}

export default App
