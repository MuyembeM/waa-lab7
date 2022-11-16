


export default function Dashboard() {

    let i = 4;
    const [themeColorState, setThemeColorState] = useState({ color: "red" });
    const [selectedState, setSelectedState] = useState(0);
    const [postsState, setPostsState] = useState(
        [
            { id: 1, title: "What's new in WAA", author: "Mike Muyembe" },
            { id: 2, title: "New features of iPhone 14", author: "Donald Nyagwande" },
            { id: 3, title: "iPhone vs Galaxy", author: "Precious Muyembe" }
        ]
    );

    /*const [productState, setPostState] = useState(
        {
            id: 0,
            title: "",
            author: ""
        }
    )

    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/v1/products')
            .then(response => {
                setProductsState(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        fetchProducts()
    },
        [])


    const onChange = (events) => {
        const copy = { ...productState };
        copy[events.target.name] = events.target.value;
        setProductState(copy);
    }

    const addButtonClicked = () => {
        axios.post('http://localhost:8080/api/v1/products', productState)
            .then(response => {
                setProductState(response);
                fetchProducts();
            })
    }

    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/products/' + id, productState)
            .then(response => {
                fetchProducts();
            })
            .catch(err => {
                console.error(err);
            })
    }

    const setSelected = (id) => {
        setSelectedState(id);
    }

    const reviewColorHandler = () =>{
        if(themeColorState.color === "red"){
            setThemeColorState({color:"blue"});
        }
        else{
            setThemeColorState({color:"red"});
        }
    }*/

    return (
        <React.Fragment>
            <ThemeColorContext.Provider value={themeColorState}>
                <div className="Post">
                    <Posts
                        products={postsState}
                        deletePost={deleteButtonClicked}
                        setSelected={setSelected}
                    />
                </div>
                <button onClick={reviewColorHandler} >Change color</button>
                <div >
                    <ProductDetails
                        id={selectedState}
                    />
                </div>

                <div>
                    {/* To try the other method of adding a new product using react hooks useRef */}
                    <NewProductHook
                    />

                    <NewProduct
                        name={productState.name}
                        price={productState.price}
                        onChange={(event) => { onChange(event) }}
                        addButtonClicked={addButtonClicked}
                    />
                </div>
                <div>
                    <ReducerSample/>
                </div>


            </ThemeColorContext.Provider>
        </React.Fragment>

    )

}
