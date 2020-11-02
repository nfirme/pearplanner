function parseCourseList(data) {
    var ul = document.getElementById("courseList")
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(obj.course_code));
        ul.appendChild(li);
    }
}

function init() {
  var btn = document.getElementById("courseButton");
  btn.addEventListener("click", function() {
    parseCourseList(nickObject);
  });
}

init();
