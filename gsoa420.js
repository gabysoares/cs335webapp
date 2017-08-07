//var mydocument;
var isBooks = false;

function home()
{	
	showSearchBar(false);
  var str = "<h1 style='color:white;'>La Boutique Cassée</h1> <hr style = 'border-width: 2px; border-style: solid; color:white;'></hr> <p style='color:white;'> Welcome to La Boutique Cassée. La Boutique Cassée is an online shop selling books and blurays.</p>";
  document.getElementById("displayText").innerHTML = str;
}

function myFunction()
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav")
  {
    x.className += " responsive";
  }
  else
  {
    x.className = "topnav";
  }
}

// function comments()
// {
//   var str = "<h1 style='color:white;'>Guest Book</h1> <p style = 'color:white;'>Please sign our guest book. Your comments are greatly appreciated</p><div><table style= 'background-color: #323232; padding: 15px; border-radius:25px; width:100%;' align='center'> <tr><td colspan='3'><textarea id='text' rows='6' cols='50' style= 'width:100%'></textarea></td></tr><tr><td style= 'text-align: center;'> Your Name:</td><td style= 'text-align: center;'> <input id='name' type='text' name='name' placeholder='Enter your name here'></td><td style= 'text-align: center;' onclick='showcomments()'>button</td></tr></table></div>";
//   document.getElementById("menu").innerHTML = str;
//   var yourname = document.getElementById("name").value;
//   var yourtext = document.getElementById("text").value;
//   var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name={NAME}";
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", uri, true);
//   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   xhr.onload = function() {}
//   xhr.send(JSON.stringify(objectToPost));

// }
  // function getComments()
  // {
  //   var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/htmlcomments";
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", uri, true);
  //   xhr.setRequestHeader("Accept", "application/html");
  //   xhr.onload = function()
  //   {
  //     var response = xhr.responseText;
  //     showComments(response);
  //   }
  //   xhr.send(null);
  // }

// function getComments(){
//     var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/htmlcomments";
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", uri, true);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onload = function()
//     {
//       var response = JSON.parse(xhr.responseText);
//       showComments(response);
//     }
//     xhr.send(null);
//  }

function showComments(comments){
	var content = "<p>";
	for (var i = 0; i <comments.length; i++)
	{
		var comment = comments[i];
		content += comment + "<br/>"
	}
	content += "</p>"

	document.getElementById("displayText").innerHTML = content;
}

// function showComments(){
// 	var commentBox = "<form action=&#34;/postComment();>First name:<br><input type=&#34;text&#34; name=&#34;Comment&#34; value=&#34;Mickey&#34;><br>Last name:<br><input type=&#34;text&#34; name=&#34;lastname&#34; value=&#34;Mouse&#34;><br><br><input type=&#34;submit&#34; value=&#34;Submit&#34;></form> "
//      document.getElementById("displayText").innerHTML='<object type="text/html" data="http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/htmlcomments" ></object>';
// }

//works

function comment()
{
	debugger;
  var xhr = new XMLHttpRequest();
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name=" + "fran";
  xhr.open("POST", uri, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function(){
  	var comment = document.getElementById("displayText");
  	comment.innerHTML= xhr.responseText;
  }
  xhr.send('"comment works"')
}

function readComment()
{	

		showSearchBar(false);

		var str = "<p> <input name=\"nameEntry\" type=\"text\" value=\"Enter name here\" /></p> <p> <input name=\"commentEntry\" type=\"text\" value=\"Enter comment here\" /></p> <p> <input name=\"submitButton\" type=\"button\" onclick=\"postComment()\" value=\"Submit\" /></p>";  
		document.getElementById("displayText").innerHTML = str;


}

function postComment()
{
	//
	//debugger;

	var xhr = new XMLHttpRequest();
	var name = document.getElementsByName("nameEntry")[0].value;
	var comment = document.getElementsByName("commentEntry")[0].value;

	
	var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name=" + name;
	//debugger;
	xhr.open("POST",uri,true);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	// xhr.onload = function () {
	// 	// var comment = document.getElementById("displayText");
 //  // 	comment.innerHTML= xhr.responseText;
	// }
	xhr.send(JSON.stringify(comment));
	//document.getElementById("displayText").innerHTML = str;
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
  	 //debugger;
  	 //var uri = 
  	var keyword = document.getElementsByName("searchBox")[0].value;

  	if (isBooks === true){
  		var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booksearch?term=" + keyword;
  	}
    
    else{
    	var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brsearch?term=" + keyword;
    }
    
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

  function showBooks(books)
  {	
  	//var tableContent = "<form><input type=\”text\” placeholder=\”Search.\” required>  <input type=\”button\” value=\”Search\”></form>";    

    var tableContent = "<table>";
    //var search = 
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



