import { useState } from "react";
import Car from "./comp_ex/Car";
import Hello from "./comp_ex/Hello";



// 콤포넌트 선언

// 외부에 선언함  comp_ex

// 구조분해 할당 - 객체나 리스트의 요소를 바로 끄집에 내어서 사용
// 외부에 선언함 com_ex
var cnum = 0;

function App() {
  // state 선언
  const [brand, setBrand] = useState("현대");
  const [carname, setCarName] = useState("AVANTE");
  const [user, setUser] = useState("Vinca");

  const [carArr, setCarArr] = useState(["AVANTE", "SONATA","GRANDEUR", "GENESIS"])
  console.log("-------랜 더 링!-------")
  
  function _changeName(newName) {
    console.log("changeName() 호출!");
    setUser(newName);
  }

  return (
    <div>
      {/* 콤포넌트 생성 */}
      <Car brand={brand} name={carname}></Car>
      <hr />
      {/* <Hello name={user} address="Seoul" changeName={_changeName}></Hello> */}

      <button type="button" 
      onClick ={ 
        () => {
          cnum += 1;
          let cname = carArr[cnum];
          console.log(cname,cnum);
          setCarName(cname)
          
          
        console.log ("업그레이드 버튼 클릭 됨");}
      }>
      Upgrade
    </button>
    <p/>
    <button type="button"
      onClick ={ 
        () => {
          cnum -= 1;
          let cname = carArr[cnum];
          console.log(cname,cnum);
          setCarName(cname)
          
        console.log ("다운그레이드 버튼 클릭 됨");}
      }>
      Downgrade
    </button>
    </div>
  );
}

export default App;