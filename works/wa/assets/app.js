
const ready = () => {
    let link = document.getElementById("myinput").value;

    // document.location.href = 'http://wa.me/';
    window.open(`http://wa.me/${link}`);
}