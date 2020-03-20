const Mask = {
    apply(input, func) {
        setTimeout(function () {
            input.value = Mask[func](input.value)
        }, 1);
    },
    formatBRL(value) {
        // Removendo do value tudo que não é dígito
        value = value.replace(/\D/g, '');
        // Formata para moeda
        return value = new Intl.NumberFormat('pt-br', {
            style: 'currency',  // 1.000,00
            currency: 'BRL'     // R$
        }).format(value / 100);
    }
}