const urlProfessor = 'http://localhost:3000/professor';
const urlTurma = 'http://localhost:3000/turma';

let turmas = [];
let idExcluir = null;


function login(e) {

    e.preventDefault();

    const dados = {

        email: email.value,
        senha: senha.value
    };

    fetch(urlProfessor + '/login', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(dados)

    })

        .then(response => {

            if (!response.ok) throw new Error();

            return response.json();

        })

        .then(data => {

            sessionStorage.setItem(
                'professor',
                JSON.stringify(data)
            );

            window.location.href =
                'professor.html';
        })

        .catch(() => {

            alert('E-mail ou senha inválidos');

        });

}


function cadastrarProfessor(e) {

    e.preventDefault();

    const professor = {

        nome: nomeProfessorCad.value,
        email: emailProfessorCad.value,
        senha: senhaProfessorCad.value
    };

    fetch(urlProfessor + '/cadastrar', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(professor)

    })

        .then(response => response.json())

        .then(() => {

            alert('Professor cadastrado!');

            formProfessor.reset();

        })

        .catch(() => {

            alert('Erro ao cadastrar professor');

        });

}


function carregarTurmas() {

    const professor =
        JSON.parse(
            sessionStorage.getItem('professor')
        );

    if (!professor) return;

    nomeProfessor.innerHTML =
        professor.nome;

    fetch(
        urlTurma +
        '/listar/' +
        professor.id
    )

        .then(response => response.json())

        .then(data => {

            turmas = data;

            listarTurmas();

        })

        .catch(() => {

            alert('Erro ao carregar turmas');

        });

}

function listarTurmas() {

    listaTurmas.innerHTML = '';

    turmas.forEach((turma, index) => {

        listaTurmas.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${turma.nome}</td>

            <td class="acoes">

                <button
                    class="btn-ver"
                    onclick="visualizarTurma(${turma.id})">

                    <i class="fa-solid fa-eye"></i>
                    Visualizar

                </button>

                <button
                    class="btn-excluir"
                    onclick="abrirExcluir(${turma.id})">

                    <i class="fa-solid fa-trash"></i>
                    Excluir

                </button>

            </td>

        </tr>

        `;

    });

}

function cadastrarTurma(e) {

    e.preventDefault();

    const professor =
        JSON.parse(
            sessionStorage.getItem('professor')
        );

    const turma = {

        nome: nomeTurma.value,

        professorId:
            professor.id
    };

    fetch(urlTurma + '/cadastrar', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(turma)

    })

        .then(response => response.json())

        .then(() => {

            formTurma.reset();

            carregarTurmas();

            alert('Turma cadastrada');

        })

        .catch(() => {

            alert('Erro ao cadastrar turma');

        });

}

function abrirExcluir(id) {

    idExcluir = id;

    if (confirm('Deseja excluir esta turma?')) {

        confirmarExclusao();

    }

}

function confirmarExclusao() {

    fetch(
        urlTurma +
        '/excluir/' +
        idExcluir,

        {
            method: 'DELETE'
        }
    )

        .then(response => {

            if (!response.ok)
                throw new Error();

            return response.json();

        })

        .then(() => {

            carregarTurmas();

            alert('Turma excluída');

        })

        .catch(() => {

            alert(
                'Você não pode excluir uma turma com atividades cadastradas'
            );

        });

}



function visualizarTurma(id) {

    window.location.href =
        `turma.html?id=${id}`;

}

document
            .querySelector('#formLogin')
            .addEventListener(
                'submit',
                login
            );

        document
            .querySelector('#formProfessor')
            .addEventListener(
                'submit',
                cadastrarProfessor
            );

function sair() {

    sessionStorage.clear();

    window.location.href =
        'login.html';

}