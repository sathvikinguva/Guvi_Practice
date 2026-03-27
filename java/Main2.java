import java.util.*;

public class Main2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        int sum = a + b;
        int diff = a - b;
        int pro = a * b;
        int rem = a % b;
        
        System.out.println(sum);
        System.out.println(diff);
        System.out.println(pro);
        System.out.println(rem);
    }
}