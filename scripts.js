async function fetchBitcoinPrice() {
    const apiKey = coinGeckoAPI;
    const baseUrl = 'https://api.coingecko.com/api/v3/';
    const endpoint = 'simple/price?ids=bitcoin,dogecoin&vs_currencies=usd';
    
    try {
        const response = await fetch(`${baseUrl}${endpoint}&x_cg_api_key=${apiKey}`);
        const data = await response.json();
        document.getElementById('bitcoin-price').textContent = `Bitcoin's Current price is $:${data.bitcoin.usd.toLocaleString()}`;
        document.getElementById('doge-price').textContent = `Doge Coin's Current price is $:${data.dogecoin.usd.toLocaleString()}`;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function when page loads
fetchBitcoinPrice();



//Create --POST
//Read --GET
//Delete --DELETE