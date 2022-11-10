
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {useTranslation} from "react-i18next";


const LayoutBreadcrumb = () => {

  const {t, i18n} = useTranslation('common'); 
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbNameMap = {
    '/positions': t('menu.item02'),
    '/team-members': t('menu.item03'),
    '/solutions': t('menu.item04'),
    '/project-categories': t('menu.item05'),
    '/projects': t('menu.item06'),
    '/contact': t('menu.item07'),
    '/main-slider': t('menu.item08'),
    '/shopping-categories': t('menu.item09'),
    '/shopping-products': t('menu.item10'),
    // '/test/user': t('menu.item02')
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/"> {t('menu.item01')}</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      {breadcrumbItems}
    </Breadcrumb> 
  )

};

export default LayoutBreadcrumb;