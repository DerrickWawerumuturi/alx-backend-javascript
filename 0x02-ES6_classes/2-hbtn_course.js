export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  //   getters
  getName() {
    return this._name;
  }
  getLength() {
    return this._length;
  }
  getStudents() {
    return this._students;
  }

  //   setters
  setName(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = newName;
  }
  setLength(newLength) {
    if (typeof newLength !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = newLength;
  }
  setStudents(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError("Students must be an array of strings");
    }
    if (!newStudents.every((newStudent) => typeof newStudent === "string")) {
      throw new TypeError("Students must be an array of strings");
    }
    this._students = newStudents;
  }
}
