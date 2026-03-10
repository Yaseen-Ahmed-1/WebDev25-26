/* Challenge 2: Complete the init() function so that you build HTML output as per the wireframe diagram image.
Notes:
1 Give each info card div a class of "card"
2) Images
   a. Titles and Pizza are both images stored in the images folder.
   b. When creating the images give each a class of either "title" or "pizza" respectively
   c. Each image has been conveniently labeled with a number at the end in order to use a 
      loop to retrieve the images.
3) Create an appropriate random price to display for each pizza(15-35).No html needed
4) Enter quantity is a text input.No need to give an Id
5) Buy is a button input.No need to give it a event listener.

Now that you have the template, use a for loop to produce all five pizza cards.
*/ 

// Go to style.css for Challenge 3

//init() function is called when the page loads in index.html
function init(){
   let output = document.getElementById("output");
   let html = "";

   for(let i = 1; i <= 5; i++){
      let price = Math.floor(Math.random() * 21) + 15;

      html += `
         <div class="card">
            <img src="images/title${i}.png" class="title">
            <img src="images/pizza${i}.png" class="pizza">
            <p>Price: $${price}</p>
            <p>Enter Quantity: <input type="text"></p>
            <input type="button" value="Buy">
         </div>
      `;
   }

   output.innerHTML = html;
}

  

}

