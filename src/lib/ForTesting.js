class ForTesting {
  constructor(name = 'User') {
    this.name = name;
  }
  greetings() {
    return `Greetings! You are a rockstar, ${this.name}.`;
  }
}

export default ForTesting;
