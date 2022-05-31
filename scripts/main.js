if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
var main = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var tempo;
  var controle;
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
    var tmp$;
    tempo = 1500;
    controle = 2;
    var divcontador = Kotlin.isType(tmp$ = document.querySelector('div.contador'), HTMLDivElement) ? tmp$ : throwCCE();
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var divcontador = Kotlin.isType(tmp$ = document.querySelector('div.contador'), HTMLDivElement) ? tmp$ : throwCCE();
    println(controle);
    if (t < 0 || controle === 2) {
      println('Encerrou');
    } else {
      divcontador.textContent = '';
      if (((t - t % 60 | 0) / 60 | 0) < 10) {
        var min = '0' + ((t - t % 60 | 0) / 60 | 0);
        var texto = Kotlin.isType(tmp$_0 = document.createElement('p'), HTMLParagraphElement) ? tmp$_0 : throwCCE();
        texto.textContent = min;
        divcontador.append(texto);
      } else {
        var min_0 = ((t - t % 60 | 0) / 60 | 0).toString();
        var texto_0 = Kotlin.isType(tmp$_1 = document.createElement('p'), HTMLParagraphElement) ? tmp$_1 : throwCCE();
        texto_0.textContent = min_0;
        divcontador.append(texto_0);
      }
      if (t % 60 < 10) {
        var sec = '0' + t % 60;
        var texto_1 = Kotlin.isType(tmp$_2 = document.createElement('p'), HTMLParagraphElement) ? tmp$_2 : throwCCE();
        texto_1.textContent = ':' + sec;
        divcontador.append(texto_1);
      } else {
        var sec_0 = (t % 60).toString();
        var texto_2 = Kotlin.isType(tmp$_3 = document.createElement('p'), HTMLParagraphElement) ? tmp$_3 : throwCCE();
        texto_2.textContent = ':' + sec_0;
        divcontador.append(texto_2);
      }
      tempo = t;
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
  _.btnClick = btnClick;
  _.rstClick = reset;
  _.changePauseButton = changePauseButton;
  _.changePlayButton = changePlayButton;
  _.contador_za3lpa$ = contador;
  tempo = 1500;
  controle = 0;
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
