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
      
      {/* PARTE 1: SEÇÃO SOBRE */}
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>
            Opa, muito prazer! Chamo-me Irwing Felipe. Sou acadêmico de Computação na UFS e entusiasta de tecnologia. 
            Atualmente estou focado nos meus estudos da Iniciação Científica sobre <strong>Aplicação de SR em reconhecimento facial</strong>.
            Gosto de tentar coisas novas sempre que tenho um tempinho sobrando pra isso e quero futuramente mostrar meu diferencial.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App