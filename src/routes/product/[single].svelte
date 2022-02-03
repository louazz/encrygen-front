<script>
    import { page } from '$app/stores';
   import { onMount } from 'svelte';
   import{ token, id} from "../../stores/useToken.js"
   import { goto } from "$app/navigation";
   
   let name="", price="";
   async function addProd(){
       const response = await self.fetch('https://backend.encrygen.co.uk/api/products/new', {
               method: 'POST',
               headers: {'Content-Type': 'application/json',
         'Authorization': 'Token '+$token},
               body: JSON.stringify({"product":{
                   name,
                   price,
                   user: $id
               }})
           })
   
       if (response.ok) {
              
        alert("product added successfully")
        goto("/product")
         return response.json();
         
       } else {
         alert("internal server error or wrong inputs type")
         throw new Error("server error");
       }
   }
   async function editProduct(){
       const response = await self.fetch('https://backend.encrygen.co.uk/api/products/update/'+$page.params.single, {
               method: 'PATCH',
               headers: {'Content-Type': 'application/json',
         'Authorization': 'Token '+$token},
               body: JSON.stringify({"product":{
                name,
                "price": Number(price),
                user: $id
               }})
           })
   
       if (response.ok) {
               alert("product data updated successfully")
              goto("/product")
         return response.json();
         
       } else {
         alert("internal server error or wrong inputs type")
         throw new Error("server error");
       }
   }
   async function getProduct(){
       if ($page.params.single!="new"){
   
   return await fetch('https://backend.encrygen.co.uk/api/products/show/'+$page.params.single, {
   method: 'GET',
   headers: {
   'Content-Type': 'application/json',
   'Authorization': 'Token '+$token
   },})
   .then(response => response)
   }
   }
    onMount(async()=>{ 
        let res= await getProduct();
        if (res.ok){
         let data= await res.json();
         console.log(res.body)
           name= data.name;
           price= data.price;
        }else{
            alert("wrong client id")
        }
     }); 
   </script>
   <br>
   <form on:submit|preventDefault>
       <div class="row">
         <div class="six columns">
           <label for="exampleEmailInput">Name</label>
           <input bind:value={name} class="form-control form-control-solid" type="text"  id="exampleEmailInput">
         </div>
         <div class="six columns">
          <label for="exampleEmailInput">Price</label>
          <input bind:value={price} class="form-control form-control-solid" type="text"  id="exampleEmailInput">
           
         </div>     
       
         <br>
         {#if $page.params.single=="new"}
         <button on:click={addProd} class="button-primary" >Add</button>
         {:else}
         <button on:click={editProduct} class="button-secondary">Edit</button>
         {/if}
      
     </form>
   