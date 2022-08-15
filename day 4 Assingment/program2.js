<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Your Website</title>
</head>
  <body>
    
    <button onClick="changeBgColor('blue')">Change BackgroundColor</button>
    <button onClick="changeSize('200px', '200px')">Change size</button>
    <button onClick="addImage('https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb')">Add image</button>
    <button onClick="removeImage()">Remove image</button>
    
    <div id="container" width="100px" height="100px" style="backgroundColor:red;">
      <h1>Container</h1>
    </div>
  </body>