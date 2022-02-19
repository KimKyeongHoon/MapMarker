package com.mapmarker.sw.controller;

import com.mapmarker.sw.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("test")
    @ApiOperation(value="테스트 Request", response = Map.class)
    public ResponseEntity<Map<String, String>> test(@ApiParam @RequestParam String key){
        return ResponseEntity.ok().body(userService.test(key));
    }


}
