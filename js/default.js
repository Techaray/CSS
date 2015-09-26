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

    /*$.ajax({
          type: 'GET',
          url: 'http://insdata.testingwebsitedesign.com/save',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          window.location.href = "Thankyou.html";
          }
        });*/

alert($('#alternate_mobile').val());
}