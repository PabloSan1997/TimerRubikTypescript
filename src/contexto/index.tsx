import React from 'react';

const Contexto = React.createContext({});

export function ProvedroContexto({ children }: Contexto): JSX.Element {
    const [tiempo, setTiempo] = React.useState<number>(0);
    const [play, setPlay] = React.useState<boolean>(false);
    const [intervalo, setIntervalo] = React.useState<NodeJS.Timer>();
    const [jugadas, setJugadas] = React.useState<Jugadas[]>([]);
    const [numTiro, setNumTiro] = React.useState(0);
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
                    algoritmo: "R E S E S S R S C E S E S E S D E S D E S D",
                    tiempo
                }
                const cadena = [...jugadas];
                cadena[numTiro] = tiro;
                setJugadas(cadena)
                if(numTiro==4){
                    setNumTiro(0);
                }
                else{
                    setNumTiro(numTiro+1);
                }
            }
        }
    }, [play])
    return (
        <Contexto.Provider
            value={{
                tiempo,
                setPlay,
                play,
                jugadas,
                setJugadas
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const MiContexto = () => React.useContext(Contexto) as ValoresContexto;