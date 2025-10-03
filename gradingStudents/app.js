function gradingStudents(grades) {
    const finalGrades = [];

    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];

        if (grade < 38) {
            finalGrades.push(grade);
        } else {
           
            const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
            const difference = nextMultipleOf5 - grade;

            if (difference < 3) {
                finalGrades.push(nextMultipleOf5);
            } else {
            
                finalGrades.push(grade);
            }
        }
    }
    return finalGrades;
}