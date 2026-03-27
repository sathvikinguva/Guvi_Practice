import java.util.*;
@FunctionalInterface
interface AddNum{
    int add (int a, int b);
};
public class Main23 {
    public static void main(String[] args) {
        AddNum obj = (a,b)->(a+b)*4;
        int res = obj.add(1,2);
        System.out.println(res);
    }
}