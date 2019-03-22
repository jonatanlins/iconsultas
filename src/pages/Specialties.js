import React from 'react';
import { Link } from 'react-router-dom';

import Shell from '../components/app/Shell';

function Specialties() {
  const specialties = [
    {
      name: 'Cardiologia',
      description: [
        'O médico cardiologista, é o especialista responsável pelo sistema cardiovascular e o coração.',
        'Este é o médico que deve-se procurar em casos de pressão alta, colesterol alto e outras doenças relacionadas ao coração e a circulação sanguínea.',
      ],
    },
    {
      name: 'Endocrinologia',
      description: [
        'Endocrinologia é uma especialidade médica que estuda as ordens do sistema endócrino e suas secreções específicas, chamadas de secreções fisiológicas.',
      ],
    },
    {
      name: 'Ginecologia',
      description: [
        'A ginecologia é a prática da medicina que lida diretamente com a saúde do aparelho reprodutor feminino e mamas.',
        'Seu significado literal é "a ciência da mulher".',
        'É paralela a andrologia que lida especificamente com questões ligadas ao aparelho reprodutor masculino.',
      ],
    },
    {
      name: 'Pediatria',
      description: [
        'A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.',
        'Pessoas como crianças e adolescentes, se estiverem com doenças, devem dirigir-se ao seu pediatra.',
      ],
    },
  ];

  return (
    <Shell>
      <div className="accordion">
        {specialties.map(({ name, description }, index) => (
          <div className="item" key={index}>
            <input type="checkbox" className="trigger" />
            <div className="header">{name}</div>
            <div className="content">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <Link to="/medicos" className="callToAction">
                Agendar consulta <i className="icon-right-open" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

export default Specialties;
