// // Seleciona todos os elementos <a> dentro de .workContent
// document.querySelectorAll('.workContent a').forEach(link => {
//     // Adiciona um evento quando o mouse entra no link
//     link.addEventListener('mouseenter', () => {
//         // Seleciona o elemento pai mais próximo com a classe workProject1 ou workProject2
//         const project = link.closest('.workProject1, .workProject2');
//         if (project) {
//             // Altera a borda apenas desse projeto
//             project.style.border = '1px solid var(--decoration)';
//         }
//     });
//     // Adiciona um evento quando o mouse sai do link
//     link.addEventListener('mouseleave', () => {
//         // Seleciona o elemento pai mais próximo com a classe workProject1 ou workProject2
//         const project = link.closest('.workProject1, .workProject2');
//         if (project) {
//             // Remove a borda apenas desse projeto
//             project.style.border = '';
//         }
//     });
// });

