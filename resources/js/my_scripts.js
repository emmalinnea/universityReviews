

var selectedCard;
var gloData;

function makeApiCall()
{
	var taggy = document.getElementById("tagSearched").value;
	console.log(taggy);
	var url = `http://universities.hipolabs.com/search?name=${taggy}`;
	
	// console.log($.ajax)

	$.ajax({ url: url, dataType: "json", type: "GET" }).then(function (data) {

		
		console.log("hello");
		
		gloData = data;

		console.log(gloData);

		var numResults = data.length;

		var string = '';
    for(var i = 0; i < numResults; i++)
    {
		string += '<div style="width:20%;">' +
		'<div class="card text-center" id='+i+'>'+
		  '<div class="card-body">' +
			'<h5 class="card-title">' + data[i].name + '</h5>'+
			'<p class="card-text"> ' + data[i].country + ' <br>' +
			'</p>' +
			'<a href='+ data[i].web_pages+ ' class="btn btn-primary">University Website</a>'+
			'<div class="text-center"><a onclick='+`saveI(${i})`+'  id='+i+' class="btn btn-info mt-1" data-toggle="modal" >Add Review</a></div>' +
		  '</div>' +
		'</div>' +
	  '</div>'
    }
      

    document.getElementById("search_results").innerHTML= string;	
	
	});
}


function saveI(i)
{
	console.log("in SaveI()");
	console.log("i="+ i);
	selectedCard = i;
	console.log(gloData[i].name);
	document.getElementById("universityName").value = gloData[i].name;
	$("#myModal").modal();
	
}


