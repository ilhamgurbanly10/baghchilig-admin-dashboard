
function closeNavbarNav(toggler, buttons) {
    buttons.forEach(btn => btn.onclick = function() { toggler.click(); });
}

export default closeNavbarNav;