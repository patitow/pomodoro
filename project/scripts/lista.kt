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
    var listaTarefas = document.querySelector("listcontainer")
    //var li=document.createElement("li")
    //li.classList.add("listTarefa")
    
    var div = document.createElement("div") as HTMLParagraphElement
    div.classList.add("itemContent")
    div.textContent = str
    /*
    var btnApagar=document.createElement("button") as HTMLButtonElement
    btnApagar.classList.add("btnRemoveTarefa")

    var img = document.createElement("img") as HTMLImageElement
    img.src = "svg/remove.svg"

    btnApagar.appendChild(img)
    li.appendChild(div)
    li.appendChild(btnApagar)*/


    val btn = document.createbutton {
    text("click me")
    style = """
             color: 0xffffff;
             width: 10.px;
             opacity: .8;
             hover {
                color : 0xf2cacf
            }
            """
    }

    listaTarefas.appendElement(btn)
}

fun remove(l1:List<String>, indexof:Int):List<String>{
    return l1.dropLast(l1.size-indexof)+l1.drop(indexof+1)
}

fun add(l1:List<String>, entrada:String):List<String>{
    return listOf(entrada).plus(l1)
}

fun main() {
}



