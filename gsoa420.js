function home(){
    var str ="<h1 style='color:white;'>La Boutique Cassée</h1> <hr style = 'border-width: 2px; border-style: solid; color:white;'></hr> <p style='color:white;'> Welcome to La Boutique Cassée. La Boutique Cassée is an online shop selling books and blurays.</p>";
    document.getElementById("displayText").innerHTML = str;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
 
//  function books(){
//     var xhr = new XMLHttpRequest();
//     var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/booklist";
//     xhr.open("GET", uri, true);
//     xhr.setRequestHeader("accept", "application/json");
//     xhr.setRequestHeader("Content-Type", "application/json");
    
//     xhr.onload = function() {
//         var resp = JSON.parse(xhr.responseText);
//         showBooks(resp);
//     }
//     xhr.send(null); 
// }        


// function displayBooks(dest) {
//   var tableContent = "";
//     for (var i = 0; i < books.length-3; i+=4){
//         var record = books[i];
//         var record2 = books[i+1];
//         var record3 = books[i+2];
//         var record4 = books[i+3];
//         if (i & 1 == 1) {
//             tableContent += "<tr class='orderOdd'>";
//         }
//         else {
//             tableContent += "<tr class='orderEven'>";
//         }
//         tableContent += "<td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record.Id + "'/><figcaption>" + record.AuthorInitials + " " + record.AuthorSurname + "</figcaption><figcaption>"+ record.Title + "</figcaption></td><td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record2.Id + "'/><figcaption>" + record2.AuthorInitials + " " + record2.AuthorSurname + "</figcaption><figcaption>"+ record2.Title + "</figcaption></td><td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record3.Id + "'/><figcaption>" + record3.AuthorInitials + " " + record3.AuthorSurname + "</figcaption><figcaption>"+ record3.Title + "</figcaption></td><td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record4.Id + "'/><figcaption>" + record4.AuthorInitials + " " + record4.AuthorSurname + "</figcaption><figcaption>"+ record4.Title + "</figcaption></td></tr>\n";
//     } 
//     document.getElementById("showTab").innerHTML = tableContent;
// }

function comments(){
    var str ="<h1 style='color:white;'>Guest Book</h1> <p style = 'color:white;'>Please sign our guest book. Your comments are greatly appreciated</p><div><table style= 'background-color: #323232; padding: 15px; border-radius:25px; width:100%;' align='center'> <tr><td colspan='3'><textarea id='text' rows='6' cols='50' style= 'width:100%'></textarea></td></tr><tr><td style= 'text-align: center;'> Your Name:</td><td style= 'text-align: center;'> <input id='name' type='text' name='name' placeholder='Enter your name here'></td><td style= 'text-align: center;' onclick='showcomments()'>button</td></tr></table></div>";
    document.getElementById("menu").innerHTML =str;
    var yourname = document.getElementById("name").value;
    var yourtext = document.getElementById("text").value;
    var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name={NAME}";
    var xhr = new XMLHttpRequest();
    xhr.open("POST",uri,true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
    }
    xhr.send(JSON.stringify(objectToPost));

}

function postComments(){
  varxhr= newXMLHttpRequest();varuri= "http://www.site.org/";
  xhr.open("POST", uri, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload= function() {// POST succeeds; do something}xhr.send(JSON.stringify(objectToPost));
}

function getBooks(){
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booklist";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", uri, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onload = function () {
  var response = JSON.parse(xhr.responseText);
  showBooks(response);
    }
    xhr.send(null);
}

function getBlurays(){
  var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brlist";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", uri, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onload = function () {
  var response = JSON.parse(xhr.responseText);
  showBlurays(response);
    }
    xhr.send(null);
}

function showBooks(books){
  var tableContent= "";
  for(var i = 0; i < bokos.length; ++i) {
    var record = books[i];

    if(i& 1 == 1) { // odd row
      tableContent+= "<trclass='orderOdd'>";
    }

    else{ // even row
      tableContent+= "<trclass='orderEven'>";
    }
   
  tableContent += "<td><img src='http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + record.Id + "'/><figcaption>" + record.AuthorInitials + " " + record.AuthorSurname + "</figcaption><figcaption>"+ record.Title + "</figcaption></td>";
}
  document.getElementById("displayText").innerHTML= tableContent;

}

var currentTab = "";
      function showHomeSection() {
         if (currentTab != "HomeSection") {
            currentTab = "HomeSection";
            showNoTabs();
            document.getElementById("HomeSection").style.backgroundColor = "lightBlue";
            document.getElementById("Home").style.display = "inline";
         }
      }

      function showAboutSection() {
         if (currentTab != "AboutSection") {
            currentTab = "AboutSection";
            showNoTabs();
            document.getElementById("AboutSection").style.backgroundColor = "lightBlue";
            document.getElementById("About").style.display = "inline";
         }
      }

      function showBookSection() {
         if (currentTab != "BookSection") {
            currentTab = "BookSection";
            showNoTabs();
            document.getElementById("BookSection").style.backgroundColor = "lightBlue";
            document.getElementById("Books").style.display = "inline";
         }
      }
      
      function showBluraySection() {
         if (currentTab != "BluraySection") {
            currentTab = "BluraySection";
            showNoTabs();
            document.getElementById("BluraySection").style.backgroundColor = "lightBlue";
            document.getElementById("Blurays").style.display = "inline";
         }
      }
      
      function showCommentSection() {
         if (currentTab != "CommentSection") {
            currentTab = "CommentSection";
            showNoTabs();
            document.getElementById("CommentSection").style.backgroundColor = "lightBlue";
            document.getElementById("Comments").style.display = "inline";
         }
      }      
      
      function showNoTabs() {
         document.getElementById("HomeSection").style.backgroundColor = "transparent";
         document.getElementById("AboutSection").style.backgroundColor = "transparent";
         document.getElementById("BookSection").style.backgroundColor = "transparent";
         document.getElementById("BluraySection").style.backgroundColor = "transparent";
         document.getElementById("CommentSection").style.backgroundColor = "transparent";

         document.getElementById("Home").style.display = "none";
         document.getElementById("About").style.display = "none";
         document.getElementById("Books").style.display = "none";
         document.getElementById("Blurays").style.display = "none";
         document.getElementById("Comments").style.display = "none";


      }



// function getBlurays() {
//            var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brlist";
//             var xmlhttp = new XMLHttpRequest();
//             xmlhttp.open("get", uri, true);
//             xmlhttp.onreadystatechange = function() {
//                 if (this.readyState == 4 && this.status == 200) {
//                     showResult(this);
//                 }
//             };
//             xmlhttp.send(null);
//         }

        // function showResult(xmlhttp) {
        //     var xmlDoc = xmlhttp.responseXML.documentElement;
        //     // removeWhitespace(xmlDoc);
        //     var outputResult = document.getElementById("BodyRows");
        //     var rowData = xmlDoc.getElementsByTagName("Bluray");

        //     addTableRowsFromXmlDoc(rowData,outputResult);
        // }

//testing 
// window.onclick = function(event) {
//   if (!event.target.matches('.topnav')) {

//     var dropdowns = document.getElementsByClassName("myTopnav");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
