#include "raylib.h"

int main(void)
{
    InitWindow(800, 450, "NexPyRS - C Raylib Desktop Client");

    while (!WindowShouldClose())
    {
        BeginDrawing();
            ClearBackground(RAYWHITE);
            DrawText("Congrats! You created your first window with Raylib!", 100, 200, 20, LIGHTGRAY);
        EndDrawing();
    }

    CloseWindow();
    return 0;
}
