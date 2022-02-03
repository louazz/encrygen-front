<script>
  import{token, profile, id} from "../stores/useToken";
  import { onMount } from 'svelte';
	import { browser } from "$app/env"
  let   Institution='' ,country='' ,city='' ,postcode='', user=$id ;
    
  const addProfile= async()=> {
          return await fetch('https://backend.encrygen.co.uk/api/profiles/', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Token '+$token
     },
     body: JSON.stringify({"profile":{
      Institution,
    country,
    city ,
    postcode,
    user
     }})
   })
     .then(response => response)
  }
  const editProfile= async()=> {
          return await fetch('https://backend.encrygen.co.uk/api/profiles/update/'+$id, {
     method: 'PATCH',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Token '+$token
     },
     body: JSON.stringify({"profile":{
      Institution,
    country,
    city ,
    postcode,
    user
     }})
   })
     .then(response => response)
  }
  const submit= async ()=>{
      console.log("submit")
      if ($profile==false){

        const response= await addProfile();
      if (response.ok){
        profile.set(true);
        if(browser){
			location.reload(); 
		}
      }else{
          throw new Error("An error has occured");
      }
      }else{
        const response= await editProfile();
      if (response.ok){
        profile.set(true);
        if(browser){
			location.reload(); 
		}
      }else{
          throw new Error("An error has occured");
      }
      }
    
  
  }
  async function getProfile(){
     if ($profile=="true"){
 
 return await fetch('https://backend.encrygen.co.uk/api/profiles/show/'+$id, {
 method: 'GET',
 headers: {
 'Content-Type': 'application/json',
 'Authorization': 'Token '+$token
 },})
 .then(response => response)
 }
 }

 onMount(async()=>{ 
      let res= await getProfile();
      if (res.ok){
       let data= await res.json();
       Institution=data.Institution ;country=data.country ;city=data.city ;postcode=data.postcode;
      }else{
          alert("Rror: server error")
      }
   });   
    
</script>

<!-- The above form looks like this -->
<form on:submit|preventDefault={submit}>
    <div class="row">
      <div class="six columns">
        <label for="exampleEmailInput">Institution</label>
        <input bind:value={Institution}  class="u-full-width" type="text" placeholder="Birkbeck College">
      </div>
      <div class="six columns">
        <label  for="exampleEmailInput">country</label>
        <input bind:value={country}  class="u-full-width" type="text" placeholder="England, UK">
      </div>
    </div>
    <div class="row">
        <div class="six columns">
            <label  for="exampleEmailInput">city</label>
            <input bind:value={city}  class="u-full-width" type="text" placeholder="London">
          </div>
          <div class="six columns">
            <label for="exampleEmailInput">postcode</label>
            <input bind:value={postcode}  class="u-full-width" type="text" placeholder="N1 6RU" >
          </div>
      </div>
    <button class="button-primary" type="submit" value="Submit">Submit</button>
  </form>
  
