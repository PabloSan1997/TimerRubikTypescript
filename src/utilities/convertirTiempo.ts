
export function convertirTiempo(tiempo:number):string{
    const date = new Date(tiempo);
    return `${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
}