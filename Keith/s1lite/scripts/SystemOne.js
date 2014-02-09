function SystemOne(){
    this.user = null;
    this.loggedIn = false;
    this.ajax = new Ajax();
}

SystemOne.prototype.getName = function(){ return this.user.name; }
SystemOne.prototype.getLastLogin = function(){ return this.user.lastLogin; }
SystemOne.prototype.getUnits = function(){ return this.user.units; }
SystemOne.prototype.updateViewInfo = function(){
    if(this.loggedIn == true){
        $_ID('name').innerHTML = this.user.name;
        $_ID('lastLogin').innerHTML = this.user.lastLogin;
        $_ID('units').innerHTML = this.user.units;
        $_ID('icon').src = this.user.icon;

    }
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
