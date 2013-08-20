#Click Through
A jQuery plugin to create image click throughs.

##Usage
######Basic usage
```javscript
$(".selector").clickthrough(
	{	
		images:['/img/one.jpg','/img/two.jpg','/img/three.jpg','/img/four.jpg','/img/five.jpg']
	}
);
```

######Looping the click through
```javascript
$(".selector").clickthrough(
	{	
		loop:true,
		images:['/img/one.jpg','/img/two.jpg','/img/three.jpg','/img/four.jpg','/img/five.jpg']
	}
);
```

######Defining a callback
```javascript
$(".selector").clickthrough(
	{	
		loop:true,
		images:['coy.jpg','grumps.jpg','hair.jpg','pensive.jpg','yawn.jpg'],
		callback: function(item,index){ 
					console.log("ClickThrough clicked ",item,index)
				  }
	}
);
```

####Note
The plugin doesn't assign any .css to your DOM element. You'll need to apply basic .css to control size, tiling, etc.
**Example**
```css
.clickthrough{
	background-repeat: no-repeat;
	background-size: cover
}
```