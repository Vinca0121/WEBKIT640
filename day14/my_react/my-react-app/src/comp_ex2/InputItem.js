import { useState } from "react";



function InputItem({ appendItem }) {
    // input의 value로 사용 할 경우 초기값 필수.
    const [newWork, setNewWork] = useState("");
    return (
      <div>
        할일 :
        <input
          type="text"
          value={newWork}
          onChange={(e) => {
            setNewWork(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            appendItem(newWork);
          }}
        >
          추가
        </button>
      </div>
    );
  }

  export default InputItem;