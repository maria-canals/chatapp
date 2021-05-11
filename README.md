# chatapp

## Intrucciones de uso

```
- Utilice los siguientes comandos en la terminal para abrir el proyecto.
  - npm install
  - npm run serve
- Finalmente abre el enlace donde le indica que está corriendo la app (su localhost).
```

### Desarrollo de la app

```
- En App.vue se almacenan los datos que tienen que estar precargados: mensajes de tutor, mensajes de estudiante y ficheros de entrega, guardados en una variable llamada 'messages'. Cada uno de ellos tiene un id: 0 si es un fichero de entrega, 1 si es un mensaje del tutor, 2 si es un mensaje del estudiante.

- Para que queden precargados justo al iniciar la app, he usado el hook "mounted" y para que los mensajes aparezcan de manera que se ordenen por la fecha de creación más reciente, el método de array sort.

- Pasamos los el array de objectos mensajes, como props llamada 'messages' al componente Chat, también los datos de la estudiante, como 'student', para que cuando el usuario introduzca un mensaje, aparezca en el chat el mensaje introducido en el formulario, junto a la foto y el diseño del bocadillo de la estudiante.

-El componente chat tiene un v-for que recorre la prop messages. Según el id asignado, renderizará de manera dinámica la clase que corresponde a profesor, estudiante o fichero de descarga. El icono de descarga (la nube azul), al hacer hover te muestra el link ficticio de descarga. Se puede hacer scroll en el componente.

- He importado el cdn de fontawesome y bootstrap. Las clases de estilo .wrapper .message.teacher/ student y wrapper.document son las que se muestran dinámicamente al hacer el v-for, usan flexbox para la alinación de los bocadillos de los mensajes/documentos de descarga.

- También he instalado la dependencia de NPM moment, para poder dar un formato de fecha de creación de mensajes/documentos personalizado.

- Por último, puedes enviar mensajes como si fueras la estudiante. Estos mensajes no se guardarán y al recargar la página desaparecerán.

```

### Dependencias instaladas

```
- Boostrap
- Vue CLI
- Font Awesome
- Moment

```
