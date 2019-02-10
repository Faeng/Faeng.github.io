<?php
if(!empty($_GET['file'])){
	$fileName = basename($_GET['file']);
	$filePath = "files/".$fileName;
	if(!empty($fileName)&& file_exists($filePath)){
		header("Cache-Control: public");
		header("Content-Description: File Tranfer");
		header("Content-Disposition: attachment; filename=$fileName");
		header("Content-Type: application/zip");
		header("Content-Tranfer-Encoding: binary");

		readfile($filePath);
		exit;
	}
}


  ?>