#include <drogon/drogon.h>

int main() {
    drogon::app().addListener("0.0.0.0", 8080);
    drogon::app().registerHandler("/",
        [](const drogon::HttpRequestPtr& req, std::function<void (const drogon::HttpResponsePtr &)> &&callback) {
            auto resp = drogon::HttpResponse::newHttpResponse();
            resp->setBody("Hello from Drogon C++!");
            callback(resp);
        });
    drogon::app().run();
    return 0;
}
