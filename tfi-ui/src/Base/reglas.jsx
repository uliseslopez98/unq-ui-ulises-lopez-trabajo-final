const eleccionJ1 = "";
const eleccionJ2 = "";
const puntosJ1 = 0;
const puntosJ2 = 0;

const constatarReglas = (eleccion1, eleccion2) => {

    eleccionJ1 = eleccion1
    eleccionJ2 = eleccion2

    if (eleccion1 === eleccion2) {
        return resultado("empate")
    } else {
        switch (eleccion1) {
            case "piedra":
                return reglasPiedra();
            case "tijera":
                return reglasPapel();
            case "papel":
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
        case "tijera":
            actualizarPuntos("J1");
            return resultado("J1");
        case "lagarto":
            actualizarPuntos("J1");
            return resultado("J1");
        default:
            actualizarPuntos("J2");
            return resultado("J2");
    }
};

const reglasPapel = () => {
    switch(eleccionJ2) {
        case "piedra":
            actualizarPuntos("J1");
            return resultado("J1");
        case "spock":
            actualizarPuntos("J1");
            return resultado("J1");
        default:
            actualizarPuntos("J2");
            return resultado("J2");
    }
};

const reglasTijera = () => {
    switch(eleccionJ2) {
        case "papel":
            actualizarPuntos("J1");
            return resultado("J1");
        case "lagarto":
            actualizarPuntos("J1");
            return resultado("J1");
        default:
            actualizarPuntos("J2");
            return resultado("J2");
    }
};

const reglasLagarto = () => {
    switch(eleccionJ2) {
        case "papel":
            actualizarPuntos("J1");
            return resultado("J1");
        case "spock":
            actualizarPuntos("J1");
            return resultado("J1");
        default:
            actualizarPuntos("J2");
            return resultado("J2");
    }

};

const reglasSpock = () => {
    switch(eleccionJ2) {
        case "piedra":
            actualizarPuntos("J1");
            return resultado("J1");
        case "tijera":
            actualizarPuntos("J1");
            return resultado("J1");
        default:
            actualizarPuntos("J2");
            return resultado("J2");
    }
};


export default { constatarReglas, reiniciarContador };
