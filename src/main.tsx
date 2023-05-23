import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./estilos/tailwind.css";
import "./estilos/colorFondo.css"
import { ProvedroContexto } from './contexto/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProvedroContexto>
    <App/>
  </ProvedroContexto>
)
