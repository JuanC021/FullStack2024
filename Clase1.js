const readline = require('readline');

function cambiarVocalesPorNumeros(nombre) {
    // Convertir el nombre a minúsculas para manejar todas las vocales de la misma manera
    nombre = nombre.toLowerCase();
    
    // Crear un objeto para mapear las vocales a los números
    const mapaVocales = {
      'a': '1',
      'e': '2',
      'i': '3',
      'o': '4',
      'u': '5'
    };
    
    let nombreModificado = '';
    
    // Recorrer cada letra del nombre
    for (let letra of nombre) {
      // Si la letra es una vocal, reemplazarla con su número correspondiente
      if (mapaVocales.hasOwnProperty(letra)) {
        nombreModificado += mapaVocales[letra];
      } else {
        // Si no es una vocal, mantener la letra original
        nombreModificado += letra;
      }
    }
    
    return nombreModificado;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingresa tu nombre: ', (nombre) => {
  // Imprimir el nombre con las vocales cambiadas por números
  console.log(cambiarVocalesPorNumeros(nombre));
  rl.close();
});
