<?php 
		$to = "jclackett@gmail.com";
		$from = $_POST['email'];
		$name = $_POST['name'];
		$subject = "Email from freelance site";
		$message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
		$headers = "From:" . $from;

		mail($to, $subject, $message, $headers);
		
		/* 	$conf_subject = "Copy of your email to Green Insights";
			$conf_message = "Here is a copy of your message you sent to Green Insights. We will get back to you shortly. " . $first_name . "\n\n" . $_POST['message'];
			$conf_header = "From:" . $to;
			mail($from, $conf_subject, $conf_message, $conf_header); */
		
		echo "Mail Sent (Sender: " . $from . ")";
?>
