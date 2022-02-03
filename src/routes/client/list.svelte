<script>
	import { browser } from "$app/env"
    import  {fil, token} from "../../stores/useToken.js";
    async function deleteClient(id){
return await fetch('https://backend.encrygen.co.uk/api/clients/delete/'+id, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': 'Token '+$token
},})
.then(response =>{
  if(browser){
			location.reload(); 
		}})
}
  </script>
  <table class="u-full-width">
      <thead>
        <tr>
          <th colspan="3">Client</th>
          <th><a href="/client/new" >New</a></th>
        </tr>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>postcode</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {#each $fil as client}
        <tr>
          <td><strong>{client._id}</strong></td>
          <td>{client.name}</td>
          <td>{client.postcode}</td>
          <!-- svelte-ignore a11y-missing-attribute -->
          <td><a href='/client/{client._id}'>Edit</a> <a on:click={deleteClient(client._id)}>Delete</a></td>
         
        </tr>
      {/each}
  
      </tbody>
    </table>