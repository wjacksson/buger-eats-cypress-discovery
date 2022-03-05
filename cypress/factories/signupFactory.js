var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{ // modulo

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whats: '88988880000',
            address: {
                postalcode: '63024530',
                street: 'Avenida Trinta e Um de Março',
                number: '500',
                details: 'próximo ao tiro de guerra',
                district: 'São José',
                city_state: 'Juazeiro do Norte/CE'
            },
            delivery_method: 'Van/Carro',
            cnh: 'cnh-digital.jpg'
    }

    return data
}
}