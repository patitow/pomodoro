import kotlinx.browser.*
import org.w3c.dom.*

var tempo: Int = 1500
var controle:Int = 0

@JsName("btnClick")
fun btnClick() {
	println(controle)
	if(controle==0){ // play
		contador(tempo)
		changePauseButton()
		controle+=1
	} else if(controle==1){ // tocou para parar
		changePlayButton()
		controle+=1
	} else if(controle>=2){ // play novamente
		controle=1
		changePauseButton()
		contador(tempo)
	}
}

@JsName("rstClick")
fun reset(){
	tempo=1500
	controle=2
	val divcontador = document.querySelector("div.contador") as HTMLDivElement
	divcontador.textContent="25:00"
	changePlayButton()
}

@JsName("addListClick")
fun addList(){

}

@JsName("removeListClick")
fun removeList(){

}

fun changePauseButton() {
	val divcontador =  document.getElementById("play") as HTMLImageElement
	divcontador.src="svg/pause.svg"
}

fun changePlayButton() {
	val divcontador =  document.getElementById("play") as HTMLImageElement
	divcontador.src="svg/play.svg"
}

fun contador(t:Int){
	val divcontador = document.querySelector("div.contador") as HTMLDivElement
	println(controle)
	if(t<0|| controle==2){
		println("Encerrou")
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
		tempo=t
		window.setTimeout({contador(t-1)}, 1000)
	}}