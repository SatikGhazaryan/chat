const socket = io();

    const messages = document.getElementById('messages');
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const nameBlock=document.querySelector('.name')
    const userName = prompt("Your Name")
    nameBlock.innerHTML=userName

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', {messages:input.value, name:userName});
      input.value = '';
    }
  });

  socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = `${msg.name}: ${msg.messages}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });