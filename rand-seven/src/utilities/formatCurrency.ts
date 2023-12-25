const CUURENCY_FORMATTER = new Intl.NumberFormat(undefined, { currency: "USD", style:"currency" })

export function formatCurrency(number: number) {
    return CUURENCY_FORMATTER.format(number)
}