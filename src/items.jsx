import SingleItem from "./SingleItem";

let Items = ({ items, removeItem, editItem }) => {

    return (
        <>
            {items.map((item) => {
                return (

                    <SingleItem item={item} key={item.id} removeItem={removeItem} editItem={editItem} />

                )
            })}
        </>
    )
}


export default Items;