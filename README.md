#Click Through
A jQuery plugin to create image click throughs.

##Usage
```javscript
$(".selector").clickthrough(
	{	loop:true,
		images:['coy.jpg','grumps.jpg','hair.jpg','pensive.jpg','yawn.jpg'],
		callback: function(item,index){ console.log("ClickThrough clicked ",item,index)}
	}
);
```

##Options
The plugin constructor accepts a single obj with the the following properties  
**loop** ***boolean*** *optional if set to true, the click through will loop.  
**images** ***array*** the array of image urls  
**callback** ***function*** *optional a callback that will fire on each click. The callback signature is callback(item,index)

####Note
The plugin doesn't assign any .css to your DOM element. You'll need to apply basic .css to control size, tiling, etc.
**Example**
```css
.clickthrough{
	background-repeat: no-repeat;
	background-size: cover
}
```