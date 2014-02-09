function SystemOne(mainui){
    this.user = null;
    this.loggedIn = false;
    this.ajax = new Ajax();
    this.ui = mainui;
    mainui.setEngine(this);
    this.sessionID = "";
}

SystemOne.prototype.getName = function(){ return this.user.name; }
SystemOne.prototype.getLastLogin = function(){ return this.user.lastLogin; }
SystemOne.prototype.getUnits = function(){ return this.user.units; }
SystemOne.prototype.updateViewInfo = function(){
    if(this.loggedIn == true){
        this.ui.updateViewFromUserData(this.user);
    }
}

SystemOne.prototype.logout = function(){
    var $ss = this;
    this.ajax.requestPost("process.php?p=logout", 'sessid=' + this.sessionID, function(r){
        $ss.loggedIn = false;
        $ss.ui.logout();
    });
}

SystemOne.prototype.login = function(username, password){
    var $ss = this;
    this.ajax.requestPost("process.php?p=login", 'user=' + username + '&password=' + password, function(r){
//         alert(r);
        try{
            var res = JSON.parse(r);
        }catch(e){
            return alert('The server has responded with invalid data.');
        }

        if(res.login){
            $ss.user = res.user;
            $ss.loggedIn = true;
            $ss.updateViewInfo();
            $_ID('login').className = 'section loginInactive';
            alert("You have successfully logged in with the following data:\n" + JSON.stringify(res));
        } else {
            alert(res.message);
        }
    });
}
