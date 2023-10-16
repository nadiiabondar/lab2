import React from 'react';

const AboutComponent = () => {
    return (
        <div>
            <h3>Контакти</h3>
            <div style={{ padding: 1 + 'em'}}>
                <p><b>Адреса:</b> м. Київ, вул. Новокостянтинівська, 1</p>
                <p><b>Тел:</b> (050) 010-03-03</p>
                <p><b>E-mail:</b> salon.suzuki@auto-intl.kiev.ua</p>
            </div>
            <h4>Графік роботи</h4>
            <div style={{ padding: 1 + 'em' }}>
               <p><b>Пн – Сб:</b> з 10:00 до 18:00</p>
               <p><b>Нд:</b> з 10:00 до 16:00 год.</p>
            </div>
        </div>
    )
};
export default AboutComponent;