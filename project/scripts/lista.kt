import kotlinx.browser.*
import org.w3c.dom.*

var lista = listOf("")

@JsName("addTarefa")
fun listaAddTarefa(){
    var inputNovaTarefa = document.getElementById("inputNovaTarefa") as HTMLInputElement
    lista=add(lista,inputNovaTarefa.value)
    print(lista)
    criaTag(inputNovaTarefa.value)
    inputNovaTarefa.value = ""
}

fun criaTag(str:String){
    val listaTarefas = document.querySelector("div.listcontainer") as HTMLDivElement
    listaTarefas.className = "listcontainer"
    val text= document.createElement("p") as HTMLParagraphElement
    text.className = "itemContent"
    text.textContent = str 
    listaTarefas!!.append(text)
}

fun remove(l1:List<String>, indexof:Int):List<String>{
    return l1.dropLast(l1.size-indexof)+l1.drop(indexof+1)
}

fun add(l1:List<String>, entrada:String):List<String>{
    return listOf(entrada).plus(l1)
}

fun main() {
}



