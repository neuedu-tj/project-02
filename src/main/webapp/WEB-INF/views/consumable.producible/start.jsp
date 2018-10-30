<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

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
		<code>com.mvc.web.controller.mapping.ConsumableAndProducibleController</code>
	</h4>

	<div id="message"></div>
	
	<div id="content">
		<ul>
			<li>
				<form id="byConsumes" class="readJsonForm" action="<c:url value="/mapping/media/consumes" />" method="post">
					<input id="byConsumesSubmit" type="submit" value="By consumes" />
				</form>
			</li>
			<br>
			<li>
				<form class="readSerializeForm" action="<c:url value="/mapping/media/produces"/>" method="post" >
					foo : <input name="foo">
					fruit : <input name="fruit">
					<button>submit</button>
				</form>
			</li>
			<br>
			<li>
				<form class="readMultiForm"  action="<c:url value="/mapping/media/produces"/>"  method="post" enctype="multipart/form-data">
					<input type="file"  name="file"/>
					<button>submit</button>
				</form>
			</li>
			<br>
			<li>
				<a id="byProducesAcceptJson" class="writeJsonLink" href="<c:url value="/mapping/media/produces" />">By produces via Accept=application/json</a>
			</li>
			<br>
            <li>
                <a id="byProducesAcceptXml" class="writeXmlLink" href="<c:url value="/mapping/media/produces" />">By produces via Accept=appilcation/xml</a>
            </li>
            <br>
            <li>
				<a  class="writeJsonLink" href='<c:url value="/mapping/media/produces.json" />'/> By produces via ".json</a>
			</li>
			<br>
			<li> 
				<a  class="writeXmlLink" href='<c:url value="/mapping/media/produces.xml" />'/> By produces via ".xml"</a>
			</li>
			
			
		</ul>
	</div>

	<!-- 
	<li><a id=""  class="textLink" href="${pageContext.request.contextPath}/data/param?foo=bar">/owners/{ownerId}</a></li>
	 -->
	<br>
	<!-- 
	<li>
		<a href="${pageContext.request.contextPath}/template/owners/42/pets/21">/owners/{ownerId}/pets/{petId}</a>
	</li>
	 -->
	<br>
	</body>
</html>




<script type="text/javascript" src="<c:url value="/resources/js/util.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-2.1.1.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/main.js" />"></script>
