import java.util.*;

class Number implements Comparable<Number> {
    int value;
    Number(int value) {
        this.value = value;
    }
    public int compareTo(Number n) {
        return this.value - n.value;
    }
}

public class Main19 {
    public static void main(String[] args) {
        ArrayList<Number> list = new ArrayList<>();
        list.add(new Number(30));
        list.add(new Number(10));
        list.add(new Number(20));
        Collections.sort(list);
        for(Number n : list) {
            System.out.println(n.value);
        }
    }
}