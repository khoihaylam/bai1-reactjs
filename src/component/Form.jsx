import React, { useState } from "react";
import Logo from "../assets/img/iphone-12-xanh-la-new-2-600x600.webp";
import Logo1 from "../assets/img/lenovo-ideapad-3-15iau7-i3-82rk001mvn-281122-052013-600x600.webp";
import Logo2 from "../assets/img/oppo-a38-gold-thumb-600x600.webp";
import Logo3 from "../assets/img/realme-c35-vang-thumb-600x600.webp";
function Form() {
  const [text, settext] = useState("iphone-12");
  const changvalue1 = (e) => {
    settext(e.target.value);
  };
  const submit1 = (e) => {
    e.preventDefault();
    alert(`${text}`);
  };
  return (
    <div>
      {/* <img src={Logo}></img> */}
      <br></br>
      <form onSubmit={submit1}>
        <select value={text} onChange={changvalue1}>
          <option value="iphone-12">iphone 12</option>
          <option value="lenovo">lenovo</option>
          <option value="oppo">oppo</option>
          <option value="realme">realme</option>
        </select>
        <button>submit</button>
      </form>
      {text == "iphone-12" ? (
        <img style={{ display: "block" }} className="img-1" src={Logo}></img>
      ) : (
        <img style={{ display: "none" }} className="img-2" src={Logo}></img>
      )}
      {text == "lenovo" ? (
        <img style={{ display: "block" }} className="img-1" src={Logo1}></img>
      ) : (
        <img style={{ display: "none" }} className="img-2" src={Logo1}></img>
      )}
      {text == "oppo" ? (
        <img style={{ display: "block" }} className="img-1" src={Logo2}></img>
      ) : (
        <img style={{ display: "none" }} className="img-2" src={Logo2}></img>
      )}
      {text == "realme" ? (
        <img style={{ display: "block" }} className="img-1" src={Logo3}></img>
      ) : (
        <img style={{ display: "none" }} className="img-2" src={Logo3}></img>
      )}
    </div>
  );
}
export default Form;
