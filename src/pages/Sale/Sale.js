import "./Sale.css";
import {  useRef, useState } from "react";
// Components

const Sale = ({ company }) => {
  const [complex, setComplex] = useState([]);
  const [apartment, setApartment] = useState([]);
  const [banks, setBanks] = useState([]);
  const [house, setHouse] = useState([]);
  const [COMPANY, SETCOMPANY] = useState();
  const [COMPLEX, SETCOMPLEX] = useState();

  let companyId = useRef();
  let complexId = useRef();
  let apartmentId = useRef();
  let bankId = useRef();
  let apartmentsLi = useRef();
  const FuncCompany = () => {
    (async () => {
      const DATA = await fetch(
        `https://houses-online.herokuapp.com/buy/${companyId.current.value}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const allData = await DATA.json();
      setComplex(await allData);
      setApartment([]);
      setBanks([]);
      setHouse([]);
    })();
    SETCOMPANY(company.find((a) => a.id === companyId.current.value));
  };
  const FuncComplex = () => {
    (async () => {
      const DATA = await fetch(
        `https://houses-online.herokuapp.com/buy/${companyId.current.value}/${complexId.current.value}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const allData = await DATA.json();
      setApartment(await allData);
      setHouse([])
      setBanks([])
    })();
    SETCOMPLEX(complex.find((a) => a.id === complexId.current.value));
  };
  const FuncApartment = () => {
    (async () => {
      const DATA = await fetch(`https://houses-online.herokuapp.com/bank/${sum}`, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      });
      const allData = await DATA.json();
      setBanks(await allData);
    })();
    setHouse([apartment.find((a) => a.id === apartmentId.current.value)]);
  };

  let sum = 0;
  house.length ? (sum = house[0].area * house[0].price) : (sum = 5000000000);
  const funcBank = () => {};
  const selectLi = () => {
  };
  console.log(banks);
  console.log(house);
  const Submit = ()=>{

  }
  return (
    <div id="container" className="div">
      <form id="form" onSubmit={Submit} >
        <div>
          <p id="title">
            Kerakli bo'limlarni tanlang va o'z uyingizni band qiling !
          </p>
          {company && (
            <div>
              <p>Qurulish kompaniyasini tanlang</p>
              <select
                ref={companyId}
                onChange={FuncCompany}
                id="select"
                className="select-company"
              >
                {company.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {complex && (
            <div>
              <p>Qurulish komplex tanlang</p>
              <select
                ref={complexId}
                onChange={FuncComplex}
                id="select"
                className="select-complex"
              >
                {complex.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {apartment && (
            <div>
              <p>Nechchi xonali kvartira qidiryapsiz</p>
              <select
                ref={apartmentId}
                onChange={FuncApartment}
                id="select"
                className="select-apartment"
              >
                {apartment.map((a) => (
                  <option value={a.id} key={a.id}>
                    {a.room} xonali {a.area} kvm
                  </option>
                ))}
              </select>
            </div>
          )}
          {banks && (
            <div>
              <p>Siz uchun kredit berishga tayyor banklar xoxlaganingizni tanlang</p>
              <select
                ref={bankId}
                onChange={funcBank}
                id="select"
                className="select-bank"
              >
                {banks.map((b) => (
                  <option value={b.id} key={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        <button id="submit" type='submit'>Submit</button>

        </div>
        <div>
          {COMPANY && (
            <div id="company">
              <img src={COMPANY.media[0]} width={200} alt="img"/>
              <h1>{COMPANY.name}</h1>
              <a href={COMPANY.link}  target='_blank' id="company-link" rel="noreferrer" >Companiya haqida batafsil</a>

            </div>
          )}
        </div>
      </form>
      <div id="apartment">
        {house &&
          house.map((h) => (
            <div key={h.id} >
              <p id="tanlangan-text">Siz tanlagan uy</p>
              <div
                key={h.id}
                id="complex-apartments-item"
                className="tanlangan"
              >
                <div>
                  {h.media.map((img,i) => (
                    <img src={img} width={250} height={150} alt="img" key={i} />
                  ))}
                </div>
                <div>
                  <p id="text">Xonalar soni : {h.room}</p>
                  <p id="text">Maydoni : {h.area} m2</p>
                  <p id="text">1 m2 : {h.price} so'm</p>
                  <p id="text">Jami bahosi : {h.area * h.price} so'm</p>
                  <p id="text">Qurulish boshlangan : {h.begin_plot}</p>
                  <p id="text">Qurulish yakunlanadi : {h.end_plot}</p>
                  <p id="text">Company : {COMPANY.name}</p>
                  <p id="text">Complex : {COMPLEX.name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div id="complex-apartments">
        {apartment && (
          <div>
            <p id="uylar-text">Uylar bilan tanishing ! </p>
            <ul id="complex-apartments-list">
              {apartment.map((a) => (
                <li
                  key={a.id}
                  apartmentid={a.id}
                  id="complex-apartments-item"
                  value={a.id}
                  ref={apartmentsLi}
                  onClick={selectLi}
                >
                  <div>
                    {a.media.map((img,i) => (
                      <img src={img} width={250} height={150} alt="img" key={i} />
                    ))}
                  </div>
                  <div>
                    <p id="text">Xonalar soni : {a.room}</p>
                    <p id="text">Maydoni : {a.area} m2</p>
                    <p id="text">1 m2 : {a.price} so'm</p>
                    <p id="text">Jami bahosi : {a.area * a.price} so'm</p>
                    <p id="text">Qurulish boshlangan : {a.begin_plot}</p>
                    <p id="text">Qurulish yakunlanadi : {a.end_plot}</p>
                    <p id="text">Company : {COMPANY.name}</p>
                    <p id="text">Complex : {COMPLEX.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sale;
