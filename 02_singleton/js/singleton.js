// Debe existir un objeto por nuestra clase
// asi no se creara otra instancia y nos devolvera la que ya existe en memoria
/*
class Singleton {
  // como hacemos el truco para que solo exista una vez
  constructor(){
    console.log('entrando al constructor');
    // verificamos si existe la instancia
    if (Singleton.instance) {
      console.log('ya existe');
      return Singleton.instance
    }
    // Si esque no existe instance entonces creamos la instancia de la misma clase
    console.log('no existe y se crea');
    Singleton.instance = this
  }

}

const singleton = new Singleton();
const singleton2 = new Singleton();*/
/*
Salida 🔽
entrando al constructor
no existe y se crea
entrando al constructor
ya existe
*/

class Singleton {
  // como hacemos el truco para que solo exista una vez
  constructor(){
    this.random = Math.random()
    // verificamos si existe la isntancia
    if (Singleton.instance) {
      return Singleton.instance
    }
    // Si esque no existe instance entonces creamos la instancia de la misma clase
    Singleton.instance = this
  }

  // si quisieramos tener un metodo para obtener nuestra instancia
  static getInstance(){
    return Singleton.instance
  }

}

const singleton = new Singleton();
const singleton2 = new Singleton();

console.log(singleton.random); // nos devuelve el mismo valor de random
console.log(singleton2.random); // nos devuelve el mismo valor de random
console.log(singleton.random === singleton2.random); // true

const singleton3 = Singleton.getInstance()
console.log(singleton3.random === singleton2.random); // true
