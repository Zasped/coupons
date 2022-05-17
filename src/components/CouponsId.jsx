import React, {useEffect, useState} from 'react';

const CouponsId = ({coup, uid, setUid, setCoupons}) => {

  const [idInput, setIdInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [summInput, setSummInput] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [codeInput, setCodeInput] = useState('');

  useEffect(() => {
    [coup.find(el => el.id == uid)].map(el => {
      setIdInput(el.id)
      setPhoneInput(el.phone)
      setNameInput(el.name)
      setCityInput(el.city)
      setSummInput(el.summ)
      setActiveInput(el.active)
      setCodeInput(el.code)
    })
  }, [])

  const submit = () => {
    const cop = coup.filter(el => el.id !== uid)
    const obj = {
      "id": idInput,
      "phone": phoneInput,
      "name": nameInput,
      "city": cityInput,
      "summ": summInput,
      "active": JSON.parse(activeInput),
      "code": codeInput,
    }
    setCoupons([...cop, obj])
    setUid(null)
  }

  return (
      <div className={'CouponsId'}>
        <form onSubmit={submit}>
          <input type="text" value={phoneInput} placeholder={'phone'}
                 onChange={(e) => setPhoneInput(e.target.value)}/>

          <input type="text" value={nameInput} placeholder={'name'}
                 onChange={(e) => setNameInput(e.target.value)}/>

          <input type="text" value={cityInput} placeholder={'city'}
                 onChange={(e) => setCityInput(e.target.value)}/>

          <input type="text" value={summInput} placeholder={'summ'}
                 onChange={(e) => setSummInput(e.target.value)}/>

          <select onChange={(e) => setActiveInput(e.target.value)}>
            <option selected={activeInput ? true : null} value="true">true</option>
            <option selected={!activeInput ? true : null} value="false">false</option>
          </select>

          <input type="text" value={codeInput} placeholder={'code'}
                 onChange={(e) => setCodeInput(e.target.value)}/>

          <button>Сохранить</button>
        </form>

      </div>
  );
};

export default CouponsId;