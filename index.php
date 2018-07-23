<?php 
require_once("view/header.html");

$action = filter_input(INPUT_GET,'action');


if ($action=='main')
	{
	require_once("view/main.html");
	}
else if ($action=='tech_strat_arch')
    {
    require_once("view/tech_strat_arch.html");
    }
else if ($action=='outsource')
    {
    require_once("view/outsource.html");
    }
else if ($action=='managedd_services')
    {
    require_once("view/managedd_services.html");
    }
else if ($action=='tailored')
    {
    require_once("view/tailored.html");
    }
else if ($action=='pragmatic')
    {
    require_once("view/pragmatic.html");
    }
else if ($action=='virtualiztion')
    {
    require_once("view/virtualiztion.html");
    }
else if ($action=='clients')
    {
    require_once("view/clients.html");
    }
else if ($action=='contacts')
    {
    require_once("view/contacts.html");
    }
else if ($action=='about')
    {
    require_once("view/about.html");
    }
else if ($action=='industryexp')
    {
    require_once("view/industryexp.html");
    }
else if ($action=='team')
    {
    require_once("view/team.html");
    }
else if ($action=='manifesto')
    {
    require_once("view/manifesto.html");
    }
else if ($action=='howtoengage')
    {
    require_once("view/howtoengage.html");    	
    }
else 
	{
	require_once("view/main.html");
	}



require_once("view/footer.html");
?>
