package com.health.dashboard.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RestController {

    @GetMapping("api/sayHello")
    public String sayHello() {
        return "Hey buddy, how are you";
    }
}
