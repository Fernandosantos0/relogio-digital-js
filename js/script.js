window.onload = () => {

    /* Seção para a declarações de variáveis e constante */
    const hours = document.querySelector('#hora');
    const minutes = document.querySelector('#minuto');
    const seconds = document.querySelector('#segundo');
    const date = document.getElementById('data');
    const dateC = document.getElementById('data-c');

    const insertZero = time => time > 9 ? time : `0${time}`;

    const geradorMes = function(mes) {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[mes];
    };

    setInterval(() => {
        const data = new Date();
        const getHours = data.getHours();
        const getMinutes = data.getMinutes();
        const getSeconds = data.getSeconds();
        const getDay = data.getDate();
        const getMes = data.getMonth();
        const textMes = geradorMes(getMes);
        const getAno = data.getFullYear();

        hours.textContent = insertZero(getHours);
        minutes.textContent = insertZero(getMinutes);
        seconds.textContent = insertZero(getSeconds);

        date.textContent = `${insertZero(getDay)} de ${textMes} de ${getAno}`;
        date.setAttribute('datetime', `${insertZero(getDay)}/${insertZero(getMes + 1)}/${getAno}`);
        dateC.textContent = `${insertZero(getDay)}/${insertZero(getMes + 1)}/${getAno}`;
        dateC.setAttribute('datetime', `${insertZero(getDay)}/${insertZero(getMes + 1)}/${getAno}`);
    }, 1000);

};