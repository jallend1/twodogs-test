import Example from './Example';

const Examples = () => {
    return (
        <div className="page main">
            <div className="sitelist">
                {[1, 2, 3, 4].map(site => <Example website={site} />)}
            </div>
            <h1>Explore our previous work.</h1>
        </div>
    )
}

export default Examples
