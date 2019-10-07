package com.haseeb.survey.resource;

import com.haseeb.survey.dto.Option;
import com.haseeb.survey.dto.PostQuestion;
import com.haseeb.survey.dto.Question;
import com.sun.org.apache.bcel.internal.generic.ACONST_NULL;
import com.sun.tools.classfile.ConstantPool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sun.tools.jconsole.JConsole;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RestController
@RequestMapping("/api/question")
public class QuestionResource {

    private List<Question> questions;

    public QuestionResource(){
        super();
        this.questions = new ArrayList<>();
        questions.add(
                new Question(
                        1,
                        "Where are you born",
                        "",
                        "radio",
                        Arrays.asList(new Option(1,"islamabd"),
                            new Option(2,"Rawalpindi"),
                            new Option(3,"Karachi"),
                            new Option(4,"Sialkot")
                    )
            ));
        questions.add(
                new Question(
                        2,
                        "Your favourite hero",
                        "",
                        "radio",
                        Arrays.asList(new Option(1,"Bah"),
                                new Option(2,"Mul"),
                                new Option(3,"Lahore"),
                                new Option(4,"Gurj")
                        )
        ));
        questions.add(
                new Question(
                        3,
                        "Your favourite hero",
                        "",
                        "text",
                        null
                ));
    }
    @GetMapping
    public List<Question> getQuestion(){
        return this.questions;
    }

    @PostMapping
    public void addQuestion(@RequestBody PostQuestion postQuestion){
        Question question = new Question(
                this.questions.size(),
                postQuestion.getTitle(),
                "",
                postQuestion.getType(),
                IntStream.range(0, postQuestion.getOptions().size()).
                        mapToObj(index ->
                                new Option(index,postQuestion.getOptions().get(index))).collect(Collectors.toList()));

        this.questions.add(question);
    }
}
