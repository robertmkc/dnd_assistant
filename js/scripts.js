function RollDice(sides, advantage, disadvantage)
{
    if ((!advantage) && (!disadvantage))
        return Math.floor(Math.random() * sides) + 1;
    if (advantage)
    {
        var roll = Math.floor(Math.random() * sides) + 1;
        var roll2 = Math.floor(Math.random() * sides) + 1;
        if (roll > roll2) return roll;
        return roll2;
    }
    if (disadvantage)
    {
        var roll = Math.floor(Math.random() * sides) + 1;
        var roll2 = Math.floor(Math.random() * sides) + 1;
        if (roll < roll2) return roll;
        return roll2;
    }
}

function RollMultipleDice(dice)
{
    var quantity = dice.substr(0, dice.indexOf('d'));
    var sides = dice.substr(dice.indexOf('d') + 1);
    var results = 0;
    for (var x=0; x<quantity; x++)
    {
        results += RollDice(sides, false, false);
    }
    return results;
}

function GetBonus(score)
{
    var bonus = Math.floor((score - 10)/2);
    return bonus;
}

function createCookie(name, value, seconds) {
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 100000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";

    if (value)
        if ((value.length > 4000) && (typeof(Storage) !== "undefined")) {
            document.cookie = name + "=LOCALSTORAGE" + expires + "; path=/;";
            localStorage.setItem(name, value);
        }
        else
            document.cookie = name + "=" + value + expires + "; path=/;";
    else
        document.cookie = name + "=;" + expires + "; path=/;";
}

function readCookie(name) {
    var rtn = "";
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) rtn = c.substring(nameEQ.length, c.length);
        if (rtn == "LOCALSTORAGE")
            return localStorage.getItem(name);
    }
    return rtn;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  function StopProp()
  {
    if (!e)
    e = window.event;

    //IE9 & Other Browsers
    if (e.stopPropagation) {
    e.stopPropagation();
    }
    //IE8 and Lower
    else {
    e.cancelBubble = true;
    }
  }

  var firstBy = (function() {

    function identity(v){return v;}

    function ignoreCase(v){return typeof(v)==="string" ? v.toLowerCase() : v;}

    function makeCompareFunction(f, opt){
        opt = typeof(opt)==="number" ? {direction:opt} : opt||{};
        if(typeof(f)!="function"){
            var prop = f;
            // make unary function
            f = function(v1){return !!v1[prop] ? v1[prop] : "";}
        }
        if(f.length === 1) {
            // f is a unary function mapping a single item to its sort score
            var uf = f;
            var preprocess = opt.ignoreCase?ignoreCase:identity;
            var cmp = opt.cmp || function(v1,v2) {return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;}
            f = function(v1,v2) {return cmp(preprocess(uf(v1)), preprocess(uf(v2)));}
        }
        if(opt.direction === -1) return function(v1,v2){return -f(v1,v2)};
        return f;
    }

    /* adds a secondary compare function to the target function (`this` context)
       which is applied in case the first one returns 0 (equal)
       returns a new compare function, which has a `thenBy` method as well */
    function tb(func, opt) {
        /* should get value false for the first call. This can be done by calling the 
        exported function, or the firstBy property on it (for es6 module compatibility)
        */
        var x = (typeof(this) == "function" && !this.firstBy) ? this : false;
        var y = makeCompareFunction(func, opt);
        var f = x ? function(a, b) {
                        return x(a,b) || y(a,b);
                    }
                  : y;
        f.thenBy = tb;
        return f;
    }
    tb.firstBy = tb;
    return tb;
})();