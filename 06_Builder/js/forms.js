// Construyendo formularios con builder
class Form {

  constructor(controls, action) {
    this.controls = controls
    this.action = action
  }

  getContent() {
    return `
      <form method="post" action="${this.action}">
        ${
          this.controls.map((control) => {
            return `
              <div>
                ${this.getLabel(control)}
                ${this.getInput(control)}
              </div>
            `
          }).join('')
        }
        <button type="submit">Enviar</button>
      </form>
    `
  }

  getLabel(control) {
    return ` <label> ${control.text} </label> `
  }

  getInput(control) {
    return `<input id="${control.name}" name="${control.name}" type="${control.type}" />`
  }

}

class FormBuilder {

  constructor() {
    this.reset()
  }

  reset(){
    this.action = ""
    this.controls = []
  }

  setAction(action){
    this.action = action
    return this
  }

  setText(name, text) {
    this.controls.push({
      name,
      text,
      type: "text"
    })
    return this
  }

  setEmail(name, text) {
    this.controls.push({
      name,
      text,
      type: "email"
    })
    return this
  }

  setPassword(name, text) {
    this.controls.push({
      name,
      text,
      type: "password"
    })
    return this
  }

  setColor(name, text) {
    this.controls.push({
      name,
      text,
      type: "color"
    })
    return this
  }

  setCheckbox(name, text) {
    this.controls.push({
      name,
      text,
      type: "checkbox"
    })
    return this
  }

  build(){
    const frm = new Form(this.controls, this.action)
    this.reset()
    return frm
  }

}


const formBuilder = new FormBuilder()
const formPeople = formBuilder.setAction("create.php")
                        .setText("firstName", "Nombre")
                        .setText("lastName", "Apellido")
                        .setCheckbox("drinker", "Eres bebedor?")
                        .setColor("favoriteColor","Color favorito")
                        .build()

console.log(formPeople);
console.log(formPeople.getContent());
form1.outerHTML = formPeople.getContent()


const formMail = formBuilder.setAction("singin.php")
                          .setEmail("name","Name")
                          .setPassword("password","Password")
                          .build()
form2.outerHTML = formMail.getContent()


// AQUI HAREMOS EL USO DEL DIRECTOR

class FormDirector {

  constructor(formBuilder) {
    this.setBuilder(formBuilder)
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder
  }

  createPeopleForm() {
    this.formBuilder.reset()
    // notese que el director asigna el orden y los campos como un receta
    this.formBuilder.setText("firstName", "Nombre")
                    .setText("lastName", "Apellido")
                    .setCheckbox("drinker", "Eres bebedor?")
                    .setColor("favoriteColor","Color favorito")
  }

  createContactForm() {
    this.formBuilder.reset()
    this.formBuilder.setAction("singin.php")
                    .setEmail("name","Name")
                    .setPassword("password","Password")
  }

}

const director = new FormDirector(formBuilder)

director.createPeopleForm()
form3.outerHTML = formBuilder.build().getContent()

// si quisieramos crear otro formulario
director.createPeopleForm()
form4.outerHTML = formBuilder.build().getContent()

// y otro de contacto
director.createContactForm()
form5.outerHTML = formBuilder.build().getContent()



















