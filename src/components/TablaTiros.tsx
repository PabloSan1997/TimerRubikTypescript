
import { MiContexto } from '../contexto'
import { convertirTiempo } from '../utilities/convertirTiempo';

export function TablaTiros() {
    const { jugadas } = MiContexto();
    return (
        <div className='w-1/2 shadow-mio2 rounded-lg m-auto mt-10 text-white overflow-hidden'>
            <div className='flex bg-titulo text-[1.3rem]'>
                <div  className='flex w-[10%]'>
                    <p className='m-auto'>Num</p>
                </div>
                <div className='flex w-[10%]'>
                    <p className='m-auto'>Tiempo</p>
                </div>
                <div className='flex w-[80%]'>
                    <p className='m-auto'>Algoritmo</p>
                </div>
            </div>
            {jugadas.map(elemento => (
                <div key={elemento.id} className='flex w-full text-[1.2rem]'>
                    <div className='flex w-[10%]'>
                        <p className='m-auto'>{elemento.id}</p>
                    </div>
                    <div  className='flex w-[10%]'>
                        <p className='m-auto'>{convertirTiempo(elemento.tiempo)}</p>
                    </div>
                    <div className='flex w-[80%]'>
                        <p className='m-auto ml-4'>{elemento.algoritmo}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
