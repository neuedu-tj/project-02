package com.mvc.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/mapping/ant")
public class AntStyleController {
	
	@RequestMapping(value="/")
	public String start(){
		return "ant/start";
	}

	@RequestMapping("/customers/**")
	public @ResponseBody String byAnt( HttpServletRequest request ) {
		
		return " uri : "+request.getRequestURI() +" . <br><br>" +" prcocess request by RequestMapping('/customers/**')";
	}
	
	@RequestMapping("/customer?")
	public @ResponseBody String byAnt2( HttpServletRequest request ) {
		return " uri : "+request.getRequestURI() +" . <br><br>" +" prcocess request by RequestMapping('/customers?')";
	}

	@RequestMapping("/customer/**/{id}")
	public @ResponseBody String byAnt3(@PathVariable("id") int id , HttpServletRequest request ) {
		return " uri : "+request.getRequestURI() + " . <br><br>  id : "+id ;
	}
	
}
