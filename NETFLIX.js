const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content items from the Dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show case item
    tabContentItem.classList.add(`show`);
    // console.log(this.id)
}

function removeBorder()
{
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab
tabItems.forEach(item => item.addEventListener('click',selectItem));

