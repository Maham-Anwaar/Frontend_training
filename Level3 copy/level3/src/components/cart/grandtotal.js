import './grandtotal.css'

function GrandTotal({totalValue}) {
    return (
        <div className="total-container">
            <div>Grand Total</div>
            <div id='total'> Rs {totalValue}</div>
        </div>
    )
}



export default GrandTotal;