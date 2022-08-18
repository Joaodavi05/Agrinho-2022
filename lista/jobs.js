const jobs = [
    {
        empresa: "Empresa 1",
        logo: "../images/Cidade-Canção.jpg",
        vaga: "Balconista",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquam tortor. Phasellus tortor urna, faucibus sit amet dolor in, aliquet congue nunc. Nunc risus magna, mattis in lacus ut, varius pretium dolor.",
        requisitos: "Integer tortor mauris, iaculis ac lacinia et, mattis eu velit. Proin in sem fringilla, egestas tortor eget, varius tortor. Pellentesque a iaculis arcu. Ut ut lectus sit amet ligula condimentum tempus vitae ac lectus. Donec accumsan fermentum mauris ut gravida.",
        salario: "R$ 1500,00 + beneficios",
        contato: "empresa1@vaga.com"
    },
    {
        empresa: "Empresa 2",
        logo: "../images/americanas.png",
        vaga: "Caixa",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquam tortor. Phasellus tortor urna, faucibus sit amet dolor in, aliquet congue nunc. Nunc risus magna, mattis in lacus ut, varius pretium dolor.",
        requisitos: "Integer tortor mauris, iaculis ac lacinia et, mattis eu velit. Proin in sem fringilla, egestas tortor eget, varius tortor. Pellentesque a iaculis arcu. Ut ut lectus sit amet ligula condimentum tempus vitae ac lectus. Donec accumsan fermentum mauris ut gravida.",
        salario: "R$ 1200,00 + Beneficios",
        contato: "empresa2@vaga.com"
    },
    {
        empresa: "Empresa 3",
        logo: "../images/oralsin.png",
        vaga: "Secretaria",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquam tortor. Phasellus tortor urna, faucibus sit amet dolor in, aliquet congue nunc. Nunc risus magna, mattis in lacus ut, varius pretium dolor.",
        requisitos: "Integer tortor mauris, iaculis ac lacinia et, mattis eu velit. Proin in sem fringilla, egestas tortor eget, varius tortor. Pellentesque a iaculis arcu. Ut ut lectus sit amet ligula condimentum tempus vitae ac lectus. Donec accumsan fermentum mauris ut gravida.",
        salario: "R$ 2000,00 + Beneficios",
        contato: "empresa3@vaga.com"
    },
    {
        empresa: "Empresa 4",
        logo: "../images/molinis.jpg",
        vaga: "Empacotador",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquam tortor. Phasellus tortor urna, faucibus sit amet dolor in, aliquet congue nunc. Nunc risus magna, mattis in lacus ut, varius pretium dolor.",
        requisitos: "Integer tortor mauris, iaculis ac lacinia et, mattis eu velit. Proin in sem fringilla, egestas tortor eget, varius tortor. Pellentesque a iaculis arcu. Ut ut lectus sit amet ligula condimentum tempus vitae ac lectus. Donec accumsan fermentum mauris ut gravida.",
        salario: "R$ 1750,00 + Beneficios",
        contato: "empresa4@vaga.com"
    },
    {
        empresa: "Empresa 5",
        logo: "../images/facecasadicarne.jpg",
        vaga: "Açougueiro",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquam tortor. Phasellus tortor urna, faucibus sit amet dolor in, aliquet congue nunc. Nunc risus magna, mattis in lacus ut, varius pretium dolor.",
        requisitos: "Integer tortor mauris, iaculis ac lacinia et, mattis eu velit. Proin in sem fringilla, egestas tortor eget, varius tortor. Pellentesque a iaculis arcu. Ut ut lectus sit amet ligula condimentum tempus vitae ac lectus. Donec accumsan fermentum mauris ut gravida.",
        salario: "R$ 2200,00 + Beneficios",
        contato: "empresa5@vaga.com"
    }
]


function listJobs() {

    const section = document.getElementById('jobs');

    for (const x of jobs) {
        const div1 = document.createElement('div');
        div1.classList.add('card')
        div1.classList.add('scroll')
        const div2 = document.createElement('div');
        div2.classList.add('dados')
        const logo = document.createElement('img');
        logo.src = x.logo;
        const empresa = document.createElement('h2');
        const vaga = document.createElement('h3');
        const descricao = document.createElement('p');
        const requisitos = document.createElement('p');
        const salario = document.createElement('p');
        const contato = document.createElement('p');

        empresa.textContent = x.empresa;
        vaga.textContent = x.vaga;
        descricao.textContent = x.descricao;
        requisitos.textContent = x.requisitos;
        salario.textContent = x.salario;
        contato.textContent = x.contato;

        div1.appendChild(logo);
        div1.appendChild(div2)

        div2.appendChild(empresa);
        div2.appendChild(vaga);
        div2.appendChild(descricao);
        div2.appendChild(requisitos);
        div2.appendChild(salario);
        div2.appendChild(contato);

        section.appendChild(div1);
    }
}