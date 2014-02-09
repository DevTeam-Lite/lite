
function UserInterface(rt){
    this.root = rt;

    $_ID('mainform').onsubmit = function(){
        s1.login($_ID('uname').value, $_ID('upass').value);
        //         $_ID('login').className = 'section loginInactive';
        return false;
    };

    rt.onresize=function(){
        var classes = $_CLASS('rightSection');
        for(var i = 0; i<classes.length;i++){
            classes[i].width = (255 - rt.innerWidth) + 'px';
        }
    };

    this.initializeMenu();
    this.engine = null;
}

UserInterface.prototype.logout = function(){
    $_ID('login').className = 'section';
};

UserInterface.prototype.setEngine = function(s){
    this.engine = s;
    var $ss = s;
    $_ID('logout').onclick = function(){
        $ss.logout();
    };
};

UserInterface.prototype.initializeMenu = function(){
    var classes = $_CLASS('menuChoice');
    for(var i = 0; i < classes.length; i++){
        classes[i].onclick = this.activateMenu;
    }
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
//         console.log(classes[i].id + 'Section');
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

UserInterface.prototype.updateViewFromUserData = function(u){
    $_ID('name').innerHTML = u.name;
    $_ID('lastLogin').innerHTML = u.lastLogin;
    $_ID('units').innerHTML = u.units;
    $_ID('icon').src = u.icon;
};
