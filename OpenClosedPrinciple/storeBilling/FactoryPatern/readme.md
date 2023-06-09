Si tienes muchos tipos de productos y crear muchas clases se vuelve insostenible, puedes explorar otras opciones para manejar la creación de objetos de manera más dinámica y flexible.

Una posible solución es utilizar un patrón de diseño llamado "Factory Method" (Método de Fábrica). Este patrón te permite encapsular la creación de objetos y te proporciona un método centralizado para crear instancias de diferentes subclases basadas en un criterio específico, como la categoría del producto.

En este ejemplo, hemos introducido la clase ProductFactory que tiene un método estático createProduct. Este método acepta la categoría y el precio del producto, y devuelve una instancia de la subclase correspondiente según la categoría especificada.

En lugar de crear objetos directamente utilizando las subclases (new Book(), new Electronics(), etc.), utilizamos el ProductFactory.createProduct() para crear los objetos de manera más flexible y dinámica.

De esta manera, puedes agregar nuevos tipos de productos simplemente añadiendo la correspondiente subclase y actualizando el método createProduct en la clase ProductFactory, sin necesidad de modificar otras partes del código.

Esta implementación con el patrón Factory Method te permite tener un constructor más genérico y manejar la creación de objetos de forma más flexible y sostenible a medida que creces en número de tipos de productos.

Al final esta solución, nos permite no tener que crear demasiadas clases cuando las categorias de productos se incrementan, pero deja de respetar el principio de Open Closed. Entonces hay que tomar un via de medio, según las condiciones del sistema en este caso la cantidad de distintas categorías de productos.