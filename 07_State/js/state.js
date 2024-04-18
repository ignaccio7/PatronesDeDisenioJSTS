class DocumentContext {

  constructor() {
    this.content = ""
    this.state = new BlankState()
  }

  setState(state){
    this.state = state
  }

  write(text){
    this.state.write(this, text)
  }

}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text
    documentContext.setState(new WithContentState())
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += "-" + text
  }
}

class ApprovedState {
  write(documentContext, text) {
    console.log("Documento aprobado ya nose modifica");
  }
}

// Ejecucion

const doc = new DocumentContext()
console.log(doc.state); // BlankState {}
doc.write("Pato")
console.log(doc.content); // Pato
console.log(doc.state); // WithContentState {}
doc.write("ALGO")
doc.write("MAS")
console.log(doc.content); // Pato-ALGO-MAS

doc.setState(new ApprovedState())
console.log(doc.state); // ApprovedState {}
doc.write("otra cosa nueva") // Documento aprobado ya nose modifica
console.log(doc.content); // Pato-ALGO-MAS

doc.setState(new WithContentState())
console.log(doc.state); // WithContentState {}
doc.write("otra cosa de nuevo") //
console.log(doc.content); // Pato-ALGO-MAS-otra cosa de nuevo

