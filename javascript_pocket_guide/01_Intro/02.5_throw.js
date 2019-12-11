function argumentRequired(arg) {
    if (arg == null) {
        throw new Error("arg cannot be null or undefined.");
    }
}
argumentRequired(); // Whoops, no argument given


