package com.example.mlbStats;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "mlbStats", path = "Teams")
public interface TeamListRepository extends MongoRepository<mlbStats, String> {
    List<mlbStats> findByTeam(Team team);
    List<mlbStats> findByTeamDivision(String teamDivision);
}