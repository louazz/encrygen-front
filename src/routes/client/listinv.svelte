<script>
    import  {fil,clientt} from "../../stores/useToken.js";
   let cliient="";
   $: clientt.set(cliient);
  </script>
  <table class="u-full-width">
      <thead>
        <tr>
          <th colspan="3">Client</th>
          <th><a href="/" >New</a></th>
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
          <td> <input type=radio bind:group={cliient} name="scoops" value={client._id}></td>
         
        </tr>
      {/each}
  
      </tbody>
    </table>