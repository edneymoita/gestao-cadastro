function getProduct(){
    const product = JSON.parse(localStorage.getItem('product'));

    if (product == null){
        document.getElementById('msg').innerHTML = 'Não existe produto armazenado';

        document.getElementById('labelBox').value = '';
        document.getElementById('brandBox').value = '';
        document.getElementById('presentationBox').value = '';
        document.getElementById('volumeBox').value = '';
        document.getElementById('amountBox').value = '';
        document.getElementById('netPriceBox').value = '';
        document.getElementById('retailPriceBox').value = '';
    }
    else {
        document.getElementById('labelBox').value = product.label;
        document.getElementById('brandBox').value = product.brand;
        document.getElementById('presentationBox').value = product.presentation;
        document.getElementById('volumeBox').value = product.volume;
        document.getElementById('amountBox').value = product.amount;
        document.getElementById('netPriceBox').value = product.netPrice;
        document.getElementById('retailPriceBox').value = product.retailPrice;
    }
}

function saveProduct(){
    const label = document.getElementById('labelBox').value;
    const brand = document.getElementById('brandBox').value;
    const presentation = document.getElementById('presentationBox').value;
    const volume = document.getElementById('volumeBox').value;
    const amount = document.getElementById('amountBox').value;
    const netPrice = document.getElementById('netPriceBox').value;
    const retailPrice = document.getElementById('retailPriceBox').value;

    let product ={
        "label": label,
        "brand": brand,
        "presentation": presentation,
        "volume": volume,
        "amount": amount,
        "netPrice": netPrice,
        "retailPrice": retailPrice,
    };

    localStorage.setItem('product', JSON.stringify(product));

    document.getElementById('msg').innerHTML = 'Produto gravado com sucesso!';
}

function deleteProduct(){
    if (localStorage.getItem('product') != null) {
        localStorage.clear();
        document.getElementById('msg').innerHTML = 'Produto apagado com sucesso!';
    }
    else
        document.getElementById('msg').innerHTML = 'Não existia produto armazenado!';
}

function getClient(){
    const client = JSON.parse(localStorage.getItem('client'));

    if (client == null){
        document.getElementById('msg').innerHTML = 'Não existe cliente armazenado';

        document.getElementById('nameBox').value = '';
        document.getElementById('addressBox').value = '';
        document.getElementById('emailBox').value = '';
        document.getElementById('phoneBox').value = '';
        document.getElementById('cpfBox').value = '';
        document.getElementById('rgBox').value = '';
    }
    else {
        document.getElementById('nameBox').value = client.name;
        document.getElementById('addressBox').value = client.address;
        document.getElementById('emailBox').value = client.email;
        document.getElementById('phoneBox').value = client.phone;
        document.getElementById('cpfBox').value = client.cpf;
        document.getElementById('rgBox').value = client.rg;
    }
}

function saveClient(){
    const name = document.getElementById('nameBox').value;
    const address = document.getElementById('addressBox').value;
    const email = document.getElementById('emailBox').value;
    const phone = document.getElementById('phoneBox').value;
    const cpf = document.getElementById('cpfBox').value;
    const rg = document.getElementById('rgBox').value;

    let client = {
        'name': name,
        'address': address,
        'email': email,
        'phone': phone,
        'cpf': cpf,
        'rg': rg,
    }

    localStorage.setItem('client', JSON.stringify(client));

    document.getElementById('msg').innerHTML = 'Cliente gravado com sucesso!';
}

function deleteClient(){
    if (localStorage.getItem('client') != null) {
        localStorage.clear();
        document.getElementById('msg').innerHTML = 'Cliente apagado com sucesso!';
    }
    else
        document.getElementById('msg').innerHTML = 'Não existia cliente armazenado!';
}