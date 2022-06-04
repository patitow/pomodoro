if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'lista'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'lista'.");
}
var lista = function (_, Kotlin) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var throwCCE = Kotlin.throwCCE;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var lista;
  function listaAddTarefa() {
    var tmp$;
    var inputNovaTarefa = Kotlin.isType(tmp$ = document.getElementById('inputNovaTarefa'), HTMLInputElement) ? tmp$ : throwCCE();
    lista = add(lista, inputNovaTarefa.value);
    print(lista);
    criaTag(inputNovaTarefa.value);
    inputNovaTarefa.value = '';
  }
  function criaTag(str) {
    var tmp$;
    var listaTarefas = document.querySelector('listcontainer');
    var div = Kotlin.isType(tmp$ = document.createElement('div'), HTMLParagraphElement) ? tmp$ : throwCCE();
    div.classList.add('itemContent');
    div.textContent = str;
    ensureNotNull(listaTarefas).appendChild(div);
  }
  function remove(l1, indexof) {
    return plus(dropLast(l1, l1.size - indexof | 0), drop(l1, indexof + 1 | 0));
  }
  function add(l1, entrada) {
    return plus(listOf(entrada), l1);
  }
  function main() {
  }
  Object.defineProperty(_, 'lista', {
    get: function () {
      return lista;
    },
    set: function (value) {
      lista = value;
    }
  });
  _.addTarefa = listaAddTarefa;
  _.criaTag_61zpoe$ = criaTag;
  _.remove_udy8vv$ = remove;
  _.add_8zkr97$ = add;
  _.main = main;
  lista = listOf('');
  main();
  Kotlin.defineModule('lista', _);
  return _;
}(typeof lista === 'undefined' ? {} : lista, kotlin);
