package com.example.accessingmongodbdatarest;

import org.springframework.data.annotation.Id;

public class mlbStats {

    @Id private String id;

    private Team team;
    private Stats stats;

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Stats getStats() {
        return stats;
    }

    public void setStats(Stats stats) {
        this.stats = stats;
    }
}