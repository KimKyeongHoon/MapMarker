package com.mapmarker.sw.service;

//import com.mapmarker.sw.exception.ApplicationException;
import com.mapmarker.sw.exception.ApplicationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{

    @Override
    public Map<String, String> test(String key) {
        if(key == null) throw new ApplicationException(HttpStatus.valueOf(400), "Error Test");
        Map<String, String> map = new HashMap<>();
        map.put("value", key);
        return map;

    }
}
