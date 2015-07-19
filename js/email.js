$.fn.serializeObject = function()
{
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

function post_data() {

  var email_message;

  email_message = $("#post_data_form").serializeObject();

  console.log(email_message);

  var the_message;
  the_message = "Email from " + email_message["name"] + "<br/>Phone number: " + email_message["phone_number"]
  + "<br/>Customer's device: " + email_message["option"] + "<br/>If other: " + email_message["other_device"]
  + "<br/>Customer's location: " + email_message["location"] + "<br/>Customer's message is as follows: <br/>" +
  email_message["message"] + "<br/><br/>SENT VIA JT'S AWESOME WEBSITE";

  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      "key": "qoDjPi3vtF0p8F01At5muw",
      "message": {
        "from_email": email_message["email"], //email_message["email"]
        "to": [
        {
          "email": "jtsheppleitech@gmail.com", // jtsheppleitech@gmail.com
          "name": "JT Shepple",                // jdown1994@gmail.com
          "type": "to"
        }
        ],
        "autotext": "true",
        "subject": "You have a new email from a customer!",
        "html": the_message
      }
    }
  }).done(function(response) {
    console.log(response);

    if(response[0]["status"] == "sent")
    {
      console.log("Success in sending the email.");
      document.email_form.reset();

      $("#after_submit").html("Thanks for emailing JT!<br/>JT will get back to you as soon as possible.");

      $( "#dialog" ).dialog({modal:true});
    }
    else{
      console.log("Failure to send email.");

      $("#after_submit").html("Sorry, your email did not go though.<br/> Make sure to fill out all the required fields, and provide a valid email address.");

      $( "#dialog-fail" ).dialog({modal:true});
    }

  });
}
