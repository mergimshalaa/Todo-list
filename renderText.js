function renderText() {
    const headingOne = document.getElementById('text');
    const txt = 'Todo List';
  
    let i = 0;
  
    const stopId = setInterval(function() {
      headingOne.innerHTML += txt[i];
      i++;
  
      if (i === txt.length) {
        clearInterval(stopId);
      }
    }, 110);
  }