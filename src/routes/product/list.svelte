<script>
import { browser } from "$app/env"
import  {filtered, token} from "../../stores/useToken";
async function deleteProd(id){
return await fetch('https://backend.encrygen.co.uk/api/products/delete/'+id, {
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
        <th colspan="3">Product</th>
        <th><a href="/product/new" >New</a></th>
      </tr>
      <tr>
      <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {#each $filtered as product}
      <tr>
        <td><strong>{product._id}</strong></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <!-- svelte-ignore a11y-missing-attribute -->
        <td><a href='/product/{product._id}'>Edit</a> <a on:click={deleteProd(product._id)}>Delete</a></td>
       
      </tr>
	{/each}

    </tbody>
  </table>