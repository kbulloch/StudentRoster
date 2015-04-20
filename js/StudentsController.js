studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
    $scope.students = [
        { name: "Smicky McCoodle" },
        { name: "Ted Nugent "},
        { name: "Francis Bacon" },
        { name: "Hans Olo" },
        { name: "Sharon Peters" },
        { name: "Sharon Needles" },
        { name: "Larry Kryzinsky" },
        { name: "Greg Alohia "},
        { name: "Tim Tilliwink"},
        { name: "Woodsley Hardington"}
    ];
    $scope.addStudent = function() {
        $scope.students.push({ name: $scope.studentName });
        $scope.studentName = null;
    };
    $scope.deleteStudent = function(student) {
        var index = $scope.students.indexOf(student);
        $scope.students.splice(index, 1);
    };
});
