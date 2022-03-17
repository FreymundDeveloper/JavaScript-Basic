function remove_prop(obj, remove) {
    const copia = Object.assign({}, obj)
    delete copia[remove]

    return copia
}

console.log(remove_prop({a: 1, b: 2}, "a"))