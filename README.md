# Dependencias a instalar de manera global
Para poder ejecutar ts en la terminal instalamos
```
    npm install -g typescript
    npm install -g ts-nodeclear
```
Y para poder ejecutarto
```
    ts-node <archivo>
```

# Patron de diseño

Los patrones de diseño pueden ser creacionales de estructura o de comportamiento

## Singleton -> creacional
Tecnica para crear objetos
Tiene un proposito. hacer que solo exista una intancia por cada clase

Asi no se creara otra instancia y nos devolvera la que ya existe en memoria

Asi si tenemos una clase que nosotros sabemos que no va cambiar y no estar ocupando tanta memoria

Se puede usar cuando la persistencia de la informacion del objeto nunca va cambiar puede ser un calendario ya que los dias de la semana nunca cambiaran

## Strategy -> comportamiento

Nos ayuda a tener comportamiento distinto en un objeto sin tener que modificar el contexto inicial

Regularmente necesitamos este comportamiento cuando hacemos calculos en venta o comportamientos en el front cuando las vistas tienen diferentes comportamientos depende de un combobox

El objetivo es entender que se puede escalar con el patron strategy y no estar haciendo mucho uso de un switch con muchos calculos o multiples ifs

Para un mejor uso de strategy basicamente vamos sobreescribiendo la clase que tenemos con nuevas estrategias en los metodos y esto funciona de mejor manera con ts ya que teniendo las interfaces obligamos a las clases que implementen esa interfaz si o si deban cumplir ese contrato.

## Observer -> comportamiento

Un objeto puede tener propiedades y cuando uno de estas propiedades o estados cambien esta tendra observadores. Que notificara mediante el Subject que se podria decir que es un canal al cual se subscriben y cuando las props en el objeto cambien se hara una notificacion.

Y cada canal ira notificando a cada clase con una accion distinta depende el cambio de estado.

Basicamente es como funciona la mayoria de frameworks del frontend para tener comportamientos singulares dependiendo del observador.

Basicamente es tener un Subject que es el canal en el que iremos subscribiendo a nuestros observadores que podria ser etiquetas html o clases o cualquier otra cosa en el cual en nuestro subject dependiendo de un estado que tengamos cuando este cambie nosotros notifiquemos a los observadores de este cambio y hacer una accion dependiendo del sistema para que actue de una u otra forma.

Podria ser el caso de una venta que dependiendo de los productos en una vista nosotros mostremos los productos y en otra podria ser el total segun cambie el estado del carrito.

## Decorator -> estructura

Es un patron que nos soluciona como estaran estructuradas las clases y como estas se conforman unas con otras.

Viene a solucionar cuando tenemos mucha funcionalidad jerarquicamente.

El decorador reducira la jerarquizacion haciendo un envoltorio de funcionalidades.

Asi si quieremos añadir funcionalidades haremos un envoltorio de funcionalidades asi conforme queramos añadir en lugar de heredar solo haremos un envoltorio sin tener que jerarquizar.

Basicamente es envolver funcionamiento sobre funcionamiento asi tendremos el comportamiento de herencia multiple pero de otra forma.

## Builder -> creacional

Ayuda a crear un objeto ya que aveces tenemos objetos que tienen muchos elementos en su construccion. Lo que hace builder es separar el contructor en un conjunto de metodos encadenados.

En teoria nos permite crear objetos con grandes cantidades de atributos pero solo asignando propiedades y sin estar mandando todos los atributos que necesita en un principio ya que puede ocurrrir que el objeto no siempre necesitara de todos los atributos.

El patron de diseño builder tambien tiene un director que basicamente este tendra las recetas o presentaciones para crear los objetos directamente ya tendra los pasos que tiene que seguir para crear un objeto complejo. -> archivo **forms.js**

NOTA.- Hay que recordar que para esto cuando nosotros pasamos a un *objeto* como parametro entonces este va por referencia. Es decir que cualquier cambio que tenga dentro de la funcion entonces pasara en el mismo objeto y no asi en otro. Osea el cambio pasara en el mismo objeto y no se clonara o duplicara.

Basicamente con los directores nos ayudamos a tener un polimorfismo en los constructores en las clases ya que con JS solo podemos tener 1 por defecto pero gracias a los builders entonces podemos tener multiples.

## State -> comportamiento

Se podria decir que tendremos comportamiento de tipo estado. Y este estado podra ser compartido es similar al de estrategia.

Basicamente este patron nos ayuda a que dependiendo del estado que nosotros le mandemos entonces este podra tener uno u otro comportamiento diferente.

## Bridge -> estructural 

Este patron es un puente separando una implementacion de una clase. Tendremos una abstraccion y una implementacion.

El implementador va ser el funcionamiento nativo el funcionamiento mas pequeño. Este sera usado por una abstraccion que podria ser una interfaz o una clase.

La abstraccion sera mas implementado al modelo de negocio y el implementador sera mas cercano a situciones en especifico. 

Se parece a strategy y a state pero es diferente.

Basicamente si tendremos funcionamiento similar en clases podriamos nosotros craer una clase que maneraja esa misma logica respecto a la ejecucion de funciones y al recibo de parametros pero segun nosotros mandemos en el contructor un nuevo objeto pues cambiara el comportamiento que se tenga.


















