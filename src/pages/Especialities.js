import React from 'react';

import Shell from '../components/app/Shell';

function Especialities() {
  return (
    <Shell
      navBarContent={[
        'back',
        'space',
        'citySelection',
        'notifications',
        'menu',
      ]}
    >
      <div class="accordion">
        <div class="item">
          <input type="checkbox" class="trigger" />
          <div class="header">Cardiologia</div>
          <div class="content">
            <p>
              O médico cardiologista, é o especialista responsável pelo sistema
              cardiovascular e o coração.
            </p>
            <p>
              Este é o médico que deve-se procurar em casos de pressão alta,
              colesterol alto e outras doenças relacionadas ao coração e a
              circulação sanguínea.
            </p>
            <a href="" class="callToAction">
              Agendar consulta
              <i class="icon-right-open" />
            </a>
          </div>
        </div>
        <div class="item">
          <input type="checkbox" class="trigger" />
          <div class="header">Endocrinologia</div>
          <div class="content">
            <p>
              Endocrinologia é uma especialidade médica que estuda as ordens do
              sistema endócrino e suas secreções específicas, chamadas de
              secreções fisiológicas.
            </p>
            <a href="" class="callToAction">
              Agendar consulta
              <i class="icon-right-open" />
            </a>
          </div>
        </div>
        <div class="item">
          <input type="checkbox" class="trigger" />
          <div class="header">Ginecologia</div>
          <div class="content">
            <p>
              A ginecologia é a prática da medicina que lida diretamente com a
              saúde do aparelho reprodutor feminino e mamas.
            </p>
            <p>Seu significado literal é "a ciência da mulher".</p>
            <p>
              É paralela a andrologia que lida especificamente com questões
              ligadas ao aparelho reprodutor masculino.
            </p>
            <a href="" class="callToAction">
              Agendar consulta
              <i class="icon-right-open" />
            </a>
          </div>
        </div>
        <div class="item">
          <input type="checkbox" class="trigger" />
          <div class="header">Pediatria</div>
          <div class="content">
            <p>
              A pediatria é a especialidade médica dedicada à assistência à
              criança e ao adolescente, nos seus diversos aspectos, sejam eles
              preventivos ou curativos.
            </p>
            <p>
              Pessoas como crianças e adolescentes, se estiverem com doenças,
              devem dirigir-se ao seu pediatra.
            </p>
            <a href="" class="callToAction">
              Agendar consulta
              <i class="icon-right-open" />
            </a>
          </div>
        </div>
      </div>
    </Shell>
  );
}

export default Especialities;
