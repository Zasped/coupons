import React from 'react';

const Table = ({coup, setUid, title, setCoupons, coupons}) => {

    const removeOnId = (id) => {
        setCoupons(coupons.filter(el => el.id !== id))
    }

    return (
        <table>
            <caption className={'title'}>{title}</caption>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Active</th>
                <th>Summ</th>
                <th>Code</th>
                <th></th>
                <th></th>
            </tr>
            {coup.map(el =>
                <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.active + ''}</td>
                    <td>{el.summ}</td>
                    <td>{el.code}</td>
                    <td>
                        <button onClick={() => {
                            setUid(el.id)
                        }}>
                            Изменить
                        </button>
                    </td>
                    <td>
                        <button onClick={() => removeOnId(el.id)}>
                            Удалить
                        </button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default Table;