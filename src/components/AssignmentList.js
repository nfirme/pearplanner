import React, {useState} from 'react'
import Assignment from './Assignment'

const toDoList = [
  {
    "id": 1,
    "task": "Sprint 3 Presentation",
    "courseCode": "CSC 308",
    "complete": true,
    "color": "red"
  }, {
    "id": 2,
    "task": "Essay",
    "courseCode": "ENG 300",
    "complete": true,
    "color": "teal"
  }, {
    "id": 3,
    "task": "Derivative Quiz",
    "courseCode": "MATH 142",
    "complete": false,
    "color": "green"
  }, {
    "id": 4,
    "task": "Group Assignment",
    "courseCode": "PSY 350",
    "complete": false,
    "color": "purple"
  }, {
    "id": 5,
    "task": "Supply & Demand HW",
    "courseCode": "ECON 101",
    "complete": false,
    "color": "orange"
  }
];

function AssignmentList() {

    const [list, setList] = useState(toDoList);

    function handleChange(childId) {
      const newList = [...list];
      const index = list.findIndex(x => x.id === childId);
      newList[index].complete = !(list[index].complete);
      setList(newList);
    }

    return (
      <div>
        <h1>Assignments</h1>
        <div className="assignment-section">
          {list.filter(x => !x.complete).map(todo =>
            <Assignment 
              task={todo.task}
              complete={todo.complete}
              courseCode={todo.courseCode}
              key={todo.id}
              id={todo.id}
              onChange={handleChange}
              courseColor={todo.color}
            />
          )}
        </div>

        <h1>Completed</h1>
        {list.filter(x => x.complete).map(todo =>
          <Assignment 
            task={todo.task}
            complete={todo.complete}
            courseCode={todo.courseCode}
            key={todo.id}
            id={todo.id}
            onChange={handleChange}
            courseColor={todo.color}
          />
        )}
      </div>
    )
}

export default AssignmentList;