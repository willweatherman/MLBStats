package com.example.accessingmongodbdatarest;

import org.springframework.data.annotation.Id;

public class Standings {

    @Id private String id;
    private Integer wins;
    private Integer losses;
    private Double winPct;

    public Integer getWins() {
        return wins;
    }

    public void setWins(Integer wins) {
        this.wins = wins;
    }


    public Integer getLosses() {
        return losses;
    }

    public void setLosses(Integer losses) {
        this.losses = losses;
    }


    public Double getWinPct() {
        return winPct;
    }

    public void setWinPct(Double winPct) {
        this.winPct = winPct;
    }


}