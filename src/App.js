import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h2 className='text-center'>🖊️ Dictionary App </h2>
      </header>
      <main>
      <Dictionary />
    </main>
    <footer className='text-center text-muted m-3'>
        <p>
          This project was coded by {" "}
          <a href="https://github.com/MarciaPratas2000" target="_blank"   rel="noreferrer" >
            Márcia Pratas
          </a>
          , is {" "}
          <a
            href="https://github.com/MarciaPratas2000/dictionary-app"
            target="_blank"
            rel="noreferrer" 
          >
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://dictionary-mp.netlify.app/"
            target="_blank"
            rel="noreferrer" 
          > {" "}
            hosted on Netlify
          </a>
        </p>
      </footer>      
      </div>
    </div>
  );
}

export default App;
