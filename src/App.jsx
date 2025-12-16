import React from 'react'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* HEADER */}
      <header style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Irwing Felipe Pereira Vieira</h1>
        <p>Estudante de Ciência da Computação (UFS)</p>
      </header>
      
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {/* SEÇÃO SOBRE*/}
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>
            Opa, muito prazer! Chamo-me Irwing Felipe. Sou acadêmico de Computação na UFS e entusiasta de tecnologia. 
            Atualmente estou focado nos meus estudos da Iniciação Científica sobre <strong>Aplicação de SR em reconhecimento facial</strong>.
            Gosto de tentar coisas novas sempre que tenho um tempinho sobrando pra isso e quero futuramente mostrar meu diferencial.
          </p>
        </section>

        {/* PARTE 2: SEÇÃO PROJETOS (Links como botões e cards separados) */}
        <section id="projetos" style={{ marginTop: '40px' }}>
          <h2>Meus Projetinhos</h2>

          {/* Projeto 1 */}
          <div className="projeto-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <h3>Resolvendo a porta XOR</h3>
            <p>Nivelamento da Iniciação Científica (Backpropagation).</p>
            <a 
              href="https://github.com/IrwingVieira/IC_XOR_BackPropagation" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'inline-block', marginTop: '10px', textDecoration: 'none', backgroundColor: '#007bff', color: 'white', padding: '8px 12px', borderRadius: '4px' }}
            >
              Acessar Repositório
            </a>
          </div>

          {/* Projeto 2 */}
          <div className="projeto-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Rede Neural ADALINE</h3>
            <p>Nivelamento da Iniciação Científica (Resolução da porta AND).</p>
            <a 
              href="https://github.com/IrwingVieira/Iniciacao-Cientifica-Rede-Neural-Adaline" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'inline-block', marginTop: '10px', textDecoration: 'none', backgroundColor: '#007bff', color: 'white', padding: '8px 12px', borderRadius: '4px' }}
            >
              Acessar Repositório
            </a>
          </div>

        </section>
      </main>
    </div>
  )
}

export default App