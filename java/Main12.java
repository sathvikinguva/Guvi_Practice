class Employee {
    String name;
    int employeeId;
    double baseSalary;

    public double calcSalary() {
        return baseSalary;
    }
}
class Manager extends Employee {

    public double calcSalary() {
        return baseSalary + 5000;
    }
}
class Developer extends Employee {

    public double calcSalary() {
        return baseSalary + 3000;
    }
}
public class Main12 {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.name = "Rahul";
        m.employeeId = 101;
        m.baseSalary = 50000;
        Developer d = new Developer();
        d.name = "Anita";
        d.employeeId = 102;
        d.baseSalary = 40000;
        System.out.println("Manager:");
        System.out.println(m.name);
        System.out.println(m.employeeId);
        System.out.println(m.baseSalary);
        System.out.println(m.calcSalary());
        System.out.println("Developer:");
        System.out.println(d.name);
        System.out.println(d.employeeId);
        System.out.println(d.baseSalary);
        System.out.println(d.calcSalary());
    }
}