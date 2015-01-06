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

  email_message = JSON.stringify($("#post_data_form").serializeObject());

  console.log(email_message);

  // $.ajax({
  //   type: 'POST',
  //   url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  //   data: {
  //     "key": "PUZvXW1BZFD6SZHSBpVH7Q",
  //     "message": {
  //       "from_email": "jdown1994@gmail.com", //"jtsheppleitech@gmail.com",
  //       "to": [
  //       {
  //         "email": "jdown1994@gmail.com", //"jtsheppleitech@gmail.com",
  //         "name": "JT Shepple",
  //         "type": "to"
  //       },
  //       ],
  //       "autotext": "true",
  //       "subject": "You have a new email from a customer!",
  //       "html":
  //     }
  //   }
  // }).done(function(response) {
  //   console.log(response);
  // });
}
