function showErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Something went wrong';
    errorMessage.style.color = '#ff4d4d';
    errorMessage.style.fontWeight = 'bold';
    errorMessage.style.marginTop = '10px';
  }