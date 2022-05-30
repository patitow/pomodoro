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

fun remove(l1:List<String>, indexof:Int):List<String>{
    return l1.dropLast(l1.size-indexof)+l1.drop(indexof+1)
}
fun add(l1:List<String>, entrada:String):List<String>{
    return listOf(entrada).plus(l1)
}

fun main() {
    val l1 = listOf("a1","a2","a3","a4","a5")
    val l2 = remove(l1,2)
    val l3 = add(l2,"luciano huck")
    val l4 = remove(l3,l3.indexOf("luciano huck"))
    println(l1)
    println(l2)
    println(l3)
    println(l4)
    val s0 = LocalTime.now().second
    ciclo(s0,25)
}