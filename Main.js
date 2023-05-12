var pinc= document.getElementById("pinc");
pinc.addEventListener('click',function(){
var count=document.getElementById("pc");
var productprice=document.getElementById("pepsiprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
icount++;
count.innerHTML=icount;
productprice.innerHTML=icount*10;
itotal= itotal+10;
total.innerHTML=itotal;
});

var pdec= document.getElementById("pdec");
pdec.addEventListener('click',function(){
var count=document.getElementById("pc");
var productprice=document.getElementById("pepsiprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
if(0>icount-1){
    alert("ALREADY 0 PEPSI")
}
else{
icount--;
count.innerHTML=icount;
productprice.innerHTML=icount*10;
itotal= itotal-10;
total.innerHTML=itotal;}
});

var rinc= document.getElementById("rinc");
rinc.addEventListener('click',function(){
var count=document.getElementById("rc");
var productprice=document.getElementById("redbullprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
icount++;
count.innerHTML=icount;
productprice.innerHTML=icount*35;
itotal= itotal+35;
total.innerHTML=itotal;
});

var rdec= document.getElementById("rdec");
rdec.addEventListener('click',function(){
var count=document.getElementById("rc");
var productprice=document.getElementById("redbullprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
if(0>icount-1){
    alert("ALREADY 0 REDBULL")
}
else{
icount--;
count.innerHTML=icount;
productprice.innerHTML=icount*35;
itotal= itotal-35;
total.innerHTML=itotal;}
});

var ainc= document.getElementById("ainc");
ainc.addEventListener('click',function(){
var count=document.getElementById("ac");
var productprice=document.getElementById("amstellprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
icount++;
count.innerHTML=icount;
productprice.innerHTML=icount*15;
itotal= itotal+15;
total.innerHTML=itotal;
});

var adec= document.getElementById("adec");
adec.addEventListener('click',function(){
var count=document.getElementById("ac");
var productprice=document.getElementById("amstellprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
if(0>icount-1){
    alert("ALREADY 0 AMSTELL")
}
else{
icount--;
count.innerHTML=icount;
productprice.innerHTML=icount*15;
itotal= itotal-15;
total.innerHTML=itotal;}
});

var sinc= document.getElementById("sinc");
sinc.addEventListener('click',function(){
var count=document.getElementById("sc");
var productprice=document.getElementById("sevenupprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
icount++;
count.innerHTML=icount;
productprice.innerHTML=icount*10;
itotal= itotal+10;
total.innerHTML=itotal;
});

var sdec= document.getElementById("sdec");
sdec.addEventListener('click',function(){
var count=document.getElementById("sc");
var productprice=document.getElementById("sevenupprice");
var total=document.getElementById("totalprice");
var icount=parseFloat(count.textContent);
var itotal=parseFloat(total.textContent);
if(0>icount-1){
    alert("ALREADY 0 SEVENUP")
}
else{
icount--;
count.innerHTML=icount;
productprice.innerHTML=icount*10;
itotal= itotal-10;
total.innerHTML=itotal;}
});
    
