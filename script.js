function additems() {

    const taskInput = document.getElementById('itemInput');
  
    const taskList = document.getElementById('itemList');
  
  
    if (taskInput.value.trim() !== '') {
  

  
      const listItem= document.createElement('li');
  

  
      const itemText = document.createElement('span');
  
      itemText.textContent = taskInput.value;
  
  
      const completeButton = document.createElement('button');
  
      completeButton.textContent = 'Complete';
  
      completeButton.onclick = function () {
  
        listItem.classList.toggle('completed')
  
      };
  
      const removeButton = document.createElement('button');
  
      removeButton.textContent = 'Remove';
  
      removeButton.onclick = function () {
  
        listItem.remove()
  
      };

  
      listItem.appendChild(itemText);
  
      listItem.appendChild(completeButton);
  
      listItem.appendChild(removeButton);
  

  
      taskList.appendChild(listItem);
  

  
      taskInput.value = '';
  
    }
  
  }