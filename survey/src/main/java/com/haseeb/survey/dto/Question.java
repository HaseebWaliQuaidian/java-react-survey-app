package com.haseeb.survey.dto;

import java.util.List;

public class Question {
    private int id;
    private String title;
    private String answer;
    private String type;
    private List<Option> options;

    public Question(){ }
    public Question(int id, String title, String answer,String type, List<Option> options) {
        this.id = id;
        this.title = title;
        this.answer = answer;
        this.options = options;
        this.type = type;
    }

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title;}

    public String getAnswer() {return answer;}

    public void setAnswer(String answer) {this.answer = answer;}

    public List<Option> getOptions() {return options;}

    public void setOptions(List<Option> options) {this.options = options;}

    public void setType(String type){ this.type = type; }

    public String getType(){return this.type;}
}
