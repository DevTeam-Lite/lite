function SystemOne(mainui){
    this.user = null;
    this.ajax = new Ajax();
    this.ui = mainui;
    mainui.bind(this);
}

SystemOne.prototype.getUser = function(){
    return this.user;
}

SystemOne.prototype.logout = function(){
    var $ = this;
    this.ajax.requestPost("process.php?p=logout", 'sessid=' + this.sessionID, function(r){
        $.user = null;
        $.ui.logout();
    });
}

SystemOne.prototype.login = function(username, password){
    var $ = this;
    this.ajax.requestPost("process.php?p=login", 'user=' + username + '&password=' + password, function(r){
        try{
            var res = JSON.parse(r);
        }catch(e){
            return alert('The server has responded with invalid data.');
        }

        if(res.user){
            $.user = res.user;
            $.ui.login($.user);
            $.updateSection("news");
        } else {
            alert(res.message);
        }
    });
}

SystemOne.prototype.updateSection = function(section){
    var $ = this;
    switch(section){
        case "news":
            $.ui.setLoading("homeSection");
            this.ajax.requestGet("process.php?p=news", function(r){
                try{
                    var res = JSON.parse(r);
                }catch(e){
                    return alert('The server has responded with invalid data.');
                }
                $.ui.updateNews(res);
            });
            break;
    }
};
