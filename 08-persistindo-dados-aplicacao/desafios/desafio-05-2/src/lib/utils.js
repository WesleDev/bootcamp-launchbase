module.exports = {
    age(timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1;
        }
        return age;
    },
    date(timestamp) {
        const date = new Date(timestamp);
        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);
        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },
    graduation(education_level) {
        if (education_level == 'medio') {
            return 'Ensino Médio Completo';
        } else if (education_level == 'superior') {
            return 'Ensino Médio Completo';
        } else if (education_level == 'mestrado') {
            return 'Mestrado';
        } else if (education_level == 'doutorado') {
            return 'Doutorado';
        }
    },
    grade(school_year) {
        if (school_year == '5EF') {
            return '5º ano ensino fundamental';
        } else if (school_year == '6EF') {
            return '6º ano ensino fundamental';
        } else if (school_year == '7EF') {
            return '7º ano ensino fundamental';
        } else if (school_year == '8EF') {
            return '8º ano ensino fundamental';
        } else if (school_year == '9EF') {
            return '9º ano ensino fundamental';
        } else if (school_year == '1EM') {
            return '1º ano ensino médio';
        } else if (school_year == '2EM') {
            return '2º ano ensino médio';
        } else if (school_year == '3EM') {
            return '3º ano ensino médio';
        }
    }
}