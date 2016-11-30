		 var searchResults;
		$( document ).ready(function() {
			console.log( "Product Description ready!" );
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


