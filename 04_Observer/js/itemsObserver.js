
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

  notify(data){
    this.observers.forEach(ob => {
      ob.refresh(data)
    })
  }
}

class ItemsSubject extends Subject {

  constructor(){
    super()
    this.data = [] // este seria el estado
  }

  //este sera el metodo para agregar elementos
  add(item){
    this.data.push(item) 
    // ahora el subject tiene que notificar a los observadores del cambio de estado
    this.notify(this.data)
  }
  
}

class HtmlElementObserver {
  constructor(element){
    this.element = element
  }
  // este refresh no necesariamente tiene que ser refresh
  // podria a ver otras implementaciones que diga notify o start o run , etc
  refresh(data){
    // esta funcion solo insertara el contenido de data en el elemento
    this.element.innerHTML = `
      <p>
        [${data}]
      </p>
    `
  }
}

// usando el antiguo observador que usamos
class Observer {
  constructor(fn){
    this.fn = fn
  }
  refresh(data){
    this.fn(data)
  }
}

const items = new ItemsSubject()
// div1 hace referencia a el div con id div1
const div1Observer = new HtmlElementObserver(div1)
const div2Observer = new HtmlElementObserver(div2)

const div3Observer = new Observer((data) => {
  div3.innerHTML = `{
    La longitud es : ${data.length}
  }`
})

items.subscribe(div1Observer)
items.subscribe(div2Observer)
items.subscribe(div3Observer)

function add (){
  // nombre es el input con esa id
  items.add(nombre.value)
}













