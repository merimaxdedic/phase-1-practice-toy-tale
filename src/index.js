let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
 
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }

  });
});


  fetch('http://localhost:3000/toys')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(data => {

      const toyCollection = document.getElementById('toy-collection');
      data.forEach(toy => {
        const toyCard = document.createElement('div');
        toyCard.classList.add('card');
        const toyName = document.createElement('h2');
        toyName.textContent = toy.name;
        toyCard.appendChild(toyName);

        const toyImage = document.createElement('img');
        toyImage.src = toy.image;
        toyImage.alt = toy.name;
        toyImage.classList.add('toy-avatar');
        toyCard.appendChild(toyImage);
        const likeCount = document.createElement('p');
        likeCount.textContent = `Likes: ${toy.likes}`;
        toyCard.appendChild(likeCount);
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.id = toy.id;
        likeButton.textContent = 'Like';
        toyCard.appendChild(likeButton);
        toyCollection.appendChild(toyCard);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });


fetch('http://localhost:3000/toys', {

  method: 'POST',

  headers: {

    'Content-Type': 'application/json',

    'Accept': 'application/json'

  },

  body: JSON.stringify({
    "name": "Jessie",
    "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    "likes": 0
  })

})


    fetch(`http://localhost:3000/toys/${toyId}`, {

      method: 'PATCH',

      headers: {

        'Content-Type': 'application/json',

        'Accept': 'application/json'

      },

      body: JSON.stringify({

        'likes': newNumberOfLikes

      })


    })

    .then(response => response.json())

    .then(updatedToy => {


      const toyCard = document.getElementById(`toy-${updatedToy.id}`)

      const likesElement = toyCard.querySelector('.likes-count')

      likesElement.textContent = updatedToy.likes

      const likeCount = event.target.previousSibling;
      likeCount.textContent = `Likes: ${data.likes}`;
    })

    .catch(error => {

    });

    likeButtons.forEach(button => {

      button.addEventListener('click', () => {
    
      
        const toyId = button.dataset.toyId;
    
     
    
        const currentLikes = parseInt(button.dataset.likes)
    
        const newNumberOfLikes = currentLikes + 1
      })
    })    
              
      
  
