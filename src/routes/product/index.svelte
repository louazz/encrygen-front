<script>
  import{ apiProduct,token, profile, term, id} from "../../stores/useToken"
  import { goto } from "$app/navigation";
  import List from "./list.svelte";
  import Listinv from "./listinv.svelte";
  let val = '';
  export  let invoice; 
     

import { onMount } from "svelte";
  if( $profile ==false){
    goto('/profile')
        }
        onMount(async () => {
        const response = await fetch('https://backend.encrygen.co.uk/api/products/'+$id, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
     'Authorization': 'Token '+$token
   },})
    .then(response => response.json())
  .then(data => {
		console.log(data);
    apiProduct.set(data);
  }).catch(error => {
    console.log(error);
    return [];
  });  });
  $: term.set(val)
</script>
    <center>  <input bind:value={val}  type="text" placeholder="Search..."></center>
  <hr>
  {#if invoice == true}
  <Listinv/>
  {:else}
 <List/>
  {/if}

