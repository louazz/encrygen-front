<script>
 import { page } from '$app/stores';
import { onMount } from 'svelte';
import { get_root_for_style } from 'svelte/internal';
import{ id, token} from "../../stores/useToken.js"
import { goto } from "$app/navigation";

let name="", Faddress="",postcode="", city="",country="";
async function addClient(){
    const response = await self.fetch('https://backend.encrygen.co.uk/api/clients/new', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
     'Authorization': 'Token '+$token},
            body: JSON.stringify({"client":{
                name,
                Faddress,
                postcode,
                city,
                country,
                user: $id,
            }})
        })

		if (response.ok) {
           
            alert("client added successfully")
            goto("/client")
  		return response.json();
			
		} else {
      alert("internal server error or wrong inputs type")
			throw new Error(users);
		}
}
async function editClient(){
    const response = await self.fetch('https://backend.encrygen.co.uk/api/clients/update/'+$page.params.single, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
     'Authorization': 'Token '+$token},
            body: JSON.stringify({"client":{
                name,
Faddress,
postcode,
city,
country,
user: $id,
            }})
        })

		if (response.ok) {
            alert("client data updated successfully")
           goto("/client")
  		return response.json();
			
		} else {
      alert("internal server error or wrong inputs type")
			throw new Error(users);
		}
}
async function getClient(){
  //alert("mount")
    if ($page.params.single!="new"){

return await fetch('https://backend.encrygen.co.uk/api/clients/show/'+$page.params.single, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': 'Token '+$token
},})
.then(response =>{
 return response})
}
}

 onMount(async()=>{ 
     let res= await getClient();
     if (res.ok){
      let data= await res.json();
       console.log(res.body)
        name= data.name;
        console.log(name)
        Faddress= data.Faddress;
        postcode= data.postcode;
        city= data.city;
        country= data.country;
     }else{
         alert("wrong client id")
     }
  }); 
</script>


<form  on:submit|preventDefault>
    <div class="row">
      <div class="six columns">
        <label for="exampleEmailInput">Name</label>
        <input bind:value={name} class="u-full-width" type="text" placeholder={name} id="exampleEmailInput">
      </div>
      <div class="six columns">
        <label for="exampleEmailInput">First Line Address</label>
        <input  bind:value={Faddress} class="u-full-width" type="text" placeholder={Faddress} id="exampleEmailInput">
      </div>
    </div>
    <div class="row">
        <div class="six columns">
          <label for="exampleEmailInput">postcode</label>
          <input bind:value={postcode} class="u-full-width" type="text" placeholder={postcode} id="exampleEmailInput">
        </div>
        <div class="six columns">
          <label for="exampleEmailInput">city</label>
          <input bind:value={city} class="u-full-width" type="text" placeholder={city} id="exampleEmailInput">
        </div>
      </div>
      <div class="row">
        <div class="six columns">
          <label for="exampleEmailInput">country</label>
          <input bind:value={country} class="u-full-width" type="text" placeholder={country} id="exampleEmailInput">
        </div>
     
      </div>
      {#if $page.params.single=="new"}
      <input on:click={addClient} class="button-primary" type="submit" value="Add">
      {:else}
      <input on:click={editClient} class="button-primary" type="submit" value="Edit">
      {/if}
   
  </form>

