

{
  const num = 50  
  const winner =Math.floor(Math.random() * num);
  
  
  for (let i = 0; i < num; i ++) {
    const div = document.createElement('div');
    div.classList.add('box');
  
    div.addEventListener('click', () => {
      
      if (i === winner) {
        const win = Math.random();
          div.textContent = 'win';
          div.classList.add('win')
        } else {
        const n = Math.random();
        if (n < .2) {
          div.textContent = 'rose';
          div.classList.add('rose');
        } else if (n < .5) {
            div.textContent = '梅';
            div.classList.add('cherry');
        } else {
          div.textContent = 'ハズレ';
            div.classList.toggle('results');
        }
        }
      
    });
    document.body.appendChild(div);
  }
}

