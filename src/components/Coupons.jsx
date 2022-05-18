import React, {useEffect, useState} from 'react';
import Table from "./Table";

const Coupons = ({coupons, sort, setUid, uid, setCoupons}) => {

    const [coup, setCoup] = useState(coupons);
    const [title, setTitle] = useState('Купоны');

    useEffect(() => {
        setCoup(coupons)
    }, [coupons])

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
                <Table coup={coup} setUid={setUid} title={title} setCoupons={setCoupons} coupons={coupons}/> :
                <h1>Купонов нет или не получены</h1>
            }
        </div>
    );

};

export default Coupons;