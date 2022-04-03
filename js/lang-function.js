const select = document.querySelector('.change-lang');
const allLang = ['pl', 'en', 'ua', 'deu', 'ru']

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash; //получаем #ua..
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#pl';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['title-name'][hash];
    document.querySelector('.lng-hero-title').innerHTML = langArr['hero-title'][hash];
}
changeLanguage();