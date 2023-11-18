// const input = document.querySelector("input")
// const btn = document.querySelector("button")
// const wrapper = document.querySelector("#wrapper")
// const alert = document.querySelector(".alert")

// input.onkeyup = function (e) {
//     if (e.keyCode == 13) { //!enter'a bastıgında çalışsın butona tıklamadan da işlem yapılsın
//         kaydet()
//     }
// }


// function kaydet() {
//     let value = input.value; //!inputun içindeki yazılanlar bu değişkende tutulur
//     if (value.trim() != "") { //! yazılan değerlerde boşluk var ise
//         let div = document.createElement("div") //! div oluşturduk
//         div.style.display = "flex"
//         div.style.justifyContent = "space-between"
//         div.style.alignItems = "center"
//         div.style.padding = "15px"
//         div.addEventListener("click", ciz) //! dive tıklandığında 


//         let p = document.createElement("p") //! p oluşturduk
//         p.style.margin = "0"


//         let span = document.createElement("span") //! span oluşturduk
//         span.addEventListener("click", sil) //! üstünü çizdirmek istiyoruz.


//         p.textContent = value; //!p etiketinin içine value değerini eşitledik.
//         span.innerHTML = '<i class="bi bi-trash"></i>' //! span etiketinin içine bir icon ekledik.

//         div.appendChild(p) //! p ve span div in içinde oldu
//         div.appendChild(span)//! p ve span div in içinde oldu
//         wrapper.appendChild(div) //! div içinde wrapper var

//         input.value = ""//! yazdıktan sonra inputun valuesi boşalsın.
//     } else {
//         alert.classList.add("d-block")
//         alert.classList.remove("d-none")
//         setTimeout(timeOut, 3000) //! alert ekranı 3 saniye dursun ve gitsin.
//     }
// }
// function ciz() {
//     this.classList.toggle("bg-secondary")
//     this.classList.toggle("text-white")
//     this.children[0].classList.toggle("text-decoration-line-through")
// }

// function sil() {
//     this.parentElement.remove()
// }

// function timeOut() {
//     alert.classList.remove("d-block")
//     alert.classList.add("d-none")
// }

const input = document.getElementById("input")
const btn = document.getElementById("btn")
const wrapper = document.querySelector(".wrapper")

btn.addEventListener("click", ekranaYazdir)

function ekranaYazdir() {
    if (input.value.trim() != '') {
        const kapsayici = document.createElement("div")
        kapsayici.classList.add("d-flex", "justify-content-between", "p-3", "border", "border-1", "border-black", "m-2", "rounded")
        const p = document.createElement("p")
        p.classList.add("m-0")
        p.textContent = input.value
        const divIcon = document.createElement("div")

        const iconCheck = document.createElement("i")
        iconCheck.classList.add("bi", "bi-check")
        iconCheck.addEventListener("click", check)


        const iconDelete = document.createElement("i")
        iconDelete.classList.add("bi", "bi-trash")
        iconDelete.addEventListener("click", sil)

        divIcon.append(iconCheck, iconDelete)
        divIcon.classList.add("d-flex", "gap-2", "align-items-center")

        kapsayici.append(p, divIcon)

        wrapper.append(kapsayici)


    }

}

function sil() {
    let kapsayici = this.parentElement.parentElement
    kapsayici.remove()
}


function check() {
    let kapsayici = this.parentElement.parentElement
    kapsayici.classList.toggle("bg-success")
    let p = this.parentElement.parentElement.children[0]
    p.classList.toggle("text-decoration-line-through")
    p.classList.toggle("text-white")
}
