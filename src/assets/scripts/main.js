/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

 const qrcode = require('qrcode');
      code =   async function () {

      try {
        var error = document.getElementById("error")
        error.innerHTML =""
        var nombre = document.getElementById("nombre")
        var apellido = document.getElementById("apellido")
        if((nombre.value && apellido.value) !== ""){
            const token = Math.floor(1000000000000000 + Math.random() * 9000000000000000)
            const data = "Nombre: "+nombre.value+" "+apellido.value+"\n"+"Codigo: "+token
            .toString(36).substr(0, 10) 
            var codigo = document.getElementById("codigo")
            var usaurio = document.getElementById("usuario")
            usaurio.innerHTML ="Nombre: "+nombre.value+" "+apellido.value
            codigo.innerHTML ="Codigo: "+token.toString(36).substr(0, 10)
            nombre.value = ""
            apellido.value = ""
            qrcode.toCanvas(document.getElementById('myCanvas'), data, function (error) {
              if (error) console.error(error)
                console.log('No hay error de generación qr');
            })
      }else{
       
          error.innerHTML ="Para generar el Codigo hace falta un nombre y un apellido"
          const canvas = document.getElementById('myCanvas')
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);
          document.getElementById('myCanvas').lastChild = null
          var codigo = document.getElementById("codigo")
          var usaurio = document.getElementById("usuario")
          codigo.innerHTML=""
          usaurio.innerHTML=""
      }
      } catch (err) {
        console.error(err)
      }

    }
        var btn2 = document.getElementById("code");
        // add event listener for the button, for action "click"
        btn2.addEventListener("click",code);