// local strage bilgi saklamak.
// localStorage.setItem('isim','mehmet')

// locak storage bilgi çekmek
// console.log(
//     localStorage.getItem('isim')
// )

// let todos = [
//     {
//         todo:'Bulaşık yıka',
//         isCompleted:false
//     },
//     {
//         todo:'Çamaşır yıka',
//         isCompleted:false
//     }
// ]

// localStorage.setItem('yapilacaklar',JSON.stringify(todos))

// Bir objeyi stringleştirmek

// JSON.stringify(todos)

// bir stringi objeleştirmek
// JSON.parse()

// console.log(
//     JSON.parse(localStorage.getItem('yapilacaklar'))
// )

// let mevcutTodos = JSON.parse(localStorage.getItem('yapilacaklar'))

// let todo = {
//     todo:'Kedinin tuvaletini temizle',
//     isCompleted:false
// }

// mevcutTodos.push(todo)

// localStorage.setItem('yapilacaklar',JSON.stringify(mevcutTodos))

// let todos = JSON.parse(localStorage.getItem('yapilacaklar'))

// let todo = {
//     todo:'Çöpü at',
//     isCompleted:false
// }

// todos.push(todo)

// localStorage.setItem('yapilacaklar',JSON.stringify(todos))



// let todos = JSON.parse(localStorage.getItem('yapilacaklar'))

// for (let i of todos) {
//     if (i.todo == 'Çöpü at') {
//         i.isCompleted = !i.isCompleted
//     }
// }
// localStorage.setItem('yapilacaklar', JSON.stringify(todos))

// let todos = JSON.parse(localStorage.getItem('yapilacaklar'))
// let newTodos = []
// for (let i of todos) {
//     if (i.todo != 'Çöpü at') {
//         newTodos.push(i)
//     }
// }

// localStorage.setItem('yapilacaklar', JSON.stringify(newTodos))