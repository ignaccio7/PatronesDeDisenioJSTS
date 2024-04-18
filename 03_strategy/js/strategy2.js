/**
 * 
 */

const data = [
  {
    name: "Paceña",
    city: "La Paz",
    info: "Cerveza a base de cebada",
    img: "htttp:paceña"
  },
  {
    name: "Pale Ale",
    city: "Inglaterra",
    info: "Cerveza tradicional inglesa, de color cobre, sabor amargo y final seco.",
    img: "htttp:pale_ale"
  },
  {
    name: "India Pale Ale (IPA)",
    city: "Inglaterra",
    info: "Versión más fuerte de la Pale Ale con sabor intenso a lúpulo y malta caramelo.",
    img: "htttp:ipa"
  },
  {
    name: "Red Ale",
    city: "Varios",
    info: "Cerveza ale roja de color ámbar y sabor a malta caramelo.",
    img: "htttp:red_ale"
  },
  {
    name: "Witbier (White Ale)",
    city: "Varios",
    info: "Cerveza de trigo sin filtrar, turbia y con tonos amarillos dorados.",
    img: "htttp:witbier"
  }
];

class InfoContext {

  constructor (strategy, data){
    this.setStrategy(strategy)
    this.data = data
  }

  setStrategy(strategy){
    this.strategy = strategy
  }

  // 1ro se ejecuta esto
  show() {
    return this.strategy.show(this.data)
  }
}

// solo en formato de lista
class ListStrategy {
  // 2do se ejecuta esto
  show(data){
    let res = ''
    data.forEach((beer, index) => {
        res += `${index + 1} : ${beer.name} \n`
    });
    return res
  }

}

// lista con detalle
class DetailListStrategy {
  // 2do se ejecuta esto
  show(data){
    let res = ''
    data.forEach((beer, index) => {
        res += `${index + 1} : ${beer.name} \n
        ${beer.city} \n
        ${beer.info} \n`
    });
    return res
  }

}

// lista con imagen mas
class ListWithImageStrategy {
  // aqui se completaria y luego podriamos devolver
  // a un archivo html
}

const info = new InfoContext(new ListStrategy(), data)
console.log(info.show());
/**
 * 1 : Paceña 
2 : Pale Ale 
3 : India Pale Ale (IPA) 
4 : Red Ale 
5 : Witbier (White Ale) 
 */
info.setStrategy(new DetailListStrategy())
console.log(info.show());
/**
 * 1 : Paceña 
        La Paz 
        Cerveza a base de cebada 
2 : Pale Ale 
        Inglaterra 
        Cerveza tradicional inglesa, de color cobre, sabor amargo y final seco. 
3 : India Pale Ale (IPA) 
        Inglaterra 
        Versión más fuerte de la Pale Ale con sabor intenso a lúpulo y malta caramelo. 
4 : Red Ale 
        Varios 
        Cerveza ale roja de color ámbar y sabor a malta caramelo. 
5 : Witbier (White Ale) 
        Varios 
        Cerveza de trigo sin filtrar, turbia y con tonos amarillos dorados. 
 */