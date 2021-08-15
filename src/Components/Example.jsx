const Example = ({website}) => {
    return (
        <div className="example">
            <h2>
                Website {website}
            </h2>
            <div>
                <img className="preview" src={`/images/landscape-${website}.jpg`} alt={`Landscaping site ${website}`} />
            </div>
            
        </div>
    )
}

export default Example;