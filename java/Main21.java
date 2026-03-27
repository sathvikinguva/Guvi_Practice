import java.util.*;
class Person<T, U>{
    T name;
    U age;
    Person(T name, U age){
        this.name=name;
        this.age=age;
    }
    void display(){
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
public class Main21 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        int age = sc.nextInt();
        Person<String, Integer> p = new Person<>(name, age);
        p.display();
    }
}