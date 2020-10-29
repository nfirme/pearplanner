import java.time.LocalDateTime;

public class Term {
    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;

    public Term (String name, LocalDateTime start, LocalDateTime end) {
        this.name = name;
        this.startDate = start;
        this.endDate = end;
    }

    public String getName() {
        return name;
    }

    public LocalDateTime getStartDate() {
        return this.startDate;
    }

    public LocalDateTime getEndDate() {
        return this.endDate;
    }

    public boolean isActive() {
        LocalDateTime inst = LocalDateTime.now();
        return (inst.isAfter(this.startDate) && inst.isBefore(this.endDate));
    }
}
