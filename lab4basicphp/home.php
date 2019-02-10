<?php
	$nameErr = $emailErr = "";
	$name = $email ="";

	if (isset($_POST['name'],$_POST['email'],$_POST['age'])) {
		if(empty($_POST['name'])){
			$username = "Name is required";
		}else{
			$username = test_input($_POST['name']);
			if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      		$nameErr = "Only letters and white space allowed"; 
    		}
		}
		if (empty($_POST["email"])) {
	    $emailErr = "Email is required";
		} else {
		    $email = test_input($_POST["email"]);
		    // check if e-mail address is well-formed
		    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		      $emailErr = "Invalid email format"; 
		    }
		}
				
	}

	
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

<!DOCTYPE html>
<html>
<head>
<Style>
	.error {color: #FF0000;}
</Style>
<title>Expense monthly</title>
</head>
<body>
	<form method="post" action="home.php">
		<br>
		Name: 
		<input type="text" name="name" placeholder="What is your name?">
		<span class="error">* <?php echo $nameErr;?></span>
		<br><br>
		Email: 
		<input type="text" name="email" placeholder="Your email">
		<span class="error">* <?php echo $emailErr;?></span>
		 <input type="submit" name="submit" value="Submit">
		<br><br>
		
	</form>

	<form action="upload.php" method="POST" enctype="multipart/form-data">
		Upload your Image here. Size is not more than 10MB.
  		<br><br>
  		<input type="file" name="file">
  		<button type="submit" name="submit">UPLOAD
  		</button>
	</form>
	<?php
		echo "<h2>Your Input:</h2>";
		echo $name;
		echo "<br>";
		echo $email;
?>


</body>
</html>