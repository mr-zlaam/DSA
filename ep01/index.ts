const students = ["siraj", "khan", "zlaam", "husnain"];
function returnStudents(students: string[], studentName: string) {
  const foundStudent = students.find((students) =>
    students.includes(studentName)
  );
  return foundStudent ? foundStudent : "No result found";
}

console.log(returnStudents(students, "khan"));
