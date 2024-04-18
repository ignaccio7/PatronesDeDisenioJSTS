interface State {
  next(ticket: Ticket) : number|null
  add(ticket: Ticket, quantity: number) : void
}

// basicamente tendra 3 estados
/**
 * Cuando esta vacio - sin tickets
 * Cuando esta con informacion // con tickets para repartir
 * Cuando esta lleno // ya no se puede agregar mas porque supera el limite
 */

class Ticket {
  private state: State
  quantity: number
  readonly limit: number
  private number: number

  constructor(limit: number){
    this.limit = limit
    this.quantity = 0
    this.number = 0
    this.state = new EmptyState()
  }

  get getNumber() : number{
    return this.number++
  }

  set setState(state: State) {
    this.state = state
  }

  get getState() : State {
    return this.state
  }

  next() : number | null {
    return this.state.next(this)
  }

  add(quantity:number):void {
    return this.state.add(this, quantity)
  }

}

class EmptyState implements State{
  next(ticket: Ticket): number | null {
    return null
  }

  add(ticket: Ticket, quantity: number): void {
    if ((quantity) <= ticket.limit) {
      ticket.quantity = quantity
      ticket.setState = new WithDataState()
    } else if(quantity === ticket.limit) {
      ticket.quantity = quantity
      ticket.setState = new FullState()
    }else{
      console.log("La cantidad supera al limite");      
    }
  }
}

class WithDataState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState()
    }
    return ticket.getNumber
  }

  add(ticket: Ticket, quantity: number): void {
    if ((ticket.quantity + quantity) < ticket.limit) {
      ticket.quantity += quantity
    } else if((ticket.quantity + quantity) === ticket.limit) {
      ticket.quantity += quantity
      ticket.setState = new FullState()
    }else{
      console.log("La cantidad supera al limite");      
    }
  }
}

class FullState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState()
    }else {
      ticket.setState = new WithDataState()
    }
    return ticket.getNumber
  }

  add(ticket: Ticket, quantity: number): void {
    console.log("Ticket Lleno");    
  }
}

// Ejecucion

const ticket = new Ticket(5)
console.log(ticket.getState); // EmptyState {}
console.log(ticket.next()); // null

ticket.add(6) // La cantidad supera al limite
console.log(ticket.getState); // EmptyState {}
console.log(ticket.next()); // null

ticket.add(4) // No esta lleno falta 1
console.log(ticket.getState); // WithDataState {}
console.log(ticket.next()); // 0
console.log(ticket.next()); // 1

ticket.add(3)
console.log(ticket.getState); // FullState {}
ticket.add(1) // Ticket Lleno

console.log(ticket.next()); // 2
console.log(ticket.getState); // WithDataState {}

console.log(ticket.next()); // 3
console.log(ticket.next()); // 4
console.log(ticket.next()); // 5
console.log(ticket.next()); // 6
console.log(ticket.getState); // EmptyState {}
console.log(ticket.next()); // null









