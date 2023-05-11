const textoShiba = document.querySelector('#texto-shiba')  
const cama =  document.querySelector('#cama1')
const regadorJogo = document.querySelector('#regador-jogo')
const regadorGrab = document.querySelector('#regador-grab')
const textoCaixa = document.querySelector('#texto-caixa')
const cao = document.querySelector('#cao')
const textoLock = document.querySelector('#texto-lock')
const chaveGrab = document.querySelector('#chave-grab')
const chaveJogo = document.querySelector('#chave-jogo')
const lock2 = document.querySelector('#lock2')
const lock1 = document.querySelector('#lock1')
const planta2 = document.querySelector('#planta2')
const planta1 = document.querySelector('#planta1')
const textoPlanta = document.querySelector('#texto-planta')
const textoParabens = document.querySelector('#texto-parabens')
const textoCadeira = document.querySelector('#texto-cadeira')
const gatoJogo = document.querySelector('#gato-jogo')
const textoGato = document.querySelector('#texto-gato')
const phoneJogo = document.querySelector('#phone-jogo')
const textoPhone = document.querySelector('#texto-phone')
const balaoJogo = document.querySelector('#balao-jogo')
const balaoGrab = document.querySelector('#balao-grab')
const cadeiraJogo = document.querySelector('#cadeira-jogo')
const tabelaEscolha = document.querySelector('#tabela-escolha')

AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        textoShiba.setAttribute('visible', 'true')
        cama.setAttribute('class', 'clickable')
        regadorJogo.setAttribute('class', 'clickable')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        textoShiba.setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener2', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        textoCaixa.setAttribute('visible', 'true')
        cao.setAttribute('class', 'clickable')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        textoCaixa.setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener3', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        textoLock.setAttribute('visible', 'true')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        textoLock.setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener4', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        chaveGrab.setAttribute('visible', 'true')
        chaveJogo.setAttribute('visible', 'false')
        lock2.setAttribute('visible', 'true')
        lock2.setAttribute('class', 'clickable')
        lock1.remove()
    });
   }
  });
  AFRAME.registerComponent('cursor-listener5', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        regadorGrab.setAttribute('visible', 'true')
        regadorJogo.setAttribute('visible', 'false')
        cama.setAttribute('class', '')
        planta2.setAttribute('visible', 'true')
        planta2.setAttribute('class', 'clickable')
        planta1.remove()
    });
   }
  });
  AFRAME.registerComponent('cursor-listener6', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
          setTimeout(() => {
              regadorGrab.setAttribute('visible', 'false')
              chaveJogo.setAttribute('visible', 'true')
              chaveJogo.setAttribute('class', 'clickable')
              planta2.setAttribute('class', '')
              textoPlanta.setAttribute('visible', 'true')
          }, 6000);
    });
   }
  });
  AFRAME.registerComponent('cursor-listener7', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        chaveGrab.setAttribute('visible', 'false')
        lock2.setAttribute('class', '')
        textoParabens.setAttribute('visible', 'true')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener8', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        textoCadeira.setAttribute('visible', 'true')
        gatoJogo.setAttribute('class', 'clickable')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        textoCadeira.setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener9', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        textoGato.setAttribute('visible', 'true')
        phoneJogo.setAttribute('class', 'clickable')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        textoGato.setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener11', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        textoPhone.setAttribute('visible', 'true')
        balaoJogo.setAttribute('visible', 'true')
        balaoJogo.setAttribute('class', 'clickable')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener12', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        balaoJogo.setAttribute('visible', 'false')
        balaoGrab.setAttribute('visible', 'true')
        balaoJogo.setAttribute('class', '')
        gatoJogo.setAttribute('class', '')
        cadeiraJogo.setAttribute('class', '')
        tabelaEscolha.setAttribute('class', 'clickable')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener13', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        balaoGrab.setAttribute('visible', 'false')
        tabelaEscolha.setAttribute('class', '')
        chaveJogo.setAttribute('visible', 'true')
        chaveJogo.setAttribute('class', 'clickable')
    });
   }
  });