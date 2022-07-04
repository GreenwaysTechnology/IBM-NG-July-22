//enumeration

enum Direction {
    Up = 1, //0
    Down, //1
    Left, // 2
    Right, //3
}

console.log(Direction.Up)

enum UserResponse {
    No = 0,
    Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
    console.log(recipient, message)
}

respond("Princess Caroline", UserResponse.No);