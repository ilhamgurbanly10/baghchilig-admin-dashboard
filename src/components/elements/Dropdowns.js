import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import {useTranslation} from "react-i18next";
import i18next from "i18next";


export const Languages = (props) => {
    
    const {t, i18n} = useTranslation('footer');

    const {placement} = props;

    const changeLan = (lan) => {
        i18n.changeLanguage(lan);
        localStorage.setItem('locale', lan);
    }

    const locale = localStorage.getItem('locale').toUpperCase();
    
    const langueageButtons = (
      <Menu
        items={[
          {
            key: '1',
            label: (
                <button onClick={() => { changeLan('az') }} className="btn btn-warning mt-2 mb-2">AZ</button>
            ),
          },
          {
            key: '2',
            label: (
                <button onClick={() => { changeLan('de') }} className="btn btn-warning mb-2">DE</button>
            ),
          },
          {
            key: '3',
            label: (
                <button onClick={() => { changeLan('en') }} className="btn btn-warning">EN</button>
            ),
          },
        ]}
      />
    );


    return (
        <>   
            <Dropdown
                overlay={langueageButtons}
                placement={placement}
                arrow={{
                    pointAtCenter: true,
                }}
            >
                <Button className="btn-4">{locale}</Button>
            </Dropdown>   
        </>
    ) 

}

export const Cart = (props) => {

    const {t, i18n} = useTranslation('common');

    const {placement, products} = props;

    const lan = i18next.language;

    const cartContent = (
      <Menu
        items={[
          {
            key: '1',
            label: (
                <div className="cart-item border-bottom-lightgrey-2 py-3 normal-min-width d-flex justify-content-start align-items-center">

                    <Link to="/">
                        <img src={products[0].img} alt="Product Img" className="cart-img small-img me-3" />
                    </Link>

                    <div className="cart-container">

                        <Link to="/" className="d-block cart-title black-btn">
                          {products[0][`title_${lan}`]}
                        </Link>

                        <p className="cart-price grey-text">
                            1 × {products[0].money + products[0].price}
                        </p>

                    </div>

                    <Link to="/" className="ms-auto smaller-font">
                      <i className="white-iconic-btn fa fa-times red-color"></i>
                    </Link>

                </div>
            ),
          },
          {
            key: '2',
            label: (
                <div className="cart-item border-bottom-lightgrey-2 py-3 normal-min-width d-flex justify-content-start align-items-center">

                    <Link to="/">
                        <img src={products[1].img} alt="Product Img" className="cart-img small-img me-3" />
                    </Link>

                    <div className="cart-container">

                        <Link to="/" className="d-block cart-title black-btn">
                          {products[1][`title_${lan}`]}
                        </Link>

                        <p className="cart-price grey-text">
                            1 × {products[1].money + products[1].price}
                        </p>

                    </div>

                    <Link to="/" className="ms-auto smaller-font">
                      <i className="white-iconic-btn fa fa-times red-color"></i>
                    </Link>

                </div>
            ),
          },
          {
            key: '3',
            label: (
                <div className="cart-item border-bottom-lightgrey-2 py-3 normal-min-width d-flex justify-content-start align-items-center">

                    <Link to="/">
                        <img src={products[2].img} alt="Product Img" className="cart-img small-img me-3" />
                    </Link>

                    <div className="cart-container">

                        <Link to="/" className="d-block cart-title black-btn">
                          {products[2][`title_${lan}`]}
                        </Link>

                        <p className="cart-price grey-text">
                            1 × {products[2].money + products[2].price}
                        </p>

                    </div>

                    <Link to="/" className="ms-auto smaller-font">
                      <i className="white-iconic-btn fa fa-times red-color"></i>
                    </Link>

                </div>
            ),
          },
          {
            key: '4',
            label: (
                <div className="cart-item mt-4">
                  <p className="cart-subtotal grey-text">
                      <span className="fw-bold black-color">{t('titles.subtotal')}: </span>
                      $570.00
                  </p>
                </div>
            ),
          },
          {
            key: '5',
            label: (
                <div className="cart-item mt-4 row gx-0 mx-auto w-100 align-items-center justify-content-between">

                    <Link to="/" className="yellow-btn px-0 col me-2">
                      {t('buttons.viewCart')}
                    </Link>

                    <Link to="/" className="yellow-btn px-0 col ms-2">
                      {t('buttons.checkout')}
                    </Link>

                </div>
            ),
          }
        ]}
      />
    );

    return (
        <div className="cart-container d-none d-lg-block">

          <Dropdown
                overlay={cartContent}
                placement={placement}
                arrow={{
                    pointAtCenter: true,
                }}
                className="p-6"
            >
                <Button className="white-iconic-btn yellow-color-on-hover bigger-font ms-3 btn-rotate">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="yellow-length-circle">{products.length}</span>
                </Button>
          </Dropdown> 
           
        </div>     
    );

}



