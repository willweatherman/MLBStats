package com.example.mlbStats;

import org.springframework.data.annotation.Id;
import java.lang.Integer;

public class Stats {

    @Id private String id;

    private Integer gamesPlayed;
    private Batting batting;
    private Pitching pitching;
    private Fielding fielding;
    private Standings standings;

    public Integer getGamesPlayed() {
        return gamesPlayed;
    }

    public void setGamesPlayed(Integer gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
    }

    public Batting getBatting() {
        return batting;
    }

    public void setBatting(Batting batting) {
        this.batting = batting;
    }


    public Pitching getPitching() {
        return pitching;
    }

    public void setPitching(Pitching pitching) {
        this.pitching = pitching;
    }


    public Fielding getFielding() {
        return fielding;
    }

    public void setFielding(Fielding fielding) {
        this.fielding = fielding;
    }


    public Standings getStandings() {
        return standings;
    }

    public void setStandings(Standings standings) {
        this.standings = standings;
    }

}