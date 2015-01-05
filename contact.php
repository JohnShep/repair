<!DOCTYPE html>
<html lang = "en-US">
<head>
	<meta charset = "utf-8">

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins). -->
	<script src="js/jquery-1.11.2.min.js"></script>
	<script src="js/bootstrap.min.js"></script>

	<meta http-equiv = "X-UA-Compatible" content = "IE-edge">
	<meta name = "viewport" content = "width = device-width, initial-scale = 1">
	<meta name = "viewport" content = "width = device-width, initial-scale = 1, maximum-scale = 1, user-scalable = no">
	<title>JTS Technology Services</title>
	<link href = "css/bootstrap.css" rel = "stylesheet">
	<link href = "main.css" rel = "stylesheet">

	<!-- Include all compiled plugins (below), or include individual files as needed. -->
	<script src="js/bootstrap.js"></script>
	<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>
	<script src="js/googlemaps.js"></script>

</head>
<body>
	<!-- This is the <NAVIGATION_BAR>! -->
	<div class = "navbar-wrapper">
		<nav class = "navbar navbar-inverse navbar-fixed-top" role = "navigation">
			<div class = "container-fluid">
			<!-- Brand and toggle get grouped together for better mobile display. -->
			<div class = "navbar-header">
				<button type = "button" class = "navbar-toggle collapsed" data-toggle = "collapse" data-target = "#navbar">
					<span class = "sr-only">Toggle navigation. </span>
					<span class = "icon-bar"></span>
					<span class = "icon-bar"></span>
					<span class = "icon-bar"></span>
				</button>
				<a class = "navbar-brand" href = "index.html">JTS Technology Services</a>
			</div>
			<!-- Collect the nav links, forms, and other content for toggling. -->
			<div id = "navbar" class = "navbar-collapse collapse">
				<ul class = "nav navbar-nav navbar-right">
					<li><a href = "index.html">Home</a></li>
					<li><a href = "about.html">About</a></li>
					<li class = "active"><a href = "contact.html">Contact</a></li>
					<li><a href = "services.html">Services</a></li>
					<li><a href = "shop.html">Shop</a></li>
				</ul>
			</div>
			</div>
		</nav>
	</div>

	<!-- These are <EXTRA_INFO> blurbs. -->
	<div class = "row">
		<!-- Form container -->
		<div class = "col-md-6"><center>
			<h2>Got Broken Devices?</h2>
			<p>JTS Technology Services can help with that! <br/>Just contact JT at his mobile or email, or fill out this form now to send him an email! </p></center>
			<!-- BEGINNING OF THE FORM -->
				<form action = "broken_devices.php" class = "form-horizontal" role = "form">
					<div class = "form-group">
						<label class = "control-label col-sm-2" for = "name">Name: </label>
						<div class = "col-sm-6"><input type = "text" class = "form-control" name = "name" value = "<?php echo $name;?>" placeholder = "Enter your name. "></div>
					</div>
					<div class = "form-group">
						<label class = "control-label col-sm-2" for = "phone_num">Phone Number: </label>
						<div class = "col-sm-6"><input type = "text" class = "form-control" name = "phone_num" value = "<?php echo $phone_num;?>" placeholder = "Enter your phone number. "></div>
					</div>
					<div class = "form-group">
						<label class = "control-label col-sm-2" for = "location">Device: </label>
						<div class = "col-sm-6">
							<p>Please choose your device from the following: </p>
							<div class = "radio">
								<label><input type = "radio" name = "optionsRadio" id = "optionsRadios1" value = "option1" checked>iPod</label>
							</div>
							<div class = "radio">
								<label><input type = "radio" name = "optionsRadio" id = "optionsRadios2" value = "option2" checked>iPad</label>
							</div>
							<div class = "radio">
								<label><input type = "radio" name = "optionsRadio" id = "optionsRadios3" value = "option3" checked>iPhone</label>
							</div>
							<div class = "radio">
								<label><input type = "radio" name = "optionsRadio" id = "optionsRadios4" value = "option4" checked>Other</label>
							</div>
							<div class = "col-sm-12"><br />
								<input type = "text" class = "form-control" placeholder = "If you chose 'other', please enter your device here.">
							</div>
							<!--<input type = "location" class = "form-control" id = "location" placeholder = "Enter your location. ">-->
						</div>
					</div>
					<div class = "form-group">
						<label class = "control-label col-sm-2" for = "device">Location: </label>
						<div class = "col-sm-6"><input type = "text" class = "form-control" name = "location" value = "<?php echo $location;?>" placeholder = "Enter your location here."></div>
					</div>
					<div class = "col-sm-offset-2 col-sm-10"><p><strong>Note:</strong> Most repairs can be done in 30 minutes on the spot! </p></div>
					<div class = "form-group">
						<label class = "control-label col-sm-2" for = "message">Message: </label>
						<div class = "col-sm-6"><input type = "text" rows = "5" class = "form-control" name = "message" value = "<?php echo $location;?>" placeholder = "Write a message here. "></div>
					</div>
					<div class = "form-group">
						<div class = "col-sm-offset-2 col-sm-6">
							<button type = "submit" class = "btn btn-default">Submit </button>
						</div>
					</div>
				</form>

				<hr class = "featurette-divider" />
			<!-- email form powered by form spree below -->
			<!-- This currently worked. In the future we can make more complicated forms
				 by using a generic HTML5 form, then doing a POST to formspree.io --><center>
			<form method="POST" action="////formspree.io/jtsheppleitech@gmail.com">

					<!-- Customer enters their email & their message here. -->
				    <input type="email" name="_replyto" placeholder="Your email address" /> <br/>
				    <textarea name="message" rows="6" placeholder="Please enter your message here."></textarea>
				    <br/>

				    <!-- Future plan: add a custom "Thanks for your email! HTML page for customers to see" -->
				    <!-- <input type="hidden" name="_next" value="//site.io/thanks.html" /> -->

				    <!-- Customized subject line. The _gotcha is to fool spammers. -->
				    <input type="hidden" name="_subject" value="**You have a new message from a future customer!!**" />
				    <input type="text" name="_gotcha" style="display:none">
    				<button type="submit">Send</button>
			</form>
		</center></div>

		<!-- Map container -->
		<div class = "col-md-6"><center><br />
			<div id="map-canvas" style="width: 100%; height: 400px"></div>
			<p>I serve the areas surrounding Bolton, MA and Lowell, MA.</p>
			<p>If you are outside this area, I can still meet you if you are</p>
			<p>willing to drive to the areas listed.</p>
		</center></div>

	</div> <!-- End of <EXTRA_INFO> blubs! -->

	<hr class = "featurette-divider">

	<script type="text/javascript">
		initialize_map();
	</script>

	<!-- THIS IS THE FOOTER! -->
	<footer class = "footer">
		<div class = "container">
			<center><p class = "text-muted">JTS Technology Services &copy; 2014. All rights reserved. Powered by <a href = "http://www.getbootstrap.com/">Bootstrap</a>. </p></center>
		</div>
	</footer>

</body>
</html>