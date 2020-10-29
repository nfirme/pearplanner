import java.time.LocalDateTime;
import java.util.ArrayList;

public class Course {
    private static int ID = 1234;

    private int courseID;
    private String name;
    private Term term;
    private ArrayList<Student> enrolled;
    private ArrayList<Assignment> assignments = new ArrayList<>();

    public Course(Term term, String name) {
        ID++;
        this.courseID = ID;
        this.name = name;
        this.term = term;
        this.enrolled = new ArrayList<>();
    }

    public int getCourseID() {
        return courseID;
    }

    public String getName() {
        return this.name;
    }

    public Term getTerm() {
        return term;
    }

    public ArrayList<Student> getEnrolled() {
        return enrolled;
    }

    public ArrayList<Assignment> getAssignments() {
        return assignments;
    }

    public boolean enroll(Student toEnroll) {
        if (!(this.enrolled.contains(toEnroll)) && toEnroll.addCourse(this)) {
            this.enrolled.add(toEnroll);
            for (Assignment a : this.assignments) a.assign(toEnroll);
            return true;
        }
        else {
            return false;
        }
    }

    public boolean unenroll(Student toUnenroll) {
        if (this.enrolled.contains(toUnenroll) && toUnenroll.removeCourse(this)) {
            this.enrolled.remove(toUnenroll);
            for (Assignment a : this.assignments) if (!(a.unassign(toUnenroll))) return false; //TODO: Create Exception
            return true;
        }
        else {
            return false;
        }
    }

    public Assignment createAssignment(String name, LocalDateTime due) {
        Assignment newest = new Assignment(this, name, due);
        assignments.add(newest);
        return newest;
    }

    public boolean removeAssignment(Assignment a) {
        if (this.assignments.contains(a)) {
            return this.assignments.remove(a);
        }
        else {
            return false;
        }
    }

    //TODO
    public boolean addDoc() {
        return true;
    }

    public boolean removeDoc() {
        return true;
    }
}
