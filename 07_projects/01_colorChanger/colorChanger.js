  const button = document.querySelectorAll('.button');
  const body = document.querySelector('body');
  console.log(button);

  button.forEach((value)=>{
    console.log(value);
    value.addEventListener('click',(e)=>{
      const key =e.target.id;
      addColor(key);
      
    })
  } )

  function addColor(key){
    switch (key) {
      case 'grey':
          body.style.backgroundColor='grey';
        break;
    
      case 'white':
          body.style.backgroundColor='white';
        break;
    
      case 'blue':
          body.style.backgroundColor='blue';
        break;
    
      case 'yellow':
          body.style.backgroundColor='yellow';
        break;
    
      default:
        break;
      }
  }