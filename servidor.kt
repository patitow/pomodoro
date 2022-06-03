import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.features.*
import io.ktor.html.*
import io.ktor.request.*

fun main() {

   println("iniciando servidor...")

   embeddedServer(Netty, port = 3000) {
      routing {
         route("/helloworld", HttpMethod.Get) {
            handle {
               call.respondText("Hello World")
            }
         }

         // Rota generica
         route("/*", HttpMethod.Get) {
            handle {
               call.respondText("Error 404")
            }
         } 

         // Rota principal
         route("/", HttpMethod.Get) {
            files("project/")
            default("project/main.html")
         }
      }
   }.start(wait=true)
}
