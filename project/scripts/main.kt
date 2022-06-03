import kotlinx.browser.*
import org.w3c.dom.*

var tempo: Int = 1500
var controle:Int = 0
var focos: Int = 1
var shorts: Int = 0
var longs: Int = 0
var totshorts: Int = 0
var totlongs: Int = 0

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
	val divlongs = document.getElementById("longbreaks") as HTMLDivElement
	val divshorts = document.getElementById("shortbreaks") as HTMLDivElement
	val divciclo = document.getElementById("countciclo") as HTMLDivElement
	println(controle)
	if(t<0){
		if(longs==1){
			totlongs+=1
			focos=1
			longs=0
			shorts=0
			tempo=1500
		}
		else if(shorts==3 && focos==4){
			longs=1
			tempo=900
		}
		else if(shorts==focos){
			totshorts+=1
			focos+=1
			tempo=1500
		}
		else{
			shorts+=1
			tempo=300
		}		
		controle=3
		btnClick()
	}
	else if(controle==2){
		println("Pausa")
	}
	else{
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
		divlongs.textContent="${totlongs}"
		divshorts.textContent="${totshorts}"
		divciclo.textContent="#${totlongs+1}"
		tempo=t
		window.setTimeout({contador(t-1)}, 1000)
	}
}