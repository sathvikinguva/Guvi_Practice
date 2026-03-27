import java.util.*;
class Student{
    String name;
    Student(String name){
        this.name = name;
    }
}
public class MemoryExample {
    public static void main(String[] args) {
        int age = 20;
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob");
        s1 = null;
        System.gc();
        System.out.println("Program is running...");
    }
    
}
