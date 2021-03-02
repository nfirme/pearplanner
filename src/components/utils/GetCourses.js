// REturns an array of course objects

async function getCourses(token) {

    const proxyUrl = 'https://cors.bridged.cc/'
    const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses.json?access_token='
    const courseColors = ["red", "orange", "yellow", "blue", "purple"]

    try {
        let response = await fetch(proxyUrl + targetUrl + token)
        if (response.ok) {
            var n = []
            var colorIterator = 0
            var currentTerm = 0
            var col = ""
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

            const currentClasses = json.filter((c) => c.enrollment_term_id == currentTerm);

            return  currentClasses.map((c) => {
                col = courseColors[colorIterator % courseColors.length]
                colorIterator++
                return ({
                    courseTitle: c.courseTitle,
                    courseName: c.courseName,
                    color: col
                })
            });
        }
        else {
            console.log("ERROR IN RETRIEVING API DATA");
        }
    }
    catch (err) {
        console.log(err);
    }
}

export default getCourses;