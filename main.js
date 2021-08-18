Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
var mouse_event="empty";
var last_position_of_x,last_position_of_y;
var color = "black";
var width = 1;
var radius=5;

Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mouseDown";
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius-input").value;
}
Canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUP";
}

Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}


Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
 current_position_of_mouse_x = e.clientX-Canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY-Canvas.offsetTop;
 
 if(mouse_event=="mouseDown"){
   
    console.log("Current position of x and y coordinates = ");
console.log(" x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.radius=radius;



ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius ,  0 , 2 * Math.PI);
ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}