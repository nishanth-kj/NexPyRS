# Build stage
FROM eclipse-temurin:25-jdk-alpine AS build
WORKDIR /app
COPY api_spring/gradlew .
COPY api_spring/gradle gradle
COPY api_spring/build.gradle .
COPY api_spring/settings.gradle .
COPY api_spring/src src
RUN chmod +x gradlew
RUN ./gradlew build -x test

# Run stage
FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
