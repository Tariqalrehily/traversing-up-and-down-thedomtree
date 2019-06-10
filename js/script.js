$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});

	// Toggle the visibility of the paragraph when a button is clicked 
	$("button").click(function(){
		$(this).prev().slideToggle('slow');
	});

	// Open the paragraph once the image is clicked
	$("img").click(function() {
		$(this).next().children("p").slideDown();
	});
	// When a card is clicked on, the background color is highlighted – e.g.,
	// set background-color to pink via adding a new class. When the card is 
	// clicked again, it is unhighlighted
	$(".card").click(function() {
	    $(this).toggleClass("highlighted");
	});
	$("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();
	});

	$("#all_btn").click(function(){
		$(".card").show();	 
	});
});