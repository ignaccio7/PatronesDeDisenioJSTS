// clase principal - componente
// este seria el producto
class ProductComponent {

  constructor(name){
    this.name = name
  }

  getDetail(){
    return `${this.name}`
  }

}

// decorator -> un decorador es como una bolsa o clase que tiene funcionalidades a la cual podemos añadir o meter otras funcionalidades para aumentar a los otros
// este seria como el envoltorio
class ProductDecorator {

  constructor( productComponent ) {
    this.productComponent = productComponent
  }

  getDetail(){
    return this.productComponent.getDetail()
  }

}

// 1er DECORATOR
// y esto la bolsa, osea ya aumentando mas cosas que queramos colocar
class ComercialInfoProductDecorator extends ProductDecorator {

  // tradename nombrecomercial - brand marca
  constructor(productComponent, tradename, brand) {
    super(productComponent)

    this.tradename = tradename
    this.brand = brand
  }

  getDetail(){
    return `${this.tradename} -  ${this.brand} - ${super.getDetail()}`
  }
}

// 2do DECORATOR
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent)

    this.price = price
  }

  getDetail(){
    return `${super.getDetail()} - $ ${this.price}`
  }
}

// 3er DECORATOR
class HTMLProductDecorator extends ProductDecorator {

  getDetail(){
    return `
      <h1>Informacion del producto</h1>
      <p>${super.getDetail()}</p>
    `
  }

}


// EJECUCION
//Component
const productComponent = new ProductComponent("Cerveza")
console.log(productComponent.getDetail()); // Cerveza

// Decorator 1 -> infocomercial
const comercialInfoProduct = new ComercialInfoProductDecorator(productComponent, "Paceña", "medium")
console.log(comercialInfoProduct.getDetail()); // Paceña -  medium - Cerveza

// Decorador 2 -> storeProduct mas precio
const storeProduct = new StoreProductDecorator(productComponent, 21.5)
console.log(storeProduct.getDetail()); // Cerveza - $ 21.5

// Ahora el 3er decorador resuelve el problema de la jerarquizacion doble asi
// si quisieramos los funcionamientos del decorador 2 y 1
// asi sera un envoltorio de envoltorios

// Decorador 2 con decorador 1
const product = new StoreProductDecorator(comercialInfoProduct, 50.5)
console.log(product.getDetail()); // Paceña -  medium - Cerveza - $ 50.5

// con lo del HTML el DECORATOR 3
const htmlProduct = new HTMLProductDecorator(product)
console.log(htmlProduct.getDetail());
/**
 * <h1>Informacion del producto</h1>
      <p>Paceña -  medium - Cerveza - $ 50.5</p>
 */






