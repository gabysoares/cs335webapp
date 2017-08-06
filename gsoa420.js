function home()
{
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

function comments()
{
  var str = "<h1 style='color:white;'>Guest Book</h1> <p style = 'color:white;'>Please sign our guest book. Your comments are greatly appreciated</p><div><table style= 'background-color: #323232; padding: 15px; border-radius:25px; width:100%;' align='center'> <tr><td colspan='3'><textarea id='text' rows='6' cols='50' style= 'width:100%'></textarea></td></tr><tr><td style= 'text-align: center;'> Your Name:</td><td style= 'text-align: center;'> <input id='name' type='text' name='name' placeholder='Enter your name here'></td><td style= 'text-align: center;' onclick='showcomments()'>button</td></tr></table></div>";
  document.getElementById("menu").innerHTML = str;
  var yourname = document.getElementById("name").value;
  var yourtext = document.getElementById("text").value;
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name={NAME}";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", uri, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function() {}
  xhr.send(JSON.stringify(objectToPost));

}

function postComment()
{
  var xhr = new XMLHttpRequest();
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name=" + '"testing"';
  xhr.open("POST", uri, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function(){
  	var comment = document.getElementById("displayText");
  	comment.innerHTML= xhr.responseText;
  }
  xhr.send("TESTING COMMENT")
}


  // function getBooks()
  // {
  //   var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booklist";
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", uri, true);
  //   xhr.setRequestHeader("Accept", "application/json");
  //   xhr.onload = function()
  //   {
  //     var response = JSON.parse(xhr.responseText);
  //     showBooks(response);
  //   }
  //   xhr.send(null);
  // }

  function getBooks()
  {
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

  function searchBooks(keyword)
  {
    var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booksearch?term=" + keyword;
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
  	
    var tableContent = "<table>";
    for (var i = 0; i < books.length; ++i)
    {
      var record = books[i];
     
     var name =record.AuthorInitials + " " + record.AuthorSurname;

     tableContent += "<tr> <td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record.Id + 
      "' </td>" +"<td>" + record.Title + "<br/>" + name + 
      "</td>" + "<td> <button type=\"button\" onclick=\"buyBook(this)\" value= '" + record.Title + "'\">Buy Now!</button></td>"+"</tr>";
	
    }
     tableContent += "</table>"
    document.getElementById("displayText").innerHTML = tableContent;

 }

  function getBlurays()
  {
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

