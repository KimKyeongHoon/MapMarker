package com.mapmarker.sw.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * @param ex : 던져오는 Exception   Map<HttpStatus, Object>
     * @return : ResponseEntity
     */
    @ExceptionHandler(value = ApplicationException.class)
    public ResponseEntity handleApplicationException(ApplicationException ex){
        ex.printStackTrace();
        return ResponseEntity.status(ex.getStatus()).body(ex.getObj());
    }

    @ExceptionHandler(value = Exception.class)
    public String handleException(Exception e){
        e.printStackTrace();
        return e.getMessage();
    }
}
