const change = document.getElementById("change");

function change_all() {
    const name1 = document.getElementById('name1');
    const name2 = document.getElementById('name2');
    const name3 = document.getElementById('name3');
    const city = document.getElementById('city');

    if (name1.innerText.trim() === 'Человек') {
        name1.innerText = 'Chelovek';
        name2.innerText = 'Umnyy';
        name3.innerText = 'Skachatoboivich';
        city.innerText = 'gor. Moskva';
    }

    else if (name1.innerText.trim() === 'Chelovek') {
        name1.innerText = 'Человек';
        name2.innerText = 'Умный';
        name3.innerText = 'Скачатьобоивич';
        city.innerText = 'гор. Москва';
    }
}

change.addEventListener("click", change_all);