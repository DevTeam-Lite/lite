
function UserInterface(){

    var classes = $_CLASS('menuChoice');
    for(var i = 0; i < classes.length; i++){
        classes[i].onclick = this.activateMenu;
    }

    rt.onresize=function(){
        var classes = $_CLASS('rightSection');
        for(var i = 0; i<classes.length;i++){
            classes[i].width = (255 - rt.innerWidth) + 'px';
        }
    };
}

UserInterface.prototype.logout = function(){
    $_ID('login').className = 'section';
    $_ID('name').innerHTML = "";
    $_ID('lastLogin').innerHTML = "";
    $_ID('units').innerHTML = "";
    $_ID('icon').src = "";
};

UserInterface.prototype.login = function(user){
    $_ID('login').className = 'section loginInactive';

    $_ID('name').innerHTML = user.name
    $_ID('lastLogin').innerHTML = user.lastLogin;
    $_ID('units').innerHTML = user.units;
    $_ID('icon').src = user.icon;

}

UserInterface.prototype.bind = function($){

    $_ID('mainform').onsubmit = function(){
        $.login($_ID('uname').value, $_ID('upass').value);
        return false;
    };

    $_ID('logout').onclick = function(){
        $.logout();
    };
};

UserInterface.prototype.activateMenu = function(){
    var classes = $_CLASS('menuChoice');
    if(classes == null) return;
    var targetSection = $_ID(this.id + 'Section');
    if(targetSection == null) return;

    for(var i = 0; i < classes.length; i++){
        if(tmp!=null)
            tmp.style.animation = null;
    }

    for(var i = 0; i < classes.length; i++){
        classes[i].className = 'menuChoice';
        var tmp = $_ID(classes[i].id + 'Section');
        if(tmp!=null){
            console.log(tmp.id + ":" + tmp.getAttribute('active'))
            if(tmp.getAttribute('active') == "true"){
                console.log('Active attribute found in ' + tmp.id)
                if(tmp.getAttribute('index') < targetSection.getAttribute('index')){
                    console.log('Setting tmp.' + tmp.id + "'s class to exitToLeft");
                    tmp.className = 'rightSection exitToLeft';
                    targetSection.className = 'rightSection enterFromRight';
                }else if(tmp.getAttribute('index') > targetSection.getAttribute('index')){
                    tmp.className = 'rightSection exitToRight';
                    targetSection.className = 'rightSection enterFromLeft';
                }
                tmp.setAttribute('active','false');
                targetSection.setAttribute('active','true');
            }
        }
    }
    this.className += ' menuActive';
};
