<script>
    import  {filtered, id, prodq}from "../../stores/useToken";
    let pq=[];
    let total=0;
    function add(pid, quantity, price){
     pq.push({'product': pid, 'quantity': Number(quantity)});
     prodq.set(pq)
     total=total+ (Number(price)*Number(quantity))
     console.log($prodq)
   }
   function remove(pid, quantity, price){
     for(var i in pq){
       var p= pq[i]
       console.log(p)
       if (p["product"]== pid){
         console.log(p["product"])
         p["quantity"]=p["quantity"]-Number(quantity)
       if(p["quantity"]== 0){
         console.log(0)
       pq= pq.filter(item => item !== p)
        console.log(pq)
       }
        }
       
     }
     prodq.set(pq)
     total=total- (Number(price)*Number(quantity))
     console.log($prodq)
   }
  </script>
  <table class="u-full-width">
      <thead>
        <tr>
          <th colspan="4">Product</th>
          <th>Total: {total} £</th>
         
        </tr>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>quantity</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {#each $filtered as product}
       
        <tr>
          <td><strong>{product._id}</strong></td>
          <td>{product.name}</td>
          <td>{product.price} £</td>
          <td><input  type="text" id="name" name="name" required
            minlength="4" maxlength="5" size="2" bind:value={product.quantity}></td>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <td><a role="button" href="#" on:click={add(product._id,product.quantity, product.price)}>add</a> <a href="#"  on:click={remove(product._id,product.quantity, product.price)}>remove</a></td>
        </tr>

      {/each}
  
      </tbody>
    </table>