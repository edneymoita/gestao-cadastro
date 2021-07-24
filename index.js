function getClient(){
    const client = JSON.parse(localStorage.getItem('client'));

    if (client == null){
        document.getElementById('msg').innerHTML = 'Não existe cliente armazenado';

        clearClientForm();
    }
    else {
        document.getElementById('nameBox').value = client.name;
        document.getElementById('addressBox').value = client.address;
        document.getElementById('numberBox').value = client.number;
        document.getElementById('districtBox').value = client.district;
        document.getElementById('cityBox').value = client.city;
        document.getElementById('stateBox').value = client.state;
        document.getElementById('cepBox').value = client.cep;
        document.getElementById('phoneBox').value = client.phone;
        document.getElementById('emailBox').value = client.email;
    }
}

function saveClient(){
    const name = document.getElementById('nameBox').value;
    const address = document.getElementById('addressBox').value;
    const number = document.getElementById('numberBox').value;
    const district = document.getElementById('districtBox').value;
    const city = document.getElementById('cityBox').value;
    const state = document.getElementById('stateBox').value;
    const cep = document.getElementById('cepBox').value;
    const phone = document.getElementById('phoneBox').value;
    const email = document.getElementById('emailBox').value;

    if (name != '') {
        let client = {
            'name': name,
            'address': address,
            'number': number,
            'district': district,
            'city': city,
            'state': state,
            'cep': cep,
            'phone': phone,
            'email': email,
        }

        localStorage.setItem('client', JSON.stringify(client));

        document.getElementById('msg').innerHTML = 'Cliente gravado com sucesso!';
    }
    else {
        alert('Favor informar o nome do cliente!');
        document.getElementById('nameBox').focus();
    }
}

function deleteClient(){
    clearClientForm();

    if (localStorage.getItem('client') != null) {
        localStorage.removeItem('client');
        document.getElementById('msg').innerHTML = 'Cliente apagado com sucesso!';
    }
    else
        document.getElementById('msg').innerHTML = 'Não existia cliente armazenado!';
}

function clearClientForm() {
    document.getElementById('nameBox').value = '';
    document.getElementById('addressBox').value = '';
    document.getElementById('numberBox').value = '';
    document.getElementById('districtBox').value = '';
    document.getElementById('cityBox').value = '';
    document.getElementById('stateBox').value = '';
    document.getElementById('cepBox').value = '';
    document.getElementById('phoneBox').value = '';
    document.getElementById('emailBox').value = '';
}

function getProduct(){
    const product = JSON.parse(localStorage.getItem('product'));

    if (product == null){
        document.getElementById('msg').innerHTML = 'Não existe produto armazenado';

        clearProductForm();
    }
    else {
        document.getElementById('codeBox').value = product.code;
        document.getElementById('nameBox').value = product.name;
        document.getElementById('amountBox').value = product.amount;
        document.getElementById('priceBox').value = product.price;
        document.getElementById('descriptionBox').value = product.description;
    }
}

function saveProduct(){
    const code = document.getElementById('codeBox').value;
    const name = document.getElementById('nameBox').value;
    const amount = document.getElementById('amountBox').value;
    const price = document.getElementById('priceBox').value;
    const description = document.getElementById('descriptionBox').value;

    if (code != '' && name != ''){
        let product ={
            "code": code,
            "name": name,
            "amount": amount,
            "description": description,
            "price": price,
        };

        localStorage.setItem('product', JSON.stringify(product));

        document.getElementById('msg').innerHTML = 'Produto gravado com sucesso!';
    }
    else {
        alert('Favor informe código e nome do produto!');
        document.getElementById('codeBox').focus();
    }
}

function deleteProduct(){
    clearProductForm();
    if (localStorage.getItem('product') != null) {
        localStorage.removeItem('product');
        document.getElementById('msg').innerHTML = 'Produto apagado com sucesso!';
    }
    else
        document.getElementById('msg').innerHTML = 'Não existia produto armazenado!';
}

function clearProductForm(){
    document.getElementById('codeBox').value = '';
    document.getElementById('nameBox').value = '';
    document.getElementById('amountBox').value = '';
    document.getElementById('priceBox').value = '';
    document.getElementById('descriptionBox').value = '';
}

function goBack () {
    window.history.back();
}