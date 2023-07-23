// console.log('hello')

let userForm = document.getElementById('userForm');

userForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    let formData = {};

    let userInput = document.getElementById('userInput');
    formData['userInput'] = userInput.value;

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (!response.ok) {
            throw new Error('response not 200')
        }

        const data = await response.json();
        console.log(data);
        document.querySelector('h1').textContent = `your name is: ${data.user}`
    }
    catch (error) {
        console.error('Error:',error)
    };
});


// userForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let formData = {}

//     let userInput = document.getElementById('userInput');
//     formData['userInput'] = userInput.value

//     fetch('/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({userInput: userInput.value})
//     })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('not OK');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
// });