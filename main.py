def convert_currency(amount, from_currency, to_currency):
    rates = {
        'USD': 1.0,
        'INR': 83.0,
        'EUR': 0.92,
        'GBP': 0.78,
        'JPY': 155.9
    }
    if from_currency not in rates or to_currency not in rates:
        return " Unsupported currency."

    usd_amount = amount / rates[from_currency]
    converted = usd_amount * rates[to_currency]
    return round(converted, 2)

# Main Program
print(" Currency Converter")
amount = float(input("Enter amount: "))
from_curr = input("From currency (e.g., USD): ").upper()
to_curr = input("To currency (e.g., INR): ").upper()

result = convert_currency(amount, from_curr, to_curr)
print(f"{amount} {from_curr} = {result} {to_curr}")
