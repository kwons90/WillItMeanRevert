from iexfinance.stocks import Stock
from datetime import datetime
import pandas as pd
import matplotlib.pyplot as plt
from iexfinance.stocks import get_historical_data
from iexfinance.data_apis import get_time_series
#api_key = "sk_226b22420df5468f9ec992d602a3c5a4"

# Creating variables sent in the rquest
import sys
ticker = sys.argv[1]
start_date = sys.argv[2]
end_date = sys.argv[3]
api_key = sys.argv[4]
# api_key= "sk_226b22420df5468f9ec992d602a3c5a4"

print("Output from Python") 
print("ticker: " + sys.argv[1]) 
print("start_date: " + sys.argv[2]) 
print("end_date: " + sys.argv[3])
print("api_key: " + sys.argv[4])

# Getting historical data requested

plt.figure(figsize=(10,8))

# Render Chart
def generateChart(ticker, start_date, end_date):
    df = get_historical_data(ticker, start_date, end_date, output_format='pandas', token=api_key)
    plt.plot(df.index, df['close'])
    plt.xlabel("date")
    plt.ylabel("$ price")
    plt.title("Stock Price")
    df["30-day Moving Average"] = df['close'].rolling(window=30).mean()
    df["60-day Moving Average"] = df['close'].rolling(window=60).mean()
    df['ewma'] = df['close'].ewm(halflife=0.5, min_periods=20).mean()
    plt.figure(figsize=(10,10))
    plt.plot(df['30-day Moving Average'], 'g--', label="30-day Moving Average")
    plt.plot(df['60-day Moving Average'], 'r--', label="60-day Moving Average")
    plt.plot(df['close'], label="End of Day Price")
    plt.legend()
    plt.show()


# generateChart("MSFT","2018-01-01","2020-08-15")
generateChart(ticer,start_date,end_date)
