package com.haseeb.survey.dto;

import java.util.List;

public class PostQuestion {
    private String title;
    private List<String> options;
    private String type;

    public PostQuestion(){}
    public PostQuestion(String title, List<String> options,String type) {
        this.title = title;
        this.options = options;
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
