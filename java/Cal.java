import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
class Task1 implements Runnable{
    int a, b;
    Task1(int a, int b){
        this.a = a;
        this.b = b;
    }
    public void run(){
        System.out.println("Addition: " + (a+b));
        System.out.println("Subtraction: " + (a-b));
    }
}
class Task2 implements Runnable{
    int a, b;
    Task2(int a, int b){
        this.a = a;
        this.b = b;
    }
    public void run(){
        System.out.println("Multiply: " + (a*b));
        System.out.println("Division: " + (a/b));
    }
}
public class Cal {
    public static void main(String[] args){
        ExecutorService executor = Executors.newFixedThreadPool(2);
        executor.execute(new Task1(5, 4));
        executor.execute(new Task2(5, 4));
        executor.shutdown();
    }
}

