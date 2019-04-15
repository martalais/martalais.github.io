
// When the page is ready, do the following...
$(document).ready(function() {
	
  /* ************************************************************************ *
   * Starts logic regarding automatic age change on portifolio's presentation
   * ************************************************************************ */
  var iWasBornIn		= 1998;
  var currentYear		= new Date().getFullYear();
  var myActualYear	= currentYear - iWasBornIn;
  
	$('#myAtualAge').text(myActualYear);
  /* ************************************************************************ */
  
});
