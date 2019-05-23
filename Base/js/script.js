$.noConflict();
$(document).ready(function(){

	// jQUery pour les onglets date
	$(":date").bind("onShow onHide", function()  {
	$(this).parent().toggleClass("active");
	});
	
// ISOTOPE

$('.tri').on('click', function(){
	$('.grid').isotope({getSortData : {number: 'span parseInt'}, sortBy : 'number', sortAscending: true});
});

