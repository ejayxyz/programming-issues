class Allat {
  constructor (name) {
    this.name = name;
  }

  koszones () {
    console.log('Hello,', this.name);
  }
}

class Ember extends Allat {
  programozas () {
    console.log(this.name, 'csinal egy programot');
  }
}

const pistike = new Allat('Pistike');
pistike.koszones();

const pecze = new Ember('Pecze');
pecze.koszones();
pecze.programozas();
