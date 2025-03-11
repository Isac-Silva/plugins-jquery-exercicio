$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: "Insira um e-mail válido.",
            telefone: "Informe um telefone válido.",
            endereco: "Preencha o endereço completo.",
            cep: "Digite um CEP válido.",
            cpf: "Informe um CPF válido."
        },
        submitHandler: function(form) {
            alert('Sua requisição foi enviada para análise, parabéns pela aquisição!');
            form.reset();
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos. Por favor, corrija-os e tente novamente.`);
            }
        }
    });
});
