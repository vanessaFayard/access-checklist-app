// import Item from "./item";
import data from '../data.json'

const ItemList = () => {
    return (
        <div>
        {data.map(category => (
            <div key={category.name} className="my-10">
                <h3 className="text-2xl font-bold text-mantle-600">{category.name}</h3>
                <ul className="shadow m-5 p-10">
                    {category.items.map(item => (
                            <li key={`${category.name}-${item.id}`}>
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2 mt-1" />
                                    <label className="inline-flex items-center">
                                        {item.label}
                                    </label>                                    
                                </div>

                                <div className="text-lg">
                                    {item.details}
                                </div>
                            </li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
    );
}

export default ItemList;