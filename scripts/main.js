if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
var main = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var pause;
  function btnClick() {
    println('Hello, World!');
    contador(1500);
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
    if (t >= 0 && !pause) {
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
      window.setTimeout(contador$lambda(t), 1000);
    }
  }
  function main() {
    print('Hello World');
  }
  Object.defineProperty(_, 'pause', {
    get: function () {
      return pause;
    },
    set: function (value) {
      pause = value;
    }
  });
  _.btnClick = btnClick;
  _.contador_za3lpa$ = contador;
  _.main = main;
  pause = false;
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
