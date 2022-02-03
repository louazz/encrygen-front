<script>
      import { page } from '$app/stores';
    import { goto } from "$app/navigation";
   import { onMount } from 'svelte';
   import QrCode from "./QrJs.svelte";
   import { browser } from "$app/env";
  
   let title=null, content= null, profile={}, id=null, date= null;
   const extractUrl=()=>{
     let url=window.location.href;
     for (var i=0; i<url.length; i++){
       if(url[i]+url[i+1]+url[i+2]+url[i+3]+url[i+4]+url[i+5]+url[i+6]+url[i+7]+url[i+8]=='document/'){
        return url.slice(i+9, url.length)
       }
     }
   }

   const displayInvoice= async(key)=> {
     let parm=extractUrl();
     //alert(parm)
       return await fetch('https://backend.encrygen.co.uk/api/docs/display/'+parm, {
      method: 'POST',
      headers: {
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
     title=data.title;
     id= data._id;
     content=data.content;
     profile=data.profile;
     date= data.date
     //alert(user)
     }
     }
     
   })

   const onCapture = () =>{
    var canvas = document.getElementById("capture");
   if(browser){
    
    var divContents = window.$("#capture").html();
}
          var printWindow = window.open('', '', 'height=400,width=800');
          printWindow.document.write(`<html><head><title>Doc ${Date()}</title>`);
          printWindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />')
          printWindow.document.write('</head><body ><div class="container">');
          printWindow.document.write(divContents);
          printWindow.document.write('</div></body></html>');
          printWindow.document.close();
          printWindow.print();    

        }
</script>
<center><button class="button-secondary" on:click={onCapture}>Download PDF</button></center>
<hr>
<div id="capture">
<div class="row" >
    <div class="one-half column"><p><small>id: {id}</small></p> <p><QrCode codeValue={window.location.href} squareSize=100 /> <small>scan and share</small></p> </div>
    <div class="one-half column"><p class="u-pull-right"><small>{profile.Institution} <br>
      {profile.postcode} <br>
       {profile.city} <br>
       {profile.country}</small></p></div>
  </div>

<center><h5>{title}</h5></center>
<p>{content}</p>

      <div class="row">
        <div class="one-half column"><small>Date and time: {date}</small></div>
        <div class="one-half column"><p class="u-pull-right"><small>signature</small></p></div>
      </div></div>



    