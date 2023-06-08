class FileMover {
    moveFile(fileSystem, source, destination) {
        const content = fileSystem.readFile(source);
        fileSystem.writeFile(destination, content);
        fileSystem.deleteFile(source);
      }
}

module.exports = FileMover;