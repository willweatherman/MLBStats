package com.example.accessingmongodbdatarest;

import org.springframework.data.annotation.Id;

public class Team {

    @Id private String id;

    private String city;
    private String name;
    private String abbreviation;
    private String officialLogoImageSrc;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }


    public String getOfficialLogoImageSrc() {
        return officialLogoImageSrc;
    }

    public void setOfficialLogoImageSrc(String officialLogoImageSrc) {
        this.officialLogoImageSrc = officialLogoImageSrc;
    }



}