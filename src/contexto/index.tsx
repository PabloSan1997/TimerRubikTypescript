import React from 'react';
import { generarAlgoritmo } from '../utilities/generarAlgoritmo';
import { generarResultado } from '../utilities/generarResultados';

const Contexto = React.createContext({});

export function ProvedroContexto({ children }: Contexto): JSX.Element {
    const [tiempo, setTiempo] = React.useState<number>(0);
    const [play, setPlay] = React.useState<boolean>(false);
    const [intervalo, setIntervalo] = React.useState<NodeJS.Timer>();
    const [jugadas, setJugadas] = React.useState<Jugadas[]>([]);
    const [numTiro, setNumTiro] = React.useState(0);
    const [algoritmo, setAlgoritmo] = React.useState<string>(generarAlgoritmo());
    const [resultado, setResultado] = React.useState<Resultado>({
        media:0,
        mejor:0,
        peor:0,
        avg5:0
    });
    let intervaloA: NodeJS.Timer;
    React.useEffect(() => {
        const tiempoInicio: Date = new Date();
        if (play) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            intervaloA = setInterval(() => {
                const miliSecons = Number(new Date()) - Number(tiempoInicio)
                const tiempoActual = miliSecons;
                setTiempo(tiempoActual);
            }, 10);
            setIntervalo(intervaloA);
        } else {
            if (intervalo) {
                intervaloA = intervalo;
                clearInterval(intervaloA)
                setIntervalo(intervaloA);

                const id = numTiro+1;
                const tiro: Jugadas = {
                    id,
                    algoritmo,
                    tiempo
                }
                const cadena = [...jugadas];
                cadena[numTiro] = tiro;
                setJugadas(cadena);
                setAlgoritmo(generarAlgoritmo());
                if(numTiro==4){
                    setNumTiro(0);
                }
                else{
                    setNumTiro(numTiro+1);
                }
            }
        }
    }, [play]);

    React.useEffect(()=>{
        if(jugadas.length===5){
            setResultado(generarResultado(jugadas));
        }
    },[jugadas]);
    return (
        <Contexto.Provider
            value={{
                tiempo,
                setPlay,
                play,
                jugadas,
                setJugadas,
                algoritmo,
                resultado
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const MiContexto = () => React.useContext(Contexto) as ValoresContexto;