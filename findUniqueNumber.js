function findUniq(arr) {
    let a = [...arr];
    return (a.filter(it => it == a[0]).length >= a.length - 1) ? (a.filter(it => it !== a[0]))[0] : a[0];
}