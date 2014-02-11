<?php
    /*
        Should implement:
            $_GET['p'] == "login"
            $_GET['p'] == "logout"
            $_GET['p'] == "news"
            $_GET['p'] == "enlist"
                $_GET['sp'] == "enlist"
                $_GET['sp'] == "cancel"
                $_GET['sp'] == "waitlist"
                $_GET['sp'] == "dewaitlist"
                $_GET['sp'] == "finalize"
            $_GET['p'] == "search"
    */
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
    "user":{
        "name": "$name",
        "lastLogin": "$lastLogin",
        "units": "$units",
        "icon": "$icon",
        "sessionID": "8f2a08cfcdd821c6334a8bcb5e058961"
    },
    "message": "$message {$_POST[0]}"
}
ASD;
}

    if($_GET['p'] == "news"){
        $lipsum = <<<LI
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dolor purus. Morbi a adipiscing neque, nec venenatis arcu. Morbi a diam iaculis mi pellentesque mollis ac id est. Sed elementum sed purus in accumsan. Pellentesque dignissim, lorem sollicitudin luctus dictum, magna nisi elementum massa, ut elementum lorem leo id enim. Phasellus non vehicula ligula. Aliquam vehicula posuere nunc nec pulvinar. Nulla vestibulum nec ligula eget laoreet. Cras risus leo, condimentum eu ligula a, sodales eleifend eros. Vivamus varius viverra varius. Donec tellus nisl, tristique et purus non, pharetra interdum ante. Aenean non purus leo. Vivamus ut neque lectus.</p><p>Vivamus lobortis interdum ornare. Morbi porttitor lacinia nunc et lobortis. Duis vulputate et enim pretium suscipit. Aenean gravida eros non nisi molestie porttitor. Curabitur non leo dui. Cras iaculis, dui sit amet vestibulum semper, nunc diam gravida massa, sed facilisis tortor metus vitae magna. Sed id ante congue, varius urna vitae, varius elit.</p>
LI;
        $lipsum2 = preg_replace("/\n/", "\\n", $lipsum);
        echo <<<ASD
{
    "news": [
        {
            "title": "Experimental Site is Now Up",
            "body": "And so, we have an experimental site.",
            "author": "Keith Certeza",
            "date": "Tue Feb 11 19:57:24 JST 2014"
        },
        {
            "title": "Lorem Ipsum",
            "body": "$lipsum2",
            "author": "Rommel Bulalacao",
            "date": "Tue Feb 11 19:57:24 JST 2014"
        }
    ]
}
ASD;
    }
?>
