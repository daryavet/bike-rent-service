const bikeValues = {
    general: 'Обычный',
    sport: 'Спортивный'
}

const statusValues = {
    new: 'Новое',
    in_progress: 'В работе',
    done: ' Завершено'
}

const valueParser = (obj, key) => {
    return obj[key]
}

export {
    valueParser,
    bikeValues,
    statusValues
}