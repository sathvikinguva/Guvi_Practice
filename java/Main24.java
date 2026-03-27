import java.time.*;
import java.time.temporal.ChronoUnit;

public class Main24 {
    public static void main(String[] args) {
        //1
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Current Date and Time: " + now);
        //2
        LocalDate dob = LocalDate.of(2004, 11, 28);
        System.out.println("DOB: " + dob);
        //3
        Period age = Period.between(dob, LocalDate.now());
        System.out.println("Age Difference: " + age.getYears() + " Years " + age.getMonths() + " Months " + age.getDays() + " Days");
        //4
        LocalTime startTime = LocalTime.of(9, 0);
        LocalTime endTime = LocalTime.of(17, 30);
        Duration collegeDuration = Duration.between(startTime, endTime);
        System.out.println("College Duration: " + collegeDuration.toHours() + " Hours " + (collegeDuration.toMinutes() % 60) + " Minutes");
        //5
        LocalDate futureDate = LocalDate.parse("2030-07-15");
        System.out.println("Given Date: " + futureDate);
        //6
        LocalDate oldDate = LocalDate.of(1926, 12, 27);
        DayOfWeek day = oldDate.getDayOfWeek();
        System.out.println("Day on 27 Dec 1926: " + day);
        //7
        LocalTime currentTime = LocalTime.now();
        LocalTime newTime = currentTime.plusHours(4);
        System.out.println("Current Time: " + currentTime);
        System.out.println("After Adding 4 Hours: " + newTime);
    }
}