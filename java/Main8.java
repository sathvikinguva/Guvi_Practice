import java.util.*;

public class Main8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();

        int i = 1;
        while (i <= 10) {
            System.out.println(a + " x " + i + " = " + (a * i));
            i++;
        }

        int j = 10;
        while (j >= 1) {
            System.out.println(a + " x " + j + " = " + (a * j));
            j--;
        }
    }
}