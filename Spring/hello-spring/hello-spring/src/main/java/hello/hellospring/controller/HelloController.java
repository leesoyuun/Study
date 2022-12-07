package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloController {
    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data","hello~!"); //key : data & value : hello
        return "hello"; //여기는 hello.html로 연결
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam("name") String name, Model model){
        //RequestParam : 파라미터 받음
        //http://portnum/hello-mvc?name=어쩌구
        //라고 링크 써주어야함
        model.addAttribute("name",name);
        return "hello-template";
    }
}
