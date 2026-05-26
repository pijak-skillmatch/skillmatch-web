export default function EmptyState({ message }: { message: string }) {
    return (
        <div className="border border-dashed border-border rounded-2xl py-12 px-6 text-center">
            <div className="text-2xl opacity-20 mb-3">◈</div>
            <p className="text-muted text-sm font-light">{message}</p>
        </div>
    )
}