<script>
    import  {filly, id, token} from "../../stores/useToken.js";
  const deleteItem= async (inv)=> {
   await fetch('https://backend.encrygen.co.uk/api/invoices/delete/'+inv, {
         method: 'DELETE',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Token '+$token
         },})
          .then(response => {alert("Deleted invoice"); location.reload(); })
  }
  const regenerate= async (inv)=>{
    let key= prompt("Please enter your new key:");
    const response = await self.fetch('https://backend.encrygen.co.uk/api/invoices/update/'+inv, {
             method: 'PATCH',
             headers: {'Content-Type': 'application/json',
       'Authorization': 'Token '+$token},
             body: JSON.stringify({"invoice":{
                "key":key
             }})
         })
 
     if (response.ok) {
             alert("key has been updated successfully")
             location.reload(); 
       return response.json();
       
     } else {
       alert("internal server error or wrong inputs type")
       throw new Error("server error");
     }
  }
  </script>
  <table class="u-full-width">

      <thead>
        <tr>
          <th colspan="2">Invoices</th>
          <th><a href="/invoice#" >New</a></th>
        </tr>
        <tr>
          <th>id</th>
          <th>date</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {#each $filly as inv}
        <tr>
          <td><strong>{inv._id}</strong></td>
          <td>{new Date(inv.created_at)}</td>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <td><a on:click={deleteItem(inv._id)} href="#">Delete </a>  <a  href="/invoice/{encodeURI(inv.encr)}">View</a>   <a on:click={regenerate(inv._id)} href="#">regenerateKey</a> </td>
         
        </tr>
      {/each}
  
      </tbody>
    </table>
