import { Header } from "./components/Header"
import { PantallaCronometro } from "./components/PantallaCronometro"
import { TablaResultado } from "./components/TablaResultado"
import { TablaTiros } from "./components/TablaTiros"


function App(): JSX.Element {
  return (
    <>
      <Header />
      <PantallaCronometro />
      <div className='flex w-full mt-5 h-80'>
        <TablaTiros />
        <TablaResultado/>
      </div>
    </>
  )
}

export default App
