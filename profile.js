// Preview uploaded profile picture
function previewPhoto() {
    const file = document.getElementById('upload-photo').files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById('profile-pic').src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Enable editing for all fields except age
function enableEdit() {
    document.getElementById('name').removeAttribute('readonly');
    document.getElementById('email').removeAttribute('readonly');
    document.getElementById('gender').removeAttribute('disabled');
    document.querySelector('button[type="submit"]').style.display = 'inline-block';
}
