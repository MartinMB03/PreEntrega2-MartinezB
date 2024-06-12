//Simulador de carga de empleados que calcula los años de aporte restante y los filtra a todos los que sean menores de 30 años.

// Funcion para solicitar informacion al usuario
function solicitarInformacion(mensaje) {
    return prompt(mensaje);
}

// Funcion para validar el sexo ingresado
const validarSexo = (sexo) => {
    return sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'femenino';
};

// Funcion para calcular los años de aporte restantes
const calcularAnosAporteRestantes = (edad, sexo) => {
    const añosJubilacion = (sexo === 'masculino') ? 65 : 55;
    return añosJubilacion - edad;
};

// Funcion para filtrar una lista de personas por edad
const filtrar = (comparador, lista) => {
    const result = [];
    for (const elem of lista) {
        if (comparador(elem)) {
            result.push(elem);
        }
    }
    return result;
};

// Funcion para validar si una persona es menor que cierta edad
const filtroEdad = (edad) => {
    const filtro = (persona) => persona.edad < edad;
    return filtro;
};

// Crear un objeto de persona
const crearPersona = () => {
    const persona = {};

    // Solicitar informacion y asignar al objeto de persona
    persona.nombre = solicitarInformacion("Ingrese su nombre:");
    persona.apellido = solicitarInformacion("Ingrese su apellido:");
    persona.dni = solicitarInformacion("Ingrese su DNI:");

    let sexo = '';
    while (!validarSexo(sexo)) {
        sexo = solicitarInformacion("Ingrese su sexo (masculino/femenino):");
    }
    persona.sexo = sexo;

    persona.edad = parseInt(solicitarInformacion("Ingrese su edad:"));
    persona.telefono = solicitarInformacion("Ingrese su teléfono:");
    persona.nacionalidad = solicitarInformacion("Ingrese su nacionalidad:");

    // Calcular y asignar los años de aporte restantes
    persona.añosAporteRestantes = calcularAnosAporteRestantes(persona.edad, persona.sexo);

    return persona;
};

// Funcion para mostrar los detalles de una persona
const mostrarDetallesPersona = (persona) => {
    console.log(`Detalles de la persona:
Nombre: ${persona.nombre}
Apellido: ${persona.apellido}
DNI: ${persona.dni}
Sexo: ${persona.sexo}
Edad: ${persona.edad}
Teléfono: ${persona.telefono}
Nacionalidad: ${persona.nacionalidad}
Años de aporte restantes: ${persona.añosAporteRestantes}`);
};

// Funcion para iterar sobre un array de personas y mostrar los detalles de cada una
const mostrarDetallesPersonas = (personas) => {
    personas.forEach((persona) => {
        mostrarDetallesPersona(persona);
    });
};

// Funcion principal
const main = () => {
    const cantidadPersonas = parseInt(solicitarInformacion("Ingrese la cantidad de personas a ingresar:"));
    const listaPersonas = [];

    // Ciclo para crear y agregar personas a la lista
    for (let i = 0; i < cantidadPersonas; i++) {
        listaPersonas.push(crearPersona());
    }

    // Filtrar personas menores de 30 años
    const personasMenoresDe30 = filtrar(filtroEdad(30), listaPersonas);

    // Mostrar los detalles de las personas filtradas
    mostrarDetallesPersonas(personasMenoresDe30);
};

// Llamar a la funcion principal para comenzar el simulador
main();
