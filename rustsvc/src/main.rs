use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct HealthResponse {
    service: String,
    status: String,
}

#[get("/rust/health")]
async fn health() -> impl Responder {
    HttpResponse::Ok().json(HealthResponse {
        service: "rustsvc".to_string(),
        status: "ok".to_string(),
    })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().service(health)
    })
    .bind(("0.0.0.0", 8001))?
    .run()
    .await
}
