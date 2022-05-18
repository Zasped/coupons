import React, {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar";
import Coupons from "./components/Coupons";
import promo from "./JSON/promo.json";
import CouponsId from "./components/CouponsId";

function App() {
    const [sort, setSort] = useState('none');
    const [coupons, setCoupons] = useState(promo);
    const [uid, setUid] = useState(null);

    useEffect(() => {
        setCoupons(coupons.sort((prevEl, nextEl) => nextEl.active - prevEl.active))
    }, [coupons])

    return (
        <div className="App">
            <Sidebar setSort={setSort} setUid={setUid}/>
            {(uid) ?
                <CouponsId
                    coup={coupons}
                    uid={uid}
                    setUid={setUid}
                    setCoupons={setCoupons}
                /> :
                <Coupons
                    coupons={coupons}
                    sort={sort}
                    setUid={setUid}
                    uid={uid}
                    setCoupons={setCoupons}
                />
            }
        </div>
    );
}

export default App;
