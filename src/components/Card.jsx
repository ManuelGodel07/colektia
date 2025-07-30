export function Card({ children, className }) {
    return (
        <div className={`border rounded-lg p-4 shadow bg-white ${className || ''}`}>
        {children}
        </div>
    );
    }

    export function CardHeader({ children }) {
    return <div className="mb-2">{children}</div>;
    }

    export function CardContent({ children }) {
    return <div>{children}</div>;
}