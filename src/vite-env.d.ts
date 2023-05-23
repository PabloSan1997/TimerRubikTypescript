/// <reference types="vite/client" />


type Contexto = {
    children:JSX.Element | JSX.Element[]
}

type SetPlay = {
    (a:boolean):void
}
type SetJugadas = {
    (a:jugada[]):void
}
type ValoresContexto = {
    tiempo:number,
    play:boolean,
    setPlay:SetPlay,
    jugadas:Jugadas[],
    setJugadas:SetJugadas

}

type Jugadas = {
    id:number,
    tiempo:number,
    algoritmo:string
}