import {useEffect} from 'react';

const BackToTopBtn = () => {

    useEffect(() => {

        const backtoTopBtn = document.querySelector('.fl-back-to-top-btn');
        document.body.style.setProperty('scoll-behaviour','smooth');

        const show = () => document.documentElement.scrollTop > 20 ? backtoTopBtn.classList.add('show') : hide();
        const hide = () =>  backtoTopBtn.classList.remove('show'); 
        const toTop = () => document.documentElement.scrollTop = 0; 
    
        backtoTopBtn.addEventListener('click', hide);
        backtoTopBtn.addEventListener('click', toTop);
        window.addEventListener('scroll', show);
        show();
    
    }, []);

    return <button className="fl-back-to-top-btn rotate-icon"><i className="fa fa-chevron-up"></i></button>  
     
}

export default BackToTopBtn;