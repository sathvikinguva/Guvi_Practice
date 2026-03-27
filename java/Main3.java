import java.util.*;

public class Main3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int cgpa = sc.nextInt();
        boolean backlog = sc.nextBoolean();
        // cgpa >= 7 && !backlog ? System.out.println("Eligible") : System.out.println("Not Eligible");
        System.out.println((cgpa >= 7 && !backlog) ? "Eligible" : "Not Eligible");
    }
}