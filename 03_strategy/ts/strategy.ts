// una estrategia para distintos tipos de autenticacion
interface Strategy {
  login(user: string, password: string) : boolean
}

class LoginContext {

  private strategy: Strategy // solo estrategias que implementen la interface y privado para que nose pueda modificar fuera de la clase

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  login(user:string, password:string): boolean{
    return this.strategy.login(user,password)
  }

}

class LoginDBStrategy implements Strategy{

  login(user:string, password:string){
    console.log("Verificamos con la base de datos");
    if (user === 'admin' && password === 'admin') {
      return true
    }   
    return false
  }

}

class LoginServiceStrategy implements Strategy{

  login(user:string, password:string){
    console.log("Verificamos con el servicio");
    if (user === 'admin' && password === 'admin') {
      return true
    }   
    return false
  }

}

const auth = new LoginContext(new LoginDBStrategy())
let res = auth.login("admin","admin")
console.log(res);

auth.setStrategy(new LoginServiceStrategy())
res = auth.login("admin","admin")
console.log(res);

