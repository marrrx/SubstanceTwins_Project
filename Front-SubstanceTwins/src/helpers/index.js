export const FormatMoney = quantity =>{
    return quantity?.toLocaleString('en-US', {
            style:'currency',
            currency: 'USD'   
    
})
} 