﻿package cases.exception.type;

public enum ResultEnum {
//测试修改


    private Integer code;
    private String msg;

    ResultEnum(Integer code , String msg ) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
