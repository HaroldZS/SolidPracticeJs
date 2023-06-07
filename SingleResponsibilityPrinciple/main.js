const FileSystem = require('./fileSystem.js');

const fileSystem = new FileSystem();

fileSystem.addFile("file1.txt", "Contenido del archivo 1");
fileSystem.addFile("file2.txt", "Contenido del archivo 2");

console.log("Archivos existentes:", fileSystem.listFiles());

const fileContent = fileSystem.readFile("file1.txt");
console.log("Contenido de file1.txt:", fileContent);

fileSystem.copyFile("file1.txt", "file3.txt");
console.log("Archivos existentes después de copiar file1.txt a file3.txt:", fileSystem.listFiles());

fileSystem.moveFile("file2.txt", "file4.txt");
console.log("Archivos existentes después de mover file2.txt a file4.txt:", fileSystem.listFiles());