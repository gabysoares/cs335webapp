//var mydocument;
var isBooks = false;

function home()
{	
	showSearchBar(false);
  var str = "<h1 style='color:white;'>La Boutique Cassée</h1> <hr style = 'border-width: 2px; border-style: solid; color:white;'></hr> <p style='color:white;'> Welcome to La Boutique Cassée. La Boutique Cassée is an online shop selling books and blurays.</p>";
  document.getElementById("displayText").innerHTML = str;
}



// function showComments(){
// 	//var commentBox = "<form action=&#34;/postComment();>First name:<br><input type=&#34;text&#34; name=&#34;Comment&#34; value=&#34;Mickey&#34;><br>Last name:<br><input type=&#34;text&#34; name=&#34;lastname&#34; value=&#34;Mouse&#34;><br><br><input type=&#34;submit&#34; value=&#34;Submit&#34;></form> "
//      document.getElementById("commentArea").innerHTML='<object type="text/html" data="http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/htmlcomments" ></object>';
// }



function readComment()
{		
		showSearchBar(false);

		var str = "<p> <input name=\"nameEntry\" type=\"text\" value=\"Enter name here\" /></p> <p> <input name=\"commentEntry\" type=\"text\" value=\"Enter comment here\" /></p> <p> <input name=\"submitButton\" type=\"button\" onclick=\"postComment()\" value=\"Submit\" /></p>";  
		
		var comments = "<div><iframe src=\"http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/htmlcomments\" height=\"60%\" width=\"100%\"></iframe></div>";
		//document.getElementById("commentArea").innerHTML = comments;
		var page = str + comments;
		document.getElementById("displayText").innerHTML = page;


}

function postComment()
{


	var xhr = new XMLHttpRequest();
	var name = document.getElementsByName("nameEntry")[0].value;
	var comment = document.getElementsByName("commentEntry")[0].value;

	
	var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name=" + name;
	xhr.open("POST",uri,true);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.send(JSON.stringify(comment));
	
}


  function getBooks()
  {	
  	showSearchBar(true);
  	isBooks = true;
    var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booklist";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function()
    {
      var response = JSON.parse(xhr.responseText);
      showBooks(response);
    }
    xhr.send(null);
  }

  function search()
  {	
  	var keyword = document.getElementsByName("searchBox")[0].value;

  	if (isBooks === true){
  		var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booksearch?term=" + keyword;
  		var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function()
    {
      var response = JSON.parse(xhr.responseText);
      showBooks(response);
    }
  	}
    
    else{
    	var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brsearch?term=" + keyword;
    	var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function()
    {
      var response = JSON.parse(xhr.responseText);
      showBlurays(response);
    }
    }
    
    
    xhr.send(null);
  }

  function showBooks(books)
  {	
  	

    var tableContent = "<table>";
    for (var i = 0; i < books.length; ++i)
    {
      var record = books[i];
     
     var name =record.AuthorInitials + " " + record.AuthorSurname;

     tableContent += "<tr> <td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record.Id + 
      "' </td>" +"<td>" + record.Title + "<br/>" + name + 
      "</td>" + "<td> <button type=\"button\" onclick=\"buyBook(this)\" value= '" + record.Id + "'\">Buy Now!</button></td>"+"</tr>";
	
    }
     tableContent += "</table>"
    document.getElementById("displayText").innerHTML = tableContent;

 }

  function getBlurays()
  {	
  	isBooks = false;
  	showSearchBar(true);
    var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brlist";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function()
    {
      var response = JSON.parse(xhr.responseText);
      showBlurays(response);
    }
    xhr.send(null);
  }

  function searchBlurays(keyword)
  {
    var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brsearch?term=" + keyword;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function()
    {
      var response = JSON.parse(xhr.responseText);
      showBlurays(response);
    }
    xhr.send(null);
  }

  function showBlurays(blurays)
  {	
    var tableContent = "<table>";
    for (var i = 0; i < blurays.length; ++i)
    {
      var record = blurays[i];



      tableContent += "<tr> <td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + record.Id + 
      "' </td>" +"<td>" + record.Title + 
      "</td>" + "<td> <button type=\"button\" onclick=\"buyBluray(this)\" value= '" + record.Id + "'\">Buy Now!</button></td>"+"</tr>";
    }
    tableContent += "</table>"
    
    document.getElementById("displayText").innerHTML = tableContent;

  }

  function buyBluray(item) {
    var blurayId = item.value;
    window.open("http://redsox.uoa.auckland.ac.nz/BC/Closed/Service.svc/brbuy?id=" +blurayId, "_blank");
}

  function buyBook(item) {
    var bookId = item.value;
    window.open("http://redsox.uoa.auckland.ac.nz/BC/Closed/Service.svc/bookbuy?id=" +bookId, "_blank");
}



