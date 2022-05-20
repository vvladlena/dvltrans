const openItem = item => {
    const container = item.closest(".workers__item");
    const contentBlock = container.find(".workers__content");
    const textBlock = contentBlock.find(".workers__content-block");
    const reqHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.workers__content');
    const itemContainer = container.find(".workers__item");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.workers__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.workers');
    const elemContainer = $this.closest(".workers__item");

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this);
    }

})