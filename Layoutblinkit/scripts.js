document.getElementById('upload-btn').addEventListener('click', function() {
    const files = document.getElementById('file-upload').files;
    if (files.length > 0) {
        alert(`${files.length} file(s) uploaded successfully.`);
    } else {
        alert('No file selected.');
    }
});
