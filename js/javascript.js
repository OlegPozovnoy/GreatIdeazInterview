$(document).ready(function() {
    $('.nav li.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
	
	
	
/*	$.getJSON( "cardscontent.json", function( data ) {
		window.jsonInternal = data; //json output
		//console.log(window.data);
	});*/


    $('.card').click(function() {
    	
    	let tmp=false;
    	if ($(this).hasClass('activecard'))
    		tmp = true;

    	$('.card').removeClass('activecard');
    	$('.cardscontent').addClass('hidden');
       // alert("undone");
		let s = document.getElementById("sectioncontainer");
        //s.innerHTML="";
        if (tmp==false){
        $(this).addClass('activecard');

		//var jsonInternal = window.jsonInternal;
		//console.log(jsonInternal);

		
		if (this.id == "card1")
		{
		$('#card1content').removeClass('hidden');
		}
		else if(this.id=="card2")
		{
		$('#card2content').removeClass('hidden');
		}
		else if(this.id=="card3")
		{
		$('#card3content').removeClass('hidden');
		}
		else if(this.id=="card4")
		{
		$('#card4content').removeClass('hidden');
		}
		else if(this.id=="card5")
		{
		$('#card5content').removeClass('hidden');
		}
		else if(this.id=="card6")
		{
		$('#card6content').removeClass('hidden');
		}
		else if(this.id=="card7")
		{
		$('#card7content').removeClass('hidden');
		}
		
		}//.card
      //  alert("done");
    });
	$('.carousel').carousel({
  	interval: 6000
	})



});