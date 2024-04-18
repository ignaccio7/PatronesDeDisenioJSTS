
// dias de la semana
class WeekDays {
  daysEs = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
  daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  // tendra que ser una instancia de este objeto y esta deberia ser globalmente en nuestra aplicacion

  // Una vez que se crea el objeto se determina el lenguaje del usuario
  constructor(lang){
    this.lang = lang

    // envez de instance se puede poner cualquier valor pero por norma "instance" para que sepamos que hace referencia a singleton
    if (WeekDays.instance) {
      return WeekDays.instance
    }
    
    WeekDays.instance = this
  }

  getDays(){
    return this.lang === 'es' ? this.daysEs : this.daysEn
  }

}

const weekDays = new WeekDays("en")
const weekDays2 = new WeekDays("es")

console.log(weekDays.getDays()); // dias en ingles
console.log(weekDays2.getDays()); // dias en ingles