package com.mvc.web.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mvc.web.controller.support.JavaBean;


@Controller
@RequestMapping("/mapping/rest")
public class ByRestController {

	@RequestMapping("/")
	public String start() {
		return "rest/start";
	}
	
	@RequestMapping(value="/produces", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public JavaBean byProducesJson() {
		return new JavaBean();
	}
	
	@RequestMapping(value="/produces", method=RequestMethod.GET, produces=MediaType.APPLICATION_XML_VALUE)
	public JavaBean byProducesXml() {
		return new JavaBean();
	}
}
