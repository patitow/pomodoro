import kotlinx.browser.*
import org.w3c.dom.*

var lista = listOf("")
var idcontroller=0

@JsName("addTarefa")
fun listaAddTarefa(){
    println("Começando AddTarefa")
    var inputNovaTarefa = document.getElementById("inputNovaTarefa") as HTMLInputElement
    if(inputNovaTarefa.value!=""){
        lista=add(lista,inputNovaTarefa.value)
        print(lista)
        criaTag(inputNovaTarefa.value)
        inputNovaTarefa.value = ""
    }
    println("Finalizando AddTarefa")
}

fun criaTag(str:String){
    println("Começando Criatag")
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
    text.textContent = str 
    listaTarefas.append(text)
    listaTarefas.append(img)
    listContainer.append(listaTarefas)
    println("Finalizando Criatag")
}

@JsName("removeTarefa")
fun listaremoveTarefa(){
    var inputNovaTarefa = document.getElementById("inputNovaTarefa") as HTMLInputElement
    lista=add(lista,inputNovaTarefa.value)
    print(lista)
    criaTag(inputNovaTarefa.value)
    inputNovaTarefa.value = ""
}

fun gerarId():String{
    idcontroller+=1
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



