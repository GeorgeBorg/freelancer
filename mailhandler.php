<?php 
		$to = "info@jackandgeorge.co";
		$from = $_POST['email'];
		$name = $_POST['name'];
		$subject = "Email from freelance site";
		$message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
		$headers = "From:" . $from;

		mail($to, $subject, $message, $headers);
		
		echo "Mail Sent (Sender: " . $from . ")";
?>
