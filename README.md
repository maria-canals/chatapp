# chatapp

## Intrucciones de uso

```
- Utilice los siguientes comandos en la terminal para abrir el proyecto.
  - npm install
  - npm run serve
- Finalmente abre el siguiente enlace para ver la aplicación en la web: http://localhost:8080/
```

### Desarrollo de la app

```
He seguido los siguientes pasos:
- En App.vue almacenar los datos que tienen que estar precargados: mensajes de tutor, estudante y ficheros de entrega. Se envian al componente Chat a través de la prop "mensajes".
- En App.vue también estan los datos ficticios del profesor  de la alumna. El profesor tiene un id 1 y la alumna un id 2.
- Esto nos servirá para a la hora de renderizar los bocadillos del chat. En el div donde se hace el v-for para renderizar los mensajes, las clases se renderizan de forma dinámica y con una condición, si el id es 1, tendrá la clase teacher y sino la clase student. Cada clase tiene su diseño con flex box para que se pongan en el lugar adecuado.
- Crear la carpeta utils donde habrá una función que nos devolverá la fecha actual en un formato personalizado.
-

```

### Dependencias instaladas

```
- Boostrap
- Vue CLI
- Font Awesome

```

### Dudas

```
- Debería usar más dependencias?
- Como ordenar los datos precargados por orden decreciente? usar sort?
- Como diferenciar si un mensaje es un fichero o es texto? hay dos variables donde se guardan los mensajes y los documentos. Documents y messages, no se si debería guardar los mensajes y los documentos en una misma variable y a la hora de hacer el v-for para renderizarlos alli mismo ditingir si es un texto o documento y que se le añada la clase correspondinte para que tenga un formato o otro.

```
