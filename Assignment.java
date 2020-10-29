import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.InputMismatchException;

public class Assignment {
    private static int ID = 1234;
    private static final double DEFAULT_DURATION = 1.0;
    private static final String DEFAULT_PRIORITY = "mid";

    private int assignmentID;
    private String name;
    private Course course;
    private Student student;
    private LocalDateTime due;
    private ArrayList<PersonalAssignment> forStudents = new ArrayList<>();
    private boolean complete = false;

    public Assignment(Course course, String name, LocalDateTime due) {
        ID++;
        this.assignmentID = ID;
        this.course = course;
        this.name = name;
        this.due = due;
        for (Student s : course.getEnrolled()) forStudents.add(new PersonalAssignment(s, DEFAULT_DURATION, DEFAULT_PRIORITY));
    }

    public int getAssignmentID() {
        return this.assignmentID;
    }

    public String getName() {
        return name;
    }

    public Course getCourse() {
        return course;
    }

    public LocalDateTime getDue() {
        return due;
    }

    public String getPriority(Student s) {
        for (PersonalAssignment pa : forStudents) if (pa.getStudent().equals(s)) return pa.getPriority();
        //TODO: studentNotFoundException
        throw new InputMismatchException();
    }

    public double getDuration(Student s) {
        for (PersonalAssignment pa : forStudents) if (pa.getStudent().equals(s)) return pa.getDuration();
        //TODO: studentNotFoundException
        throw new InputMismatchException();
    }

    public boolean setDuration(Student s, double duration) {
        if (duration == 0.25 || duration == 0.5 ||  duration == 0.75 ||   duration == 1.5 || duration % 1 == 0) {
            for (PersonalAssignment pa : forStudents) if (pa.getStudent().equals(s)) {
                pa.setDuration(duration);
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    }

    public boolean setPriority(Student s, String priority) {
        if (priority.equals("high") || priority.equals("mid") || priority.equals("low")) {
            for (PersonalAssignment pa : forStudents) if (pa.getStudent().equals(s)) {
                pa.setPriority(priority);
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    }

    public boolean complete(Student s) {
        for (PersonalAssignment pa : forStudents) if (pa.getStudent().equals(s)) return pa.complete();
        //TODO: studentNotFoundException
        throw new InputMismatchException();
    }

    public boolean isComplete(Student s) {
        for (PersonalAssignment pa : forStudents) if (pa.getStudent().equals(s)) return pa.isComplete();
        //TODO: studentNotFoundException
        throw new InputMismatchException();
    }

    public boolean assign(Student s) {
        for (PersonalAssignment pa : this.forStudents) if (pa.getStudent().equals(s)) return false;
        forStudents.add(new PersonalAssignment(s, DEFAULT_DURATION, DEFAULT_PRIORITY));
        return true;
    }

    public boolean unassign(Student s) {
        for (PersonalAssignment pa : this.forStudents) if (pa.getStudent().equals(s)) {
            this.forStudents.remove(pa);
            return true;
        }
        return false;
    }
}
