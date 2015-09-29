function upatePackage()
{
  var kitCodeValOriginal = document.getElementById("kit_code").value;
  var resOriginal = kitCodeValOriginal.substring(3, 7);

  var kitCodeVal = document.getElementById("kit_code").value;
  var res = kitCodeVal.substring(3, 6);
  if( res == 199 || res == 399 || res == 599 || res == 899 )
  {
    document.getElementById("packages").value = res;
  }
  else if ( res == 109 || res == 149 || res == 199 )
  {
    document.getElementById("packages").value = resOriginal;
  }
  else
  {
    alert('Please fill the correct Kit Code');
  }
}
function validateQty(el) {
    var regex = /^[0-9]*(?:\.\d{1,2})?$/;    // allow only numbers [0-9] 
  if( !regex.test(el.value) ) {
      el.value = '';
  }
}
function getDates()
{
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

var optal = "<option val='"+mm+"/"+dd+"/"+yyyy+"'>"+mm+"/"+dd+"/"+yyyy+"</option>";

for (i = 1; i < 15; i++) {
    
    optal += "<option val='"+mm+"/"+(dd-i)+"/"+yyyy+"'>"+mm+"/"+(dd-i)+"/"+yyyy+"</option>";

}

document.getElementById("date_of_purchase").innerHTML = optal;

 

}
function hideShowDetails()
{
  var value = document.getElementById("product_type").value;

  if( value == "MOBILE" || value == "TAB")
    {
      var check = 'show';
    }
    else
    {
      var check = 'hide';
    }
    

    if( check == "hide" )
    {
      $('#imei_number_upperdiv').slideUp();
      $('#device_type_upperdiv').slideUp();
      $('#imei_number').attr('disabled',true);
      $('#device_type').attr('disabled',true);
    }
    if( check == "show" )
    {
      $('#imei_number_upperdiv').slideDown();
      $('#device_type_upperdiv').slideDown();
      $('#imei_number').attr('disabled',false);
      $('#device_type').attr('disabled',false);
    }
}
function saveData()
{
 var data = {
      'packages': $('#packages').val(),
      'kit_code': $('#kit_code').val(),
      'invoice_value': $('#invoice_value').val(),
      'imei_number': $('#imei_number').val(),
      'invoice_number': $('#invoice_number').val(),
      'date_of_purchase': $('#date_of_purchase').val(),
      'device_type': $('#device_type').val(),
      'product_type': $('#product_type').val(),
      'customer_name': $('#customer_name').val(),
      'address': $('#address').val(),
      'pincode': $('#pincode').val(),
      'email': $('#email').val(),
      'mobile_number': $('#mobile_number').val(),
      'state': $('#state').val(),
      'city': $('#city').val(),
      'alternate_mobile': $('#alternate_mobile').val()
      };

    $.ajax({
          type: 'GET',
          url: 'http://insdata.testingwebsitedesign.com/save',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          window.location.href = "Thankyou.html";
          }
        });

/*	$.ajax({                    
	  url: 'http://insdata.testingwebsitedesign.com/save',     
	  type: 'get', // performing a POST request
	  data : data,
	  dataType: 'json',                   
	  success: function(data)         
	  {
	    alert('Success');
	  } 
	});*/


}