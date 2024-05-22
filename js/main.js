document.addEventListener('DOMContentLoaded', () => {
  const statusInput = document.getElementById('status');
  const updateStatusButton = document.getElementById('update-status');
  const currentStatus = document.getElementById('current-status');

  const recipientInput = document.getElementById('recipient');
  const messageInput = document.getElementById('message');
  const sendMessageButton = document.getElementById('send-message');
  const messagesList = document.getElementById('messages');

  // Handle status update
  updateStatusButton.addEventListener('click', () => {
      const status = statusInput.value.trim();
      if (status) {
          currentStatus.textContent = `Current Status: ${status}`;
          statusInput.value = '';
      }
  });

  // Handle sending message
  sendMessageButton.addEventListener('click', () => {
      const recipient = recipientInput.value.trim();
      const message = messageInput.value.trim();

      if (recipient && message) {
          const messageItem = document.createElement('li');
          messageItem.textContent = `To ${recipient}: ${message}`;
          messagesList.appendChild(messageItem);

          recipientInput.value = '';
          messageInput.value = '';
      }
  });
});
