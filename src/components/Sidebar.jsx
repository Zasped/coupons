import React, {memo} from 'react';

const Sidebar = ({setSort, setUid}) => {
    return (
        <div className={'Sidebar'}>
            <h1 className={'title'}>Title</h1>
            <ul className={'menu_nav'}>
                <li><span>Покупатели</span></li>
                <li>
                    <span onClick={() => {
                        setSort('none')
                        setUid(null)
                    }}>Купоны</span>
                    <ul className={'submenu_nav'}>
                        <li><span onClick={() => {
                            setSort('new')
                            setUid(null)
                        }}>Новые</span></li>
                        <li><span onClick={() => {
                            setSort('used')
                            setUid(null)
                        }}>Использованные</span></li>
                    </ul>
                </li>
                <li>
                    <span>Персонал</span>
                    <ul className={'submenu_nav'}>
                        <li><span>Маркетинг</span></li>
                        <li><span>Директора</span></li>
                        <li><span>Продавцы</span></li>
                    </ul>
                </li>
                <li>
                    <span>Отчеты</span>
                    <ul className={'submenu_nav'}>
                        <li><span>SEO</span></li>
                        <li><span>Реклама</span></li>
                        <li><span>Промо</span></li>
                    </ul>
                </li>
                <li><span>Карты</span></li>
                <li><span>FAQ</span></li>
            </ul>
        </div>
    );
};

export default memo(Sidebar);