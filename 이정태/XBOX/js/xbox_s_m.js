var sp = ["android", "ipad", "iphone"]; 
        for(var i = 0; i < 3; i++) {
            if(navigator.userAgent.toLowerCase().match(sp[i])) {

                location.replace("xbox_m.html");
            }
        }