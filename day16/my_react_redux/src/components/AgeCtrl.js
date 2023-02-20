import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function AgeCtrl(props) {
    const dispatch = useDispatch();

    return (
        <>
            <fieldset>
                <h3>age Controller</h3>
                <p>
                    직접 입력: <input type="text" />
                </p>
                <button onClick={()=>{
                    dispatch({type:"age증가"});
                }}>증가</button>
                <button onClick={()=>{
                    dispatch({type:"age감소"});
                }}>감소</button>
            </fieldset>
        </>
    )
}

export default AgeCtrl;