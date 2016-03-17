//creating the addListItem function that is defines below in the Document ready function 
function addListItem(){

//initialising the variable 'text' to equal the input ID 'new text'	
	var text = $("#new-text").val(); 

 //append displays what is in the brackets straight after(strings must be in quatations and added to each other)	 
	$('#todolist').append('<li>'+text+'<button id="x">X</buttton></li>'); //this will append the value of 'text' + a button within an <li></li>

//clear the 'new-text' input after each item is added to the list	   
	$('#new-text').val('') 

}


//document ready function

$(function(){

	$('#add').on('click', addListItem); //when you click the 'add' button it follows through with the 'addlistitem' function above

});



