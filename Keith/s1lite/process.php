<?php
    error_reporting(~E_ALL);
    if($_GET['p'] == 'login'){
    $login="false";
        switch($_POST['user']){
            case "2012-01065":
                if($_POST['password'] == "pewpewpew"){
                    $login="true";
                    $name = "Ferriel Melarpis";
                    $lastLogin = "1/24/14";
                    $units = "18";
                    $icon = "images/yhel.jpg";
                }
                break;
            case "bulacs":
                if($_POST['password'] == "pewpewpew"){
                    $login="true";
                    $name = "Rommel Bulalacao";
                    $lastLogin = "2/3/14";
                    $units = "18";
                    $icon = "images/bulacs.png";
                }
                break;
        }
        
        if($login == "true"){
            $message = "You have succesfully logged in!";
        } else {
            $message = "You have entered invalid login credentials.";
        }
    echo <<<ASD
{
        "login": $login,
        "user":{
            "name": "$name",
            "lastLogin": "$lastLogin",
            "units": "$units",
            "icon": "$icon"
        },
        "message": "$message {$_POST[0]}"
}
ASD;
}
?>
