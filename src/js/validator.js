export default class Validator {
  validateUsername(name) {
    this.name = name;
      return /^[^(0-9-_)]+/.test(name) && !(/[0-9]{4,}/.test(name)) && /[\w-]+/.test(name) && /[^(0-9-_)]$/.test(name)
  }
}