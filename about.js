var inputs = document.getElementsByClassName("form-control");
var input = document.getElementsByClassName("yuo");
// function searchProduct(term)
// {
//      var cart ="";
//      for (var i = 0; i < container.length; i++) 
//      {
//          if(container[i].k.toLowerCase().includes(term.toLowerCase()))
//          {
//           temp+="<tr><td>"+container[i].k+"</td>"
//           +"<td>"+container[i].l+"</td>"
//           +"<td>"+container[i].m+"</td>"
//           +"<td>"+container[i].n+"</td></tr>"    
//          }  
//      }
//      document.getElementById("table").innerHTML = cart;
     
// }
function deleteProduct(indx) 
{
    var deleted = pcontainer.splice(indx,1);
    localStorage.setItem("productData",JSON.stringify(pcontainer))
    display();  
}
function deleteP(inx) 
{
    var deleted = productsContainer.splice(inx,1);
    localStorage.setItem("productData",JSON.stringify(productsContainer))
    displayProducts();  
}
function updateProduct(i) 
{
    document.getElementById("1").value=pcontainer[i].n;
    document.getElementById("2").value=pcontainer[i].m;
    document.getElementById("3").value=pcontainer[i].l;
    document.getElementById("4").value=pcontainer[i].k; 
    document.getElementById("h").innerHTML="تعديل";
    deleteProduct(i);
}
function clearForm()
{ 
    for (var i = 0; i < inputs.length; i++)
    {
        inputs[i].value = "";
    }
}
function clear()
{ 
    for (var i = 0; i < input.length; i++)
    {
        input[i].value = "";
    }
}
function displayProducts()
{
    
var tah="";    
var yo="" ;
var ca = 0;
var cas ="";
var cart ="";
var ms =0;
var mss=0;
var zd =0;
var nk =0;

for(var i = 0 ; i < productsContainer.length ;i++)
    {
    var g=Number(productsContainer[i].yo) +Number(productsContainer[i].thy)
     yo+="<tr><td>"+productsContainer[i].id+"</td>"
     +"<td>"+productsContainer[i].yo+"</td>"
     +"<td>"+g
     +"</td>"+"<button onclick ='deleteP("+i+")' class='small  kl o m-2' >حذف </button>"+"</tr>";
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    {
     ca+=Number( productsContainer[i].yo  -productsContainer[i].thk) ;
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    {
        cas+="<tr><td>"+productsContainer[i].id+"</td>"
        +"<td>"+productsContainer[i].ca
        +"</td><button onclick ='deleteP("+i+")' class='small  kl o m-2' > حذف </button>"+"</tr>";
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    {
        cart+="<tr><td>"+productsContainer[i].id+"</td>"
        +"<td>"+productsContainer[i].zd+"</td>"
        +"<td>"+productsContainer[i].nk
        +"</td><button onclick ='deleteP("+i+")' class='small  kl o m-2' > حذف </button>"+"</tr>";
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    {
        tah+="<tr><td>"+productsContainer[i].id+"</td>"
        +"<td>"+productsContainer[i].thy+"</td>"
        +"<td>"+productsContainer[i].thk 
        +"</td>"+"<button onclick ='deleteP("+i+")' class='small  kl o m-2' >حذف </button>"+"</tr>";
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    { 
        ms+=Number( productsContainer[i].thy );
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    {
       
        mss+=Number( productsContainer[i].thk );
      
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    {
        zd+=Number( productsContainer[i].zd );
    }
for(var i = 0 ; i < productsContainer.length ;i++)
    {  
        nk+=Number( productsContainer[i].nk ); 
    }
document.getElementById("tableyo").innerHTML = yo;
document.getElementById("c").innerHTML = ca;
document.getElementById("tableca").innerHTML = cas;
document.getElementById("tabletah").innerHTML = tah;
document.getElementById("tablefl").innerHTML = cart;
document.getElementById("ms").innerHTML = ms;
document.getElementById("mss").innerHTML = mss;
document.getElementById("gzd").innerHTML = zd;
document.getElementById("gnk").innerHTML = nk;
}
var productsContainer ;
if(localStorage.getItem("productData")== null)
{
       productsContainer =[];   
}
else
{
     productsContainer = JSON.parse(localStorage.getItem("productData") );
         displayProducts();
}
function addProduct() {
    var productid = document.getElementById("productidInp").value;
    var productyo = document.getElementById("productyoInp").value;
    var productthy = document.getElementById("productthyInp").value;
    var productthk = document.getElementById("productthkInp").value;
    var productca = document.getElementById("productcaInp").value;
    var productzd = document.getElementById("productzdInp").value;
    var productnk = document.getElementById("productnkInp").value;
    if(productid=="")
        {
            alert("يجب ادخال البيانات")
        }
        else
        {
     var product =
     {
         id:productid,
         thy: productthy,
         thk: productthk,
         yo:productyo,
         ca:productca,
         zd:productzd,
         nk:productnk
     }
     productsContainer.push(product);
     localStorage.setItem("productData",JSON.stringify(productsContainer))    
    }
    window.alert("تم التحديث");
     displayProducts();
     clearForm();       
}
function display()
{
var temp = "";
var tempbe = "";
for(var i = 0 ; i < pcontainer.length ;i++)
{
     temp+="<tr><td>"+pcontainer[i].n+"</td>"
     +"<td>"+pcontainer[i].m+"</td>"
     +"<td>"+pcontainer[i].l+"</td>"
     +"<td>"+pcontainer[i].k
     +"</td>"+"<button onclick ='updateProduct("+i+")' class='small  kl o m-2' >تعديل </button>"
     +"<button onclick ='deleteProduct("+i+")' class='small  kl o m-2' >حذف </button></tr>";
}
for(var i = 0 ; i < pcontainer.length ;i++)
{
    var cart = pcontainer[i].n *(pcontainer[i].l - pcontainer[i].m);
     tempbe+="<tr><td>"+cart+"</td>"
     +"<td>"+(pcontainer[i].l - pcontainer[i].m)+"</td>"
     +"<td>"+pcontainer[i].k
     +"<td></tr>";
}
document.getElementById("table").innerHTML = temp;
document.getElementById("tablebe").innerHTML = tempbe;
}
var pcontainer=[] ;
if(localStorage.getItem("Data") == null)
{
    pcontainer =[];   
}
else
{
    pcontainer = JSON.parse(localStorage.getItem("Data") );
         display();
}
function tsgel() 
    {
    var product1 = document.getElementById("1").value;
    var product2 = document.getElementById("2").value;
    var product3 = document.getElementById("3").value;
    var product4 = document.getElementById("4").value;
        var prd=
        {
            n:product1,
            m:product2,
            l:product3,
            k:product4,
            
        }
    pcontainer.push(prd);
    localStorage.setItem("Data",JSON.stringify(pcontainer));
    if(document.getElementById("h").innerHTML=="تعديل")
    {
        
        window.alert("تم التعديل");
        document.getElementById("h").innerHTML="تسجيل"
       
    }
    else
    window.alert("تم التسجيل");
    display();
    clear();
} 


