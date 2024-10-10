function taskCalendar() {
    day = prompt("Enter a day of the week:");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Do your dishes.");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: Prepare for your presentation tomorrow.");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: Take your dog for a walk.");
            break;
        case "Thursday":
            alert("Your task for Thursday is: Water your plants.");
            break;
        case "Friday":
            alert("Your task for Friday is: Practice playing piano.");
            break;
        case "Saturday":
            alert("Your task for Saturday is: Go buy groceries.")
            break;
        case "Sunday":
            alert("Your task for Sunday is: Go to church.")
            break;
        default:
            alert("You did not enter a day of the week. Try again.")
            break;
    }
}