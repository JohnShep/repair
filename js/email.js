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
  the_message = "Email from some idiot customer named " + email_message["name"] + "<br/>Phone number: " + email_message["phone_number"]
  + "<br/>Customer's device: " + email_message["option"] + "<br/>If other: " + email_message["other_device"]
  + "<br/>Customer's location: " + email_message["location"] + "<br/>Customer's message is as follows: <br/>" +
  email_message["message"] + "<br/><br/>SENT VIA JT'S AWESOME WEBSITE THAT JASON AND EMILY MADE FOR FREE BECAUSE JT SHEPPLE IS A CHEAP ASS.";

  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      "key": "PUZvXW1BZFD6SZHSBpVH7Q",
      "message": {
        "from_email": email_message["email"],
        "to": [
        {
          "email": "jtsheppleitech@gmail.com",
          "name": "JT Shepple",
          "type": "to"
        }
        ],
        "autotext": "true",
        "subject": "CHECK YOUR EMAIL JT ITS A CUSTOMER GOD DAMN IT",
        "html": the_message
      }
    }
  }).done(function(response) {
    console.log(response);

    if(response[0]["status"] == "sent")
    {
      console.log("Success in sending the email.");
      document.email_form.reset();

      $("#after_submit").html("Thanks for emailing JT!<br/>JT will get back to you as soon as possible. Probably, Probably not. JT can be moody.");

      $( "#dialog" ).dialog({modal:true});
    }
    else{
      console.log("Failure to send email.");

      $("#after_submit").html("Sorry, your email did not go though.<br/> Make sure to fill out all the required fields, and provide a valid email address.");

      $( "#dialog-fail" ).dialog({modal:true});
    }

  });
}
