class FileCopier {
    copyFile(fileSystem, source, destination) {
        const content = fileSystem.readFile(source);
        fileSystem.writeFile(destination, content);
      }
}

module.exports = FileCopier;