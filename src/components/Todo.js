import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';


function Todo() {

    const [inputData, setInputData] = useState('');
    const [con,setCon] = useState ('')
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoReducers.list);

    // console.log(todoList);

    return (<>
        <div className='pt-[20px] bg-emerald-900 h-[100vh] flex flex-col gap-5'>
            <div className='flex justify-center gap-4'>
                <input onChange={(e) => { setInputData(e.target.value) }} value={inputData} placeholder='write your todo ...' className='text-[18px] font-medium tracking-[0.7px] text-slate-600 border outline-none py-1 px-2  rounded w-[400px]' />
                <button onClick={() => { dispatch(addTodo(inputData)); setInputData('') }} type='button' className='border text-slate-100 p-1 rounded-md hover:bg-emerald-600'>Add Todo</button>
            </div>
            <div className='flex items-center justify-center flex-col gap-4 text-slate-100 '>
                {todoList.map((item) => {
                    return (<>
                        <div key={item.id} className='border p-1 px-2 flex gap-3 w-[400px] justify-between rounded-md' >
                            <h1>
                                {item.data}
                            </h1>
                            <button type='button' className='hover:text-red-500' onClick={() => { dispatch(deleteTodo(item.id)) }}>X</button>
                        </div>
                    </>
                    )
                })}
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                 <h1 className='text-xl text-slate-200 font-medium'> {con}  </h1>
                <button type='button' onClick={() => { dispatch(removeTodo());setCon('ALL DATA CLEAR') }} className='border w-[200px] hover:bg-emerald-600 text-slate-100 text-xl p-1 px-2 font-medium rounded-md'>
                    Clear Todo List
                </button>
            </div>
        </div>
    </>
    );
}

export default Todo;