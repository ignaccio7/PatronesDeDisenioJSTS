// con esto indicamos que un observador si o si tenga un metodo refresh
// interface IObserver {
//   refresh(value: number) : void;
// }
// // si lo necesitaramos tipo string seria
// interface IObserver2 {
//   refresh(value: string) : void;
// }

// Pero en TS tenemos algo de tipo generico donde podemos indicarle el tipo cuando creemos el objeto
interface IObserver <T> {
  refresh(value: T) : void
}

interface ISubject<T> {
  observers: IObserver<T>[]

  subscribe(observer: IObserver<T>):void
  unsubscribe(observer: IObserver<T>):void

  notify(value:T):void
}

class SubjectTS<T> implements ISubject<T> {
  observers: IObserver<T>[]

  constructor(){
    this.observers = []
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer)
  }

  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter(ob => ob !== observer)
  }

  notify(value: T): void {
    this.observers.forEach(obs => {
      obs.refresh(value)
    })
  }
}

class ObserverTS<T> implements IObserver<T>{
  private fn:(value: T) => void

  constructor(fn:(value:T) => void) {
    this.fn = fn
  }

  refresh(value: T): void {
    this.fn(value)
  }

}

const subject = new SubjectTS<number>()

const obs1 = new ObserverTS<number>((num)=>{
  console.log(`hello ${num}`);  
})
const obs2 = new ObserverTS<number>((num)=>{
  console.log(`hi ${num}`);  
})

subject.subscribe(obs1)
subject.subscribe(obs2)

subject.notify(1.2)
subject.notify(30)


// ----------- con string

const subjectString = new SubjectTS<string>()

const obs1String = new ObserverTS<string>((cad)=>{
  console.log(`hello ${cad.toUpperCase()}`);  
})
const obs2String = new ObserverTS<string>((cad)=>{
  console.log(`hi ${cad.toLocaleLowerCase()}`);  
})

subjectString.subscribe(obs1String)
subjectString.subscribe(obs2String)

subjectString.notify("Nestor")
subjectString.notify("Rojas")