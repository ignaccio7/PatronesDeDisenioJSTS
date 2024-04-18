// Este seria el canal al cual se van a subscribir para hacer acciones
class Subject {
  constructor(){
    this.observers = []
  }

  subscribe(observer){
    this.observers.push(observer)
  }

  unsubscribe(observer){
    this.observers = this.observers.filter(ob => ob !== observer)
  }

  // cuando reciba datos yo quiero notificar a todos los observadores
  notify(data){
    this.observers.forEach(ob => {
      // para notificar a los observadores, cuando se ejecute notify se ejecutara refresh en todos los obs
      ob.refresh(data)
    })
  }
}
// los observadores pueden ser de distinto comportamiento
// pero crearemos un observador que pueda hacer diferentes funciones
// segun le mandemos
class Observer {

  constructor(fn){
    this.fn = fn
  }

  refresh(data){
    this.fn(data)
  }

}

const s = new Subject() // <- este objeto podra tener observadores

const o1 = new Observer(d => console.log(`Soy obs1 y el valor recibido es : ${d}`))
const o2 = new Observer(d => {
  div1.innerHTML = d
}) // este mostrara el contenido en el div1
const o3 = new Observer(d => {
  div2.innerHTML = d.split('').reverse().join('')
}) // este mostrara el contenido volteado en el div2

// ahora como subscribimos
s.subscribe(o1) // muestra en consola
s.subscribe(o2) // muestra en el div1
s.subscribe(o3) // muestra en el div2
s.unsubscribe(o1) // dejara de mostrar en consola


// cual sera la accion que va notificar 
/**
 * Cuando escribamos en el input de id entrada
 * se ejecutara la funcion change
 */
function change(){
  // como tiene id el input id="entrada" accedemos asi
  s.notify(entrada.value)
}

