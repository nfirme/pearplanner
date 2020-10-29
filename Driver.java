import java.io.NotActiveException;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class Driver{
    public static void main(String[] args) throws NotActiveException {
        Term fall2020 = new Term("Fall 2020", LocalDateTime.now().plusMonths(-1), LocalDateTime.now().plusMonths(2));
        Term winter2020 = new Term("Winter 2020", LocalDateTime.now().plusMonths(2), LocalDateTime.now().plusMonths(5));

        Course CSC308 = new Course(fall2020, "CSC-308 Software Engineering I");
        Course PHIL231 = new Course(fall2020, "PHIL-231 Philosophy of Politics");
        Course CSC309 = new Course(winter2020, "CSC-308 Software Engineering II");

        Student LeeC = new Student("Lee Conway");
        Student LucasG = new Student("Lucas Greenelsh");
        Student NickF = new Student("Nick Firme");
        Student DesiR = new Student("Desi Ramirez");

        CSC308.enroll(LeeC);
        CSC308.enroll(LucasG);
        CSC308.enroll(NickF);
        CSC308.enroll(DesiR);

        CSC309.enroll(LeeC);
        CSC309.enroll(LucasG);
        CSC309.enroll(NickF);
        CSC309.enroll(DesiR);

        PHIL231.enroll(LeeC);

        Assignment UDes = CSC308.createAssignment("UML Design", LocalDateTime.now().plusDays(1));
        Assignment UPic = CSC308.createAssignment("UML Picture", LocalDateTime.now().plusDays(2));
        Assignment UPres = CSC308.createAssignment("UML Presentation", LocalDateTime.now().plusDays(4));

        Assignment UDes2 = CSC309.createAssignment( "UML Design 2.0", LocalDateTime.now().plusDays(73));
        Assignment UPic2 = CSC309.createAssignment("UML Picture 2.0", LocalDateTime.now().plusDays(74));
        Assignment UPres2 = CSC309.createAssignment("UML Presentation 2.0", LocalDateTime.now().plusDays(76));

        Assignment ToLife = PHIL231.createAssignment("Thoughts on Life", LocalDateTime.now().plusDays(1));
        Assignment ToSociety = PHIL231.createAssignment("Thoughts on Society", LocalDateTime.now().plusDays(2));
        Assignment ToJustice = PHIL231.createAssignment("Thoughts on Justice", LocalDateTime.now().plusDays(4));

        System.out.println("What Lee Conway should work on: " + LeeC.shouldWorkOn().getName());

        ToJustice.setPriority(LeeC, "high");

        System.out.println("But if he cares about his PHIL 231 grade more, he'll do: " + LeeC.shouldWorkOn().getName());

        Student NewG = new Student("New Guy");

        CSC308.enroll(NewG);
        CSC309.enroll(NewG);

        System.out.println("New guy should work on: " + NewG.shouldWorkOn().getName());

        CSC308.unenroll(NewG);

        System.out.println("New guy should NOW work on: " + NewG.shouldWorkOn().getName());

        System.out.println();
    }
}
