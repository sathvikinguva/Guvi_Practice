import java.util.*;
import java.util.HashSet;
import java.util.Set;

class Main15 {
    public static void main(String[] args) {
        Set<Integer> numbers = new HashSet<>();
        numbers.add(10);
        numbers.add(20);
        // numbers.add(30);
        numbers.add(10);
        numbers.add(20);
        // numbers.add(40);
        System.out.println(numbers);
    }
}