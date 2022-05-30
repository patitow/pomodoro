import java.time.LocalTime
import java.util.concurrent.TimeUnit

fun ciclo(seg:Int, duracao:Int, minuto:Int=duracao-1, t0:Boolean=true){
    TimeUnit.SECONDS.sleep(1L)
    fun segundos(s0:Int=seg):String{
        if((s0-LocalTime.now().second)<10 && (s0-LocalTime.now().second)>=0){
            return ("0"+Math.abs(s0-LocalTime.now().second)).trim()
        }
        else if((s0-LocalTime.now().second)>=10){
            return (s0-LocalTime.now().second).toString().trim()
        }
        else{
            return (60-(LocalTime.now().second-s0)).toString().trim()
        }
    }
    if (t0==true){
        if(minuto>=10) {
            print("\b\b\b\b\b")
            print((minuto+1).toString() + ":" + "00")
        }
        else{
            print("\b\b\b\b\b")
            print("0"+ (minuto+1).toString() + ":" + "00")
        }
        ciclo(seg+1,duracao,minuto,false)
    }
    else if (minuto>0){
        if(minuto>=10) {
            print("\b\b\b\b\b")
            print(minuto.toString() + ":" + segundos())
        }
        else{
            print("\b\b\b\b\b")
            print("0"+ minuto.toString() + ":" + segundos())
        }
        if(segundos()=="00"){
            ciclo(seg,duracao,minuto-1,false)
        }
        else{
            ciclo(seg,duracao,minuto,false)
        }
    }
    else if(minuto == 0 && segundos()!="00"){
        print("\b\b\b\b\b")
        print("0"+ minuto.toString() + ":" + segundos())
        ciclo(seg,duracao,minuto,false)
    }
    else if(minuto == 0 && segundos()=="00"){
        print("\b\b\b\b\b")
        print("0"+ minuto.toString() + ":" + segundos())
    }
}

fun main() {
    val s0 = LocalTime.now().second
    ciclo(s0,25)
}