if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'lista'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'lista'.");
}
var lista = function (_, Kotlin) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var indexOf = Kotlin.kotlin.collections.indexOf_bv23uc$;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var lista;
  var idcontroller;
  function listaAddTarefa() {
    var tmp$;
    var inputNovaTarefa = Kotlin.isType(tmp$ = document.getElementById('inputNovaTarefa'), HTMLInputElement) ? tmp$ : throwCCE();
    if (!equals(inputNovaTarefa.value, '')) {
      lista = add(lista, inputNovaTarefa.value);
      criaTag(inputNovaTarefa.value);
      inputNovaTarefa.value = '';
      println('Lista: ' + lista);
    }
  }
  function resetLista() {
    var tmp$, tmp$_0, tmp$_1;
    var listContainer = Kotlin.isType(tmp$ = document.querySelector('div.listcontainer'), HTMLDivElement) ? tmp$ : throwCCE();
    var inputNovaTarefa = Kotlin.isType(tmp$_0 = document.getElementById('inputNovaTarefa'), HTMLInputElement) ? tmp$_0 : throwCCE();
    inputNovaTarefa.value = '';
    var close = document.getElementsByClassName('listTarefa');
    tmp$_1 = close.length;
    for (var i = 0; i <= tmp$_1; i++) {
      lista = listOf('');
      listContainer.innerHTML = '';
    }
    println('Lista ap\xF3s remo\xE7\xE3o: ' + lista);
  }
  function apagaTarefa(img) {
    var tmp$, tmp$_0;
    println('Fun\xE7\xE3o chamada');
    var listContainer = Kotlin.isType(tmp$ = document.querySelector('div.listcontainer'), HTMLDivElement) ? tmp$ : throwCCE();
    listContainer.removeChild(ensureNotNull(ensureNotNull(img.parentElement).parentElement));
    var conteudo = ensureNotNull(ensureNotNull(img.parentElement).parentElement).getElementsByClassName('itemContent');
    var toRemove = indexOf(lista, (tmp$_0 = conteudo[0]) != null ? tmp$_0.textContent : null);
    lista = remove(lista, toRemove);
    println('Lista ap\xF3s remo\xE7\xE3o: ' + lista);
  }
  function criaTag(str) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var listContainer = Kotlin.isType(tmp$ = document.querySelector('div.listcontainer'), HTMLDivElement) ? tmp$ : throwCCE();
    var listaTarefas = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    listaTarefas.className = 'listTarefa';
    listContainer.className = 'listcontainer';
    var text = Kotlin.isType(tmp$_1 = document.createElement('p'), HTMLParagraphElement) ? tmp$_1 : throwCCE();
    text.className = 'itemContent';
    var img = Kotlin.isType(tmp$_2 = document.createElement('button'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    img.innerHTML = '\n                        <button onclick="lista.apagaTarefa(this)">\n                        <img src=svg/remove.svg\n                             class="btnRemoveTarefa"\n                        ><\/button>\n                    ';
    text.textContent = str;
    text.id = 'texto';
    listaTarefas.append(text);
    listaTarefas.append(img);
    listContainer.append(listaTarefas);
  }
  function gerarId() {
    idcontroller = idcontroller + 1 | 0;
    return 'idcontroller';
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
  Object.defineProperty(_, 'idcontroller', {
    get: function () {
      return idcontroller;
    },
    set: function (value) {
      idcontroller = value;
    }
  });
  _.addTarefa = listaAddTarefa;
  _.resetlista = resetLista;
  _.apagaTarefa = apagaTarefa;
  _.criaTag_61zpoe$ = criaTag;
  _.gerarId = gerarId;
  _.remove_udy8vv$ = remove;
  _.add_8zkr97$ = add;
  _.main = main;
  lista = listOf('');
  idcontroller = 0;
  main();
  Kotlin.defineModule('lista', _);
  return _;
}(typeof lista === 'undefined' ? {} : lista, kotlin);
