package entities;

import java.util.Date;

public class HourContract {

    private Date date;
    private Double valuePerours;
    private Integer hours;

    public HourContract() {
    }

    public HourContract(Date date, Double valuePerours, Integer hours) {
        this.date = date;
        this.valuePerours = valuePerours;
        this.hours = hours;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getValuePerours() {
        return valuePerours;
    }

    public void setValuePerours(Double valuePerours) {
        this.valuePerours = valuePerours;
    }

    public Integer getHours() {
        return hours;
    }

    public void setHours(Integer hours) {
        this.hours = hours;
    }

    // Metodos//
    public double totalValue(){
        return valuePerours * hours;
    }
}
