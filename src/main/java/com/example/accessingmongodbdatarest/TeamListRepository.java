package com.example.accessingmongodbdatarest;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "mlb_stats", path = "Teams")
public interface TeamListRepository extends MongoRepository<mlb_stats, String> {

//    List<Team> findById(@Param("id") String id);

}