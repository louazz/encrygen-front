<script>
   import  {token,id, prodq,clientt} from "../../stores/useToken.js";
    import { goto } from "$app/navigation";

    let key="";
    let encr="", title="", content="";
    const addInvoice= async()=> {
      console.log(clientt)
        return await fetch('https://backend.encrygen.co.uk/api/docs/new', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Authorization': 'Token '+$token
   },
   body: JSON.stringify({"doc":{
   "title":title,
   "user": $id,
   "content": content,
  "encr": null,
   "key":key,

   }

})
 })
   .then(response => {
   return response
   })}

   const generate = async()=>{
    let res=await addInvoice();
    if (res.ok){
      let data= await res.json();
      let d=encodeURI(data.encr);
      goto("/document/"+d);
    } else{
      alert("an error has occured")
    }
   }

</script>
<form on:submit|preventDefault>
    <div class="row">
      <div class="six columns">
        <label for="exampleEmailInput">Title</label>
        <input class="u-full-width" bind:value={title}  type="text" placeholder="Title of the document" >
      </div>
      <div class="six columns">
        <label for="exampleEmailInput">Key</label>
        <input class="u-full-width" bind:value={key}  type="text" placeholder="Encryption key (secret)" >
      </div>
    </div>
    <label for="exampleMessage">Content</label>
    <textarea class="u-full-width" bind:value={content} placeholder="Content..." ></textarea>
    
    <input class="button-primary" type="submit" on:click={generate} value="Generate">
  </form>