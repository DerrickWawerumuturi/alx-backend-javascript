export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._name;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
