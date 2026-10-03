const addButtons = document.querySelectorAll(".add-button");
const workoutName = document.querySelector('[name="workout-name"]');
const description = document.querySelector('[name="workout-description"]');
const saveButton = document.querySelector("#save-button");

addButtons.forEach((button) => {
    button.addEventListener("click", addExercise);
});

saveButton.addEventListener("click", validateWorkout);

/** Adds the exercise to chosen exercise container */
function addExercise(event) {
    const selectedExercise = event.target.previousElementSibling;
    const chosenExerciseList = document.createElement("li");
    const chosenExerciseName = document.createElement("span");
    const removeButton = document.createElement("button");
    const chosenExContainer = document.querySelector("#chosen-exercise-list");
    const targetSets = createNumberInput("sets", "Sets", 1, 20);
    const targetReps = createNumberInput("reps", "Reps", 1, 100);

    chosenExerciseName.textContent = selectedExercise.textContent;
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    
    chosenExContainer.append(chosenExerciseList);
    chosenExerciseList.append(
        chosenExerciseName,
        targetSets,
        targetReps,
        removeButton
    );

    removeButton.addEventListener("click", removeExercise);
}

/** Function for creating a sets and reps input with the needed attributes **/
function createNumberInput(name, placeholder, min, max) {
    return Object.assign(document.createElement("input"), {
        type: "number",
        name,
        placeholder,
        min,
        max
    })
}

/** Removes the exercise added (done through removing the button's parent) */
function removeExercise(event) {
    event.target.parentElement.remove();
}

/** Validates if a workout has a name and a minimum of 1 exercise, saves the workout */
function validateWorkout() {
    const chosenExerciseCount = document.querySelectorAll("#chosen-exercise-list li");
    const chosenExercises = document.querySelectorAll("#chosen-exercise-list li span");
    const chosenSets = document.querySelectorAll('input[name="sets"]');
    const chosenReps = document.querySelectorAll('input[name="reps"]');
    const exercises = [];

    if (workoutName.value.trim().length === 0) {
        return alert("Please enter a workout name!");
    } 
    
    if (chosenExerciseCount.length === 0) {
        return alert("Minimum of 1 exercise!");
    }

    for (const set of chosenSets) {
    if (set.value !== "" && !set.checkValidity()) {
        return alert("Sets must be a whole number between 1 and 20.");
    }
    }

    for (const rep of chosenReps) {
        if (rep.value !== "" && !rep.checkValidity()) {
            return alert("Reps must be a whole number between 1 and 100.");
        }
    }

    chosenExercises.forEach((exercise) => {exercises.push(exercise.textContent);});

    const workout = {
        name: workoutName.value.trim(),
        description: description.value,
        exercises
        
    }

    console.log(workout);
}