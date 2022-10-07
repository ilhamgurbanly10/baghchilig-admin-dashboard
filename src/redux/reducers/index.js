import { DELETE_WHY_CHOOSE_US, EDIT_WHY_CHOOSE_US, EDIT_CART_PRODUCTS, DELETE_CART_PRODUCTS, DELETE_HEAD_SLIDES, EDIT_HEAD_SLIDES, DELETE_OFFERS, EDIT_OFFERS, DELETE_FEATURED_WORK, EDIT_FEATURED_WORK } from "../types";

import Images from '../../components/files/Images';

// cart-products

const InitialCartProducts = [
    {   
        id:1,
        product_id: 5,
        title_en: 'Wardrobe',
        title_az: 'Qarderob',
        title_de: 'Schrank',
        price: "170.00",
        money: "$",
        img: Images.cartProduct01
    },
    {   
        id:2,
        product_id: 3,
        title_en: 'Table',
        title_az: 'Masa',
        title_de: 'Tisch',
        price: "300.00",
        money: "$",
        img: Images.cartProduct02
    },
    {   
        id:3,
        product_id: 8,
        title_en: 'Water Tap',
        title_az: 'Su Kranı',
        title_de: 'Wasserhahn',
        price: "100.00",
        money: "$",
        img: Images.cartProduct03
    }
]

export const CartProductsReducer = (cartProducts = InitialCartProducts , action) =>{
    switch (action.type){
        case DELETE_CART_PRODUCTS :
            return action.payload
        case EDIT_CART_PRODUCTS :
            return cartProducts +=  ` ${action.payload}`
        default :
            return cartProducts;
    }
}

// the-end-of-cart-products



// the-end-of-head-slides

const InitialHeadSlides = [
    {   
        id:1,
        title_en: 'WELCOME',
        title_az: 'XOŞ GƏLMİSİNİZ',
        title_de: 'WILLKOMMEN',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.headSliderImg01
    },
    {   
        id:2,
        title_en: 'CONSTRUCTION',
        title_az: 'İNŞAAT',
        title_de: 'BAU',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.headSliderImg02
    },
    {   
        id:3,
        title_en: 'WHAT WE DO',
        title_az: 'BİZ NƏ EDİRİK',
        title_de: 'WAS MACHEN WIR',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.headSliderImg03
    },
    {   
        id:4,
        title_en: 'NEW WORLD',
        title_az: 'YENİ DÜNYA',
        title_de: 'DIE NEUE WELT',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.headSliderImg04
    }
]

export const HeadSlidesReducer = (headSlides = InitialHeadSlides , action) =>{
    switch (action.type){
        case DELETE_HEAD_SLIDES:
            return action.payload
        case EDIT_HEAD_SLIDES :
            return headSlides +=  ` ${action.payload}`
        default :
            return headSlides;
    }
}

// the-end-of-head-slides



// offers

const InitialOffers = [
    {   
        id:1,
        title_en: 'The Green Building',
        title_az: 'Yaşıllıq Salınması',
        title_de: 'Das grüne Gebäude',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.whatWeOfferImg01
    },
    {   
        id:2,
        title_en: 'House Renovation',
        title_az: 'Ev Təmiri',
        title_de: 'Hausrenovierung',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.whatWeOfferImg02
    },
    {   
        id:3,
        title_en: 'Design & Construction',
        title_az: 'Dizayn & İnşaat',
        title_de: 'Design & Konstruktion',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.whatWeOfferImg03
    },
    {   
        id:4,
        title_en: 'The Green Building',
        title_az: 'Yaşıllıq Salınması',
        title_de: 'Das grüne Gebäude',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.whatWeOfferImg01
    },
    {   
        id:5,
        title_en: 'House Renovation',
        title_az: 'Ev Təmiri',
        title_de: 'Hausrenovierung',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.whatWeOfferImg02
    },
    {   
        id:6,
        title_en: 'Design & Construction',
        title_az: 'Dizayn & İnşaat',
        title_de: 'Design & Konstruktion',
        text_en: 'Our experience ensures that your projects will be done right and with the upmost professionalism.',
        text_az: 'Bizim təcrübəmiz layihələrinizin düzgün və ən yüksək peşəkarlıqla həyata keçirilməsini təmin edir.',
        text_de: 'Unsere Erfahrung stellt sicher, dass Ihre Projekte richtig und mit höchster Professionalität durchgeführt werden.',
        img: Images.whatWeOfferImg03
    }
]

export const OffersReducer = (offers = InitialOffers , action) =>{
    switch (action.type){
        case DELETE_OFFERS:
            return action.payload
        case EDIT_OFFERS :
            return offers +=  ` ${action.payload}`
        default :
            return offers;
    }
}

// the-end-of-offers



// featured-work

const InitialFeaturedWork = [
    {   
        id:1,
        title_en: 'LUXURY BUILDINGS',
        title_az: 'LÜKS BİNALAR',
        title_de: 'LUXUSGEBÄUDE',
        text_en: 'Construction',
        text_az: 'Tikinti',
        text_de: 'Konstruktion',
        img: Images.featuredWorkImg01,
        images: [
            Images.featuredWorkList01Img01,
            Images.featuredWorkList01Img02,
            Images.featuredWorkList01Img03,
            Images.featuredWorkList01Img04,
            Images.featuredWorkList01Img05,
            Images.featuredWorkList01Img06,
            Images.featuredWorkList01Img07,
            Images.featuredWorkList01Img08
        ]
    },
    {   
        id:2,
        title_en: 'LUXURY BUILDINGS',
        title_az: 'LÜKS BİNALAR',
        title_de: 'LUXUSGEBÄUDE',
        text_en: 'Construction',
        text_az: 'Tikinti',
        text_de: 'Konstruktion',
        img: Images.featuredWorkImg02,
        images: [
            Images.featuredWorkList02Img01,
            Images.featuredWorkList01Img02,
            Images.featuredWorkList01Img03,
            Images.featuredWorkList01Img04,
            Images.featuredWorkList01Img05,
            Images.featuredWorkList01Img06,
            Images.featuredWorkList01Img07,
            Images.featuredWorkList01Img08
        ]
    },
    {   
        id:3,
        title_en: 'LUXURY BUILDINGS',
        title_az: 'LÜKS BİNALAR',
        title_de: 'LUXUSGEBÄUDE',
        text_en: 'Construction',
        text_az: 'Tikinti',
        text_de: 'Konstruktion',
        img: Images.featuredWorkImg03,
        images: [
            Images.featuredWorkList03Img01,
            Images.featuredWorkList01Img02,
            Images.featuredWorkList01Img03,
            Images.featuredWorkList01Img04,
            Images.featuredWorkList01Img05,
            Images.featuredWorkList01Img06,
            Images.featuredWorkList01Img07,
            Images.featuredWorkList01Img08
        ]
    },
    {   
        id:1,
        title_en: 'LUXURY BUILDINGS',
        title_az: 'LÜKS BİNALAR',
        title_de: 'LUXUSGEBÄUDE',
        text_en: 'Construction',
        text_az: 'Tikinti',
        text_de: 'Konstruktion',
        img: Images.featuredWorkImg01,
        images: [
            Images.featuredWorkList01Img01,
            Images.featuredWorkList01Img02,
            Images.featuredWorkList01Img03,
            Images.featuredWorkList01Img04,
            Images.featuredWorkList01Img05,
            Images.featuredWorkList01Img06,
            Images.featuredWorkList01Img07,
            Images.featuredWorkList01Img08
        ]
    },
    {   
        id:2,
        title_en: 'LUXURY BUILDINGS',
        title_az: 'LÜKS BİNALAR',
        title_de: 'LUXUSGEBÄUDE',
        text_en: 'Construction',
        text_az: 'Tikinti',
        text_de: 'Konstruktion',
        img: Images.featuredWorkImg02,
        images: [
            Images.featuredWorkList02Img01,
            Images.featuredWorkList01Img02,
            Images.featuredWorkList01Img03,
            Images.featuredWorkList01Img04,
            Images.featuredWorkList01Img05,
            Images.featuredWorkList01Img06,
            Images.featuredWorkList01Img07,
            Images.featuredWorkList01Img08
        ]
    },
    {   
        id:3,
        title_en: 'LUXURY BUILDINGS',
        title_az: 'LÜKS BİNALAR',
        title_de: 'LUXUSGEBÄUDE',
        text_en: 'Construction',
        text_az: 'Tikinti',
        text_de: 'Konstruktion',
        img: Images.featuredWorkImg03,
        images: [
            Images.featuredWorkList03Img01,
            Images.featuredWorkList01Img02,
            Images.featuredWorkList01Img03,
            Images.featuredWorkList01Img04,
            Images.featuredWorkList01Img05,
            Images.featuredWorkList01Img06,
            Images.featuredWorkList01Img07,
            Images.featuredWorkList01Img08
        ]
    }
]

export const FeaturedWorkReducer = (featuredWork = InitialFeaturedWork , action) =>{
    switch (action.type){
        case DELETE_FEATURED_WORK:
            return action.payload
        case EDIT_FEATURED_WORK :
            return featuredWork +=  ` ${action.payload}`
        default :
            return featuredWork;
    }
}

// the-end-of-featured-work


// why-choose-us

const InitialWhyChooseUs = [
    {   
        id:1,
        title_en: 'We have 30 plus years in the building industry',
        title_az: 'Bizim tikinti sənayesində 30 ildən çox təcrübəmiz var',
        title_de: 'Wir sind seit über 30 Jahren in der Baubranche tätig',
        text_en: 'As Aysu Construction Company, we provide you with the best service. 30 years of experience and the work we do are the guarantee of the projects we hand over.',
        text_az: 'Aysu Construction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.Aysu COnstruction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.',
        text_de: 'Als Aysu Construction Company bieten wir Ihnen den besten Service.30 Jahre Erfahrung und unsere Arbeit sind die Garantie für die von uns übergebenen Projekte.'
    },
    {   
        id:2,
        title_en: 'Quality construction continues after the project',
        title_az: 'Layihədən sonra keyfiyyətli tikinti davam edir',
        title_de: 'Qualitätsbau wird nach dem Projekt fortgesetzt',
        text_en: 'As Aysu Construction Company, we provide you with the best service. 30 years of experience and the work we do are the guarantee of the projects we hand over.',
        text_az: 'Aysu Construction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.Aysu COnstruction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.',
        text_de: 'Als Aysu Construction Company bieten wir Ihnen den besten Service.30 Jahre Erfahrung und unsere Arbeit sind die Garantie für die von uns übergebenen Projekte.'
    },
    {   
        id:3,
        title_en: 'We use technology to do the job more quickly',
        title_az: 'Biz işi daha tez yerinə yetirmək üçün texnologiyadan istifadə edirik',
        title_de: 'Wir nutzen Technologie, um die Arbeit schneller zu erledigen',
        text_en: 'As Aysu Construction Company, we provide you with the best service. 30 years of experience and the work we do are the guarantee of the projects we hand over.',
        text_az: 'Aysu Construction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.Aysu COnstruction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.',
        text_de: 'Als Aysu Construction Company bieten wir Ihnen den besten Service.30 Jahre Erfahrung und unsere Arbeit sind die Garantie für die von uns übergebenen Projekte.'
    },
    {   
        id:4,
        title_en: 'Employees are continually trained on safety issues',
        title_az: 'İşçilər davamlı olaraq təhlükəsizlik məsələləri üzrə təlim keçirlər',
        title_de: 'Die Mitarbeiter werden laufend in Sicherheitsfragen geschult',
        text_en: 'As Aysu Construction Company, we provide you with the best service. 30 years of experience and the work we do are the guarantee of the projects we hand over.',
        text_az: 'Aysu Construction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.Aysu COnstruction şirkəti olaraq sizlərə ən yaxşı şəkildə xidmət göstəririk.30 ili aşqın təcrübə və gördüyümüz işlər təhvil aldığımız layihələrin zəmanətidir.',
        text_de: 'Als Aysu Construction Company bieten wir Ihnen den besten Service.30 Jahre Erfahrung und unsere Arbeit sind die Garantie für die von uns übergebenen Projekte.'
    }
]

export const WhyChooseUsReducer = (whyChooseUs = InitialWhyChooseUs , action) =>{
    switch (action.type){
        case DELETE_WHY_CHOOSE_US:
            return action.payload
        case EDIT_WHY_CHOOSE_US :
            return whyChooseUs +=  ` ${action.payload}`
        default :
            return whyChooseUs;
    }
}

// the-end-of-why-choose-us




