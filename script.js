const body = document.querySelector('body');
const modalOpenButton = document.querySelector('button');

modalOpenButton.addEventListener('click', e => {
   const modalElement = document.createElement('div');
   createModalStyle(modalElement);
   addCloseButton(modalElement);
   body.insertAdjacentElement('beforeend', modalElement);
});

const addCloseButton = modalElement => {
   const closeButton = document.createElement('button');
   createCloseButtonStyle(closeButton);
   closeButton.innerText = '닫기';

   closeButton.addEventListener('click', e =>
      closeModal(e),
   );
   modalElement.insertAdjacentElement(
      'beforeend',
      closeButton,
   );
};

const closeModal = e => {
   const modal = e.target.closest('div');
   modal.remove();
};

/*
모달창 스타일 설정
*/
const createModalStyle = modalElement => {
   modalElement.innerText = '모달창입니다!';
   modalElement.style.width = '500px';
   modalElement.style.height = '500px';
   modalElement.style.display = 'flex';
   modalElement.style.flexDirection = 'column';
   modalElement.style.justifyContent = 'space-between';
   modalElement.style.alignItems = 'center';
   modalElement.style.position = 'fixed';
   modalElement.style.padding = '20px';
   modalElement.style.backgroundColor = 'white';
   modalElement.style.border = '3px solid #3b5bb3';
   modalElement.style.borderRadius = '5px';
};

/*
모달창 내부 '닫기' 버튼 스타일 설정
*/
const createCloseButtonStyle = closeButton => {
   closeButton.style.padding = '7px 9px';
};
