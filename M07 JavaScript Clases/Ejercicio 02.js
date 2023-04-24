/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor (nombre, apellido, edad, domicilio) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.domicilio=domicilio;
   }
   detalle() {
      var objToShow = { };
      objToShow.nombre = this.nombre;
      objToShow.apellido = this.apellido;
      objToShow.edad = this.edad;
      objToShow.domicilio = this.domicilio;
      return objToShow;
   }

}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:

   var miPrimeraPersona = new Persona(nombre, apellido, edad, domicilio)
   return miPrimeraPersona
   
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   Persona.prototype.datos = function () {
      return `${this.nombre}, ${this.edad} años`
   }
   var newPerson = new Persona ("Edgar", "Perez", 27, "casa"); 

   return newPerson.datos()

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
