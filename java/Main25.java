class Printer{
    synchronized void printDocument(String name){
        for(int i=0; i <=3; i++){
            System.out.println(name + " printing Page: " + i);
        }
    }
}
class User extends Thread{
    Printer printer;
    User(Printer printer){
        this.printer = printer;
    }
    public void run(){
        printer.printDocument(Thread.currentThread().getName());
    }
}
public class Main25 {
    public static void main(String[] args) {
        Printer printer = new Printer();
        User user1 = new User(printer);
        User user2 = new User(printer);
        user1.start();
        user2.start();
    }
}
