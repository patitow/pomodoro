if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
var main = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var tempo;
  var controle;
  var focos;
  var shorts;
  var longs;
  var totshorts;
  var totlongs;
  var width;
  var tipo;
  function btnClick() {
    println(controle);
    if (controle === 0) {
      contador(tempo);
      changePauseButton();
      controle = controle + 1 | 0;
    } else if (controle === 1) {
      changePlayButton();
      controle = controle + 1 | 0;
    } else if (controle >= 2) {
      controle = 1;
      changePauseButton();
      contador(tempo);
    }
  }
  function reset() {
    var tmp$, tmp$_0;
    tipo = 'foco';
    width = 0.0;
    tempo = 15;
    focos = 1;
    longs = 0;
    shorts = 0;
    controle = 2;
    var barra = Kotlin.isType(tmp$ = document.getElementById('FocoBar'), HTMLDivElement) ? tmp$ : throwCCE();
    barra.style.width = width.toString() + '%';
    barra.style.backgroundColor = '#659b65';
    var divcontador = Kotlin.isType(tmp$_0 = document.querySelector('div.contador'), HTMLDivElement) ? tmp$_0 : throwCCE();
    divcontador.textContent = '25:00';
    changePlayButton();
  }
  function changePauseButton() {
    var tmp$;
    var divcontador = Kotlin.isType(tmp$ = document.getElementById('play'), HTMLImageElement) ? tmp$ : throwCCE();
    divcontador.src = 'svg/pause.svg';
  }
  function changePlayButton() {
    var tmp$;
    var divcontador = Kotlin.isType(tmp$ = document.getElementById('play'), HTMLImageElement) ? tmp$ : throwCCE();
    divcontador.src = 'svg/play.svg';
  }
  function contador$lambda(closure$t) {
    return function () {
      contador(closure$t - 1 | 0);
      return Unit;
    };
  }
  function contador(t) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var barra = Kotlin.isType(tmp$ = document.getElementById('FocoBar'), HTMLDivElement) ? tmp$ : throwCCE();
    var divcontador = Kotlin.isType(tmp$_0 = document.querySelector('div.contador'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var divlongs = Kotlin.isType(tmp$_1 = document.getElementById('longbreaks'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var divshorts = Kotlin.isType(tmp$_2 = document.getElementById('shortbreaks'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var divciclo = Kotlin.isType(tmp$_3 = document.getElementById('countciclo'), HTMLDivElement) ? tmp$_3 : throwCCE();
    println(controle);
    if (t < 0) {
      if (longs === 1) {
        tipo = 'foco';
        barra.style.backgroundColor = '#659b65';
        totlongs = totlongs + 1 | 0;
        focos = 1;
        longs = 0;
        shorts = 0;
        tempo = 1500;
      } else if (shorts === 3 && focos === 4) {
        tipo = 'long';
        barra.style.backgroundColor = '#ffa8a8';
        longs = 1;
        tempo = 900;
      } else if (shorts === focos) {
        tipo = 'foco';
        barra.style.backgroundColor = '#659b65';
        totshorts = totshorts + 1 | 0;
        focos = focos + 1 | 0;
        tempo = 1500;
      } else {
        tipo = 'short';
        barra.style.backgroundColor = '#a1a1ff';
        shorts = shorts + 1 | 0;
        tempo = 300;
      }
      document.createElement('autoplay');
      controle = 3;
      width = 0.0;
      btnClick();
    } else if (controle === 2) {
      println('Pausa');
    } else {
      divcontador.textContent = '';
      if (((t - t % 60 | 0) / 60 | 0) < 10) {
        var min = '0' + ((t - t % 60 | 0) / 60 | 0);
        var texto = Kotlin.isType(tmp$_4 = document.createElement('p'), HTMLParagraphElement) ? tmp$_4 : throwCCE();
        texto.textContent = min;
        divcontador.append(texto);
      } else {
        var min_0 = ((t - t % 60 | 0) / 60 | 0).toString();
        var texto_0 = Kotlin.isType(tmp$_5 = document.createElement('p'), HTMLParagraphElement) ? tmp$_5 : throwCCE();
        texto_0.textContent = min_0;
        divcontador.append(texto_0);
      }
      if (t % 60 < 10) {
        var sec = '0' + t % 60;
        var texto_1 = Kotlin.isType(tmp$_6 = document.createElement('p'), HTMLParagraphElement) ? tmp$_6 : throwCCE();
        texto_1.textContent = ':' + sec;
        divcontador.append(texto_1);
      } else {
        var sec_0 = (t % 60).toString();
        var texto_2 = Kotlin.isType(tmp$_7 = document.createElement('p'), HTMLParagraphElement) ? tmp$_7 : throwCCE();
        texto_2.textContent = ':' + sec_0;
        divcontador.append(texto_2);
      }
      divlongs.textContent = totlongs.toString();
      divshorts.textContent = totshorts.toString();
      divciclo.textContent = '#' + (totlongs + 1 | 0);
      tempo = t;
      if (equals(tipo, 'foco')) {
        width = width + 100.0 / 1500.0;
      } else if (equals(tipo, 'long')) {
        width = width + 100.0 / 900.0;
      } else if (equals(tipo, 'short')) {
        width = width + 100.0 / 300.0;
      }
      barra.style.width = width.toString() + '%';
      window.setTimeout(contador$lambda(t), 1000);
    }
  }
  Object.defineProperty(_, 'tempo', {
    get: function () {
      return tempo;
    },
    set: function (value) {
      tempo = value;
    }
  });
  Object.defineProperty(_, 'controle', {
    get: function () {
      return controle;
    },
    set: function (value) {
      controle = value;
    }
  });
  Object.defineProperty(_, 'focos', {
    get: function () {
      return focos;
    },
    set: function (value) {
      focos = value;
    }
  });
  Object.defineProperty(_, 'shorts', {
    get: function () {
      return shorts;
    },
    set: function (value) {
      shorts = value;
    }
  });
  Object.defineProperty(_, 'longs', {
    get: function () {
      return longs;
    },
    set: function (value) {
      longs = value;
    }
  });
  Object.defineProperty(_, 'totshorts', {
    get: function () {
      return totshorts;
    },
    set: function (value) {
      totshorts = value;
    }
  });
  Object.defineProperty(_, 'totlongs', {
    get: function () {
      return totlongs;
    },
    set: function (value) {
      totlongs = value;
    }
  });
  Object.defineProperty(_, 'width', {
    get: function () {
      return width;
    },
    set: function (value) {
      width = value;
    }
  });
  Object.defineProperty(_, 'tipo', {
    get: function () {
      return tipo;
    },
    set: function (value) {
      tipo = value;
    }
  });
  _.btnClick = btnClick;
  _.rstClick = reset;
  _.changePauseButton = changePauseButton;
  _.changePlayButton = changePlayButton;
  _.contador_za3lpa$ = contador;
  tempo = 5;
  controle = 0;
  focos = 1;
  shorts = 0;
  longs = 0;
  totshorts = 0;
  totlongs = 0;
  width = 0.0;
  tipo = 'foco';
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
