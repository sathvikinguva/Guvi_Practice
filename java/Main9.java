import java.util.*;
class Add{
    int add(int a, int b){
        return a+b;
    }
    int add(int a, int b, int c){
        return a+b+c;
    }
}
public class Main9{
    public static void main(String[] args){
        Add obj = new Add();
        System.out.println(obj.add(5,10));
        System.out.println(obj.add(5,10,10));
    }
}