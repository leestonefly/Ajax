myButton.addEventListener('click', (e) => {
    $.ajax({
        url: '/xxx',
        method: 'post',

    }).then((responseText)=>{console.log(responseText)},
        (request)=>{console.log('error')})
});

