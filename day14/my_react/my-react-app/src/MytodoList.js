import React, {useState, useEffect} from "react";
import "./App.css";

function ItemRow({todo, removeItem, updateItem})
{
    const [editmode, setmode] = useState(false);
    const [title, setTitle] = useState(todo.title);

    return(

        <li>
            <p>
                <input
                type ="checkbox"
                // todo의 check값에 따라 변동 됨.
                checked = {todo.check ? "checked" : ""}
                // check 값이 변동 되면 todo의 check값을 변경 후 재 랜더링
                onChange = {(event) => {
                    todo.check = !(todo.check)
                    updateItem(todo);
                }}
                />
                <input
                type="text"
                // mode의 on,off에 따라서 disable 기능이 토글 됨.
                disabled = {editmode ? "": "disabled"}

                value = {title}
                // todo를 수정할 때, disalbed = ""
                onChange = {(e)=> {
                    setTitle(e.target.value);
                }}
                className = {todo.check ? "fin" : "not-fin"}
                
                >
                </input>
                <span>&nbsp;&nbsp;</span>
                <button
                    onClick={(e) => {
                        // 버튼을 눌렀을 때, editmode가 true라면 수정 -> 수정하기
                        setmode(!editmode);
                        // 수정 중...
                        if(editmode){
                            todo.title = title;
                            updateItem(todo);
                            
                        }
                    }}
                >
                    {editmode ? "수정완료" : "수정하기"}
                </button>
                <span> </span>
                <button
                    onClick={(e) => {
                        removeItem(todo.no);
                    }}
                
                >삭제하기</button>
            </p>
        </li>
    )
}


function InputItem({appendItem}){
    const [newWork, makeNewWork] = useState("");
    
    return (
        <div>
            <span>할일 :&nbsp;</span>
            <input
                type ="text"
                value = {newWork}
                onChange={(e)=>{
                    makeNewWork(e.target.value);
                }}
                onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        appendItem(newWork);
                        makeNewWork("");
                    }
                }}
            />
            <span>&nbsp;</span>
            <button onClick={(e)=>{
                appendItem(newWork);
                makeNewWork("");
            }}>
            추가
            </button>
        </div>
    )
}


function TodoList({todoList, removeItem, updateItem}){
    return(
        <div>
            <ol>
                {todoList.map((todo, index) =>{
                    return (
                    <ItemRow
                    // key={item.no}
                        todo = {todo}
                        removeItem = {removeItem}
                        updateItem = {updateItem}
                    ></ItemRow>
                    );
                })}
            </ol>
        </div>
    );

}

function App(props){
    const [todoList, setTodoList] = useState([]);
    // todoList의 넘버링
    const [noCount, setNoCount] = useState(1);

    useEffect(()=>{
        const localStorageData = localStorage.getItem("todoListData");
        if(localStorageData)
        {
            let LocalData_json = JSON.parse(localStorageData);
            setTodoList(LocalData_json.todoList);
            setNoCount(LocalData_json.noCount);
            
        }
    }, []);

    function saveLocalStorage(newList, noCnt){
        localStorage.setItem("todoListData",
        JSON.stringify({todoList:newList, noCount : noCnt})
        );
        
    }
    // 새로운 todo를 추가해주는 함수 (todo에 대한 정보 생성)
    function appendItem(newtitle){
        
        let newList = [...todoList, {no : noCount, title : newtitle, check : false}]
        let tempCnt = noCount + 1;
        // console.log("저장된 넘버링은 : ", noCount)
        setTodoList(newList);
        setNoCount(tempCnt);
        saveLocalStorage(newList, tempCnt);
        console.log("다음번째 올 넘버링은 : ", noCount);           
    }


    function removeItem(del_no)
    {
        var newList = todoList.filter((item, index) =>{
            return item.no != del_no;
        });
        setTodoList(newList);
        saveLocalStorage(newList, noCount);

    }
    function updateItem()
    {
        // 리스트를 복사
        let newList = [...todoList];
        // States를 사용하여 재 랜더링
        setTodoList(newList)
        saveLocalStorage(newList, noCount);
    }


    
    // 메인 출력해 줄 부분  
    return(
        <>
        <h1>Vinca's Todo List</h1>
        <InputItem appendItem={appendItem} />
        <hr/>
        <TodoList todoList={todoList} removeItem={removeItem} updateItem={updateItem}>
        </TodoList>
        </>
    );
}

export default App;