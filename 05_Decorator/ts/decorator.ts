interface Component {
  getDetail() : string
}

class ProductComponentTS implements Component {

  protected name: string

  constructor(name:string) {
    this.name = name
  }
  
  public getDetail(): string {
    return `${this.name}`
  }
}

// esta clase sera abstracta
/**
 * al poner abstract
 * esta clase solo servira para heredar
 * no podra crear objetos de esta clase
 * solo servira como guia
 * Pero de los hijos si se podra
 */
abstract class ProductDecoratorTS implements Component {
  
  protected component: Component // para que si o si tenga el metodo getDetail o el que queramos

  constructor(component: Component) {
    this.component = component
  }

  public getDetail(): string {
    return this.component.getDetail()
  }

}

// decorator 1
class ComercialInfoProductDecoratorTS extends ProductDecoratorTS{

  private tradename:string
  private brand:string

  constructor(component:Component, tradename:string, brand:string) {
    super(component)
    this.tradename = tradename
    this.brand = brand
  }

  public getDetail(): string {
    return `${this.tradename} - ${this.brand} - ${super.getDetail()}`;
  }

}

// decorator 2
class StoreProductDecoratorTS extends ProductDecoratorTS {

  private price : number

  constructor(component:Component, price:number) {
    super(component)
    this.price = price
  }

  public getDetail(): string {
    return `${super.getDetail()} - $${this.price}`
  }

}


// EJECUCION
//component
const productComponentTS = new ProductComponentTS("Cerveza")
console.log(productComponentTS.getDetail()); // Cerveza

// decorator 1
const comercialInfoProductDecoratorTS = new ComercialInfoProductDecoratorTS(productComponentTS,"Paceña","medium")
console.log(comercialInfoProductDecoratorTS.getDetail()); // Paceña - medium - Cerveza

// decorator 2
const storeProductDecoratorTS = new StoreProductDecoratorTS(productComponentTS,20.5)
console.log(storeProductDecoratorTS.getDetail()); // Cerveza - $20.5

// decorator 2 con decorator 1
const productTS = new StoreProductDecoratorTS(comercialInfoProductDecoratorTS, 50.5)
console.log(productTS.getDetail()); // Paceña - medium - Cerveza - $50.5
























