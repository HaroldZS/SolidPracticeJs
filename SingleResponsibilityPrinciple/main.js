const FileSystem = require('./fileSystem.js');
const FileCopier = require('./fileCopier.js');
const FileMover = require('./fileMover.js');

const fileSystem = new FileSystem();
const fileCopier = new FileCopier();
const fileMover = new FileMover();

fileSystem.addFile("file1.txt", "Contenido del archivo 1");
fileSystem.addFile("file2.txt", "Contenido del archivo 2");

console.log("Archivos existentes:", fileSystem.listFiles());

const fileContent1 = fileSystem.readFile("file1.txt");
console.log("Contenido de file1.txt:", fileContent1);

fileCopier.copyFile(fileSystem, "file1.txt", "file3.txt");
console.log("Archivos existentes después de copiar file1.txt a file3.txt:", fileSystem.listFiles());
const fileContent3 = fileSystem.readFile("file3.txt");
console.log("Contenido de file3.txt:", fileContent3);

fileMover.moveFile(fileSystem, "file2.txt", "file4.txt");
console.log("Archivos existentes después de mover file2.txt a file4.txt:", fileSystem.listFiles());
const fileContent4 = fileSystem.readFile("file4.txt");
console.log("Contenido de file4.txt:", fileContent4);