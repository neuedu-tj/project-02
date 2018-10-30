package com.mvc.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mvc.web.controller.support.JavaBean;

@Controller
@RequestMapping("/mapping/media")
public class ConsumableAndProducibleController {

	@RequestMapping("/")
	public String start() {
		return "consumable.producible/start";
	}
	
	@RequestMapping(value="/consumes", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String byConsumes(@RequestBody JavaBean javaBean) {
		return "Mapped by path + method + consumable media type (javaBean '" + javaBean + "')";
	}
	
	@RequestMapping(value="/produces", method=RequestMethod.POST, consumes=MediaType.APPLICATION_FORM_URLENCODED_VALUE )
	public @ResponseBody String byProducesApplicationFormData( JavaBean javaBean) {
		System.out.println(MediaType.APPLICATION_FORM_URLENCODED_VALUE);
		return "data : "+javaBean ;
	}
	
	@RequestMapping(value="/produces", method=RequestMethod.POST, consumes=MediaType.MULTIPART_FORM_DATA_VALUE )
	public @ResponseBody String byProducesMultiPartData(HttpServletRequest request) throws Exception {
		System.out.println("request.getContentType() : " + request.getContentType());
		System.out.println("request.getContentLengthLong() : " + request.getContentLengthLong()/1024+" KB . ");
		return "file contentType : "+ request.getContentType()+" ,  size"+ request.getContentLengthLong()/1024+" KB . ";
	}

	
	/***************************************************************************************************/
	
	//controller  -  > Produces

	@RequestMapping(value="/produces", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody JavaBean byProducesJson() {
		return new JavaBean();
	}

	@RequestMapping(value="/produces", method=RequestMethod.GET, produces=MediaType.APPLICATION_XML_VALUE)
	public @ResponseBody JavaBean byProducesXml() {
		return new JavaBean();
	}

}
