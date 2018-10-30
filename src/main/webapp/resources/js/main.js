
$(function() {
	
		var showMessage= $('#message');
	
		$("a.textLink").click(function() {
			var link = $(this);
			$.ajax({
				url : link.attr("href"),
				dataType : "text",
				success : function(text) {
					MvcUtil.showSuccessResponse(text, showMessage);
				},
				error : function(xhr) {
					MvcUtil.showErrorResponse(xhr.responseText, showMessage);
				}
			});
			return false;
		});
		
		$("a.writeJsonLink").click(function() {
			var link = $(this);
			$.ajax({ url: this.href,
				beforeSend: function(req) {
					if (!this.url.match(/\.json$/)) {
						req.setRequestHeader("Accept", "application/json");   //期盼得到 json  格式的数据
					}
				},
				success: function(json) {
					MvcUtil.showSuccessResponse( JSON.stringify(json) , showMessage);
				}
			});
			return false;
		});
		
		
		$("a.utf8TextLink").click(function(){
			var link = $(this);
			$.ajax({ 
				url: link.attr("href"), 
				dataType: "text", 
				beforeSend: function(req) { req.setRequestHeader("Accept", "text/plain;charset=UTF-8"); }, 
				success: function(text) { MvcUtil.showSuccessResponse(text, showMessage); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }
			});
			return false;
		});
		
		$("form.textForm").submit(function(event) {
			var form = $(this);
			var button = form.children(":first");
			$.ajax({ 
				type: "POST", 
				url: form.attr("action"),
				data: "foo", 
				contentType: "text/plain", 
				dataType: "text", 
				success: function(text) { MvcUtil.showSuccessResponse(text, showMessage); },
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }});
			return false;
		});
		
		$("#readForm").submit(function() {
			var form = $(this);
			var button = form.children(":first");
			$.ajax({ 
				type: "POST", 
				url: form.attr("action"), 
				data: "foo=bar&fruit=apple", 
				contentType: "application/x-www-form-urlencoded", 
				dataType: "text", 
				success: function(text) { MvcUtil.showSuccessResponse(text, showMessage); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }});
			return false;
		});
		
		$("#writeForm").click(function() {
			var link = $(this);
			$.ajax({ 
				url: this.href, 
				dataType: "text",
				beforeSend: function(req) { req.setRequestHeader("Accept", "application/x-www-form-urlencoded"); }, 
				success: function(form) { MvcUtil.showSuccessResponse(form, showMessage); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }});					
			return false;
		});
		
		$("form.readXmlForm").submit(function() {
			var form = $(this);
			var button = form.children(":first");
			$.ajax({ 
				type: "POST",
				url: form.attr("action"), 
				data: "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><javaBean><foo>bar</foo><fruit>apple</fruit></javaBean>", 
				contentType: "application/xml", 
				dataType: "text", 
				success: function(text) { MvcUtil.showSuccessResponse(text, showMessage); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }});
			return false;
		});
		
		$("a.writeXmlLink").click(function() {
			var link = $(this);
			$.ajax({ url: link.attr("href"),
				beforeSend: function(req) { 
					if (!this.url.match(/\.xml$/)) {
						req.setRequestHeader("Accept", "application/xml");
					}
				},
				success: function(xml) {
					MvcUtil.showSuccessResponse(MvcUtil.xmlencode(xml), showMessage);
				}
			});
			return false;
		});	
		
		$("form.readJsonForm").submit(function() {
			var form = $(this);
			var button = form.children(":first");
			var data = form.hasClass("invalid") ?
					"{ \"foo\": \"bar\" }" : 
					"{ \"foo\": \"bar\", \"fruit\": \"apple 6\" }";
			$.ajax({
				type: "POST", 
				url: form.attr("action"), 
				data: data, 
				contentType: "application/json", 
				dataType: "text", 
				success: function(text) { MvcUtil.showSuccessResponse(text, showMessage); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }});
			return false;
		});
		
		
		
		$("#readAtom").submit(function() {
			var form = $(this);
			var button = form.children(":first");
			$.ajax({ 
				type: "POST", 
				url: form.attr("action"), 
				data: '<?xml version="1.0" encoding="UTF-8"?> <feed xmlns="http://www.w3.org/2005/Atom"><title>My Atom feed</title></feed>', 
				contentType: "application/atom+xml", 
				dataType: "text", 
				success: function(text) { MvcUtil.showSuccessResponse(text, showMessage); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }
			});
			return false;
		});
		
		$("#writeAtom").click(function() {
			var link = $(this);
			$.ajax({ url: link.attr("href"),
				beforeSend: function(req) { 
					req.setRequestHeader("Accept", "application/atom+xml");
				},
				success: function(feed) {
					MvcUtil.showSuccessResponse(MvcUtil.xmlencode(feed), showMessage);
				},
				error: function(xhr) { 
					MvcUtil.showErrorResponse(xhr.responseText, showMessage);
				}
			});
			return false;
		});

		
		
		$("#readRss").submit(function() {
			var form = $(this);
			var button = form.children(":first");
			$.ajax({ 
				type: "POST", 
				url: form.attr("action"), 
				data: '<?xml version="1.0" encoding="UTF-8"?> <rss version="2.0"><channel><title>My RSS feed</title></channel></rss>', 
				contentType: "application/rss+xml", 
				dataType: "text", 
				success: function(text) { MvcUtil.showSuccessResponse(text, showMessage); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, showMessage); }
			});
			return false;
		});

		$("#writeRss").click(function() {
			var link = $(this);	
			$.ajax({ url: link.attr("href"),
				beforeSend: function(req) { 
					req.setRequestHeader("Accept", "application/rss+xml");
				},
				success: function(feed) {
					MvcUtil.showSuccessResponse(MvcUtil.xmlencode(feed), showMessage);
				},
				error: function(xhr) { 
					MvcUtil.showErrorResponse(xhr.responseText, showMessage);
				}
			});
			return false;
		});
		
		$("#byHeader").click(function(){
			var link = $(this);
			$.ajax({ 
				url: this.href, 
				dataType: "text", 
				beforeSend: function(req) { req.setRequestHeader("FooHeader", "foo"); }, 
				success: function(form) { MvcUtil.showSuccessResponse(form, $('#message')); }, 
				error: function(xhr) { MvcUtil.showErrorResponse(xhr.responseText, link); }
			});
			return false;
		});
		
		$("form.readSerializeForm").submit(function() {
	
			var form = $(this);
			$.ajax({ 
				contentType: "application/x-www-form-urlencoded", 
				type: "POST", 
				url: form.attr("action"), 
				data: form.serialize() , 
				dataType : "text",
				success: function(text) {
					MvcUtil.showSuccessResponse(text, showMessage);
				}
			
			});
			return false;
		});

		$("form.readMultiForm").submit(function() {
			
			var form = $(this);

			$.ajax({ 
				type: "POST", 
				url: form.attr("action"), 
				contentType: "multipart/form-data", 
				data:  form,
				success: function(text) {
					MvcUtil.showSuccessResponse( text , showMessage);
				}
			});
			return ;
		});
		
		
		
	});