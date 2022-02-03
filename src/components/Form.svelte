<script>
   let email = '', content = '';
        async function postFeed() {
            const response = await self.fetch('https://backend.encrygen.co.uk/api/invoices/send', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"mail":{
                   email,
                   content
                }})
            })
           
            if (response.ok) {

              return response.json();
                
            } else {
                throw new Error(users);
            }
        }
        const submit = async () => {
          alert("feedback sent")
       let response= await postFeed();
   
     }
</script>
<form on:submit|preventDefault>
    <div class="row">
      <div class="six columns">
        <label for="exampleEmailInput">Your email</label>
        <input bind:value={email} class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
      </div>
      <div class="six columns">
        <label for="exampleRecipientInput">Reason for contacting</label>
        <select class="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select>
      </div>
    </div>
    <label for="exampleMessage">Message</label>
    <textarea  bind:value={content} class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
    <label class="example-send-yourself-copy">
      <input type="checkbox">
      <span class="label-body">Agree to terms</span>
    </label>
    <input on:click={submit} class="button-primary" type="submit" value="Submit">
  </form>
