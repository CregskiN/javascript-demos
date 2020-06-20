function getElemById(id) {
    return document.getElementById(id);
}

window.onload = () => {
    const fileInputter = getElemById('file');
    const uploadElem = getElemById('upload');

    fileInputter.addEventListener('change', (e) => {
        const target = e.target;
        const fURL = e.target.value;
        console.log('选择成功', fURL); // C:\fakepath\ui调整.rp

        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target.result;
            // console.log(result);
            ajax({
                url: 'http://127.0.0.1:3001/file',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    file: result
                }
            })
        };

        // console.log(Object.prototype.toString.call(target.files)); // [object FileList]
        // console.log(Object.prototype.toString.call(target.files[0])); // [object File]

        reader.readAsDataURL(target.files[0]);

    })

    uploadElem.addEventListener('click', function (e) {
        e.preventDefault();

    }, false);

}




