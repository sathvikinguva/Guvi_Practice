import java.util.Scanner;
class Student{
    private int marks;
    String name;
    String dept;
    public void setMarks(int marks){
        this.marks = marks;
    }
    public int getMarks(){
        return marks;
    }
}

public class Main10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student s = new Student();
        int marks = sc.nextInt();
        sc.nextLine();
        String name= sc.nextLine();
        String dept= sc.nextLine();
        s.setMarks(marks);
        System.out.println(marks);
        System.out.println(name);
        System.out.println(dept);
    }
}