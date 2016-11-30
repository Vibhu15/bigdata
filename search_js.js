$(function(){
  $('.searchTerm').on("focus blur", function(){   
    $(this).parent().toggleClass("expanded collapsed");
     $(this).siblings('.suggestionBox').toggle();
    });
});


function showname(){
var username =  "Shamal"; // document.getElementById("username").value;
document.getElementById("username").innerHTML = username;
}


function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.align='center';
	table.border='0.5';
	table.width='900';
	    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

	var image = "http://res.cloudinary.com/rmishra/image/upload/w_100,h_80/v1479860737/sample.jpg"  //document.getElementById("image");
    var description = " Sneakers " // document.getElementById("description");
	var brand = " Adidas ";
	var price = " $45.00 ";
	var rating = " 5 ";
    var rating1 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_30/v1480389207/rating_1.jpg" //document.getElementById("rating");
    var rating2 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_30/v1480389207/rating_2.jpg";
	var rating3 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_30/v1480389207/rating_3.jpg";
	var rating4 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_30/v1480389207/rating_4.jpg";
	var rating5 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_30/v1480389207/rating_5.jpg";

    for (var i=0; i<5; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<3; j++){
           var td = document.createElement('TD');
           td.width='75';
		   if(j==0){
        //   td.appendChild(document.createTextNode("Cell " + i + "," + j));

		var DOM_img = document.createElement("img");
		DOM_img.src = image;
		  td.appendChild(DOM_img /*document.createTextNode(image)*/);
		   } else if(j ==1){
		 // var td1 = document.createElement('TD');
		  var aTag = document.createElement('a');
		  aTag.setAttribute('href',"product description.html");
		  aTag.innerHTML = brand;
		  td.appendChild(aTag /*document.createTextNode(brand)*/ );
		  td.appendChild(document.createTextNode(price));
		  td.appendChild(document.createTextNode(description));	
		   } else if(j ==2){
		var DOM_rating = document.createElement("img");
		if (rating ==1){
			DOM_rating.src = rating1;
			td.appendChild(DOM_rating);
			//td.appendChild(document.createTextNode(rating));
		} else if(rating ==2){
			DOM_rating.src = rating2;
			td.appendChild(DOM_rating);
		} else if(rating ==3){
			DOM_rating.src = rating3;
			td.appendChild(DOM_rating);
		} else if(rating ==4){
			DOM_rating.src = rating4;
			td.appendChild(DOM_rating);
		} else{
			DOM_rating.src = rating5;
			td.appendChild(DOM_rating);
		}	
		}
          tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
