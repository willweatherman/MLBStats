package com.example.mlbStats;

import org.springframework.data.annotation.Id;

public class Pitching {

    @Id private String id;
    private Double earnedRunAvg;
    private Integer inningsPitched;
    private Integer hitsAllowed;

    public Double getEarnedRunAvg() {
        return earnedRunAvg;
    }

    public void setEarnedRunAvg(Double earnedRunAvg) {
        this.earnedRunAvg = earnedRunAvg;
    }


    public Integer getInningsPitched() {
        return inningsPitched;
    }

    public void setInningsPitched(Integer inningsPitched) {
        this.inningsPitched = inningsPitched;
    }


    public Integer getHitsAllowed() {
        return hitsAllowed;
    }

    public void setHitsAllowed(Integer hitsAllowed) {
        this.hitsAllowed = hitsAllowed;
    }


}