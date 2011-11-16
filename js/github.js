$(document).ready(function(){
    var project = $('#project').attr('name');
    var baseurl = "https://api.github.com/";
    var url = baseurl + "repos/thamizha/";
    url += project;
    url += "/collaborators";
    $.get(url, function(data){
            $('#collab').append(JSON.stringify(data));
	    alert('Success');
        });
});
