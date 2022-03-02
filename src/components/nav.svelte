<script>
    import Lorem from "./lorem.svelte"
    import{token, checker} from "../stores/useToken"
	import Icon from "./icon.svelte";
	import { browser } from "$app/env"
	import * as animateScroll from "svelte-scrollto";
    const logout= ()=> {
        if(browser){
			localStorage.clear()
			location.reload(); 
		}
    }
	const clicked= ()=> {
		if ($checker==true){
			checker.set(false)
			animateScroll.scrollToBottom()
		}else{
			checker.set(true)
			animateScroll.scrollToBottom()
		}
	}
</script>
<br>
	<br>

	

	<center>
		<h1>Ecry <Icon name= "gear"/> geN</h1>
	</center>
	<br>
    {#if  $token==null}

	{#if $checker==false}
	<center><button class="button" href="#pointer"  on:click={clicked} >Login</button></center>
{:else}
<center><button class="button-primary" href="#pointer"  on:click={clicked} >Sign Up</button></center>
{/if}
	
    {:else}
	<center><button class="button button-primary" on:click={logout}>Log out</button></center>
    {/if}
	<hr>
	<div class="row">
		<div class="one-third column">
			<center><Icon name= "profile"/> <br><strong>Step 1: </strong><em>Configure your profile; those data will be displayed on generated documents</em></center><br>
		</div>
		<div class="one-third column">
			<center><Icon name= "docs"/> <br><strong>Step 2: </strong><em>Generate documents including invoices and receive an email with your key and Qr code</em></center><br>
		</div>
		<div class="one-third column">
			<center><Icon name= "Qr"/><br><strong>Step 3: </strong><em>Verify shared or owned documents by scanning the Qr code and entering the key</em></center>
			<br>
		</div>
	</div>

	<hr>
	<nav class="crumbs">
		<ol>
			{#if  $token!=null}
			<li class="crumb"><a href="/profile#">Profile</a></li>
			<li class="crumb"><a href="/product#">Product</a></li>
			<li class="crumb"><a href="/client#">Client</a></li>
			<li class="crumb"><a href="/invoice/display#">Invoice</a></li>
			<li class="crumb"><a href="/document/display#">Document</a></li>
			{/if}
			<li class="crumb"><a href="/">Contact us</a></li>
		</ol>
	</nav>
	<hr>
	<strong><Lorem/></strong>
    <hr>


