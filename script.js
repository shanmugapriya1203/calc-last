function create(tag,attrname,attrvalue){
    var ele=document.createElement(tag);    
    ele.setAttribute(attrname,attrvalue);       
    return ele;
}
function createb(tag,attrname,attrvalue,content){
    var ele=document.createElement(tag);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;    
    return ele;
} 

var calc = create("div","id","calc");
var res = create("div","id","res");
var historys = createb("div","id","history",`<p id="history-value"></p>`);
var out= createb("div","id","out",`<input type="text" id="result">`);
var key = create("div","id","key");


var b1 = createb("button","class","button","C");
b1.setAttribute("id","clear");
 var b2 = createb("button","class","button","&larr;");
 b2.setAttribute("id","backspace");
 var b3 = createb("button","class","button","%");
 b3.setAttribute("id","operator");
 var b4 = createb("button","class","button","/");
 b4.setAttribute("id","operator");
 var b5 = createb("button","class","button","7");
 b5.setAttribute("id","number");
 var b6 = createb("button","class","button","8");
 b6.setAttribute("id","number");
 var b7 = createb("button","class","button","9");
 b7.setAttribute("id","number");
 var b8 = createb("button","class","button","*");
 b8.setAttribute("id","operator");
 var b9 = createb("button","class","button","4");
 b9.setAttribute("id","number");
 var b10 = createb("button","class","button","5");
 b10.setAttribute("id","number");
 var b11 = createb("button","class","button","6");
 b11.setAttribute("id","number");
 var b12 = createb("button","class","button","-");
 b12.setAttribute("id","subtract");
 var b13 = createb("button","class","button","1");
 b13.setAttribute("id","number");
 var b14 = createb("button","class","button","2");
 b14.setAttribute("id","number");
 var b15 = createb("button","class","button","3");
 b15.setAttribute("id","number");
 var b16 = createb("button","class","button","+");
 b16.setAttribute("id","add");
 var b17 = createb("button","class","button","0");
 b17.setAttribute("id","number");
 var b18 = createb("button","class","button","00");
 b18.setAttribute("id","number");
 var b19 = createb("button","class","button",".");
 b19.setAttribute("id","operator");
 var b20 = createb("button","class","button","=");
 b20.setAttribute("id","equal");

 key.append(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20);
 res.append(historys,out);
 calc.append(res,key); 
 document.body.append(calc);

