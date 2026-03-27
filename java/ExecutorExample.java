import java.util.concurrent.*;
class Task implements Runnable{
    public void run(){
        System.out.println(Thread.currentThread().getName() + " is executing task");
    }
}
public class ExecutorExample {
    public static void main(String[] args){
        ExecutorService executor = Executors.newFixedThreadPool(2);
        for(int i=1;  i <= 5; i++){
            executor.execute(new Task());
        }
        executor.shutdown();
    }
    
}
