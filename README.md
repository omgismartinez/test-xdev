Esta prueba consiste en implementar un CRUD utilizando Next.js, para ello utilizar la siguiente API que genera datos falsos https://fakestoreapi.com/docs.

El proyecto debe contener las siguientes características:

---

## Inicio de sesión 

- [x] Implementar inicio de sesión, está será la pantalla inicial (para probar el login utilizar los usuarios y contraseñas que están disponibles en la documentación). 
- [x] Cuando hagas el inicio de sesión, guarda el token generado por la API en el local storage.

## Menú una vez que tengas la sesión activa 

- [x] Una vez que se inicie sesión aparecerá una pantalla que permitirá elegir entre usuarios y productos.

## Lista de usuarios 

- [x] La data generada por la fake API por defecto trae las contraseñas de los usuarios, filtrarlas para que en el lado del cliente no aparezcan. 
- [x] En el caso que se seleccionen los usuarios aparecerá una lista/tabla con cada uno de los usuarios, se debe mostrar el nombre de usuario, el correo y el id, así como el respectivo nombre y apellido y un botón de ver más. 
- [x] La lista de usuarios se puede ordenar de manera ascendente o descendente por el campo de id o correo electrónico. 
- [x] Tener un botón para eliminar un usuario de la lista/tabla, no es necesario mandar a la API para hacerlo, solo quitarlo de la lista. 
- [x] Agregar un botón para resetear a los usuarios que había inicialmente, de tal modo que si se han borrado usuarios de la lista estos vuelvan a aparecer. 
- [x] En la misma página, agregar un botón para agregar un usuario, en este caso utilizar la API para ello, el usuario agregado debe añadirse a la lista/tabla de usuarios, Nota: la fake API no agrega el usuario a la base de datos por lo que no te preocupes si recargas la página y no se muestra el registro del usuario agregado. 
- [x] En la lista cuando se haga click en el botón ver más, este debe redirigir a una página que contendrá los datos del usuario ya completos.

## Lista de productos 

- [x] Mostrar la lista de los productos, conteniendo su id, precio, título y el botón de ver más. 
- [x] La lista de productos se puede ordenar por id y precio, tanto de manera ascendente como descendente. 
- [x] Al hacer click en el botón ver más este debe redirigir a una página en la que se podrán ver todos los datos del producto.

## Página de producto con los datos completos 

- [x] Tener un botón para actualizar los datos del producto, para ello utilizar la API. Nota: La API no actualizará el producto en la base de datos por lo que no te preocupes si al recargar la página los datos vuelven a su estado anterior.

## Todas las páginas 

- [x] Agregar un botón para cerrar sesión, este debe redirigir al formulario de inicio de sesión y limpiar el storage que contenía el token.
