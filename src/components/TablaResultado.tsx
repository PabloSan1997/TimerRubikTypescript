import { MiContexto } from "../contexto"
import { convertirTiempo } from "../utilities/convertirTiempo";


export function TablaResultado() {
    const {resultado} = MiContexto();
    const cadena = [
        {
            name:"AVG5",
            resultado:convertirTiempo(resultado.avg5)
        },
        {
            name:"Mejor",
            resultado:convertirTiempo(resultado.mejor)
        },
        {
            name:"Peor",
            resultado:convertirTiempo(resultado.peor)
        },
        {
            name:"Media",
            resultado:convertirTiempo(resultado.media)
        }
    ];
  return (
    <div className='w-[20%] m-auto mt-10 shadow-mio2 rounded-lg text-[1.3rem] text-white flex flex-col overflow-hidden'>
       {cadena.map(elemento=>(
        <div key={elemento.name} className={`flex ${elemento.name==="Media"?"":"border-b-[1px] border-gray-400"}`}>
            <div className='w-1/2 h-12 flex bg-titulo'>
                <p className='m-auto'>{elemento.name}</p>
            </div>
            <div className='w-1/2 h-12 flex'>
                <p className='m-auto'>{elemento.resultado}</p>
            </div>
        </div>
       ))}
    </div>
  )
}
