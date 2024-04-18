
class SaleContext {
  constructor(strategy){
    this.strategy = strategy
  } 

  // que pasa si queremos cambiar la estrategia
  setStrategy(strategy) {
    this.strategy = strategy
  }

  calculate(amount){
    //este monto se calculara dependiendo de la estrategia
    return this.strategy.calculate(amount)
  }

}

// aqui agregamos el impuesto
class RegularSaleStrategy {
  constructor(tax){
    this.tax = tax
  }

  calculate(amount){
    return amount + (amount * this.tax)
  }
}

// si necesitaramos un descuento con el impuesto
class DiscountSaleStrategy {
  
  constructor(tax, discount){
    this.tax = tax
    this.discount = discount
  }

  calculate(amount) {
    return amount + (amount*this.tax) - this.discount
  }

}

// si quisieramos tener un cambio a moneda extrangera foreign en dolares
class ForeignSaleStrategy {

  calculate(amount){
    return (amount / this.getDollarPrice()).toFixed(2)
  }

  getDollarPrice() {
    // aqui talvez podriamos traer de la bd o de una api el tipo de cambio
    return 6.96
  }
}

const regularSale = new RegularSaleStrategy(0.16)
const discountSale = new DiscountSaleStrategy(0.16, 3)
const foreignSale = new ForeignSaleStrategy()

const sale = new SaleContext(regularSale)
// solo con el impuesto
console.log(sale.calculate(100)); // 116 ya que esta manejando el impuesto con 16%

// con el impuesto y descuento
sale.setStrategy(discountSale)

console.log(sale.calculate(100)); // 113 ya que esta manejando el impuesto con 16% y un descuento de 3

// haciendo el tipo de cambio a dolar
sale.setStrategy(foreignSale)
console.log(sale.calculate(100)); // 113


