		 var searchResults;
		$( document ).ready(function() {
			console.log( "ready!" );
			//	alert('start');
			// var graphData = '#{graphData}'
		  searchResults = $("#searchResults").html(); 

			if(searchResults == '&lt;%= searchResults %&gt;' || searchResults == undefined ){
				//alert('blank');
				searchResults='';
			}
			else{
			//alert('val'+searchResults);
			addTable(searchResults);
			}
		});


		$(function(){
		  $('.searchTerm').on("focus blur", function(){   
			$(this).parent().toggleClass("expanded collapsed");
			 $(this).siblings('.suggestionBox').toggle();
			});
		});


		function showname(){
		var username =  "Richa"; // document.getElementById("username").value;
		document.getElementById("username").innerHTML = username;
		}


		function addTable(searchResults) {
			  
			var myTableDiv = document.getElementById("myDynamicTable");
			  
			var table = document.createElement('TABLE');
			
			table.setAttribute("class", "tableStyle" );
			table.align='center';		
			table.width='70%';
				
			var tableBody = document.createElement('TBODY');
			table.appendChild(tableBody);

			var image = "http://res.cloudinary.com/rmishra/image/upload/w_100,h_80/v1479860737/sample.jpg"  //document.getElementById("image");
			var description = " Sneakers " // document.getElementById("description");
			var brand = " Adidas ";
			var price = " $45.00 ";
			var rating = " 5 ";
			var rating1 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_20/v1480389207/rating_1.jpg" //document.getElementById("rating");
			var rating2 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_20/v1480389207/rating_2.jpg";
			var rating3 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_20/v1480389207/rating_3.jpg";
			var rating4 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_20/v1480389207/rating_4.jpg";
			var rating5 =  "http://res.cloudinary.com/rmishra/image/upload/w_100,h_20/v1480389207/rating_5.jpg";

			var searchResultsJson = '['+searchResults+']';

			var searchResultsJsonArray = JSON.parse(searchResultsJson);

			for (var i=0; i<searchResultsJsonArray.length; i++){

				var result =searchResultsJsonArray[i];		
				rating = result.rating;
			    var tr = document.createElement('TR');
			
			    tableBody.appendChild(tr);			   
			    for (var j=0; j<3; j++){
				   var td = document.createElement('TD');				  
				   td.setAttribute("class", "tdStyle" );
					image=result.img;
					//alert(image);
				   if(j==0){						   
						td.width='25%';
						var DOM_img = document.createElement("img");
						DOM_img.src = image;
						DOM_img.setAttribute("class", "fluid-img1" );
						td.appendChild(DOM_img);

				   }else if(j ==1){				
						td.width='55%';
				 	    var aTag = document.createElement('a');
						aTag.setAttribute('href',"/loadProduct?productId="+result.id);
						aTag.innerHTML = result.name;
					
					    td.appendChild(aTag /*document.createTextNode(brand)*/ ); td.appendChild(document.createElement('br'));

						td.appendChild(document.createTextNode(result.brand));td.appendChild(document.createElement('br'));td.appendChild(document.createElement('br'));
						td.appendChild(document.createTextNode(result.desc));	td.appendChild(document.createElement('br'));td.appendChild(document.createElement('br'));
						td.appendChild(document.createTextNode('$'+result.price));


				   } else if(j ==2){
					    td.width='20%';
						var DOM_rating = document.createElement("img");
						if (rating ==1){
							DOM_rating.src = rating1;
							td.appendChild(DOM_rating);
				
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
