class FileSystem {
  constructor() {
    this.files = {};
  }

  addFile(name, content) {
    this.files[name] = content;
  }

  deleteFile(name) {
    delete this.files[name];
  }

  readFile(name) {
    return this.files[name];
  }

  writeFile(name, content) {
    this.files[name] = content;
  }

  listFiles() {
    return Object.keys(this.files);
  }
}

module.exports = FileSystem;