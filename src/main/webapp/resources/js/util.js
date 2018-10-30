/**
 * 
 */
MvcUtil = {};

MvcUtil.domain = function getRootPath() {

	var curWwwPath = window.document.location.href;

	var pathName = window.document.location.pathname;

	var pos = curWwwPath.indexOf(pathName);

	var localhostPaht = curWwwPath.substring(0, pos);

	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);

	console.log( (localhostPaht + projectName) )
	return (localhostPaht + projectName);

}

MvcUtil.showSuccessResponse = function(text, element) {
	MvcUtil.showResponse("success", text, element);
};
MvcUtil.showErrorResponse = function showErrorResponse(text, element) {
	MvcUtil.showResponse("error", text, element);
};

MvcUtil.showResponse = function(type, text, element) {

	element.empty();

	if (type == "success") {
		var src = MvcUtil.domain()+"/resources/messages/success.png";
		var img = $('<p><img height="25px"	width ="25px" src='+src+'  /></p>')
	}

	var detail = $('<span>' + text + '</span>');

	img.fadeIn("slow");
	detail.fadeIn("slow"); 

	element.append(img);
	element.append(detail);

};



MvcUtil.xmlencode = function(xml) {
	// for IE
	var text;
	if (window.ActiveXObject) {
		text = xml.xml;
	}
	// for Mozilla, Firefox, Opera, etc.
	else {
		text = (new XMLSerializer()).serializeToString(xml);
	}
	return text.replace(/\&/g, '&' + 'amp;').replace(/</g, '&' + 'lt;')
			.replace(/>/g, '&' + 'gt;').replace(/\'/g, '&' + 'apos;').replace(
					/\"/g, '&' + 'quot;');
};