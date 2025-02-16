import { useParams } from "react-router-dom"

const PaymentSuccess = () => {
    const { id } = useParams()
    console.log("data id:", id);

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="flex justify-center items-center flex-col gap-3">
                <h1 className="text-xl font-bold">Payment Successfully</h1>
                <h3>Id : {id}</h3>
            </div>
        </div>
    )
}

export default PaymentSuccess