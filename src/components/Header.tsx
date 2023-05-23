import { MiContexto } from '../contexto'

export  function Header() {
  const {algoritmo} = MiContexto();
  return (
    <header className='w-ful h-24 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col'>
        <h1 className='text-white font-semibold text-3xl m-auto'>Cronometro Cubero</h1>
        <div className='min-w-[60%] m-auto flex shadow-mio h-1/3 rounded-lg'>
            <p className='m-auto text-slate-200 tracking-[5px] font-semibold'>{algoritmo}</p>
        </div>
    </header>
  )
}
