function creatHelloWorld() {
    const greeting = "Hello World"

    return function() {
        return greeting;
    }
}

