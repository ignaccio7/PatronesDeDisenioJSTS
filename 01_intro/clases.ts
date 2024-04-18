
class Drink {

  private name: string

  constructor(name:string) {
    this.name = name
  }

  info():string {
    return this.name
  }
}

const drink = new Drink("agua")

// console.log(drink.info());

// Herencia

class Beer extends Drink {
  private alcohol:number

  constructor(name: string, alcohol: number){
    super(name)
    this.alcohol = alcohol
  }
  // como sobreescribimos un metodo
  info():string{
    return `${super.info()}, grados alcohol: ${this.alcohol}`   
  }
}

const beer = new Beer("Paceña", 8.5)

// console.log(beer.info());

// Una interfaz nos permite categorizar un objeto
// es como un contrato que queremos que cumpla 

interface Product {
  price: number // <- quiero que tenga esta propiedad 
  getPrice(): string // <- y este metodo
}

class Soda extends Drink implements Product {  
  price: number

  constructor(name:string, price:number){
    super(name)
    this.price = price
  }

  getPrice(): string{
    return "precio"+this.price+" $ - "+super.info()
  }
}

const soda = new Soda("Cocacola", 10)

console.log(soda.getPrice());

// esto verificara que el objeto tenga la implementacion de esa interface
const products:Product[] =  [ new Soda("Pepsi",10), new Soda("Fanta",14) ]
console.log(products.toString());
