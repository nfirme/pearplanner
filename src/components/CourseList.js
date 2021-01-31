import React from 'react'
import CourseCard from './CourseCard'
import LoadingGif from './LoadingGif'

const courseColors = ["red", "orange", "yellow", "blue", "purple"]

class CourseList extends React.Component {
    state = {
        courseList: <LoadingGif />,
    }

    componentDidMount() {
        this.callAPI();
        this.forceUpdate();
    }

    callAPI = async() => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses.json?access_token=15279~bUAbbgLyyiQapBK61lP8Lhz8RpoSgRLx2QajYKb8xtt44BsvONMsXxRmljb8Ds6Q'
        try {
            let response = await fetch(proxyUrl + targetUrl)
            if (response.ok) {
                var n = []
                var colorIterator = 0
                var currentTerm = 0
                var col = ""
                var json = await response.json()
                console.log(json)
                for (var i = 0; i < json.length; i++) {
                    if (json[i].enrollment_term_id > currentTerm) {
                        currentTerm = json[i].enrollment_term_id
                    }
                    n = json[i].name.split("-")
                    json[i].courseName = n[n.length - 1]
                    n = json[i].name.split(/[\s-]/)
                    json[i].courseTitle = n.slice(0, 2).join(" ")

                }
                const res = json.map((c) => {
                    if (c.enrollment_term_id == currentTerm) {
                        col = courseColors[colorIterator % courseColors.length]
                        colorIterator++
                        return <CourseCard 
                        key={c.id}
                        courseCode={c.courseName} 
                        courseTitle={c.courseTitle}
                        courseColor={col}
                        />
                    }
                });
                this.setState({courseList: res});
            }
            else {
                console.log("ERROR IN RETRIEVING API DATA");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    render () {
        return (
            <div className="CourseList">
            <h2>My Classes</h2>
            {this.state.courseList}
            </div>
        )
    };
}

export default CourseList;
