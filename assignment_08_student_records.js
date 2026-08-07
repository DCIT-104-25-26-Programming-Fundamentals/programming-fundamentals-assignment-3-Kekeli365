// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// Console-Based Student Management System

let students = [];

// Add a new student
function addStudent() {
    let name = prompt("Enter student's full name:");
    let id = Number(prompt("Enter student ID:"));
    let scores = prompt("Enter scores separated by commas:")
        .split(",")
        .map(Number);

    students.push({
        name: name,
        id: id,
        scores: scores
    });

    console.log("Student added successfully!");
}

// View all students
function viewStudents() {
    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    console.log("\nStudent Records");
    students.forEach(student => {
        console.log("----------------------------");
        console.log("Name: " + student.name);
        console.log("ID: " + student.id);
        console.log("Scores: " + student.scores.join(", "));
    });
}

// Calculate average score
function calculateAverage(scores) {
    let sum = 0;

    for (let score of scores) {
        sum += score;
    }

    return (sum / scores.length).toFixed(2);
}

// View student averages
function viewAverages() {
    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    console.log("\nStudent Averages");
    students.forEach(student => {
        console.log(
            student.name +
            " (ID: " + student.id + ")" +
            " - Average: " +
            calculateAverage(student.scores)
        );
    });
}

// Search student by ID
function searchStudent() {
    let id = Number(prompt("Enter student ID to search:"));

    let student = students.find(s => s.id === id);

    if (student) {
        console.log("\nStudent Found");
        console.log("Name: " + student.name);
        console.log("ID: " + student.id);
        console.log("Scores: " + student.scores.join(", "));
        console.log("Average: " + calculateAverage(student.scores));
    } else {
        console.log("Student not found.");
    }
}

// Display menu
function showMenu() {
    console.log("\n===== STUDENT MANAGEMENT SYSTEM =====");
    console.log("1. Add Student");
    console.log("2. View All Students");
    console.log("3. View Student Averages");
    console.log("4. Search Student by ID");
    console.log("5. Exit");
}

// Main Program
let choice;

do {
    showMenu();
    choice = Number(prompt("Enter your choice:"));

    switch (choice) {
        case 1:
            addStudent();
            break;

        case 2:
            viewStudents();
            break;

        case 3:
            viewAverages();
            break;

        case 4:
            searchStudent();
            break;

        case 5:
            console.log("Exiting program...");
            break;

        default:
            console.log("Invalid choice. Try again.");
    }

} while (choice !== 5);
// =============================================================================


