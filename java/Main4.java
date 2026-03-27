import java.util.*;

public class Main4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int m = sc.nextInt();
        if (m>=90){
            System.out.println("A");
        } else if (m>=75 && m<90){
            System.out.println("B");
        } else if (m>=60 && m<75){
            System.out.println("C");
        } else {
            System.out.println("Fail");
        }
    }
}