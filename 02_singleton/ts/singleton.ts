class SingletonTS {
  // private accedido solo en la clase
  // static lograr que sea parte de la clase
  // recordar los valores staticos pertenecen a la clase 
  // los que no son estaticos pertenecen al objeto
  private static instance:SingletonTS
  public random:number

  private constructor(){
    // si el constructor es privado no es posible hacer
    // const singletonts = new SingletonTS()
    this.random = Math.random()
  }

  public static getInstance():SingletonTS {
    if (!this.instance) {
      this.instance = new SingletonTS()
    }
    // return SingletonTS.instance // o tambien 🔽
    return this.instance
  }
}

// const singletonts = new SingletonTS() no fucnona xq el constructor es privado

const singletonts = SingletonTS.getInstance()
const singletonts2 = SingletonTS.getInstance()

console.log(singletonts.random === singletonts2.random); // true

