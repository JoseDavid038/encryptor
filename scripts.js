const boxText = document.getElementById('encrypt-decrypt');
const encryptButton = document.querySelector('.js-encrypt-button');
const outputText = document.querySelector('.js-encrypt-result');



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


function renderResult(messageUser){

  const result = encryptionRules(messageUser);
  outputText.innerHTML = result;

};



encryptButton.addEventListener('click', () => {
  let messageUser = boxText.value;
  renderResult(messageUser);
});
