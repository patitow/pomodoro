import kotlinx.browser.*
import org.w3c.dom.*

var lista = listOf("")
var idcontroller=0

@JsName("addTarefa")
fun listaAddTarefa(){
    var inputNovaTarefa = document.getElementById("inputNovaTarefa") as HTMLInputElement
    if(inputNovaTarefa.value!=""){
        lista=add(lista,inputNovaTarefa.value)
        print(lista)
        criaTag(inputNovaTarefa.value)
        inputNovaTarefa.value = ""
    }
}

@JsName("resetlista")
fun resetLista(){
    val listContainer = document.querySelector("div.listcontainer") as HTMLDivElement
    var inputNovaTarefa = document.getElementById("inputNovaTarefa") as HTMLInputElement
    inputNovaTarefa.value = ""
    var close = document.getElementsByClassName("listTarefa")
    for (i in 0..close.length) {
        listContainer.innerHTML = ""
    }
}

fun criaTag(str:String){
    val listContainer = document.querySelector("div.listcontainer") as HTMLDivElement
    val listaTarefas = document.createElement("div") as HTMLDivElement
    listaTarefas.className = "listTarefa"
    listContainer.className = "listcontainer"
    val text= document.createElement("p") as HTMLParagraphElement
    text.className = "itemContent"
    val img= document.createElement("img") as HTMLImageElement
    img.src="svg/remove.svg"
    img.className = "btnRemoveTarefa"
    img.id = gerarId()
    //img.onclick = removeitem(img.id) nao funciona
    text.textContent = str 
    listaTarefas.append(text)
    listaTarefas.append(img)
    listContainer.append(listaTarefas)
}

fun gerarId():String{
    idcontroller+=1 //placeholder
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



