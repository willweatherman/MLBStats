package com.example.accessingmongodbdatarest;

import org.springframework.data.annotation.Id;

public class Batting {

    @Id private String id;
    private Integer atBats;
    private Integer runs;
    private Integer hits;

    public Integer getAtBats() {
        return atBats;
    }

    public void setAtBats(Integer atBats) {
        this.atBats = atBats;
    }


    public Integer getRuns() {
        return runs;
    }

    public void setRuns(Integer runs) {
        this.runs = runs;
    }


    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }


}