<script>
    // @ts-nocheck
    
        import{ apiDoc,token, tttt, id} from "../../stores/useToken"
        import { goto } from "$app/navigation";
        import List from "./list.svelte";
        let val = '';
           
      
      import { onMount } from "svelte";
        onMount(async () => {
              const response = await fetch('https://backend.encrygen.co.uk/api/docs/'+$id, {
         method: 'GET',
         headers: {
          'Access-Control-Allow-Origin':'*',
           'Content-Type': 'application/json',
           'Authorization': 'Token '+$token
         },})
          .then(response => response.json())
        .then(data => {
              console.log(data);
              apiDoc.set(data);
        }).catch(error => {
          console.log(error);
          return [];
        });  });
        $: tttt.set(val)
      </script>
          <center>  <input bind:value={val}  type="text" placeholder="Search..."></center>
          <hr>
      
         <List/>
        
        