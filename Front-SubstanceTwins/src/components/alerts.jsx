export default function alerts({ children }) {
    return (
        <div className="alert alert-danger" role="alert">
            {children}
        </div>
    )
}
