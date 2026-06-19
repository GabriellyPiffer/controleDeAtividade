const urlAtividade =
    'http://localhost:3000/atividade';

let atividades = [];

const params =
    new URLSearchParams(
        window.location.search
    );

const turmaId =
    params.get('id');


function carregarAtividades() {

    fetch(
        urlAtividade +
        '/listar/' +
        turmaId
    )

        .then(response => response.json())

        .then(data => {

            atividades = data;

            listarAtividades();

        })

        .catch(() => {

            alert(
                'Erro ao carregar atividades'
            );

        });

}


function listarAtividades() {

    listaAtividades.innerHTML = '';

    atividades.forEach((atividade, index) => {

        listaAtividades.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${atividade.descricao}</td>

            <td>
                ${new Date(
                    atividade.termino
                ).toLocaleDateString('pt-BR')}
            </td>

            <td>

                <button
                    class="btn-excluir"
                    onclick="excluirAtividade(${atividade.id})">

                    <i class="fa-solid fa-trash"></i>
                    Excluir

                </button>

            </td>

        </tr>

        `;
    });
}


function cadastrarAtividade(e) {

    e.preventDefault();

    const atividade = {

        descricao: descricao.value,

        turmaId: Number(turmaId),

        termino: new Date(termino.value)
    };

    fetch(
        urlAtividade + '/cadastrar',
        {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(atividade)
        }
    )

        .then(response => {

            if (!response.ok) {
                throw new Error();
            }

            return response.json();
        })

        .then(() => {

            formAtividade.reset();

            modalAtividade.classList.add('oculto');

            carregarAtividades();

            alert('Atividade cadastrada com sucesso');

        })

        .catch(() => {

            alert('Erro ao cadastrar atividade');

        });

}


function excluirAtividade(id) {

    if (!confirm(
        'Deseja realmente excluir esta atividade?'
    )) {
        return;
    }

    fetch(
        urlAtividade +
        '/excluir/' +
        id,
        {
            method: 'DELETE'
        }
    )

    .then(response => {

        if (!response.ok) {
            throw new Error();
        }

        return response.json();
    })

    .then(() => {

        carregarAtividades();

        alert(
            'Atividade excluída com sucesso'
        );

    })

    .catch(() => {

        alert(
            'Erro ao excluir atividade'
        );

    });

}


function voltar() {

    window.location.href =
        'professor.html';

}

function sair() {

    sessionStorage.clear();

    window.location.href =
        'login.html';

}