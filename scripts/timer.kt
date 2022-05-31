//nao modificar o valor, retornar um div com um valor diferente (pra o contador)

class Time(val min:Int,val seg:Int){
    
    override fun toString():String{
        return "$min : $seg"
    }
}

fun main(){
    play(25,0)
}

fun timer(tempo:Time):Time?{
    if(tempo.seg-1<=0)
        return Time(tempo.min-1,59)
    else if(tempo.min==0 && tempo.seg==0)
        return null
    else
        return Time(tempo.min,tempo.seg-1)
    
}


fun play(min:Int,seg:Int){
    timer(Time(min,seg))
}

fun pause(){
    
}



