if( $('#dateOfLaunch').length )        
{
    $('#dateOfLaunch').datepicker({uiLibrary: 'bootstrap4',format: 'dd/mm/yyyy'});
}

 function validate()
    {
      var title = document.getElementById("title").value;
      var price = document.getElementById("price").value;
      var date  = document.getElementById("dateOfLaunch").value;
      var genre = document.getElementById("category").value;
      var active = document.getElementsByName("active");
      var ch="";
      var flag=0;
      for(var i=0;i<active.length;i++)
      {
      	if(active[i].checked)
      	{
      		ch=active[i].value;
      	}
      }

      if(title.length<1)
      {
      	document.getElementById("title-val").innerHTML="Insert a Movie Name";
      	flag=1;
      }
      else
      {
      	document.getElementById("title-val").innerHTML="";
      	flag=0
      }

      if(price.length<1)
      {
      	document.getElementById("price-val").innerHTML="Enter the price";
      	flag=1;
      }
      else if(isNaN(price))
      {
      	document.getElementById("price-val").innerHTML="Enter a valid price";
      	flag=1;
      }
      else
      {
      	document.getElementById("price-val").innerHTML="";
      	flag=0;
     
      }
      if(!date)
      {
      	document.getElementById("date-val").innerHTML="Enter a valid date";
      	flag=1;
      }
      else
      {
      	document.getElementById("date-val").innerHTML="";
      	flag=0;
      }
      
      if(!ch)
      {
      	 document.getElementById("active-val").innerHTML="Select an option";
      	 flag=1;
      }
      else
      {
      	document.getElementById("active-val").innerHTML="";
      	flag=0;
      }
     
     if(flag==0)
     {
     	alert("Movie saved successfully");
     	window.location.reload();
     }
 	
   	


   }
