import kotlinx.browser.*
import org.w3c.dom.*

@JsName("btnClick")
fun btnClick() {
	println("Hello, World!")
	contador(1500)
}

fun contador(t:Int){
	val welcomeArea = document.querySelector("div.contador") as HTMLDivElement
	val str = "${(t-t%60)/60}:${t%60}"
	welcomeArea.textContent="${str}"
}



fun main() {
	println("Hello, World!")
}