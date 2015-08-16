GUID
-----------------
 + Inspired from the book of JavaScript Patterns, Stoyan Stefanov.
 + You can add some special value in this guid, such as user's email or nickname or id.
 + For example, I added a ObjectId(mongoDB) to this guid in my project.

#### Quick start
**(1)** in Node.js.

	//require module
	var guid = require('lite-guid');
	
	//create a guid
	var _guid = guid.create();
	
	//print the _guid
	console.log(_guid);

**(2)guid.js** is used for **JavaScript client**, so you can add this script in your html file.

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>guid</title>
		</head>
		<body>
			<script type="text/javascript" src="guid_js.js"></script>
			<script type="text/javascript">
				var _id = guid.create();
				console.log(_id);
			</script>
		</body>
	</html> 