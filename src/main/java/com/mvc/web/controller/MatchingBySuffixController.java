package com.mvc.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/mapping/suffix")
public class MatchingBySuffixController {

	@RequestMapping("/")
	public String start() {
		return "matching.by.suffix/start";
	}
	
	@RequestMapping(value="/*.pdf" , method = RequestMethod.GET )
	public @ResponseBody String withSuffix() {
		return "path :  /*.pdf ";
	}
	
	@RequestMapping(value = "/account/{account}.pdf"  , method = RequestMethod.GET)
	public @ResponseBody String withSuffixAndPathVariable(@PathVariable("account") String account) {
		return "path :  /*.pdf , " +" account : " + account ;
	}
	
}
