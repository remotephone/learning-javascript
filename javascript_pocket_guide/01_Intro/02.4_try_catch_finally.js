try {
    // Declaring a variable without an identifier
    // throws an error, but it also terminates the
    // script before it can run. Instead, I am running
    // a non-existant function
    notrealfunction();
} catch (exception) {
    // The exception object has a message
    // that describes the error
    console.log("here1")
    console.log(exception);
    console.log("here2")
} finally {
    // This code always runs regardless of
    // whether an error occurred
    console.log("Always executes");
}