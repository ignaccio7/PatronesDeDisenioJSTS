class EncoderTextAbstraccion {

  constructor(encoder) {
    // este encoder seria el implementador
    this.encoder = encoder
  }

  encode(str) {
    return this.encoder.encode(str)
  }

  decode(str) {
    return this.encoder.decode(str)
  }

}

class Base64EncoderImplementor {

  encode(str) {
    // metodo js para llevar a base 64
    let binarioCadena = new TextEncoder().encode(str)
    let base64Cadena = btoa(String.fromCharCode(...binarioCadena))
    return base64Cadena
  }

  decode(str) {
    let binarioDecodificado = Uint8Array.from(atob(str), c => c.charCodeAt(0))
    let caracterDecodificado = new TextDecoder().decode(binarioDecodificado)
    return caracterDecodificado
  }

}

const encoder1 = new EncoderTextAbstraccion(new Base64EncoderImplementor())
console.log(encoder1.encode("hola 🌎")); // aG9sYQ== <- sin el mundo | aG9sYSDwn4yO <- con el mundo
console.log(encoder1.decode("aG9sYSDwn4yO")); // hola 🌎


class HTMLEncoderImplementor {
  encode(str) {
    return str.split(".").map(el => {
      return `<p>${el}</p>`
    }).join('')
  }
  decode(str) {
    return str.split("</p>").map(el => {
      return el.replace("<p>","")
    }).join(' ')
  }
}

const encoder2 = new EncoderTextAbstraccion(new HTMLEncoderImplementor())
console.log(encoder2.encode("hola.como.estas")); // <p>hola</p><p>como</p><p>estas</p>
console.log(encoder2.decode("<p>hola</p><p>como</p><p>estas</p>")); // hola como estas 