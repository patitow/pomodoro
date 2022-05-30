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
}
