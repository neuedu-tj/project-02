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
		<code>com.mvc.web.controller.mapping.ByParameterController</code>
	</h4>

	<div id="message"></div>
	
	<div id="content">
		<ul>
			<li>
				<a id="param" class="textLink" href='<c:url value="/mapping/path/parameter?foo=bar" />'/>By path, method, and presence of parameter</a>
			</li>
			<br>
			<li>
				<a id="param" class="textLink" href='<c:url value="/mapping/path/parameter" />'/>By path, method, and not presence of parameter</a>
			</li>
		</ul>
	</div>


	</body>
</html>



<script>
	
</script>	
<script type="text/javascript" src="<c:url value="/resources/js/util.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-2.1.1.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/main.js" />"></script>
