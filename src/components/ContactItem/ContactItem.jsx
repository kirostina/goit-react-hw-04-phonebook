export const ContactItem = ({name, id, number, handleDelete}) =>{

        return(
            <li>
                <p>{name}:{number}</p>
                <button type='button' name={name} onClick={()=> handleDelete(id)}>Delete</button>
            </li>
        );
    }
