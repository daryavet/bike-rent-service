import * as yup from 'yup';

const registerFields = [
    {id: 1, label: 'Имя', name: 'firstName', type: "text"},
    {id: 2, label: 'Фамилия', name: 'lastName', type: "text"},
    {id: 3, label: 'Email', name: 'email', type: "text"},
    {id: 4, label: 'Пароль', name: 'password', type: "password"},
    {id: 5, label: 'Client ID', name: 'clientId', type: "text"},
];

const registerFormValues = { firstName: '', lastName: '', email: '', password: '', clientId: ''};

const registerValidationSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email('введите верный E-mail').required('* поле обязательно к заполнению!'),
    password: yup.string().min(5, 'пароль должен содержать минимум 5 символов').required('* поле обязательно к заполнению!'),
    clientId: yup.string().required('* поле обязательно к заполнению!'),
});

const loginFields = [
    {id: 1, label: 'Email', name: 'email', type: "text"},
    {id: 2, label: 'Пароль', name: 'password', type: "password"},
];

const loginFormValues = { email: '', password: '' };

const loginValidationSchema = yup.object().shape({
    email: yup.string().email('введите верный E-mail').required('* поле обязательно к заполнению!'),
    password: yup.string().min(5, 'пароль должен содержать минимум 5 символов').required('* поле обязательно к заполнению!'),
});

const reportFields = [
    {id: 1, label: 'Номер лицензии', name: 'licenseNumber', type: "text"},
    {id: 2, label: 'ФИО владельца', name: 'ownerFullName', type: "text"},
    {id: 3, label: 'Client ID', name: 'clientId', type: "text"},
    {id: 4, label: 'Цвет', name: 'color', type: "text"},
    {id: 5, label: 'Дата кражи', name: 'date', type: "text"},
    {id: 6, label: 'Доп. информация', name: 'description', type: "text"},
];

const reportEditFields = [
    {id: 1, label: 'Номер лицензии', name: 'licenseNumber', type: "text"},
    {id: 2, label: 'ФИО владельца', name: 'ownerFullName', type: "text"},
    {id: 3, label: 'Цвет', name: 'color', type: "text"},
    {id: 4, label: 'Дата кражи', name: 'date', type: "text"},
    {id: 5, label: 'Доп. информация', name: 'description', type: "text"},
    // {id: 6, label: 'Решение', name: 'resolution', type: "text"},
];

const reportFormValues = { licenseNumber: '', ownerFullName: '', clientId: '', color: '', description: '' };

const reportValidationSchema = yup.object().shape({
    licenseNumber: yup.string().required('* поле обязательно к заполнению!'),
    ownerFullName: yup.string().required('* поле обязательно к заполнению!'),
    clientId: yup.string().required('* поле обязательно к заполнению!'),
});

const reportEditValidationSchema = yup.object().shape({
    licenseNumber: yup.string().required('* поле обязательно к заполнению!'),
    ownerFullName: yup.string().required('* поле обязательно к заполнению!'),
});

const officerFields = [
    {id: 1, label: 'Имя', name: 'firstName', type: "text"},
    {id: 2, label: 'Фамилия', name: 'lastName', type: "text"},
    {id: 3, label: 'Email', name: 'email', type: "text"},
    {id: 4, label: 'Пароль', name: 'password', type: "password"},
];

const officerFormValues = { firstName: '', lastName: '', email: '', password: '' };

const officerValidationSchema = yup.object().shape({
    email: yup.string().email('введите верный E-mail').required('* поле обязательно к заполнению!'),
    password: yup.string().min(5, 'пароль должен содержать минимум 5 символов').required('* поле обязательно к заполнению!'),
});

const officerEditFields = [
    {id: 1, label: 'Имя', name: 'firstName', type: "text"},
    {id: 2, label: 'Фамилия', name: 'lastName', type: "text"}
];


export {
    registerFields,
    registerFormValues,
    registerValidationSchema,
    loginFormValues,
    loginValidationSchema,
    loginFields,
    reportFields,
    reportFormValues,
    reportValidationSchema,
    officerFields,
    officerFormValues,
    officerValidationSchema,
    officerEditFields,
    reportEditFields,
    reportEditValidationSchema
}