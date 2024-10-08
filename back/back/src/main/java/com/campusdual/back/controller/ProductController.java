package com.campusdual.back.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController ()
@RequestMapping ("/products")
public class ProductController {
    @GetMapping
    public  String testController(@RequestBody String name){
        return "Products controller works" + name +"!";

    }
}
