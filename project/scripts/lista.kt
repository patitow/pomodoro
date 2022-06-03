fun remove(l1:List<String>, indexof:Int):List<String>{
    return l1.dropLast(l1.size-indexof)+l1.drop(indexof+1)
}
fun add(l1:List<String>, entrada:String):List<String>{
    return listOf(entrada).plus(l1)
}
fun main() {
    val l1 = listOf("")
}