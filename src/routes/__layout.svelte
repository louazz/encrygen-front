<script>
import Nav from "../components/nav.svelte";
import {token , checker} from '../stores/useToken';
import Login from "../components/login.svelte";
import SignUp from "../components/signup.svelte";
import { Moon } from 'svelte-loading-spinners'
let p=new Promise(resolve => setTimeout(resolve, 400));

</script>


{#await p}

<div class="loading">
    <div class="loader"><Moon class="d" size="150" color="#33C3F0" unit="px" duration="1s"></Moon></div>
  </div>



{:then n}
<div class="container" >
<Nav/>
{#if $token==null}
{#if $checker==true}
<Login/>
{:else}
<SignUp/>
{/if}
{:else}
<slot></slot>
{/if}
</div>
{/await}
