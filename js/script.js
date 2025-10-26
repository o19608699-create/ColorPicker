console.log(document.querySelector('#colorPicker').value);
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
text.textContent = `カラーコード：${color.value}`;
const colorBg =() =>{
    //選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;
    //カラーコードを表示
    text.textContent = `カラーコード：${color.value}`};
    //カラーピッカーが変更されたらcolorBgを発動させる
color.addEventListener('input',colorBg);
