var s1 = new SystemOne();
var ui;

function UserInterface(rt){
    this.root = rt;

    $_ID('logout').onclick = function(){
        $_ID('login').className = 'section';
        //         $_ID('main').className += ' sectionExitToRight';
    }

    $_ID('mainform').onsubmit = function(){
        s1.login($_ID('uname').value, $_ID('upass').value);
        //         $_ID('login').className = 'section loginInactive';
        return false;
    }

    rt.onresize=function(){
        var classes = $_CLASS('rightSection');
        for(var i = 0; i<classes.length;i++){
            classes[i].width = (255 - rt.innerWidth) + 'px';
        }
    };

    this.initializeMenu();
}

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
//             tmp.style.opacity = '0.0';
//             tmp.style.display = 'none';
//             tmp.style.overflow = 'hidden';
//             tmp.style.height= '0%';
//         }
    }
    
    //$_ID('rightWindow').innerHTML = this.id;
//     targetSection.style.MozTransform = targetSection.style.webkitTransform = targetSection.style.transform = 'translateX(0%)';
//         targetSection.style.opacity = '1.0';
//         targetSection.style.overflow = 'auto';
//         targetSection.style.height = '100%';
    this.className += ' menuActive';
};

window.onload = function(){
    ui = new UserInterface(this);
};
