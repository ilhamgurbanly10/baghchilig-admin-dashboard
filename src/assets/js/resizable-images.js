// resizable-images

function resizableImages(el) {
	
	const btn = el.querySelector('.resizable-images-btn');
	const con = el.querySelector('.resizable-images-container');
    con.style.width = "50%";
    const parWidth = el.getBoundingClientRect().width + 10;

    const readyToResize = () => {
        document.addEventListener('mousemove', resize);
        document.addEventListener('touchmove', resize);
        document.addEventListener('mouseup', stopResize);
        document.addEventListener('touchend', stopResize);
        document.addEventListener('touchcancel', stopResize);
        btn.removeEventListener('mousedown', readyToResize);
        btn.removeEventListener('touchstart', readyToResize);
        con.classList.add('is-dragging');
    }

    const stopResize = () => {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('touchmove', resize);
        document.removeEventListener('mouseup', stopResize);
        document.removeEventListener('touchend', stopResize);
        document.removeEventListener('touchcancel', stopResize);
        btn.addEventListener('mousedown', readyToResize);
        btn.addEventListener('touchstart', readyToResize);
        con.classList.remove('is-dragging');
    }

	const resize = (e) => {
        e = e || window.event;
        
        const left = con.getBoundingClientRect().left;
        const mouseX =  e.clientX || e.touches[0].clientX;
        const pos = mouseX - left;
        if (pos < -35 || pos > parWidth) return;
        con.style.width = pos + "px";
	}

	btn.addEventListener('mousedown', readyToResize);
    btn.addEventListener('touchstart', readyToResize);

}

export default resizableImages;

// the-end-of-resizable-images