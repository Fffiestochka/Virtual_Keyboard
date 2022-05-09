export class Key {
  constructor({ code, caps }) {
    this.code = code;
    this.caps = caps;
  }

  // Key generator
  generateKey() {
    let newKey = document.createElement('div');
    // newKey.className.add(`${this.code}`);
    // newKey.setAttribute('');
    newKey.innerHTML = `<div>${this.code}</div>`;
    return newKey;
  }
}
