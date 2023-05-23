

export function generarAlgoritmo():string{
    const letras = ["R", "U", "L", "F", "D", "B"];
    let lugar=0;
    let anterior=0;
    const cadena:string[]=[];
    for(let i=0;i<21;i++){
        while(lugar===anterior){
            lugar =  Math.floor(Math.random() * 5);
        }
        const tipo = Math.floor(Math.random() * 3) + 1;
        if(tipo===1){
            cadena[i]=letras[lugar];
        }else if(tipo===2){
            cadena[i]=letras[lugar]+"'";
        }
        else{
            cadena[i]="2"+letras[lugar];
        }
        anterior=lugar;
    }
    return cadena.join(" ");
}
