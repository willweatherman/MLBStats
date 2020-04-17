package com.example.accessingmongodbdatarest;

import org.springframework.data.annotation.Id;

public class Fielding {

    @Id private String id;
    private Integer inningsPlayed;
    private Integer totalChances;
    private Integer fielderTagOuts;

    public Integer getInningsPlayed() {
        return inningsPlayed;
    }

    public void setInningsPlayed(Integer inningsPlayed) {
        this.inningsPlayed = inningsPlayed;
    }


    public Integer getTotalChances() {
        return totalChances;
    }

    public void setTotalChances(Integer totalChances) {
        this.totalChances = totalChances;
    }


    public Integer getFielderTagOuts() {
        return fielderTagOuts;
    }

    public void setFielderTagOuts(Integer fielderTagOuts) {
        this.fielderTagOuts = fielderTagOuts;
    }


}