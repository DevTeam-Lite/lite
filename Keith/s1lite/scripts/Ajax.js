var createXMLHttpRequest = function () {
    try { return new XMLHttpRequest(); }
    catch (e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
    catch (e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
    catch (e) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP"); }
    catch (e) {}
    throw new Error("This browser does not support XMLHttpRequest.");
};

function Ajax(){
    
    this.xmlr = createXMLHttpRequest();

    this.xmlr.ontimeout = function(){
        alert(alert("The previous request timed out."));
    }

    this.xmlr.onerror = function(){
        alert("An error has occured while attempting to send a request to the server.");
    }

}

Ajax.prototype.requestGet = function(url, func){
    this.xmlr.onreadystatechange = function(){
        if(this.readyState == 4){
            func(this.responseText);
        }
    }
    

    this.xmlr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.xmlr.setRequestHeader("Content-length", null);
    this.xmlr.setRequestHeader("Connection", "close");

    this.xmlr.open("GET", url, true);
    this.xmlr.send();
}

Ajax.prototype.requestPost = function(url, data, func){
    this.xmlr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 0) alert("A server timeout has occured.");
            else if(this.status != 200) alert("The server responded with a status code of " + this.status + ".");
            else if(this.responseText.length <= 0) this.onerror;
            else func(this.responseText);
        }
    }
    this.xmlr.open("POST", url, true);

     this.xmlr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     this.xmlr.setRequestHeader("Content-length", data.length);
     this.xmlr.setRequestHeader("Connection", "close");

    this.xmlr.send(data);
}
