// component
class ClientComponent {

  constructor(url) {
    this.url = url
  }

  async getData() {
    const res = await fetch(this.url)
    const data = await res.json()
    return data
  }

}

// decorator 1
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent
  }

  async getData(){
    return await this.clientComponent.getData()
  }
}

// decorator 1
class UpperCaseClientDecorator extends ClientDecorator {

  async getData() {
    const data = await super.getData()
    const newData = data.map(d => {
      d.title = d.title.toUpperCase()
      return d
    })

    return newData
  }

}

// decorator 2
class HtmlClientDecorator extends ClientDecorator{

  async getData() {
    const data = await super.getData()
    const newData = data.map(d => {
      d.title = `<h1>${d.title}</h1>` 
      d.thumbnailUrl = `<img src="${d.thumbnailUrl}" />`
      return d
    })

    return newData
  }

}


// EJECUCION
// hacemos una IIFE para que se ejecute automaticamente al cargar el documento
// (function(){
// })()

(async ()=>{
  console.log("IIFE");
  const url = 'https://jsonplaceholder.typicode.com/photos'
  const client = new ClientComponent(url)
  const data = await client.getData()
  console.log(data);

  const upperClient = new UpperCaseClientDecorator(client)
  const data2 = await upperClient.getData()
  console.log(data2);

  // aqui estamos recibiendo otro decorador
  const htmlClient = new HtmlClientDecorator(upperClient)
  const data3 = await htmlClient.getData()
  console.log(data3 );
  divContent1.innerHTML = data3.map(d => `${d.title} - ${d.thumbnailUrl}`).join('<br>')


  const htmlClient2 = new HtmlClientDecorator(client)
  const data4 = await htmlClient2.getData()
  // console.log(data4);
  divContent2.innerHTML = data4.map(d => `${d.title} - ${d.thumbnailUrl}`).join('<br>')
  
})()


















