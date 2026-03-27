import java.util.Scanner;
abstract class Car{
    abstract void start();
    void stop(){
        System.out.println("Car stopped");
    }
}
class Starting extends Car{
    void start(){
        System.out.println("Car started");
    }
}
public class Main11 {
    public static void main(String[] args) {
        Starting s = new Starting();
        s.start();
        s.stop();
    }
}
