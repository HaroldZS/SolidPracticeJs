Supongamos que estás desarrollando una aplicación en JavaScript para una tienda en línea. La aplicación tiene una interfaz llamada OperacionesTienda que define diversas operaciones relacionadas con la gestión de productos y pedidos. Algunas de estas operaciones incluyen la adición de productos al inventario, la actualización de precios, el procesamiento de pedidos y la generación de informes de ventas.

Tienes tres tipos de empleados en la tienda: Vendedor, Gerente y Analista. Cada uno de estos empleados tiene diferentes responsabilidades y solo necesita realizar ciertas operaciones específicas.

Vendedor solo necesita agregar productos al inventario y procesar pedidos.
Gerente solo necesita actualizar precios y generar informes de ventas.
Analista necesita realizar todas las operaciones disponibles en la interfaz, incluyendo adición de productos, actualización de precios, procesamiento de pedidos y generación de informes de ventas.
Deseas utilizar una interfaz común, OperacionesTienda, para asegurarte de que cada uno de los empleados implemente todas las operaciones definidas en la interfaz. Sin embargo, debido a las responsabilidades específicas de cada empleado, cada uno de ellos solo necesita un subconjunto específico de operaciones. A pesar de esto, debido a la interfaz común, todos los empleados deben implementar todas las operaciones, incluso si no las necesitan.

Este diseño viola el principio de segregación de interfaz, ya que los empleados terminan teniendo dependencias innecesarias y deben proporcionar implementaciones vacías o lanzar excepciones para las operaciones que no necesitan.

En este código, la interfaz StoreOperations define las operaciones disponibles en la tienda. Luego, cada una de las clases Salesperson, Manager y Analyst implementa la interfaz y proporciona una implementación vacía o no implementa las operaciones que no necesitan.

Recuerda que este diseño viola el principio de segregación de interfaz, ya que las clases tienen dependencias innecesarias y deben proporcionar implementaciones vacías o lanzar excepciones para las operaciones que no necesitan.