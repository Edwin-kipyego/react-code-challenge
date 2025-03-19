function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Out of bounds exception (1-7)");
    }
}

// case scenario
getDayOfWeek(4); // Output: Wednesday
getDayOfWeek(9); // Output: Out of bounds exception (1-7)

// ternary operator
function getDayOfWeek(dayNumber) {
    const day = dayNumber === 1 ? "Sunday" :
                dayNumber === 2 ? "Monday" :
                dayNumber === 3 ? "Tuesday" :
                dayNumber === 4 ? "Wednesday" :
                dayNumber === 5 ? "Thursday" :
                dayNumber === 6 ? "Friday" :
                dayNumber === 7 ? "Saturday" :
                "Out of bounds exception (1-7)";
    console.log(day);
}

// case scenario
getDayOfWeek(4); // Output: Wednesday
getDayOfWeek(9); // Output: Out of bounds exception (1-7)