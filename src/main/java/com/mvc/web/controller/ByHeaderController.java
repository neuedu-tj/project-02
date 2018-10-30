package com.mvc.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/mapping/header")
public class ByHeaderController {
	
	@RequestMapping("/start")
	public String start() {
		return "by.header/start";
	}
	


	@RequestMapping(value="/", method=RequestMethod.GET, headers="FooHeader=foo")
	public @ResponseBody String byHeader() {
		return "Mapped by path + method + presence of header!";
	}

	@RequestMapping(value="/", method=RequestMethod.GET, headers="!FooHeader")
	public @ResponseBody String byHeaderNegation() {
		return "Mapped by path + method + absence of header!";
	}

}
