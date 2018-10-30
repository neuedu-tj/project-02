package com.mvc.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/data/UriTemplatePatterns")
public class UriTemplatePatternsController {
	
	@RequestMapping("/")
	public String start() {
		return "uri.template.patterns/start";
	}
	
	@RequestMapping(value="/param", method=RequestMethod.GET)
	public @ResponseBody String withParam(@RequestParam("foo") String foo ) {
		return "Obtained 'foo' query parameter value '" + foo + "'";
	}

	@RequestMapping(value = "/owners/{ownerId}", method = RequestMethod.GET)
	public @ResponseBody String findOwner(@PathVariable(value = "ownerId") String ownerId, Model model) {

		return "findOwner . ownerId : " + ownerId;
	}

	@RequestMapping(value = "/owners/{ownerId}/pets/{petId}", method = RequestMethod.GET)
	public @ResponseBody String findPet(
			@PathVariable(value = "ownerId") String ownerId,
			@PathVariable(value = "petId") String petId ) {

		return "findPet . ownerId :  " + ownerId + " ; petId : "	+ petId;

	}
	
	
	
}
