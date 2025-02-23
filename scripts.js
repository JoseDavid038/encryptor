const boxText = document.getElementById('encrypt-decrypt');
const encryptButton = document.querySelector('.js-encrypt-button');
const decryptButton = document.querySelector('.js-decrypt-button');
const outputText = document.querySelector('.js-encrypt-result');
const deleteButton = document.querySelector('.js-button-delete');



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
  outputText.innerHTML = '';
}



encryptButton.addEventListener('click', () => {
  let messageUser = boxText.value;
  renderResult(messageUser);
});

decryptButton.addEventListener('click', () => {
  let messageUser = boxText.value;
  const result = decryptRules(messageUser);
  outputText.innerHTML = result;


})

deleteButton.addEventListener('click', () => {
  deleteText();
})
