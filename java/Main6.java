import java.util.*;

public class Main6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int es = 0;
        int os = 0;
        for(int i = 1; i <= a; i++) {
            if(i % 2 == 0) {
                es = es + i;
            } else {
                os = os + i;
            }
        }

        System.out.println(es);
        System.out.println(os);
    }
}