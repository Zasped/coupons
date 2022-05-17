import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Coupons from "./components/Coupons";
import promo from "./JSON/promo.json";
import CouponsId from "./components/CouponsId";

function App() {

    const [sort, setSort] = useState('none');
    const [coupons, setCoupons] = useState(JSON.parse(JSON.stringify(promo)).sort((prevEl, nextEl) => nextEl.active - prevEl.active));
    const [uid, setUid] = useState(null);

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
                />
            }
        </div>
    );
}

export default App;
