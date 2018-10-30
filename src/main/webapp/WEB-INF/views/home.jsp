<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>

<!DOCTYPE html>
<html>
  <head>

    <title>17.3.2 Mapping Requests With @RequestMapping</title>
	<link href="<c:url value="/resources/css/core.css" />" rel="stylesheet" type="text/css" />
  </head>
  
  <body>
    <h4>17.3.2 Mapping Requests With @RequestMapping</h4>
    
    <div id="content">
    <ul>
    	<br>
    	<li>
    		<a class="textLink"  href="<c:url  value="/data/UriTemplatePatterns/"  />"   >URI Template Patterns</a>
    	</li>
    																
    	<br><li><a class="textLink"  href="<c:url value="/mapping/ant/" />">Path Patterns ( ANT Style )</a></li>
    	
    	<br><li><a class="textLink"  href="<c:url  value="/mapping/suffix/"  />">Path Pattern Matching By Suffix</a></li>
    	
    
    	
    	<br><li><a class="textLink"  href="<c:url value="/mapping/media/" /> ">Consumable And Producible  Media Types</a></li>
    	
    	<br><li><a class="textLink"  href="<c:url value="/mapping/path/" />">By Parameter</a></li>
    	
    	<br><li><a class="textLink"  href="<c:url value="/mapping/header/start" />">By Header</a></li>
    	
    	<br><li><a class="textLink"  href="<c:url value="/mapping/rest/" />">By Rest</a></li>
    	
    	</ul>
    	</div>
  </body>
</html>
