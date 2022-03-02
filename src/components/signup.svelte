<script>
import { goto } from '$app/navigation';
import{token, profile, id} from "../stores/useToken"
    let email = '', password = '', rpassword = '', username='', hasprofile=false
    async function fetchUsers() {
		const response = await self.fetch('https://backend.encrygen.co.uk/api/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"user":{
                email,
                username,
                password,
                hasprofile
            }})
        })

		if (response.ok) {
  		return response.json();
			
		} else {
      alert("internal server error or wrong inputs type")
			throw new Error(users);
		}
	}
    const submit = async () => {
      if (rpassword==password & password != ''){
        let response= await fetchUsers();
        console.log( response.user.hasprofile)
            profile.set( response.user.hasprofile)
            id.set( response.user._id)
            token.set(response.user.token)
            }else{
                alert("password mismatch")
            }
      
    
        }
</script>


<center><h1>Sign up</h1></center>
<hr>
<form on:submit|preventDefault>
  <div class="row" id="pointer">
    <div class="six columns">
      <label for="exampleEmailInput">Your email</label>
      <input bind:value={email}  class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
    </div>
    <div class="six columns">
      <label   for="username">Your username</label>
      <input bind:value={username} class="u-full-width" type="text" placeholder="username" id="username">

    </div>
  </div>

  <div class="row">
    <div class="six columns">
  <label for="password">Password</label>
  <input bind:value={password} class="u-full-width" type="password" placeholder="new password" id="password">
</div>
<div class="six columns">
    <label for="password">Repeat Password</label>
    <input bind:value={rpassword} class="u-full-width" type="password" placeholder="repeat password" id="password">
</div>
</div>



  <label class="example-save-credentials">
    <input type="checkbox">
    <span class="label-body">Save credentials</span>
  </label>
  <button class="button button-primary" type="submit" value="Submit" on:click={submit} >Submit</button>
</form>
