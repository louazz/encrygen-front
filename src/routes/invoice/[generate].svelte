<script>
  import { page } from '$app/stores';
import { goto } from "$app/navigation";
import { onMount } from 'svelte';
import QrCode from "./QrJs.svelte";
import { browser } from "$app/env";

let products=[], total=0, client={}, id="", user={}, profile={}, date=null;
const extractUrl=()=>{
 let url=window.location.href;
 for (var i=0; i<url.length; i++){
  if(url[i]+url[i+1]+url[i+2]+url[i+3]+url[i+4]+url[i+5]+url[i+6]=='invoice'){
    return url.slice(i+8, url.length)
   }
 }
}

const displayInvoice= async(key)=> {
 let parm=extractUrl();
 //alert(parm)
   return await fetch('https://backend.encrygen.co.uk/api/invoices/display/'+parm, {
  method: 'POST',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  "key":key
  
})
}
)
  .then(response => {
      if( response.ok){
       if (response.body==null){
          alert("you are not allowed to view this content")
           goto("/")
      }else{
       alert ("Invoice found successfully...")
       return response.json()
      }
      }else{
       alert("you are not allowed to view this content")
           goto("/")
      }}

    )
}
onMount(async()=>{
 if($page.params.generate !="display"){
  let key= prompt("Please enter your key:");
   if (key == null || key == "") {
       alert("no key")
   goto("/")
 } else {
 let data=await  displayInvoice(key);
 products=data.products;
     id= data._id;
     client=data.client;
     total=data.total;
     user= data.user;
     profile=data.profile;
     date= data.date
 //alert(user)
 }
 }
 
})

const onCapture = async() =>{
var canvas = document.getElementById("capture");
if(browser){

var divContents = window.$("#capture").html();
}
      var printWindow = window.open('', '', 'height=400,width=800');
      printWindow.document.write(`<html><head><title>Doc ${Date()}</title>`);
      printWindow.document.write('	<link rel="stylesheet" href="/normalize.css"> <link rel="stylesheet" href="/skeleton.css">')
      printWindow.document.write('</head><body ><div class="container">');
      printWindow.document.write(divContents);
      printWindow.document.write('</div><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></body></html>');
      printWindow.document.close();
      let p=new Promise(resolve => setTimeout(resolve, 400));
      await p;
      printWindow.print();    

    }
</script>
<center><button class="button-secondary" on:click={onCapture}>Download PDF</button></center>
<hr>
<div id="capture">
<div class="row" >
<div class="one-half column"><p><small> {client["name"]}<br>
     {client["Faddress"]}<br>
    {client["country"]}<br>
 {client["city"]}<br>
     {client["postcode"]}</small></p> </div>
<div class="one-half column"><p class="u-pull-right"><small>{profile.Institution} <br>
  {profile.postcode} <br>
   {profile.city} <br>
   {profile.country}</small></p></div>
</div>

<center><h5>Invoice</h5><p><small>id: {id}</small></p> <p><QrCode codeValue={window.location.href} squareSize=100 /> <small>scan and share</small></p> </center>

<table class="u-full-width">
  <thead>
    <tr>
      <th colspan="3">Product</th>
      <th>Total: {total} £</th>
     
    </tr>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>price</th>
      <th>quantity</th>
    </tr>
  </thead>
  <tbody>
    {#each products as product}
   
    <tr>
      <td><strong>{product.id}</strong></td>
      <td>{product.name}</td>
      <td>{product.price} £</td>
      <td>{product.quantity}</td>
    </tr> {/each}
  
  </tbody>
</table>
  <div class="row">
    <div class="one-half column"><small>Date and time: {date}</small></div>
    <div class="one-half column"><p class="u-pull-right"><small>signature</small></p></div>
  </div></div>



