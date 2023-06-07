En este ejemplo, la clase FileSystem tiene la responsabilidad de gestionar el sistema de archivos, pero también contiene métodos para copiar y mover archivos. Estas funcionalidades adicionales violan el principio de responsabilidad única, ya que la clase debería centrarse únicamente en la gestión básica del sistema de archivos.

Tu tarea será identificar estas responsabilidades adicionales y separarlas en clases distintas, aplicando así el principio de responsabilidad única. Puedes crear nuevas clases como FileCopier y FileMover para encapsular esas funcionalidades.

Recuerda que el objetivo final es que cada clase tenga una única razón para cambiar. Esto hará que el código sea más modular, fácil de entender y mantener. ¡Buena suerte en tu ejercicio!