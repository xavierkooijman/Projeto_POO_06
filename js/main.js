AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#texto-shiba').setAttribute('visible', 'true')
        document.querySelector('#cama1').setAttribute('class', 'clickable')
        document.querySelector('#regador-jogo').setAttribute('class', 'clickable')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        document.querySelector('#texto-shiba').setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener2', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#texto-caixa').setAttribute('visible', 'true')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        document.querySelector('#texto-caixa').setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener3', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#texto-lock').setAttribute('visible', 'true')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        document.querySelector('#texto-lock').setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener4', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#chave-grab').setAttribute('visible', 'true')
        document.querySelector('#chave-jogo').setAttribute('visible', 'false')
        document.querySelector('#lock2').setAttribute('visible', 'true')
        document.querySelector('#lock2').setAttribute('class', 'clickable')
        document.querySelector('#lock1').remove()
    });
   }
  });
  AFRAME.registerComponent('cursor-listener5', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#regador-grab').setAttribute('visible', 'true')
        document.querySelector('#regador-jogo').setAttribute('visible', 'false')
        document.querySelector('#cama1').setAttribute('class', '')
        document.querySelector('#planta2').setAttribute('visible', 'true')
        document.querySelector('#planta2').setAttribute('class', 'clickable')
        document.querySelector('#planta1').remove()
    });
   }
  });
  AFRAME.registerComponent('cursor-listener6', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
          setTimeout(() => {
              document.querySelector('#regador-grab').setAttribute('visible', 'false')
              document.querySelector('#chave-jogo').setAttribute('visible', 'true')
              document.querySelector('#chave-jogo').setAttribute('class', 'clickable')
              document.querySelector('#planta2').setAttribute('class', '')
              document.querySelector('#texto-planta').setAttribute('visible', 'true')
          }, 6000);
    });
   }
  });
  AFRAME.registerComponent('cursor-listener7', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#chave-grab').setAttribute('visible', 'false')
        document.querySelector('#lock2').setAttribute('class', '')
        document.querySelector('#texto-parabens').setAttribute('visible', 'true')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener8', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#texto-cadeira').setAttribute('visible', 'true')
        document.querySelector('#gato-jogo').setAttribute('class', 'clickable')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        document.querySelector('#texto-cadeira').setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener9', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#texto-gato').setAttribute('visible', 'true')
        document.querySelector('#phone-jogo').setAttribute('class', 'clickable')
    });
    this.el.addEventListener('mouseleave', function (evt) {
        document.querySelector('#texto-gato').setAttribute('visible', 'false')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener10', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#chave-jogo').setAttribute('visible', 'true')
        document.querySelector('#chave-jogo').setAttribute('class', 'clickable')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener11', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#texto-phone').setAttribute('visible', 'true')
        document.querySelector('#balao-jogo').setAttribute('visible', 'true')
        document.querySelector('#balao-jogo').setAttribute('class', 'clickable')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener12', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#balao-jogo').setAttribute('visible', 'false')
        document.querySelector('#balao-grab').setAttribute('visible', 'true')
        document.querySelector('#balao-jogo').setAttribute('class', '')
        document.querySelector('#gato-jogo').setAttribute('class', '')
        document.querySelector('#cadeira-jogo').setAttribute('class', '')
        document.querySelector('#tabela-escolha').setAttribute('class', 'clickable')
    });
   }
  });
  AFRAME.registerComponent('cursor-listener13', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        document.querySelector('#balao-grab').setAttribute('visible', 'false')
        document.querySelector('#tabela-escolha').setAttribute('class', '')
    });
   }
  });