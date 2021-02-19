import React from 'react'
import Assignment from './Assignment'
import './AssignmentList.css'
/*import LoadingGif from './LoadingGif';*/

const courseColors = ["red", "orange", "yellow", "blue", "purple"]

class AssignmentList extends React.Component {

  state = {
    assignmentList: [],
  }

  componentDidMount() {
      this.callAPICourses();
      this.forceUpdate();
  }

  stringToDate = (due) => {
      if (due == "") {
        return new Date(3000, 0, 0, 0, 0, 0)
      }
      due = due.split("-")
      var temp = due[2]
      due[2] = temp.split("T")[0]
      temp = temp.split("T")[1]
      due[3] = temp.split(":")[0]
      due[4] = temp.split(":")[1]
      due[5] = temp.split(":")[2]
      for (var i = 0; i < 6; i++) {
          due[i] = parseInt(due[i])
      }
      return new Date(due[0], due[1] - 1, due[2], due[3], due[4], due[5])
  }
    
  callAPIAssignments = async(course) => {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses/'
      try {
          let response = await fetch(proxyUrl + targetUrl + course.id + '/assignments/?access_token=' + '15279~bUAbbgLyyiQapBK61lP8Lhz8RpoSgRLx2QajYKb8xtt44BsvONMsXxRmljb8Ds6Q')
          if (response.ok) {
              var json = await response.json();
              for (var i = 0; i < json.length; i++) {
                json[i]["due_at"] = this.stringToDate(json[i]["due_at"])
                json[i]["course_id"] = course["courseTitle"]
                json[i]["color"] = course["color"]
              }
              console.log("One course")
              return json
          }
          else {
              console.log(response);
              return []
          }
      }
      catch (err) {
          console.log(err);
          return []
      }
  }
    
  callAPICourses = async() => {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses.json?access_token=' + '15279~bUAbbgLyyiQapBK61lP8Lhz8RpoSgRLx2QajYKb8xtt44BsvONMsXxRmljb8Ds6Q'
      try {
          let response = await fetch(proxyUrl + targetUrl)
          if (response.ok) {
              var n = []
              var colorIterator = 0
              var currentTerm = 0
              var res = []
              var json = await response.json()
              for (var i = 0; i < json.length; i++) {
                if (json[i].enrollment_term_id > currentTerm) {
                    currentTerm = json[i].enrollment_term_id
                }
                n = json[i].name.split("-")
                json[i].courseName = n[n.length - 1]
                n = json[i].name.split(/[\s-]/)
                json[i].courseTitle = n.slice(0, 2).join(" ")
              }
              for (i = 0; i < json.length; i++) { //json.length
                if (json[i].enrollment_term_id == currentTerm) {
                  json[i].color = courseColors[colorIterator]
                  var temp = await this.callAPIAssignments(json[i])
                  console.log("temp")
                  console.log(temp)
                  colorIterator++
                  for (var j = 0; j < temp.length; j++) {
                    res.push(temp[j])
                  }
                }
              }
              res.sort(function(a, b){return Number(a.due_at) - Number(b.due_at)});
              const fin = res.map((c) => {
                return <Assignment 
                assignmentName={c.name}
                courseName={c.course_id}
                courseColor={c.color}
                key={c.id}
                id={c.id}
                onChange={this.handleChange}
                complete={false}
                />
              });
              this.setState({assignmentList: fin});
          }
          else {
              console.log("ERROR IN RETRIEVING API DATA");
          }
      }
      catch (err) {
          console.log(err);
      }
  }

  AnyIncomplete() {
    var anyIncomplete = false
    if (this.state.assignmentList.length == 0) {
      return <div></div>
    }
    this.state.assignmentList.forEach(a => {
      anyIncomplete = anyIncomplete || !a.complete
    })
    if (anyIncomplete) {
      return <h2>Assignments</h2>
    }
    return <div></div>
  }
    
  AnyCompleted() {
    var anyCompleted = false
    if (this.state.assignmentList.length == 0) {
      return <div></div>
    }
    this.state.assignmentList.forEach(a => {
      anyCompleted = anyCompleted || a.complete
    })
    if (anyCompleted) {
      return <h2>Completed</h2>
    }
    return <div></div>
  }

  handleChange(childId) {
    if (childId != null) {
      console.log(this)
      this.complete = !(this.complete)
      /*this.setState((state) => {
        var list = state.assignmentList
        const index = list.findIndex(x => x.id === childId);
        list[index].complete = !(list[index].complete)
        return {assignmentList: list}});*/
    }
  }

  render() {

      return (
        <div className="AssignmentList">
          {this.AnyIncomplete()}
          <div className="assignment-section">
            {this.state.assignmentList.filter(x => !x.complete)}
            {/*.map(todo =>
              <Assignment 
                assignmentName={todo.task}
                complete={todo.complete}
                courseName={todo.courseCode}
                key={todo.id}
                id={todo.id}
                onChange={handleChange}
                courseColor={todo.color}
              />
            )}*/}
          </div>

          {this.AnyCompleted()}
          {this.state.assignmentList.filter(x => x.complete)}
        </div>
      )
  }
}

export default AssignmentList;