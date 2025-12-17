import React from 'react'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      
      {/* BARRA LATERAL (Sidebar) */}
      <aside className="sidebar">
        <img src="/src/assets/images/eu.png" alt="Irwing Vieira" className="foto-perfil" />
        
        <h1>Irwing Vieira</h1>
        <h2>Estudante de Ciência da Computação (UFS)</h2>
        
        <div className="info-list">
          <div className="info-item">
            <strong>Contato</strong>
            <p>irwingfelipe@gmail.com</p>
            <p>São Cristóvão/SE</p>
          </div>

          <div className="info-item">
            <strong>Idiomas</strong>
            <span className="tag">Inglês (Intermediário)</span>
            <span className="tag">Alemão (Iniciante)</span>
          </div>

          <div className="info-item">
            <strong>Compentências</strong>
            <span className="tag">Trabalho em Equipe</span>
            <span className="tag">Curioso</span>
          </div>
        </div>
      </aside>

      {/*BODY*/}
      <main className="main-content">
        
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>
            Opa, muito prazer! Chamo-me Irwing Felipe. Sou acadêmico em Computação na UFS (6º período) e entusiasta de tecnologia. 
            Atualmente estou focado nos meus estudos da Iniciação Científica sobre <strong>Aplicação de SR em reconhecimento facial</strong>.
            Gosto de tentar coisas novas sempre que tenho um tempinho sobrando pra isso e quero futuramente mostrar meu diferencial.
          </p>
        </section>


        
        <section id="experience">
          <h2>Experiência Acadêmica</h2>
          
          <div className="projeto-card">
            <h3>Monitoria de Programação Imperativa (PI)</h3>
            <p>3º e 4º período (2024-2025).</p>
          </div>

          <div className="projeto-card">
            <h3>Liga Acadêmica de Desenvolvimento Web (LAWD)</h3>
            <p>Finalizando nivelamento (2025).</p>
          </div>

          <div className="projeto-card">
            <h3>Empresa Júnior Softeam</h3>
            <p>Trainee em nivelamento (2025).</p>
          </div>
        </section>

        <section id="projetos">
          <h2>Projetinhos</h2>

          <div className="projeto-card">
            <h3>Resolvendo a porta XOR </h3>
            <p>Nivelamento da Iniciação Científica (Backpropagation).</p>            <div style={{margin: '10px 0'}}>
                <span className="tag">Python</span>
                <span className="tag">Neural Networks</span>
            </div>
            <a href="https://github.com/IrwingVieira/IC_XOR_BackPropagation" target="_blank" className="btn-link">Ver repositório</a>
          </div>

          <div className="projeto-card">
            <h3>Rede Neural ADALINE</h3>
            <p>Nivelamento da Iniciação Científica (Resolução da porta AND).</p>
            <div style={{margin: '10px 0'}}>
                <span className="tag">Python</span>
                <span className="tag">Neural Networks</span>
            </div>
            <a href="https://github.com/IrwingVieira/Iniciacao-Cientifica-Rede-Neural-Adaline" target="_blank" className="btn-link">Ver repositório</a>
          </div>

          <div className="projeto-card">
            <h3>Portfólio Pessoal</h3>
            <p>Este sitezinho :)</p>
            <a href="#" className="btn-link">Você está nele</a>
          </div>
        </section>

        {/*FOOTER: Design by e afins */}
        <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#888', textAlign: 'center' }}>
          <p>&copy; 2025 - Irwing Vieira</p>
        </footer>
      </main>
    </div>
  )
}

export default App