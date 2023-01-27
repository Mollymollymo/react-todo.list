import {useState,useRef, useEffect} from 'react';

const Todolist = () =>{
    const inputRef = useRef(null);
    const [items,setItems] = useState([]);

    const addToList = () => {
        const todoItem = inputRef.current.value;
        setItems([...items,todoItem]);

        inputRef.current.value=""; 
    }

    useEffect(() => {
        console.log(items);
    },[items])

    return(
        <div className="flex flex-col items-center ">
            <h1 className="text-neutral-900 text-3xl">Todo List</h1>
            <div className="mt-4">
                <input placeholder="type some todo item..." ref={inputRef} className="border-[1px] p-2 h-8 rounded" type="text"/>
                <button className="ml-4 border-[1px] bg-white h-8 w-12 rounded" onClick={addToList}>
                    Add
                </button>
            </div>
            <div className="mt-4 border-[1px] w-64 h-72 rounded p-4">
            {
                items.map((item,index) => {
                    return(
                        <div className="w-full h-8 flex items-center rounded bg-white mt-2 first:mt-0 p-2"key={index}>
                            {item}
                        </div>
                    );
                })
            }
            </div>
            
        </div>
        
    );
}

export default Todolist;