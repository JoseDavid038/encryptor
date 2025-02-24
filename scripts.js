const boxText = document.getElementById('encrypt-decrypt');
const encryptButton = document.querySelector('.js-encrypt-button');
const decryptButton = document.querySelector('.js-decrypt-button');
const outputText = document.querySelector('.js-encrypt-result');
const deleteButton = document.querySelector('.js-button-delete');
const outputImage = document.querySelector('.js-output-image');
const copyButton = document.querySelector('.js-copy-button');



boxText.focus();

function encryptionRules (messageUser){

  return messageUser.replace(/[aeiouáéíóú]/gi, (match) => {

    const replacement = {
      a : 'ai', á : 'ai',A : 'ai', Á : 'ai',
      e : 'enter', é : 'enter', E : 'enter', É : 'enter',
      i : 'imes', í : 'imes', I : 'imes', Í : 'imes',
      o : 'ober', ó : 'ober', O : 'ober', Ó : 'ober',
      u : 'ufat', ú : 'ufat', U : 'ufat', Ú : 'ufat'
    };

    return replacement[match] || match;
   
  });
  
};

function decryptRules (messageUser){
  return messageUser.replace(/ai|enter|imes|ober|ufat/gi, (match) => {
    const replacement = {
      ai : 'a',
      enter : 'e',
      imes : 'i',
      ober : 'o',
      ufat : 'u'
    };

    return replacement[match] || match;
  });
};


function renderResult(messageUser){

  const result = encryptionRules(messageUser);
  outputText.innerHTML = result;

};


function deleteText(){
  boxText.value = '';
  outputText.innerText = "";
  outputImage.style.visibility = 'visible';
  
}


function copyToClipboard() {
  let copyText = outputText.innerText;
  navigator.clipboard.writeText(copyText);

  // Notification the copied text
  toast();

}


function toast() {
  // Get the snackbar DIV
  var messageToast = document.querySelector(".js-snackbar");

  // Add the "show" class to DIV
  messageToast.classList.add('show');

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ messageToast.className = messageToast.className.replace("show", ""); }, 3000);
}


encryptButton.addEventListener('click', () => {
  let messageUser = boxText.value;
  if (messageUser){
    outputImage.style.visibility = 'hidden';
    renderResult(messageUser);
  }else{
    alert('You must enter a text.');
  }
 
});

decryptButton.addEventListener('click', () => {
  let messageUser = boxText.value;
  if (messageUser){
    outputImage.style.visibility = 'hidden';
    const result = decryptRules(messageUser);
    outputText.innerHTML = result;
  }else{
    alert('You must enter a text.');
  };
});


copyButton.addEventListener('click', () => {
  copyToClipboard();
})

deleteButton.addEventListener('click', () => {
  deleteText();
})
