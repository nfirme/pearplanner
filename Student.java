import java.io.NotActiveException;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;

public class Student {
    private static int ID = 1234;

    private int studentID;
    private String name;
    private ArrayList<Course> courses = new ArrayList<>();

    public Student(String name) {
        ID++;
        this.studentID = ID;
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public int getStudentID() {
        return this.studentID;
    }

    public boolean addCourse(Course course) {
        if (!(courses.contains(course))) {
            courses.add(course);
            return true;
        }
        else {
            return false;
        }
    }

    public boolean removeCourse(Course course) {
        if (courses.contains(course)) {
            courses.remove(course);
            return true;
        }
        else {
            return false;
        }
    }

    public Assignment shouldWorkOn() throws NotActiveException{
        ArrayList<Assignment> highAssignments = new ArrayList<>();
        ArrayList<Assignment> midAssignments = new ArrayList<>();
        ArrayList<Assignment> lowAssignments = new ArrayList<>();
        for (Course c : this.courses) {
            for (Assignment a : c.getAssignments()) {
                if (!(a.isComplete(this))) {
                    String prior = a.getPriority(this);
                    if (prior.equals("high")) {
                        highAssignments.add(a);
                    }
                    else if (prior.equals("mid")) {
                        midAssignments.add(a);
                    }
                    else {
                        lowAssignments.add(a);
                    }
                }
            }
        }
        if (highAssignments.isEmpty()) {
            highAssignments = midAssignments;
        }
        if (highAssignments.isEmpty()) {
            highAssignments = lowAssignments;
        }
        if (highAssignments.isEmpty()) {
            //TODO: noAssignmentException();
            throw new NotActiveException();
        }
        double maxRatio = 0.0;
        int maxIndex = 0;
        LocalDateTime nowish = LocalDateTime.now();
        for (int i = 0; i < highAssignments.size(); i++) {
            Assignment a = highAssignments.get(i);
            double durToDue = a.getDuration(this) / nowish.until(a.getDue(), ChronoUnit.HOURS);
            if (durToDue > maxRatio) {
                maxRatio = durToDue;
                maxIndex = i;
            }
        }
        return highAssignments.get(maxIndex);
    }

}
