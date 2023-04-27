function onSubmit(e) {
    e.preventDefault();

    // collect user params to send to API0
    const prompt = document.querySelector('#prompt').value 
    const size = document.querySelector('#size').value

    if (prompt === '') {
        alert('Please input some text.')
        return
    }

    console.log(prompt, size)
}

document.querySelector('#image-form').addEventListener('submit', onSubmit)
