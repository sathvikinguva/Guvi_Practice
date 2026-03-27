import java.util.*;

public class Main7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int c;

        do {
            System.out.println("\nMenu:");
            System.out.println("1. Say Hello");
            System.out.println("2. Print 1 - 5");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            c = sc.nextInt();

            switch (c) {
                case 1:
                    System.out.println("Hello!");
                    break;

                case 2:
                    for (int i = 1; i <= 5; i++) {
                        System.out.print(i + " ");
                    }
                    System.out.println();
                    break;

                case 3:
                    System.out.println("Program Exited");
                    break;

                default:
                    System.out.println("Invalid");
            }

        } while (c != 3);

        sc.close();
    }
}