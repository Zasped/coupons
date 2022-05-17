import React from 'react';

const Table = ({coup, setUid, title}) => {
    return (
        <table>
            <caption>{title}</caption>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Active</th>
                <th>Summ</th>
                <th>Code</th>
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
                            Перейти
                        </button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default Table;