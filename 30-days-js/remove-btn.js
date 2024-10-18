/**
 * An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:
<div class="image">
<img src="https://bit.ly/3xXPxPR" alt="First">
‹button class="remove">X</button>
</div>
<div class="image">
<img src="https://bit.ly/4de3sQr" alt="Second">
‹button class="remove">X</button>
</div>
Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent ‹ div> element should be removed from the gallery.
For example, after the first image has been removed from the gallery above, it's HTML code should look like this:
<div class="image">
<img src="https://bit.ly/4de3sQr" alt="Second">
‹button class="remove">X</button>
</div>
 */

function setup() {

  const btns = document.querySelectorAll('div img button.remove')
  btns.forEach((btn)=>{
    btn.addEventListener('click', function(e){
        btn.parentElement.remove()
    })
  })
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3xXPxPR" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/4de3sQr" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);