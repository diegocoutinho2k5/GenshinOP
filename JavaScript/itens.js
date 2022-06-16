function iniciaModal(modalID) {
    
        const modal = document.getElementById(modalID);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                }
            });
        }
    


const Arco1 = document.querySelector('.bh');
Arco1.addEventListener('click', () => iniciaModal('modal-promocao', 'ayuh'));



function iniciaModal(modalID) {
    
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }



const Arco11 = document.querySelector('.bj');
Arco11.addEventListener('click', () => iniciaModal('modal-promocao'));





