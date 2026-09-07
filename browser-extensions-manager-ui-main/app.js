// const mainElem = document.getElementById('main');

// const getData = () => {
//     return fetch('data.json')
//         .then(response => response.json())
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// };

// // "logo": "./assets/images/logo-style-spy.svg",
// //         "name": "StyleSpy",
// //         "description": "Instantly analyze and copy CSS from any webpage element.",
// //         "isActive": true
// const renderExtensionData = (data) => {
//     mainElem.innerHTML = '';
//     data.forEach((extension, index) => {
//         const extensionElem = document.createElement('div');
//         const extensionImgElem = document.createElement('img');
//         extensionImgElem.src = extension.logo;
//         extensionImgElem.alt = `${extension.name} logo`;
//         extensionElem.appendChild(extensionImgElem);
//         extensionElem.classList.add('extension-item');
//         extensionElem.dataset.id = index;
//         extensionElem.dataset.isActive = extension.isActive;
//         extensionElem.innerHTML = `
//             <div class="extension-content" data-id=${index}>
//             <img src="${extension.logo}" alt="${extension.name} logo">
//             <p>${extension.name}</p>
//             <p>${extension.description}</p>
//             <p>${extension.isActive ? 'Active' : 'Inactive'}</p>
//             <button class="remove">Remove</button>
//             </div>
//         `;
//         mainElem.appendChild(extensionElem);
//     });
// }

// getData().then(data => {
//     console.log(data);
//     renderExtensionData(data);
// });