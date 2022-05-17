import React, {useEffect, useState} from 'react';
import Table from "./Table";

const Coupons = ({coupons, sort, setUid}) => {

    const [coup, setCoup] = useState(coupons);
    const [title, setTitle] = useState('Купоны');
    useEffect(() => {
        switch (sort) {
            case 'none':
                setCoup(coupons)
                setTitle('Купоны')
                break;

            case 'new':
                setCoup(coupons.filter((coupon => coupon.active)))
                setTitle('Купоны: новые')
                break;

            case 'used':
                setCoup(coupons.filter((coupon => !coupon.active)))
                setTitle('Купоны: использованные')
                break;
        }
    }, [sort])
    return (
        <div className={'Coupons'}>
            {(coup.length) ?
                <Table coup={coup} setUid={setUid} title={title}/> :
                <h1>Ошибка</h1>
            }
        </div>
    );

};

export default Coupons;