<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>

<title>URI Template Patterns</title>
<link href="<c:url value="/resources/css/core.css" />" rel="stylesheet"
	type="text/css" />

</head>

<body>
	<h3>URI Template Patterns</h3>
	<h4>
		See the
		<code>com.mvc.web.controller.ByHeaderController</code>
	</h4>

	<div id="message"></div>
	
	<div id="content">
		<ul>
			<li> <a id="byHeader" style="text-decoration: none ;color: #ac3d1a" href='<c:url value="/mapping/header/" />'/>By presence of header</a> </li>
		</ul>
		<ul>
			<li> <a id="byHeaderNegation" class="textLink" href='<c:url value="/mapping/header/" />'/>By absence of header</a> </li>
		</ul>
	</div>


	</body>
</html>



<script>
	
</script>	
<script type="text/javascript" src="<c:url value="/resources/js/util.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-2.1.1.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/main.js" />"></script>
