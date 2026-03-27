import java.util.*;
import java.util.function.Predicate;

class Main22 {
    public static void main(String[] args) {
        int s = 12;
        int e = 48;
        List<Integer> numbers = new ArrayList<>();
        for(int i = s; i <= e; i++){
            numbers.add(i);
        }
        // System.out.println(numbers);
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(numbers);
        int c = 0;
        for(int n : numbers){
            if(isEven.test(n)){
                c++;
            }
        }
        System.out.println(c);
    }
}