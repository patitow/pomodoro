import kotlinx.browser.*
import org.w3c.dom.*

var lista = listOf("")
var idcontroller=0

@JsName("addTarefa")
fun listaAddTarefa(){
    var inputNovaTarefa = document.getElementById("inputNovaTarefa") as HTMLInputElement
    if(inputNovaTarefa.value!=""){
        lista=add(lista,inputNovaTarefa.value)
        criaTag(inputNovaTarefa.value)
        inputNovaTarefa.value = ""
        println("Lista: ${lista}")
    }
}

@JsName("resetlista")
fun resetLista(){
    val listContainer = document.querySelector("div.listcontainer") as HTMLDivElement
    var inputNovaTarefa = document.getElementById("inputNovaTarefa") as HTMLInputElement
    inputNovaTarefa.value = ""
    var close = document.getElementsByClassName("listTarefa")
    for (i in 0..close.length) {
        lista = listOf("")
        listContainer.innerHTML = ""
    }
    println("Lista após remoção: ${lista}")
}

@JsName("apagaTarefa")
fun apagaTarefa(img:HTMLButtonElement){
    println("Função chamada")
    val listContainer = document.querySelector("div.listcontainer") as HTMLDivElement
    listContainer.removeChild(img.parentElement!!.parentElement!!)
    val conteudo=img.parentElement!!.parentElement!!.getElementsByClassName("itemContent")
    val toRemove = lista.indexOf(conteudo.get(0)?.textContent)  
    lista=remove(lista,toRemove)
    println("Lista após remoção: ${lista}")
}

fun criaTag(str:String){
    val listContainer = document.querySelector("div.listcontainer") as HTMLDivElement
    val listaTarefas = document.createElement("div") as HTMLDivElement
    listaTarefas.className = "listTarefa"
    listContainer.className = "listcontainer"
    val text= document.createElement("p") as HTMLParagraphElement
    text.className = "itemContent"
    val img= document.createElement("button") as HTMLButtonElement
    img.innerHTML = """
                        <button onclick="lista.apagaTarefa(this)">
                        <img src=svg/remove.svg
                             class="btnRemoveTarefa"
                        ></button>
                    """
    text.textContent = str 
    text.id="texto"
    listaTarefas.append(text)
    listaTarefas.append(img)
    listContainer.append(listaTarefas)
}

fun gerarId():String{
    idcontroller++ //placeholder
    return "idcontroller"
}

fun remove(l1:List<String>, indexof:Int):List<String>{
    return l1.dropLast(l1.size-indexof)+l1.drop(indexof+1)
}

fun add(l1:List<String>, entrada:String):List<String>{
    return listOf(entrada).plus(l1)
}

fun main() {
}



