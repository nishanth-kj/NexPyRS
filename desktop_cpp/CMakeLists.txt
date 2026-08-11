cmake_minimum_required(VERSION 3.10)
project(desktop_cpp CXX)

set(CMAKE_CXX_STANDARD 17)

# Example setup for Qt6
# find_package(Qt6 COMPONENTS Widgets REQUIRED)

add_executable(desktop_cpp src/main.cpp)
# target_link_libraries(desktop_cpp PRIVATE Qt6::Widgets)
