function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');
    modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-window">
                <div class="modal-header">
                    <span>Attention!</span>
                </div>
                <div class="modal-body">
                    <span>Our policy include following you</span>
                   
                </div>
                <div class="modal-footer">
                    <button class="Ok">Agree</button>
                    <button class="Chanel">Not agree</button>
                </div>   
</div>`);
    document.body.appendChild(modal);
    return modal
}


$.modal = function (options) {
    const $modal = _createModal(options);
    let modalWindow = document.querySelector('.modal-window');
    let modalOverlay = document.querySelector('.modal-overlay');
    let buttonColor = document.getElementsByTagName('button');
    modalWindow.setAttribute('style' , `width: ${options.width} !important`);
    modalWindow.setAttribute('style' , `background: ${options.background} !important`);
    let arr = Array.from(buttonColor);
        arr.forEach((element) => {
            element.setAttribute('style', `background: ${options.backgroundButton} !important`)
        });
    return{
        open(){
            modalWindow.classList.add('open');
            closeOverlay = (event) => {
                if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('Chanel')) {
                    this.close();
                }
            }
            agreeOverlay = (event) =>{
                if(event.target.classList.contains('Ok')){
                    return window.location.assign("http://stackoverflow.com");
                }
            }

            modalOverlay.addEventListener('click', closeOverlay);
            modalOverlay.addEventListener('click', agreeOverlay);
        },
        close(){
            modalWindow.classList.remove('open');
            modalWindow.classList.add('hide');

        },
        destroy(){
            modalOverlay.removeEventListener('click', closeOverlay);
            modalOverlay.removeEventListener('click', agreeOverlay);
        }
    }
};
