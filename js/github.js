$(document).ready(function(){
   // var project = $('#project').attr('name');
    var baseurl = "https://api.github.com/";
    var url = baseurl + "repos/thamizha/";
    url += "sample-project";
    url += "/collaborators";
    $.ajax({
	    dataType: 'jsonp',
	    url: url,
	    success: function(response){
		    for (var i in response.data){
			    $('#collab').append('<p>'+response.data[i].login+'</p>');
			   }
        }
    });
});
