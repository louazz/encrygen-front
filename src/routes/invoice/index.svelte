<script>
    import Product from "../product/index.svelte";
    import Client from "../client/index.svelte";
    import  {token,id, prodq,clientt} from "../../stores/useToken.js";
    import { goto } from "$app/navigation";
    let key="";
    let encr="";
    const addInvoice= async()=> {
      console.log(clientt)
        return await fetch('https://backend.encrygen.co.uk/api/invoices/new', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Authorization': 'Token '+$token
   },
   body: JSON.stringify({"invoice":{
   "client":$clientt,
   "user": $id,
   "products": $prodq,
  "encr": null,
   "key":key,

   }

})
 })
   .then(response => {
   return response
   })}

   const generate = async()=>{
    let res=await addInvoice();
    if (res.ok){
      let data= await res.json();
      let d=encodeURI(data.encr);
    
      goto("/invoice/"+d);
    } else{
      alert("an error has occured")
    }
   }

</script>
<div class="navbar">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a on:click={generate} class="active" href="#">Generate</a>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a hrf="#"><input type="text" placeholder="Choose a Key" bind:value={key}></a>
  </div>
  
<div class="main">
<h3>Add Products</h3>
<hr>
<Product invoice={true}/>
<hr>
<h3>Select Client</h3>
<hr>
<Client invoice={true}/>
<hr>
<br>
<br>

</div>  