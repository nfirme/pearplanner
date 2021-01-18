import React, {useState} from 'react'
import Assignment from './Assignment'

const toDoList = [
  {
    "id": 1,
    "task": "Sprint 3 Presentation",
    "courseCode": "CSC 308",
    "complete": true
  }, {
    "id": 2,
    "task": "Essay",
    "courseCode": "ENG 300",
    "complete": true
  }, {
    "id": 3,
    "task": "Derivative Quiz",
    "courseCode": "MATH 142",
    "complete": false
  }, {
    "id": 4,
    "task": "Group Assignment",
    "courseCode": "PSY 350",
    "complete": false
  }, {
    "id": 5,
    "task": "Supply & Demand HW",
    "courseCode": "ECON 101",
    "complete": false
  }
];

function AssignmentList() {

    const [list, setList] = useState(toDoList);

    return (
        <div>
          <h1>Assignments</h1>
          {list.filter(x => !x.complete).map(todo =>
            <Assignment 
              task={todo.task}
              courseCode={todo.courseCode}
              complete={todo.complete}
            />
          )}
          <h1>Completed</h1>
          {list.filter(x => x.complete).map(todo =>
            <Assignment 
              courseColor="yellow"
              task={todo.task}
              complete={todo.complete}
              courseCode={todo.courseCode}
            />
          )}
        </div>
    )
}

export default AssignmentList;