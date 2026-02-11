/**
 * 📝 School Report Card Generator
 *
 * Sharma ji ke bete ka report card generate karna hai! Student ka naam aur
 * subjects ke marks milenge, tujhe pura analysis karke report card banana hai.
 *
 * Rules:
 *   - student object: { name: "Rahul", marks: { maths: 85, science: 92, ... } }
 *   - Calculate using Object.values() and array methods:
 *     - totalMarks: sum of all marks (use reduce)
 *     - percentage: (totalMarks / (numSubjects * 100)) * 100,
 *       rounded to 2 decimal places using parseFloat(val.toFixed(2))
 *     - grade based on percentage:
 *       "A+" (>= 90), "A" (>= 80), "B" (>= 70), "C" (>= 60), "D" (>= 40), "F" (< 40)
 *     - highestSubject: subject name with highest marks (use Object.entries)
 *     - lowestSubject: subject name with lowest marks
 *     - passedSubjects: array of subject names where marks >= 40 (use filter)
 *     - failedSubjects: array of subject names where marks < 40
 *     - subjectCount: total number of subjects (Object.keys().length)
 *   - Hint: Use Object.keys(), Object.values(), Object.entries(),
 *     reduce(), filter(), map(), Math.max(), Math.min(), toFixed()
 *
 * Validation:
 *   - Agar student object nahi hai ya null hai, return null
 *   - Agar student.name string nahi hai ya empty hai, return null
 *   - Agar student.marks object nahi hai ya empty hai (no keys), return null
 *   - Agar koi mark valid number nahi hai (not between 0 and 100 inclusive),
 *     return null
 *
 * @param {{ name: string, marks: Object<string, number> }} student
 * @returns {{ name: string, totalMarks: number, percentage: number, grade: string, highestSubject: string, lowestSubject: string, passedSubjects: string[], failedSubjects: string[], subjectCount: number } | null}
 *
 * @example
 *   generateReportCard({ name: "Rahul", marks: { maths: 85, science: 92, english: 78 } })
 *   // => { name: "Rahul", totalMarks: 255, percentage: 85, grade: "A",
 *   //      highestSubject: "science", lowestSubject: "english",
 *   //      passedSubjects: ["maths", "science", "english"], failedSubjects: [],
 *   //      subjectCount: 3 }
 *
 *   generateReportCard({ name: "Priya", marks: { maths: 35, science: 28 } })
 *   // => { name: "Priya", totalMarks: 63, percentage: 31.5, grade: "F", ... }
 */
export function generateReportCard(student) {
	if (typeof student !== "object" || student === null) return null;
	const { name, marks } = student;
	if (typeof name !== "string" || name.trim() === "") return null;
	if (typeof marks !== "object" || marks === null || Object.keys(marks).length === 0)
		return null;

	const markValues = Object.values(marks);
	if (markValues.some((m) => typeof m !== "number" || m < 0 || m > 100)) return null;

	const totalMarks = markValues.reduce((a, m) => a + m, 0);
	const subjectCount = Object.keys(marks).length;
	const percentage = parseFloat(((totalMarks / (subjectCount * 100)) * 100).toFixed(2));

	let grade;
	if (percentage >= 90) grade = "A+";
	else if (percentage >= 80) grade = "A";
	else if (percentage >= 70) grade = "B";
	else if (percentage >= 60) grade = "C";
	else if (percentage >= 40) grade = "D";
	else grade = "F";

	const entries = Object.entries(marks);
	const highestSubject = entries.reduce((max, [subj, mark]) => {
	    if (mark > max.mark) return { subj, mark };
	    return max;
		}, { subj: null, mark: -1 }).subj;
	
	const lowestSubject = entries.reduce((min, [subj, mark]) => {
	    if (mark < min.mark) return { subj, mark };
	    return min;
		}, { subj: null, mark: 101 }).subj;

	const passedSubjects = entries.filter(([_, mark]) => mark >= 40).map(([subj]) => subj);
	const failedSubjects = entries.filter(([_, mark]) => mark < 40).map(([subj]) => subj);

	return {
		name,
		totalMarks,
		percentage,
		grade,
		highestSubject,
		lowestSubject,
		passedSubjects,
		failedSubjects,
		subjectCount,
	};
}
