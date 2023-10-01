export function isTransaction(value) {
    if (value && typeof value === 'object' && 'status' in value && 'id' in value && 'name' in value && 'email' in value)
        return true;
    return false;
}
