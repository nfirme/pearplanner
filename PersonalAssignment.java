public class PersonalAssignment {
    private Student student;
    private double duration;
    private String priority;
    private boolean complete;

    public PersonalAssignment(Student student, double duration, String priority) {
        this.student = student;
        this.duration = duration;
        this.priority = priority;
        this.complete = false;
    }

    public Student getStudent() {
        return student;
    }

    public double getDuration() {
        return duration;
    }

    public String getPriority() {
        return priority;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public boolean complete() {
        if (!(this.complete)) {
            return (this.complete = true);
        }
        else {
            return false;
        }
    }

    public boolean isComplete() {
        return this.complete;
    }
}
