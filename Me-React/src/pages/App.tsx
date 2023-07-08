import './App.scss'
import World from './components/World'

export default function App() {

  return (
    <>
      <div className="principal">
        <div className="astronaut">
          <World />
          <img src="/onlyAstro.png" alt="Img astronaut" />
        </div>
        <div className="stars-content">
          <div className="stars"></div>
        </div>
        <div className="content">
          <h1>JhersonRojas</h1>
          <h2>Developer</h2>
        </div>
      </div>

      <div className="details">
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
        <h1>Hola</h1>
      </div>
    </>
  )
}
