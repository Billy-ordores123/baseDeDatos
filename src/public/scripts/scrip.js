const indexedDB = window.indexedDB
const form = document.getElementById('form')
const user = document.getElementById('user')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('BaseLogin', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()

    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('user', {
            autoIncrement: true,
            keyPath: 'firstP'

        })


    }
    request.error = (error) => {
        console.log('Eror', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['user'], 'readwrite')
        const objectStore = transaction.objectStore('user')
        const request = objectStore.add(data)
        readData()
    }
    const getData = (key) => {
        const transaction = db.transaction(['user'], 'readwrite')
        const objectStore = transaction.objectStore('user')
        const request = objectStore.get(key)

        request.onsuccess = (e) => {

            form.password1.value = request.result.firstP
            form.password2.value = request.result.secondP
            form.button.dataset.action = 'update'

        }

    }
    const updateData = (data) => {
        const transaction = db.transaction(['user'], 'readwrite')
        const objectStore = transaction.objectStore('user')
        const request = objectStore.put(data)

        request.onsuccess = () => {

            form.button.dataset.action = 'add'
            form.button.textContent = 'Save'
            readData()

        }
    }
    const deleteData = (key) => {
        const transaction = db.transaction(['user'], 'readwrite')
        const objectStore = transaction.objectStore('user')
        const request = objectStore.delete(key)
        request.onsuccess = () => {
            readData()

        }

        readData()
    }


    const readData = () => {
        const transaction = db.transaction(['user'], 'readonly')
        const objectStore = transaction.objectStore('user')
        const request = objectStore.openCursor()
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {

            const cursor = e.target.result

            if (cursor) {

                const firstP = document.createElement('P')
                firstP.textContent = cursor.value.firstP
                fragment.appendChild(firstP)

                const secondP = document.createElement('P')
                secondP.textContent = cursor.value.secondP
                fragment.appendChild(secondP)

                const jokeupdate = document.createElement('BUTTON')
                jokeupdate.dataset.type = 'update'
                jokeupdate.dataset.key = cursor.key
                jokeupdate.textContent = 'Update'
                fragment.appendChild(jokeupdate)

                const jokedelete = document.createElement('BUTTON')
                jokedelete.dataset.type = 'delete'
                jokedelete.textContent = 'Delete'
                jokedelete.dataset.key = cursor.key
                fragment.appendChild(jokedelete)



                cursor.continue()

            } else {
                console.dir(fragment)
                user.textContent = ''
                user.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            firstP: e.target.password1.value,
            secondP: e.target.password2.value

        }

        if (e.target.button.dataset.action == 'add') {
            addData(data)
        } else if (e.target.button.dataset.action == 'update') {
            updateData(data)
        }
        form.reset()

    })
    user.addEventListener('click', (e) => {
        if (e.target.dataset.type == 'update') {
            getData(e.target.dataset.key)
        } else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key)
        }


    })

}

// function op() {
//     let pas1 = 'billy'
//     let pas2 = 'elcruck'
//     console.log(document.getElementById("username").value)

//     if (document.getElementById("username").value == pas1 && document.getElementById("password").value == pas2) {
//         window.location = "next.html";
//     } else {
//         alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
//     }

// }
function ver() {
    document.getElementById("subseccion1").style.display = "block"
}
function ocultar() {
    document.getElementById("subseccion1").style.display = "none"
}
function init1() {
    var audio
    audio = document.getElementById("vi1")
    audio.play()
}
function end1() {
    var audio
    audio = document.getElementById("vi1")
    audio.pause()
}
function init2() {
    var audio
    audio = document.getElementById("vi2")
    audio.play()
}
function end2() {
    var audio
    audio = document.getElementById("vi2")
    audio.pause()
}
function init3() {
    var audio
    audio = document.getElementById("vi3")
    audio.play()
}
function end3() {
    var audio
    audio = document.getElementById("vi3")
    audio.pause()
}
function init4() {
    var audio
    audio = document.getElementById("vi4")
    audio.play()
}
function end4() {
    var audio
    audio = document.getElementById("vi4")
    audio.pause()
}
function init5() {
    var audio
    audio = document.getElementById("vi5")
    audio.play()
}
function end5() {
    var audio
    audio = document.getElementById("vi5")
    audio.pause()
}
function init6() {
    var audio
    audio = document.getElementById("vi6")
    audio.play()
}
function end6() {
    var audio
    audio = document.getElementById("vi6")
    audio.pause()
}

(() => {
    const color = sessionStorage.getItem('color');
    if (color == null) {
        document.body.style.background = '-webkit-radial-gradient(#560e86, #0a0011)'
    
    } else {
        document.body.style.background = color;
    }
})();
function cambioA() {
    document.body.style.background = '-webkit-radial-gradient(#51ddd6, #1f55e9)'
    sessionStorage.setItem('color', '-webkit-radial-gradient(#51ddd6, #1f55e9)')
}
function cambioR() {
    document.body.style.background = '-webkit-radial-gradient(#dbd29b, #e44d32)'
    sessionStorage.setItem('color', '-webkit-radial-gradient(#dbd29b, #e44d32)')

}
function cambioV() {
    document.body.style.background = '-webkit-radial-gradient(#b3e47b, #388809)'
    sessionStorage.setItem('color', '-webkit-radial-gradient(#b3e47b, #388809)')


}
function cambioAm() {
    document.body.style.background = '-webkit-radial-gradient(#7ab13b, #f1f369)'
    sessionStorage.setItem('color', '-webkit-radial-gradient(#7ab13b, #f1f369)')

}
function cambioN() {
    document.body.style.background = '-webkit-radial-gradient(#560e86, #0a0011)'
    sessionStorage.setItem('color', '-webkit-radial-gradient(#560e86, #0a0011)')

}

function save() {
    
    
    var name = document.getElementById("name").value
    localStorage.setItem('na', name)
    document.getElementById("container").innerHTML = localStorage.getItem('na')

}