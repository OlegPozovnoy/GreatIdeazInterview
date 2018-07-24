<?php 
require_once("view/header.html");

$action = filter_input(INPUT_GET,'action');

if (isset($action)==false)
	require_once("view/main.html");
else{
try {
	require_once("view/".$action.".html");
	}
catch (Exception $e)
	{
	require_once("view/main.html");
	}
}


require_once("view/footer.html");
?>
