use actix_web::{get, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello from Actix Web!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Starting Actix Web server on 0.0.0.0:8080");
    HttpServer::new(|| {
        App::new().service(hello)
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
