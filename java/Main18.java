import java.util.*;

class Main18 {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Angel");
        map.put(2, "Madurai");
        map.put(3, "Java");
        System.out.println("Before Replacing: " + map);
        map.put(2, "Andhra");
        System.out.println("After Replacing: " + map);
    }
}