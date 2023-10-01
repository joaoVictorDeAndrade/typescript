export function isTransaction(value: unknown): value is Transaction {
    if (value && typeof value === 'object' && 'status' in value && 'id' in value && 'name' in value && 'email' in value) return true
    return false
}