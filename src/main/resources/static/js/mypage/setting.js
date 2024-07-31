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
let originalText = '';

let editMode = (isEditing) => {
    let descriptionDiv = document.querySelector('.settings_profile_description');
    let textarea = document.querySelector('.edit_textarea');
    let editButton = document.querySelector('.profile_letter_button');
    let saveButton = document.querySelector('.button_save');
    let cancelButton = document.querySelector('.button_cancel');

    if (isEditing) {
        originalText = descriptionDiv.textContent;
        textarea.value = originalText;

        descriptionDiv.classList.add('hidden');
        textarea.classList.remove('hidden');
    } else {
        descriptionDiv.textContent = isEditing == false ? originalText : textarea.value;

        descriptionDiv.classList.remove('hidden');
        textarea.classList.add('hidden');
    }

    editButton.classList.toggle('hidden', isEditing);
    saveButton.classList.toggle('hidden', !isEditing);
    cancelButton.classList.toggle('hidden', !isEditing);
};

let showEditArea = () => editMode(true);
let saveDescription = () => editMode(null);
let cancelEdit = () => editMode(false);

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

{
// 모달 관련 요소 가져오기
let modal = document.querySelector(".modal")
let btn = document.querySelector(".profile_nickname_button")
let span = document.getElementsByClassName("close")[0];
let confirmBtn = document.getElementById("confirmBtn");
let nicknameInput = document.querySelector(".nickname-input")
let changeNickname = document.querySelectorAll(".profile_nickname")

// 닉네임 변경 버튼을 클릭하면 모달을 엶
btn.onclick = function() {
    modal.classList.add("show");
    modal.style.display = "block";
    nicknameInput.value = changeNickname[0].textContent
}

// 닫기 버튼(X)을 클릭하면 모달을 닫음
span.onclick = function() {
    modal.classList.remove("show");

}

// 확인 버튼을 클릭하면 모달을 닫음
confirmBtn.onclick = function() {
    // 필요한 경우 추가 로직을 여기에 추가할 수 있음
    modal.classList.remove("show");
    changeNickname.forEach(ch => ch.textContent = nicknameInput.value);

}

// 모달 외부를 클릭하면 모달을 닫음
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    modal.classList.remove("show");

}


}