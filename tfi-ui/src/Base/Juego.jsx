let eleccionJ1 = null;
let eleccionJ2 = null;
let puntosJ1 = 0;
let puntosJ2 = 0;

const Juego = (eleccion1, eleccion2) => {
    return (reglas(eleccion1, eleccion2));
}

const reglas = (eleccion1, eleccion2) => {
    eleccionJ1 = eleccion1;
    eleccionJ2 = eleccion2;

    if (eleccionJ1 === eleccionJ2) {
        return resultado("empate")
    } else {
        switch (eleccionJ1) {
            case "piedra":
                return reglasPiedra();
            case "papel":
                return reglasPapel();
            case "tijera":
                return reglasTijera();
            case "lagarto":
                return reglasLagarto();
            case "spock":
                return reglasSpock();
        }
    }
}

const actualizarPuntos = (ganador) => {
    if(ganador === "J1"){
        puntosJ1 = (puntosJ1 + 1);
    } else {
        puntosJ2 = (puntosJ2 + 1);
    }
}

const resultado = (ganador) => {
    return {puntosJ1: puntosJ1, puntosJ2: puntosJ2, ganador: ganador, eleccionJ1: eleccionJ1, eleccionJ2: eleccionJ2}
};

const reiniciarContador= () => {
    puntosJ1 = 0;
    puntosJ2 = 0;
}

const reglasPiedra = () => {
    switch(eleccionJ2) {
        case "papel":
            actualizarPuntos("J2");
            return resultado("J2");
        case "spock":
            actualizarPuntos("J2");
            return resultado("J2");
        default:
            actualizarPuntos("J1");
            return resultado("J1");
    }
};

const reglasPapel = () => {
    switch(eleccionJ2) {
        case "tijera":
            actualizarPuntos("J2");
            return resultado("J2");
        case "lagarto":
            actualizarPuntos("J2");
            return resultado("J2");
        default:
            actualizarPuntos("J1");
            return resultado("J1");
    }
};

const reglasTijera = () => {
    switch(eleccionJ2) {
        case "piedra":
            actualizarPuntos("J2");
            return resultado("J2");
        case "spock":
            actualizarPuntos("J2");
            return resultado("J2");
        default:
            actualizarPuntos("J1");
            return resultado("J1");
    }
};

const reglasLagarto = () => {
    switch(eleccionJ2) {
        case "piedra":
            actualizarPuntos("J2");
            return resultado("J2");
        case "tijera":
            actualizarPuntos("J2");
            return resultado("J2");
        default:
            actualizarPuntos("J1");
            return resultado("J1");
    }

};

const reglasSpock = () => {
    switch(eleccionJ2) {
        case "papel":
            actualizarPuntos("J2");
            return resultado("J2");
        case "lagarto":
            actualizarPuntos("J2");
            return resultado("J2");
        default:
            actualizarPuntos("J1");
            return resultado("J1");
    }
};


export default { Juego, reiniciarContador };
