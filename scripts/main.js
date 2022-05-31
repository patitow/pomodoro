if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
var main = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  function btnClick() {
    println('Hello, World!');
    contador(1500);
  }
  function contador(t) {
    var tmp$;
    var welcomeArea = Kotlin.isType(tmp$ = document.querySelector('div.contador'), HTMLDivElement) ? tmp$ : throwCCE();
    var str = ((t - t % 60 | 0) / 60 | 0).toString() + ':' + t % 60;
    welcomeArea.textContent = str;
    welcomeArea.classList.remove('disabled');
  }
  function main() {
    println('Hello, World!');
  }
  _.btnClick = btnClick;
  _.contador_za3lpa$ = contador;
  _.main = main;
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
