const CartWidget = () => {
    return(
        <div>
            <button className='btn btn-outline-primary position-relative'>
                <i className='bi bi-cart'></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
        <span className="visually-hidden">productos en la canasta</span>
    </span>
            </button>
        </div>
    )
}

export default CartWidget;