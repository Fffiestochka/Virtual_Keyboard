export class Key {
  constructor({ code, caps }) {
    this.code = code;
    this.caps = caps;
  }

  // Key generator
  generateKey() {
    let newKey = document.createElement('div');
    newKey.className = 'key-button';
    // let template = '';
    // newKey.className.add(`${this.code}`);
    // newKey.setAttribute('');
    newKey.innerHTML = `<div>${this.code}</div>`;
    if (
      this.code === 'Backspace'
      || this.code === 'CapsLock'
      || this.code === 'Enter'
      || this.code === 'Shift') {
      newKey.classList.add('double');
    } else if (this.code === ' ') {
      newKey.classList.add('space');
    } else {
      newKey.classList.add('single');
    }
    return newKey;
  }
}
