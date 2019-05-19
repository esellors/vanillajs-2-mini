
document.querySelector('form').addEventListener("submit", addTodo);

function addTodo(evt) {
   evt.preventDefault();

   const liTag = document.createElement('li');
   liTag.innerText = document.getElementById('item').value;
   liTag.addEventListener("click", completeToDo);

   const deleteBtn = document.createElement("button");
   deleteBtn.innerText = "X";
   deleteBtn.addEventListener("click", removeToDo);

   liTag.appendChild(deleteBtn);

   const ulTag = document.querySelector('ul');
   ulTag.appendChild(liTag);
}

function removeToDo(evt) {
   evt.target.parentNode.remove();
}

function completeToDo(evt) {
   const clickedStatus = evt.target.getAttribute("aria-checked");
   const aside = document.createElement("aside");
   const thisAside = document.querySelector("aside");
   aside.innerText = "Completed!";

   if (clickedStatus !== 'true') {
      evt.target.setAttribute("aria-checked", "true");
      
      evt.target.parentNode.appendChild(aside);
      
      setTimeout(() => {
         console.log(evt.target)
         aside.remove();
      }, 2000);
   } else {
      evt.target.setAttribute("aria-checked", "false");
      
   }
}
