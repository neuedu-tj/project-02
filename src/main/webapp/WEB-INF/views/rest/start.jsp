<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>

<title>Path Pattern Matching By Rest</title>
<link href="<c:url value="/resources/css/core.css" />" rel="stylesheet" type="text/css" />

</head>

<body>
	<h3>Path Pattern Matching By Rest</h3>
	<h4>
		See the
		<code>com.mvc.web.controller.mapping.ByRestController</code>
	</h4>

	<div id="message"></div>
	
	<div id="content">
		<ul>
			<li> <a class="writeJsonLink"  href='<c:url value="/mapping/rest/produces">'/>via json</a> </li>
		</ul>
		<ul>
			<li> <a class="writeXmlLink"  href='<c:url value="/mapping/rest/produces" >'/>via xml</a> </li>
		</ul>
			
	</div>


	<br>
	</body>
</html>


<script type="text/javascript"  src='<c:url value="/resources/js/util.js" />"</script>
<script type="text/javascript"  src='<c:url value="/resources/jquery/jquery-2.1.1.js" />'></script>
<script type="text/javascript"  src='<c:url value="/resources/js/main.js" />'></script>
