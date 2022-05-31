import kotlinx.browser.*
import org.w3c.dom.*

var pause: Boolean = false

@JsName("btnClick")
fun btnClick() {
	println("Hello, World!")
	contador(1500)
}



fun contador(t:Int){
	val divcontador = document.querySelector("div.contador") as HTMLDivElement

	if(t<0||pause){
		
	} else{
		divcontador.textContent=""
		if(((t-t%60)/60)<10){
			val min = "0${(t-t%60)/60}"
			val texto = document.createElement("p") as HTMLParagraphElement
			texto.textContent = "${min}" 
			divcontador.append(texto)

		} else{
			val min = "${(t-t%60)/60}"
			val texto = document.createElement("p") as HTMLParagraphElement
			texto.textContent = "${min}" 
			divcontador.append(texto)
		}
		if(t%60<10){
			val sec = "0${t%60}"
			val texto = document.createElement("p") as HTMLParagraphElement
			texto.textContent = ":${sec}" 
			divcontador.append(texto)
		} else{
			val sec = "${t%60}"
			val texto = document.createElement("p") as HTMLParagraphElement
			texto.textContent = ":${sec}" 
			divcontador.append(texto)
		}
		window.setTimeout({contador(t-1)}, 1000)
	}}

fun main(){
    print("Hello World")
}