cmake_minimum_required(VERSION 3.14)
project(desktop_c C)

set(CMAKE_C_STANDARD 99)

# Using FetchContent to automatically grab Raylib
include(FetchContent)
FetchContent_Declare(
    raylib
    GIT_REPOSITORY https://github.com/raysan5/raylib.git
    GIT_TAG master
)
FetchContent_MakeAvailable(raylib)

add_executable(desktop_c src/main.c)
target_link_libraries(desktop_c PRIVATE raylib)
