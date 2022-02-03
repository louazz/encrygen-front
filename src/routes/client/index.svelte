<script>
    import{ items,token, profile, t, id} from "../../stores/useToken.js"
    import { goto } from "$app/navigation";
    import List from "./list.svelte";
    import Listinv from "./listinv.svelte";
    
    let value = '';
    export  let invoice; 
     
       
  
  import { onMount } from "svelte";
    if( $profile ==false){
      goto('/profile#')
          }
          onMount(async () => {
          const response = await fetch('https://backend.encrygen.co.uk/api/clients/'+$id, {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Token '+$token
     },})
      .then(response => response.json())
    .then(data => {
        console.log(data)
        items.set(data);
    }).catch(error => {
      console.log(error);
      return [];
    });  });
    $: t.set(value)
  </script>
      <center>  <input bind:value={value}  type="text" placeholder="Search..."></center>
    <hr>
    {#if invoice == true}
    <Listinv/>
    {:else}
   <List/>
    {/if}
  
  
  