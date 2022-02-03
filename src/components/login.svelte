<script>
    import{token, profile, id} from "../stores/useToken"
        let email = '', password = '', username=''
        async function fetchUsers() {
            const response = await self.fetch('https://backend.encrygen.co.uk/api/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"user":{
                    email,
                    username,
                    password
                }})
            })
    
            if (response.ok) {
             // alert(response.ok)
              return response.json();
                
            } else {
              alert("Wrong credential or Internal server error")
                throw new Error(users);
            }
        }
        const submit = async () => {
       
          let response= await fetchUsers();
            console.log( response.user.hasprofile)
            profile.set( response.user.hasprofile)
            id.set( response.user._id)
            token.set( response.user.token)
       
          
    
        }
    </script>
    
    
    <center><h1>Login</h1></center>
    <hr>
    <form on:submit|preventDefault>
      <div class="row">
        <div class="six columns">
          <label for="exampleEmailInput">Your email</label>
          <input bind:value={email}  class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
        </div>
        <div class="six columns">
          <label   for="username">Your username</label>
          <input bind:value={username} class="u-full-width" type="text" placeholder="username" id="username">
    
        </div>
      </div>
      <label for="password">Password</label>
      <input bind:value={password} class="u-full-width" type="password" placeholder="password" id="password">
      <label class="example-save-credentials">
        <input type="checkbox">
        <span class="label-body">Save credentials</span>
      </label>
      <button class="button button-primary" type="submit" value="Submit" on:click={submit} >Submit</button>
    </form>
    