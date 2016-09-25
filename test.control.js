export default class {
  static parameters() {
    return {
      base: { type: 'address' },
      text: {type: 'text' }
    };
  }

  static template() {
    return `{{text}}`;
  }

  createdCallback() {
  }
}
