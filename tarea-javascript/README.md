## ¿Qué son las clases?

Las clases en JavaScript son una forma más moderna y sencilla de crear objetos. Sirven como un tipo de “molde” o plantilla que nos permite construir varios objetos con las mismas características y comportamientos.  

Antes de que existieran las clases se usaban funciones constructoras y prototipos para hacer lo mismo, pero el código era más complicado de leer. Con las clases, hcieron que el proceso se volviera más claro y parecido al de otros lenguajes como ya lo hacían Java o Python.  

Es decir:
- Una clase define cómo se verá y se comportará un objeto.  
- Cada objeto creado a partir de esa clase se llama **instancia**.  
- Las clases nos ayudan a tener un código más organizado, reutilizable y fácil de mantener.

---

## ¿Cómo se crean?

Para crear una clase usamos la palabra reservada `class`, seguida del nombre que queremos darle (debemos de saber que por convención, el nombre empieza con mayúscula).  

Dentro de la clase se usa un método especial llamado `constructor()`, que se ejecuta automáticamente cuando creamos una nueva instancia. Ahí es donde definimos los atributos o propiedades del objeto.

Ejemplo:

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

Y también podemos hacer funciones dentro del objeto pero en este caso como es una clase no necesitamos poner la palabra reservada `function`

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }

  cumplirAnios() {
    this.edad++;
    console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
  }

  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
    console.log(`Ahora me llamo ${this.nombre}.`);
  }
}

aquí está el ejemplo de como instancio una persona con sus parámetros necesarios y luego invooco algunas de esus funciones y métodos 

const persona1 = new Persona("Sam", 25);
persona1.saludar();
persona1.cumplirAnios();
persona1.cambiarNombre("Samuel");