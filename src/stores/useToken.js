
import { writable, derived } from 'svelte/store';
import { browser } from "$app/env"
var tt
if(browser){
 tt= localStorage.getItem("token")
}

export const token = writable(tt);

token.subscribe((val) => {
  if(browser){
    console.log(val);
    localStorage.token = val
  }
  
})

export const profile =  writable(browser && localStorage.getItem("profile") || null);

profile.subscribe((val) => {
  if(browser & val==null) return (localStorage.clear())
  if (browser & val != null) return (localStorage.profile = val)
  
})

export const id = writable(browser && localStorage.getItem("userid") || null);

id.subscribe((val) => {
  if(browser & val==null) return (localStorage.clear())
  if (browser & val != null) return (localStorage.userid = val)
  
})

export const checker = writable(true);

export const apiProduct = writable([]);

export const term = writable('');
export const filtered = derived(
    [term, apiProduct], 
    ([$term, $apiProduct]) => $apiProduct.filter(x => x.name.includes($term))
);


export const t = writable('');
export const items = writable([]);
export const fil = derived(
    [t, items], 
    ([$t, $items]) => $items.filter(x => x.name.includes($t))
);
export const prodq = writable([]);
export const clientt = writable("");

export const apiInv = writable([]);
export const ttt = writable('');
export const filly = derived(
    [ttt, apiInv], 
    ([$ttt, $apiInv]) => $apiInv.filter(x => x._id.includes($ttt))
);
export const apiDoc = writable([]);
export const tttt = writable('');
export const fillyy = derived(
    [tttt, apiDoc], 
    ([$tttt, $apiDoc]) => $apiDoc.filter(x => x.title.includes($tttt))
);
