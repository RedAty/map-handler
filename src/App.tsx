import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {CesiumViewerComponent} from "./components/map/CesiumViewer";
import { CssVarsProvider } from '@mui/joy/styles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <CssVarsProvider />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
        <CesiumViewerComponent/>
      </div>
    </div>
  )
}

export default App
