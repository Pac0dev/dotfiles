Vim�UnDo� �_K�)�T6�rӠP�ޓLq��g?����PD�  i                                   `L     _�                             ����                                                                                                                                                                                                                                                                                                                                                             `L      �  e  g                      cita.hora = hora; �  \  ^          %        console.log(e.target.value); �  Z  \          7    const horaInput = document.getElementById('hora'); �  S  U          &    const day = fechaAhora.getDate(); �  R  T          ,    const month = fechaAhora.getMonth() +1; �  O  Q              �  N  P          9    const fechaInput = document.querySelector("#fecha"); �  H  J          )            cita.fecha = e.target.value; �  G  I                      console.log(dia); �  E  G          G            mostrarAlerta('Los fines de semana no hay citas','error'); �  D  F          !            fechaInput.value=''; �  C  E                       e.preventDefault(); �  @  B          :        const dia = new Date(e.target.value).getUTCDay(); �  <  >          9    const fechaInput = document.querySelector('#fecha'); �  5  7          0    //Eliminar la alerta despúes de 3 segundos �  4  6          $    formulario.appendChild(alerta); �  3  5          >    const formulario = document.querySelector('.formulario'); �  -  /          $    alerta.classList.add('alerta'); �  ,  .          "    alerta.textContent = message; �  +  -          2    const alerta = document.createElement('DIV'); �  *  ,                  return; �    !          >            const alerta = document.querySelector('.alerta'); �              ;    const nombreInput = document.getElementById('nombre'); �   �   �          9    const cantidadParrafo = document.createElement('P'); �   �   �                  //agregando hijos �   �   �          1        //sumando los el precio de los servicios �   �   �                  �   �   �          0        precioServicio.classList.add('precio'); �   �   �          6        precioServicio.textContent = servicio.precio; �   �   �          6        nombreServicio.textContent = servicio.nombre; �   �   �                  �   �   �          <        const precioServicio = document.createElement('P'); �   �   �          <        const nombreServicio = document.createElement('P'); �   �   �          ,    serviciosFragment.appendChild(heading); �   �   �              let cantidad = 0; �   �   �          A    const serviciosFragment = document.createDocumentFragment(); �   �   �          2    heading.textContent = 'Resumen de servicios'; �   �   �          2    const heading = document.createElement('H3'); �   �   �          2    const horaCita = document.createElement('P'); �   �   �          3    const fechaCita = document.createElement('P'); �   �   �          4    const nombreCita = document.createElement('P'); �   �   �          8    const fragment = document.createDocumentFragment(); �   �   �          2        pWarning.classList.add('invalidar-cita'); �   �   �          S        pWarning.textContent = 'Faltan dátos de Servicios, hora, fecha o nombre'; �   �   �          6        const pWarning = document.createElement('P'); �   �   �          7        resumenDiv.removeChild(resumenDiv.firstChild); �   �   �          3    const {nombre, fecha, hora, servicios} = cita; �   �   �                  mostrarResumen(); �   �   �          3        botonAnterior.classList.remove('ocultar'); �   �   �          4        botonSiguiente.classList.remove('ocultar'); �   �   �          3        botonAnterior.classList.remove('ocultar'); �   �   �          4        botonSiguiente.classList.remove('ocultar'); �   �   �          0        botonAnterior.classList.add('ocultar'); �   �   �          ?    const botonAnterior = document.getElementById('anterior'); �   �   �          A    const botonSiguiente = document.getElementById('siguiente'); �   �   �          !        if(pagina < 3) pagina++; �   �   �          B    const paginaSiguiente = document.querySelector('#siguiente'); �   �   �                  botonesPaginador(); �   �   �                  �   �   �          @    const paginaAnterior = document.querySelector('#anterior'); �   �   �          &        agregarServicio(servicioObj); �   �   �          ?            nombre: contenedorServicio.firstChild.textContent, �   �   �          :        contenedorServicio.classList.add('seleccionado'); �   �   �          K        eliminarServicio(parseInt(contenedorServicio.dataset.servicioId)); �   �   �          =        contenedorServicio.classList.remove('seleccionado'); �   }             4       contenedorServicio = e.target.parentElement; �   {   }             let contenedorServicio; �   h   j          ?            contenedorServicios.onclick = seleccionarServicio; �   e   g          ;            contenedorServicios.classList.add('servicio'); �   `   b          
          �   ^   `          1            nombreServicio.textContent = nombre; �   \   ^              �   [   ]          @            const precioServicio = document.createElement('P'); �   Z   \          @            const nombreServicio = document.createElement('P'); �   Y   [          G            const contenedorServicios = document.createElement('DIV'); �   V   X                      //DOM Scripting �   S   U          E        const serviciosFragment = document.createDocumentFragment(); �   Q   S                   const {servicios} = db; �   P   R          +        const db = await resultado.json(); �   F   H          P            document.querySelector('.tabs .actual').classList.remove('actual'); �   E   G          ]            document.querySelector('.mostrar-seccion').classList.remove('mostrar-seccion');  �   C   E          6            pagina = parseInt(e.target.dataset.paso); �   :   <          C    const tab = document.querySelector(`[data-paso="${pagina}"]`); �   9   ;              //resaltar el tab actual �   7   9          .    seccion.classList.add('mostrar-seccion'); �   1   3          *        isTab.classList.remove('actual'); �   0   2          8        isAnterior.classList.remove('mostrar-seccion'); �   -   /          C    const isAnterior = document.querySelector('.mostrar-seccion'); �   +   -          function mostrarSeccion(){ �   (   *              horaCita(); �   '   )              //registrar hora �   %   '          !    deshabilitarFechaAnterior(); �   "   $              fechaCita(); �   !   #          #    //almacena la fecha de la cita �      !              nombreCita(); �                    mostrarResumen(); �                    botonesPaginador(); �                    paginaAnterior(); �                    paginaSiguiente(); �                &    //paginacion siguiente y anterior �                    mostrarServicios(); �   
                 iniciarApp(); �                    hora:'', �                    fecha: '', �                    nombre: '', �                 let pagina = 1; 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `I�N     �        i       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `I�Q     �        j          5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `I�R     �              5�_�                    *        ����                                                                                                                                                                                                                                                                                                                                                             `I�V     �   *   +  i       �   *   ,  j       5�_�                    ,        ����                                                                                                                                                                                                                                                                                                                                                             `I�`     �   +   -        5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `I�b    �                 let pagina = 1;�                    nombre: '',�                    fecha: '',�                    hora:'',�   
                 iniciarApp();�                    mostrarServicios();�                %    //paginacion siguiente y anterior�                    paginaSiguiente();�                    paginaAnterior();�                    botonesPaginador();�                    mostrarResumen();�      !              nombreCita();�   !   #          "    //almacena la fecha de la cita�   "   $              fechaCita();�   %   '               deshabilitarFechaAnterior();�   '   )              //registrar hora�   (   *              horaCita();�   +   -          function mostrarSeccion(){�   -   /          B    const isAnterior = document.querySelector('.mostrar-seccion');�   0   2          7        isAnterior.classList.remove('mostrar-seccion');�   1   3          )        isTab.classList.remove('actual');�   7   9          -    seccion.classList.add('mostrar-seccion');�   9   ;              //resaltar el tab actual�   :   <          B    const tab = document.querySelector(`[data-paso="${pagina}"]`);�   C   E          5            pagina = parseInt(e.target.dataset.paso);�   E   G          [            document.querySelector('.mostrar-seccion').classList.remove('mostrar-seccion');�   F   H          O            document.querySelector('.tabs .actual').classList.remove('actual');�   P   R          *        const db = await resultado.json();�   Q   S                  const {servicios} = db;�   S   U          D        const serviciosFragment = document.createDocumentFragment();�   V   X                      //DOM Scripting�   Y   [          F            const contenedorServicios = document.createElement('DIV');�   Z   \          ?            const nombreServicio = document.createElement('P');�   [   ]          ?            const precioServicio = document.createElement('P');�   \   ^           �   ^   `          0            nombreServicio.textContent = nombre;�   `   b           �   e   g          :            contenedorServicios.classList.add('servicio');�   h   j          >            contenedorServicios.onclick = seleccionarServicio;�   {   }             let contenedorServicio;�   }             3       contenedorServicio = e.target.parentElement;�   �   �          <        contenedorServicio.classList.remove('seleccionado');�   �   �          J        eliminarServicio(parseInt(contenedorServicio.dataset.servicioId));�   �   �          9        contenedorServicio.classList.add('seleccionado');�   �   �          >            nombre: contenedorServicio.firstChild.textContent,�   �   �          %        agregarServicio(servicioObj);�   �   �          ?    const paginaAnterior = document.querySelector('#anterior');�   �   �           �   �   �                  botonesPaginador();�   �   �          A    const paginaSiguiente = document.querySelector('#siguiente');�   �   �                   if(pagina < 3) pagina++;�   �   �          @    const botonSiguiente = document.getElementById('siguiente');�   �   �          >    const botonAnterior = document.getElementById('anterior');�   �   �          /        botonAnterior.classList.add('ocultar');�   �   �          3        botonSiguiente.classList.remove('ocultar');�   �   �          2        botonAnterior.classList.remove('ocultar');�   �   �          3        botonSiguiente.classList.remove('ocultar');�   �   �          2        botonAnterior.classList.remove('ocultar');�   �   �                  mostrarResumen();�   �   �          2    const {nombre, fecha, hora, servicios} = cita;�   �   �          6        resumenDiv.removeChild(resumenDiv.firstChild);�   �   �          5        const pWarning = document.createElement('P');�   �   �          R        pWarning.textContent = 'Faltan dátos de Servicios, hora, fecha o nombre';�   �   �          1        pWarning.classList.add('invalidar-cita');�   �   �          7    const fragment = document.createDocumentFragment();�   �   �          3    const nombreCita = document.createElement('P');�   �   �          2    const fechaCita = document.createElement('P');�   �   �          1    const horaCita = document.createElement('P');�   �   �          1    const heading = document.createElement('H3');�   �   �          1    heading.textContent = 'Resumen de servicios';�   �   �          @    const serviciosFragment = document.createDocumentFragment();�   �   �              let cantidad = 0;�   �   �          +    serviciosFragment.appendChild(heading);�   �   �          ;        const nombreServicio = document.createElement('P');�   �   �          ;        const precioServicio = document.createElement('P');�   �   �           �   �   �          5        nombreServicio.textContent = servicio.nombre;�   �   �          5        precioServicio.textContent = servicio.precio;�   �   �          /        precioServicio.classList.add('precio');�   �   �           �   �   �          0        //sumando los el precio de los servicios�   �   �                  //agregando hijos�   �   �          8    const cantidadParrafo = document.createElement('P');�              :    const nombreInput = document.getElementById('nombre');�    !          =            const alerta = document.querySelector('.alerta');�  *  ,                  return;�  +  -          1    const alerta = document.createElement('DIV');�  ,  .          !    alerta.textContent = message;�  -  /          #    alerta.classList.add('alerta');�  3  5          =    const formulario = document.querySelector('.formulario');�  4  6          #    formulario.appendChild(alerta);�  5  7          /    //Eliminar la alerta despúes de 3 segundos�  <  >          8    const fechaInput = document.querySelector('#fecha');�  @  B          9        const dia = new Date(e.target.value).getUTCDay();�  C  E                      e.preventDefault();�  D  F                       fechaInput.value='';�  E  G          F            mostrarAlerta('Los fines de semana no hay citas','error');�  G  I                      console.log(dia);�  H  J          (            cita.fecha = e.target.value;�  N  P          8    const fechaInput = document.querySelector("#fecha");�  O  Q           �  R  T          +    const month = fechaAhora.getMonth() +1;�  S  U          %    const day = fechaAhora.getDate();�  Z  \          6    const horaInput = document.getElementById('hora');�  \  ^          $        console.log(e.target.value);�  e  g                      cita.hora = hora;5�_�                    *        ����                                                                                                                                                                                                                                                                                                                                                             `I��     �   *   +  i       �   *   ,  j          function mostrar5�_�      	              ,        ����                                                                                                                                                                                                                                                                                                                                                             `I��    �   +   -        5�_�      
           	   +        ����                                                                                                                                                                                                                                                                                                                                                             `I�4     �   +   ,  j       �   +   -  k      function most5�_�   	              
   ,        ����                                                                                                                                                                                                                                                                                                                                                             `I�9    �   +   -        5�_�   
                 *        ����                                                                                                                                                                                                                                                                                                                                                             `JT�     �   *   +  j       �   *   ,  k          function mostrarSeccion(){       let string = "hola";    }5�_�                    .        ����                                                                                                                                                                                                                                                                                                                                                             `JT�     �   -   0  n      }5�_�                    -        ����                                                                                                                                                                                                                                                                                                                                                             `JT�    �   ,   .              let string = "hola";5�_�                    -       ����                                                                                                                                                                                                                                                                                                                                                             `JT�    �   ,   .  m          let string = "hola";5�_�                    ,        ����                                                                                                                                                                                                                                                                                                                                                             `JT�     �   +   -        5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                                                             `JT�     �   +   -        5�_�                    ,        ����                                                                                                                                                                                                                                                                                                                                                             `JT�    �   +   -        5�_�                    +        ����                                                                                                                                                                                                                                                                                                                                                             `L�     �   +   ,  j       �   +   -  k      function mostrarSeccion();5�_�                    ,        ����                                                                                                                                                                                                                                                                                                                                                             `L�     �   +   -        5�_�                     ,        ����                                                                                                                                                                                                                                                                                                                                                             `L�    �   +   -        5��