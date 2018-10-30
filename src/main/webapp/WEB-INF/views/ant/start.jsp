<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>

<title>Path Patterns ( ANT Style )</title>
<link href="<c:url value="/resources/css/core.css" />" rel="stylesheet"
	type="text/css" />

</head>

<body>
	<h3>Path Patterns ( ANT Style )</h3>
	<h4>
		See the
		<code>com.mvc.web.controller.AntStyleController</code>
	</h4>

	<div id="message"></div>
	
	<div id="content">
		<ul>
		
			<br>
				<li>
					<a  class="textLink"  href="<c:url value="/mapping/ant/customers/select/01" />">
						by Ant Style
					</a>
					<p>you can mapping by ("/customers/**") , (/customers/select/) , (/customers/select/01)</p>
					<span style="color:#F44043">but note , that will be mapping to "/customers/{id}" </span>
				</li>
		
			<br>
				<li>
					<a class="textLink"  href="<c:url value="/mapping/ant/customer1" />">
						by Ant Style
					</a><br>
					<p>you can mapping by ("/customer?") , ("/customer1") , ("/customera")</p>
					<span style="color:#F44043">but don't match "customer" or "customerxx"</span>
				</li>
		
			<br>
				<li><a >@RequestMapping("/customer*") || ('/customerabc') or ('/customer') is ok</a> but not ('/customer/*')</li>
		
			<br>
				<li>
					<a class="textLink"  href="<c:url value="/mapping/ant/customer/2013/01/16" />">
						by Ant Style
					</a><br>
					<span>mix : ('/customer/**/{id}')</span>
				</li>
		
		
		</ul>
			
	</div>


	<br>
	</body>
</html>



<script>
	
</script>	
<script type="text/javascript" src="<c:url value="/resources/js/util.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-2.1.1.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/main.js" />"></script>
