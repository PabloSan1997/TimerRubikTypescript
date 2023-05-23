


export function generarResultado(jugadas: Jugadas[]): Resultado {
    const cadena = jugadas.map(elemento=>elemento.tiempo).sort((a,b)=>a-b);
    const total_elementos = 5;
    const total_oficial = 3;
    const media = sumar(cadena)/total_elementos;
    const peor = cadena.pop() as number;
    const mejor = cadena.shift() as number;
    const avg5 = sumar(cadena)/total_oficial;
    return {media, mejor, peor, avg5}
}

const sumar=(cad:number[]):number=>{
    let res = 0;
    cad.forEach(eleme=>{
        res+=eleme;
    });
    return res;
}