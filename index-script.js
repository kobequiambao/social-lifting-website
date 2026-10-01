const addButtons = document.querySelectorAll(".add-button");
const workoutName = document.querySelector('[name="workout-name"]');
const description = document.querySelector('[name="workout-description"]');
const saveButton = document.querySelector("#save-button");

addButtons.forEach((button) => {
    button.addEventListener("click", addExercise);
});

saveButton.addEventListener("click", validateWorkout);

function addExercise(event) {
    const selectedExercise = event.target.previousElementSibling;
    const chosenExerciseList = document.createElement("li");
    const chosenExerciseName = document.createElement("span");
    const removeButton = document.createElement("button");
    const chosenExContainer = document.querySelector("#chosen-exercise-list");

    chosenExerciseName.textContent = selectedExercise.textContent;
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    
    chosenExContainer.append(chosenExerciseList);
    chosenExerciseList.append(chosenExerciseName);
    chosenExerciseList.append(removeButton);

    removeButton.addEventListener("click", removeExercise);
}

function removeExercise(event) {
    event.target.parentElement.remove();
}

function validateWorkout() {
    const chosenExerciseCount = document.querySelectorAll("#chosen-exercise-list li");
    const chosenExercises = document.querySelectorAll("#chosen-exercise-list li span");
    const exercises = [];

    if (workoutName.value.trim().length === 0) {
        return alert("Please enter a workout name!");
    } 
    
    if (chosenExerciseCount.length === 0) {
        return alert("Minimum of 1 exercise!");
    }

    chosenExercises.forEach((exercise) => {exercises.push(exercise.textContent);});

    const workout = {
        name: workoutName.value.trim(),
        description: description.value,
        exercises
    }
}