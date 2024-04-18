interface ListImplementor {
  elements: number[]
  
  add(number:number):void
  getElements(): number[]
}

class OrderedList implements ListImplementor {
  elements: number[] = []

  public add(number: number): void {
    this.elements.push(number)
    this.elements.sort()
  }

  public getElements(): number[] {
    return this.elements
  }
}

class UniqueList implements ListImplementor {
  elements: number[] = []

  public add(number: number): void {
    if (!this.elements.includes(number)) {
      this.elements.push(number)
    }
  }

  public getElements(): number[] {
    return this.elements
  }
}

interface DataAbstraction {
  implementor : ListImplementor

  add(number: number):void // este metodo seria obligado
  get(): number[] // este igual
  operation(fn: (n:number)=>number): number[] // este para demostrar que no siempre tiene que tener las mismas funciones
}

class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplementor

  constructor(implementor: ListImplementor) {
    this.implementor = implementor
  }

  public add(number: number): void {
    this.implementor.add(number)
  }

  public get(): number[] {
    return this.implementor.getElements()
  }

  public operation(fn: (n: number) => number): number[] {
    return this.implementor.getElements().map(fn)
  }

}

const uniqueData = new DataRefinedAbstraction(new UniqueList())
uniqueData.add(3)
uniqueData.add(3)
uniqueData.add(1)
uniqueData.add(1)
uniqueData.add(2)
console.log(uniqueData.get()); // [ 3, 1, 2 ]

const orderedList = new DataRefinedAbstraction(new OrderedList())
orderedList.add(3)
orderedList.add(3)
orderedList.add(1)
orderedList.add(1)
orderedList.add(2)
console.log(orderedList.get()); // [ 1, 1, 2, 3, 3 ]

const uniqueItems = uniqueData.operation((e:number) => e*2)
console.log(uniqueItems); // [ 6, 2, 4 ]

const orderedItems = orderedList.operation((e:number) => e*2)
console.log(orderedItems); // [ 2, 2, 4, 6, 6 ]



