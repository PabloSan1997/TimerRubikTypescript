import React from 'react';

import { MiContexto } from '../contexto'
import { convertirTiempo } from '../utilities/convertirTiempo';

export function PantallaCronometro() {
    const { setPlay, tiempo } = MiContexto();
    React.useEffect(() => {
        const activar = (e: KeyboardEvent) => {
            if (e.key === " " ) {
                setPlay(true);
            }
        }
        const desactivar = (e: KeyboardEvent) => {
            if (e.key!==" ") {
                setPlay(false);
            }
        }
        document.addEventListener("keyup", activar);
        document.addEventListener("keypress", desactivar);
    }, [setPlay]);
    return (
        <div className='w-full h-[200px] bg-miColor flex'>
            <p className='text-white text-[7rem] m-auto'>{convertirTiempo(tiempo)}</p>
        </div>
    )
}
