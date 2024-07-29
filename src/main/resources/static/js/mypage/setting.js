// function previewImage(event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             document.getElementById('profileImage').src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//     }
// }

// 소개글 수정
const showEditArea = () => {
    let description = document.querySelector('.settings_profile_description');
    let editButton = document.querySelector('.profile_letter_button');

    // 기존 설명을 textarea로 대체합니다.
    let textarea = document.createElement('textarea');
    textarea.classList.add('edit_textarea');
    textarea.value = description.textContent;

    // 설명을 감싸고 있는 div를 숨기고 textarea를 추가합니다.
    description.replaceWith(textarea);

    // 기존 버튼을 숨기고 저장/취소 버튼을 추가합니다.
    editButton.classList.add('hidden');

    let saveButton = document.createElement('button_save');
    saveButton.textContent = '저장';
    saveButton.onclick = () => saveDescription(textarea);

    let cancelButton = document.createElement('button_cancel');
    cancelButton.textContent = '취소';
    cancelButton.onclick = () => cancelEdit(textarea, description);

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button_container');
    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(cancelButton);

    // 새로운 버튼들을 DOM에 추가합니다.
    editButton.parentElement.appendChild(buttonContainer);
};

let saveDescription = (textarea) => {
    let description = document.createElement('div');
    description.classList.add('settings_profile_description');
    description.textContent = textarea.value;

    textarea.replaceWith(description);
    document.querySelector('.button_container').remove();
    document.querySelector('.profile_letter_button').classList.remove('hidden');
};

let cancelEdit = (textarea, originalDescription) => {
    textarea.replaceWith(originalDescription);
    document.querySelector('.button_container').remove();
    document.querySelector('.profile_letter_button').classList.remove('hidden');
};



{
    // 이미지 삽입
    let $fileInput = document.querySelector('#fileInput')

    $fileInput.addEventListener('change', function () {
        // // console.log('change')
        // console.dir(this)

        let files = this.files
        let file = files[0]

        let src = URL.createObjectURL(file)

        let $imgTags = document.querySelectorAll('.user-img > img')

        $imgTags.forEach(imgTag => {
            imgTag.setAttribute('src', src);
        })
    });
}