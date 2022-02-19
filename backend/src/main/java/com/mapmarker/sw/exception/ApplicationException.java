package com.mapmarker.sw.exception;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@NoArgsConstructor
public class ApplicationException extends RuntimeException{
    private static final long serialVersionUID = 123456789123456L;
    private Object obj;
    private HttpStatus status;

    public ApplicationException(HttpStatus status, Object obj){
        this.obj = obj;
        this.status = status;
    }

    public ApplicationException(HttpStatus status){
        this.status = status;
    }
//}
}