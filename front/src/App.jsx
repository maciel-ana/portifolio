import { useState, useEffect } from 'react'
import './SASS/main.scss'
import Eu from './assets/ft-eu.png'
import AgroTech from './assets/agrotech.png'
import Otis from './assets/otis.png'
import emailjs from '@emailjs/browser'
import BtnSubir from './Components/BtnSubir'

function App() {
  const [ animado, setAnimado ] = useState(false);

  // Formulário
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ mensagem, setMensagem ] = useState('');

  useEffect(() => {
    setTimeout(() => setAnimado(true), 500);
  }, []);

  function enviarMensagem (e) {
    e.preventDefault();

    if ( nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos!");
      return;
    }
    
    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email
    }

    emailjs.send("service_6gt3u04", "template_hapboin", templateParams, "8DPK2mb1MOWPqVfdG")
    .then((response) => {
      console.log("Email enviado", response.status, response.text)

      setNome('');
      setEmail('');
      setMensagem('');

    }, (err) => {
      console.log("ERRO", err)
    })
  }

  return (
    <>
      <header>
      <h4 className='logo'>Ana Clara Maciel</h4>
      <nav>
        <ul className='nav'>
          <a href='#ferramentas'>Skills</a>
          <a href='#projetos'>Projetos</a>
          <a href='#contato-secao' id='contato'>Contato</a>
        </ul>
      </nav>
     </header>
     <hr />

     <main>
      <div className="conteudo">
        <h1>Olá, eu sou <span className='nome'>Ana Clara Maciel</span></h1>
        <p>Sou desenvolvedora Front-end apaixonada por transformar ideias em interfaces funcionais, intuitivas e agradáveis. Tenho experiência com tecnologias como HTML, CSS, JavaScript e React, e gosto de unir design e código para criar experiências digitais que realmente façam sentido para o usuário.</p>

        <div className="botoes">
          <button id='meusProjetos'><a href='#contato-secao'>Meus Projetos</a></button>
        </div>
      </div>

        <div className="imagem">
          <img src={Eu} alt='foto Ana'/>
        </div>
     </main>

     <section className='ferramentas' id="ferramentas">
      <div className="ferramentas_introducao">
        <h3>Minhas Ferramentas e Tecnologia</h3>
        <p>O arsenal que uso para construir experiências digitais incríveis.</p>
      </div>
    
      <div className="tecnologias">
        <div className="box">
          <div className="info">
            <i className="fa-brands fa-html5 icon"></i>
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
            <i className="fa-brands fa-css3 icon"></i>
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
            <i className="fa-brands fa-js icon"></i>
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
            <i className="fa-brands fa-react icon"></i>
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
            <i className="fa-brands fa-sass icon"></i>
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
            <i className="fa-brands fa-github icon"></i>
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

     <section className='projetos' id="projetos">
      <div className="titulo-proj">
        <h3>Projetos em Destaque</h3>
        <p>Uma seleção de trabalhos que demonstram minha paixão e habilidade</p>
      </div>
      <div className="projetos-box">
        <div className="proj">
          <div className="imagem-proj">
            <img src={AgroTech} alt="foto projeto AgroTech" />
          </div>
          <div className="descricao">
            <h4>Site para Monitoramento de Pequenas Produções Agrícolas</h4>
            <p>Plataforma voltada para pequenos agricultores, com foco em reduzir o desperdício de água e insumos agrícolas por meio da tecnologia. O projeto propõe soluções acessíveis e sustentáveis para otimizar o uso de recursos, aumentar a eficiência das produções e promover práticas mais conscientes no campo.</p>
            <div className="tecnologias-proj">
              <span>React.js</span>
              <span>SASS</span>
            </div>
            <div className="botoes-proj">
              <a href='https://github.com/maciel-ana/AgroTECH-.git' target='_blank' className='github'>Código</a>
              <a href='https://agro-tech-fawn.vercel.app/' target='_blank' className='site'>Site</a>
            </div>
          </div>
        </div>

        <div className="proj">
          <div className="imagem-proj">
            <img src={Otis} alt="foto projeto AgroTech" />
          </div>
          <div className="descricao">
            <h4>Site para Monitoramento de Instalações de Elevadores OTIS</h4>
            <p>Plataforma desenvolvida em parceria com a Otis, voltada para padronizar e centralizar o acompanhamento das instalações de elevadores em diferentes países da América Latina, promovendo mais eficiência, transparência e integração entre as equipes.</p>
            <div className="tecnologias-proj">
              <span>React.js</span>
              <span>Firebase</span>
              <span>CSS</span>
            </div>
            <div className="botoes-proj">
              <a href='https://github.com/maciel-ana/otis-mvp.git' target='_blank' className='github'>Código</a>
              <a href='https://otis-mvp.vercel.app/' target='_blank' className='site'>Site</a>
            </div>
          </div>
        </div>
    
        <div className="proj">
          <div className="imagem-proj">
            <img src={AgroTech} alt="foto projeto AgroTech" />
          </div>
          <div className="descricao">
            <h4>Site para organização de tarefas</h4>
            <p>O DOIT é um projeto pessoal de aplicação web focado em produtividade, desenvolvido como uma lista de tarefas (to-do list) interativa. O objetivo principal da ferramenta é oferecer uma interface limpa e intuitiva para que o usuário possa cadastrar, organizar e gerenciar suas atividades e pendências diárias de forma eficiente.</p>
            <div className="tecnologias-proj">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Firebase</span>
            </div>
            <div className="botoes-proj">
              <a href='https://github.com/maciel-ana/DOIT.git' target='_blank' className='github'>Código</a>
              <a href='https://agro-tech-fawn.vercel.app/' target='_blank' className='site'>Site</a>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className='contato' id="contato-secao">
        <div className="conteudo-ctt">
          <h2>Vamos Conversar</h2>
          <p>Tem um projeto em mente ou quer se conectar? Me envie uma mensagem!</p>

          <form className='forms' onSubmit={enviarMensagem}>
            <label>Nome</label>
            <input 
            type="text" 
            name='email'
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            />
            <label>Email</label>
            <input 
            type="email" 
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label>Mensagem</label>
            <textarea 
            name="mensagem" 
            id="msg"
            onChange={(e) => setMensagem(e.target.value)}
            value={mensagem}
            />

            <div className="botao">
              <button 
              className='btn-enviar' 
              type='submit'
              value="enviar"
              >Enviar Mensagem</button>
            </div>

            <div className="redes">
              <a href='https://github.com/maciel-ana?tab=repositories' target='_blank'><i className="fa-brands fa-github icon"></i></a>
              <a href='https://www.linkedin.com/in/anamaciel0604/' target='_blank'><i className="fa-brands fa-linkedin icon"></i></a>
            </div>
          </form>
        </div>
     </section>
     <BtnSubir />
     <div className="criadorPor">
      <p> &copy; 2025 Ana Clara Maciel. Todos os direitos reservados</p>
     </div>
    </>
  )
}

export default App
