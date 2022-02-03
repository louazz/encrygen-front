<script>
    // @ts-nocheck
    
        import{ apiInv,token, ttt, id} from "../../stores/useToken"
        import { goto } from "$app/navigation";
        import List from "./list.svelte";
        let val = '';
           
      
      import { onMount } from "svelte";
        onMount(async () => {
              const response = await fetch('https://backend.encrygen.co.uk/api/invoices/'+$id, {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Token '+$token
         },})
          .then(response => response.json())
        .then(data => {
              console.log(data);
              apiInv.set(data);
        }).catch(error => {
          console.log(error);
          return [];
        });  });
        $: ttt.set(val)
      </script>
          <center>  <input bind:value={val}  type="text" placeholder="Search..."></center>
          <hr>
      
         <List/>
        
        