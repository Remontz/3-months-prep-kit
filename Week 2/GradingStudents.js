// HackerLand University has the following grading policy:
{/* 
    - Every student receives a grade in the inclusive range from 0 to 100.
    - Any grade less than 40 is a failing grade.
    */}

// Sam is a professor at the university and likes to round each student's grade according to these rules:
{/* 
    - If the difference between the grade and the next multiple of 5 is less than 3 round grade up to the next multiple of 5.
    - If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
    */}
// Example: 84 >>> 85 || 29 === 29 || 57 === 57

const samGrading = (grade) => {
    if (grade >= 38) {
        let roundedGrade = grade
        let gradeDiff = 0
        while (roundedGrade % 5 !== 0) {
            roundedGrade = roundedGrade + 1
            gradeDiff = gradeDiff + 1
        }
        if (gradeDiff < 3) {
            return roundedGrade
        }
        else { return grade }
    }
    else { return grade }
}
const gradingStudents = (grades) => {
    let gradesNew = []
    for (let i = 0; i < grades.length; i++) {
        gradesNew.push(samGrading(grades[i]))
    }

    return gradesNew
}

console.log(gradingStudents([29, 57, 84, 40, 99]))