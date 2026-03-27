class Person {
    String name = "Rahul";
    int age = 25;
}

class Employee extends Person {
    double salary = 50000;

    void display() {
        System.out.println(super.name);
        System.out.println(super.age);
        System.out.println(salary);
    }
}

public class Main13 {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.display();
    }
}