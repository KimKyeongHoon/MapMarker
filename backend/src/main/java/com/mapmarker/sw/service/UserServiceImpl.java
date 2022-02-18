package com.mapmarker.sw.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{

    @Override
    public Map<String, String> test(String key) {
        Map<String, String> map = new HashMap<>();
        map.put("value", key);
        return map;

    }
}
