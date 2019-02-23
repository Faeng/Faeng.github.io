<?php 
   $nameErr = $emailErr = "";
  $name = $email ="";
  if(isset($_POST['name'])&&isset($_POST['email'])){
     if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
    }
    echo "<H1>Please Welcome.</H1>";
    echo " ".$_POST['name']."<br>";
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
    echo "Your Email is ".$_POST['email']."<br>";
  }
  $file = $_FILES['file'];
  $fileName = $_FILES['file']['name'];
  $fileTmpName = $_FILES['file']['tmp_name'];
  $fileSize = $_FILES['file']['size'];
  $fileError = $_FILES['file']['error'];
  $fileType = $_FILES['file']['type'];

  $fileExt = explode('.', $fileName);

  $fileActualExt = strtolower(end($fileExt));

  $allowed = array('jpg','jpeg','png','csv');
  if(in_array($fileActualExt, $allowed)){
    if($fileError === 0){
      if($fileSize < 1000000){
        $fileNameNew = uniqid('',true).".".$fileActualExt;
        $fileDestination = 'uploads/'.$fileNameNew;
        move_uploaded_file($fileTmpName, $fileDestination);
        echo "<img src='$fileDestination' alt='error' width='200px' heigth='200px'>";
        echo "<br>";
      }else{
        echo "Your file is too big!";
      }
    }else {
      echo "There was an error uploading your file!";   
    }
  }else{
    echo "This file is can not upload to our site!";
  }

  $filecsv = $_FILES['filecsv'];
  $fileName = $_FILES['filecsv']['name'];
  $fileTmpName = $_FILES['filecsv']['tmp_name'];
  $fileSize = $_FILES['filecsv']['size'];
  $fileError = $_FILES['filecsv']['error'];
  $fileType = $_FILES['filecsv']['type'];

  $fileExt = explode('.', $fileName);

  $fileActualExt = strtolower(end($fileExt));

  $allowed = array('csv');
  if(in_array($fileActualExt, $allowed)){
    if($fileError === 0){
      if($fileSize < 1000000){
        $fileNameNew = uniqid('',true).".".$fileActualExt;
        $fileDestination = 'uploads/'.$fileNameNew;
        move_uploaded_file($fileTmpName, $fileDestination);
      }else{
        echo "Your file is too big!";
      }
    }else {
      echo "There was an error uploading your file!";   
    }
  }else{
    echo "This file is can not upload to our site!";
  }

  $file = fopen('uploads/'.$fileNameNew, "r");
  echo "<pre>";
  echo '<table style="table-layout:fixed " >'; 
  echo '<tr style="background-color: orange", style="width: 500px;">
  <td style="width: 500px;">
  Months
  </td>
  <td style="width: 500px;">
  Expense(Baht)
  </td style="width: 500px;">
  <td>
  Income(Baht)
  </td > 
  <td style="width: 500px;">
  Total
  </td>
  </tr>';
  while (! feof($file)) {
    echo '<tr>';
    $csv = fgetcsv($file);
    for ($i=0; $i < 3; $i++) { 
      echo '<td>'.$csv[$i]."<td>";
      if($i==2){
        $temp1 = $csv[$i];
        $temp2 = $csv[$i-1];
        $result = $temp1-$temp2;
        echo '<td style="width: 500px;">'.$result."</td>";
      }
    }
    echo "</tr>";
  }
  echo "</table>";
  echo "</pre>";
  fclose($file);

  // echo "<pre>";
  // echo "<table>";
  // while (!feof($file)) {
  //   echo "<tr>";
  //   $str = fgetcsv($file);
  //   for ($i=4; $i <($str) ; $i++) { 
  //     echo "<td> ".$str[$i]."<td>";
  //   }
  //   echo "</tr>";
  // }
  // echo "</table>";
  // echo "</pre>";
  // fclose($file);


  //part of file CSV 
  // if(isset($_POST["filecsv"])){
  // $file = $_FILES['file'];
  // $fileName = $_FILES['file']['name'];
  // $fileTmpName = $_FILES['file']['tmp_name'];
  // $fileSize = $_FILES['file']['size'];
  // $fileError = $_FILES['file']['error'];
  // $fileType = $_FILES['file']['type'];

  // $fileExt = explode('.', $fileName);

  // $fileActualExt = strtolower(end($fileExt));

  // $allowed = array('csv');
  // if(in_array($fileActualExt, $allowed)){
  //   if($fileError === 0){
  //     if($fileSize < 1000000){
  //       $fileNameNew = uniqid('',true).".".$fileActualExt;
  //       $fileDestination = 'uploads/'.$fileNameNew;
  //       move_uploaded_file($fileTmpName, $fileDestination);
  //     }else{
  //       echo "Your file is too big!";
  //     }
  //   }else {
  //     echo "There was an error uploading your file!";   
  //   }
  // }else{
  //   echo "This file is can not upload to our site!";
  // }
  //   if($fileActualExt=='csv'){
  //   $fileCSV = file('$fileDestination');
  //     foreach ($fileCSV as $key => $value) {
  //       $csv[]=explode(',', $key);
  //       print_r($csv);
  //     }
  //   }
  // }
}

  
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>