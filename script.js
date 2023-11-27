//ejercicio1 
// Definir el objeto auto
function ejercicio1() {
  const auto = {
    color: "Azul",
    marca: "Honda",
    modelo: "Civic",
    encendido: false,

    encender() {
      if (!this.encendido) {
        this.encendido = true;
        document.write("Auto encendido<br>");
      } else {
        document.write("El auto ya está encendido<br>");
      }
    },

    apagar() {
      if (this.encendido) {
        this.encendido = false;
        document.write("El auto se apagó<br>");
      } else {
        document.write("El auto ya está apagado<br>");
      }
    }
  };

  auto.encender();
  auto.apagar();

}

  
  //ejercicio2
  // Crear el objeto cuenta
  function ejercicio2() {
    const cuenta = {
      titular: "Alex",
      saldo: 0,

      ingresar(cantidad) {
        if (cantidad > 0) {
          this.saldo += cantidad;
          document.write(`Se ingresaron ${cantidad} euros a la cuenta.<br>`);
        } else {
          document.write("La cantidad a ingresar debe ser mayor que 0.<br>");
        }
      },

      extraer(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
          this.saldo -= cantidad;
          document.write(`Se extrajeron ${cantidad} euros de la cuenta.<br>`);
        } else {
          document.write("La cantidad a extraer no es válida o supera el saldo disponible.<br>");
        }
      },

      informar() {
        document.write(`Titular: ${this.titular}<br>`);
        document.write(`Saldo actual: ${this.saldo} euros<br>`);
      }
    };

    // Mostrar información inicial de la cuenta
    cuenta.informar();

    // Realizar operaciones en la cuenta
    cuenta.ingresar(100);
    cuenta.extraer(30);

    // Mostrar información actualizada de la cuenta
    cuenta.informar();
  }

  //ejercicio3
  function ejercicio3() {
    class Rectangulo {
      constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
      }

      modificarDimensiones(nuevoAlto, nuevoAncho) {
        this.alto = nuevoAlto;
        this.ancho = nuevoAncho;
        document.write("Dimensiones modificadas.<br>");
      }

      mostrarPropiedades() {
        document.write(`Alto: ${this.alto} unidades<br>`);
        document.write(`Ancho: ${this.ancho} unidades<br>`);
      }

      calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
      }

      calcularArea() {
        return this.alto * this.ancho;
      }
    }

    const miRectangulo = new Rectangulo(5, 8);

    document.write("Propiedades iniciales del rectángulo:<br>");
    miRectangulo.mostrarPropiedades();

    miRectangulo.modificarDimensiones(7, 10);
    document.write("<br>Propiedades del rectángulo después de la modificación:<br>");
    miRectangulo.mostrarPropiedades();

    document.write("<br>Perímetro del rectángulo: ", miRectangulo.calcularPerimetro(), " unidades<br>");
    document.write("Área del rectángulo: ", miRectangulo.calcularArea(), " unidades cuadradas<br>");
  }
  function ejercicio4() {
    class Producto {
      constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
      }

      imprimeDatos() {
        document.write(`Código: ${this.codigo}<br>`);
        document.write(`Nombre: ${this.nombre}<br>`);
        document.write(`Precio: $${this.precio.toFixed(2)}<br>`);
        document.write("------------<br>");
      }
    }

    const productos = [
      new Producto(1, "Producto A", 19.99),
      new Producto(2, "Producto B", 29.99),
      new Producto(3, "Producto C", 39.99)
    ];

    document.write("Datos de los productos:<br>");
    for (const producto of productos) {
      producto.imprimeDatos();
    }
  }

  function ejercicio5() {
    class Persona {
      constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = this.generaDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
      }

      mostrarGeneracion() {
        if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
          document.write("Generación Z: Irreverencia<br>");
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
          document.write("Generación Y (Millennials): Frustración<br>");
        } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
          document.write("Generación X: Obsesión por el éxito<br>");
        } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
          document.write("Generación Boom: Ambición<br>");
        } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
          document.write("Silent Generation (Niños de la posguerra): Austeridad<br>");
        } else {
          document.write("No se puede determinar la generación para este año de nacimiento.<br>");
        }
      }

      esMayorDeEdad() {
        return this.edad >= 18;
      }

      mostrarDatos() {
        document.write("Nombre:", this.nombre, "<br>");
        document.write("Edad:", this.edad, "años<br>");
        document.write("DNI:", this.DNI, "<br>");
        document.write("Sexo:", this.sexo, "<br>");
        document.write("Peso:", this.peso, "kg<br>");
        document.write("Altura:", this.altura, "m<br>");
        document.write("Año de Nacimiento:", this.añoNacimiento, "<br>");
      }

      generaDNI() {
        return Math.floor(Math.random() * 100000000);
      }
    }

    const personaEjemplo = new Persona("Juan", 25, "H", 70, 1.75, 1995);

    document.write("Datos de la persona:<br>");
    personaEjemplo.mostrarDatos();

    document.write("<br>Generación:<br>");
    personaEjemplo.mostrarGeneracion();

    document.write("<br>Es mayor de edad:", personaEjemplo.esMayorDeEdad() ? "Sí" : "No", "<br>");
  }

  function ejercicio6() {
    class Libro {
      constructor(ISBN, titulo, autor, numeroDePaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;
      }

      get ISBN() {
        return this._ISBN;
      }

      get titulo() {
        return this._titulo;
      }

      get autor() {
        return this._autor;
      }

      get numeroDePaginas() {
        return this._numeroDePaginas;
      }

      set ISBN(ISBN) {
        this._ISBN = ISBN;
      }

      set titulo(titulo) {
        this._titulo = titulo;
      }

      set autor(autor) {
        this._autor = autor;
      }

      set numeroDePaginas(numeroDePaginas) {
        this._numeroDePaginas = numeroDePaginas;
      }

      mostrarLibro() {
        document.write(`El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numeroDePaginas} páginas.<br>`);
      }
    }

    const libro1 = new Libro("9788498382662", "La Sombra del Viento", "Carlos Ruiz Zafón", 544);
    const libro2 = new Libro("ISBN2", "El Código Da Vinci", "Dan Brown", 464);

    document.write("Información del Libro 1:<br>");
    libro1.mostrarLibro();

    document.write("<br>Información del Libro 2:<br>");
    libro2.mostrarLibro();

    if (libro1.numeroDePaginas > libro2.numeroDePaginas) {
      document.write("<br>El Libro 1 tiene más páginas.<br>");
    } else if (libro1.numeroDePaginas < libro2.numeroDePaginas) {
      document.write("<br>El Libro 2 tiene más páginas.<br>");
    } else {
      document.write("<br>Ambos libros tienen la misma cantidad de páginas.<br>");
    }
  }

  function ejercicio7() {
    class Contacto {
      constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
      }

      esIgual(otroContacto) {
        return this.nombre === otroContacto.nombre;
      }
    }

    class Agenda {
      constructor(tamano = 10) {
        this.contactos = [];
        this.tamano = tamano;
      }

      aniadirContacto(contacto) {
        if (this.agendaLlena()) {
          console.log("La agenda está llena. No se pueden agregar más contactos.");
          return;
        }

        if (!this.existeContacto(contacto)) {
          this.contactos.push(contacto);
          console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
        } else {
          console.log(`El contacto ${contacto.nombre} ya existe en la agenda.`);
        }
      }

      existeContacto(contacto) {
        return this.contactos.some(c => c.esIgual(contacto));
      }

      listarContactos() {
        console.log("Lista de contactos en la agenda:");
        this.contactos.forEach(c => console.log(`${c.nombre}: ${c.telefono}`));
      }

      buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(c => c.nombre === nombre);
        if (contactoEncontrado) {
          console.log(`Contacto encontrado: ${contactoEncontrado.nombre}, Teléfono: ${contactoEncontrado.telefono}`);
        } else {
          console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
        }
      }

      eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.esIgual(contacto));
        if (indice !== -1) {
          this.contactos.splice(indice, 1);
          console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
        } else {
          console.log(`No se encontró ningún contacto con el nombre ${contacto.nombre}.`);
        }
      }

      agendaLlena() {
        return this.contactos.length >= this.tamano;
      }

      huecosLibres() {
        return this.tamano - this.contactos.length;
      }
    }

    const agenda = new Agenda();

    while (true) {
      const opcion = prompt(`\nMenú de Agenda:
      1. Añadir contacto
      2. Buscar contacto
      3. Listar contactos
      4. Eliminar contacto
      5. Salir
      
      Elija una opción:`);

      switch (opcion) {
        case '1':
          const nombre = prompt("Ingrese el nombre del contacto:");
          const telefono = prompt("Ingrese el teléfono del contacto:");
          agenda.aniadirContacto(new Contacto(nombre, telefono));
          break;

        case '2':
          const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
          agenda.buscarContacto(nombreBuscar);
          break;

        case '3':
          agenda.listarContactos();
          break;

        case '4':
          const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
          agenda.eliminarContacto(new Contacto(nombreEliminar));
          break;

        case '5':
          console.log("Saliendo del programa.");
          break;

        default:
          console.log("Opción no válida. Por favor, elija una opción válida.");
          break;
      }

      if (opcion === '5') {
        break;
      }
    }
  }


