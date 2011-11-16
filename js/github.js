   // var project = $('#project').attr('name');
    var baseurl = "https://api.github.com/";
    var url = baseurl + "repos/thamizha/";
    url += "sample-project";
    url += "/collaborators";
    $.getJSON(url, function(data){
           // $('#collab').append(JSON.stringify(data));
	    alert('Success');
        });
