<script>
    import { onMount } from 'svelte';
      
      export let codeValue;
      export let squareSize; 
      
    let qrcode;
              
      onMount(() => {
  
          let script = document.createElement('script');
      script.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
      document.head.append(script);
      
          script.onload = function() {
  
              qrcode = new QRCode("qrcode", {
                  text: codeValue,
                width: squareSize,
          height: squareSize,
          colorDark : "#000000",
          colorLight : "#F8F6F2",
          correctLevel : QRCode.CorrectLevel.H
              });		
              
          };				
        
      });
  </script>
  
  <style>
    #qrcode {
      width:100px;
      height:100x;
      margin-top:1px;
    }
  </style>
  
  <div id="qrcode"></div>
  
  