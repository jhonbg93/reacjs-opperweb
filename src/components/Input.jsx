

function Input(props){
    return(
        <div>
            
            <input className="bg-gray-600 h-1px w-80 py-2 px-4 my-0 border border-white rounded" onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
                        
        </div>

    )
};

export default Input;