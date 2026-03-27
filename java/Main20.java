import java.util.*;

class Number {
    int value;
    Number(int value) {
        this.value = value;
    }
}
class MyComparator implements Comparator<Number> {
    public int compare(Number a, Number b) {
        return a.value - b.value;
    }
}

public class Main20 {
    public static void main(String[] args) {
        ArrayList<Number> list = new ArrayList<>();
        list.add(new Number(30));
        list.add(new Number(10));
        list.add(new Number(20));
        Collections.sort(list, new MyComparator());
        for(Number n : list) {
            System.out.println(n.value);
        }
    }
}