export default class {
  static parameters() {
    return {
      base: { type: 'address' }
    };
  }

  static template() {
    return `<div style="background-color:red">SL: <slot name="default">empty</slot></div>`;
  }

  createdCallback() {
  }
}
