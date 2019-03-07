import React from 'react';
import { Link } from 'react-router-dom';

import Shell from '../components/app/Shell';

import imagemSantaEfigenia from '../assets/brands/santa-efigenia.png';
import imagemMultmedica from '../assets/brands/multmedica.png';
import imagemMariaGertrudes from '../assets/brands/maria-gertrudes.png';
import imagem3Marias from '../assets/brands/3-marias.png';

function Clínicas() {
  const clinics = [
    {
      id: 2693,
      name: 'Hospital Santa Efigênia',
      image: imagemSantaEfigenia,
      address: 'R. Gonçalo Coelho, 40, Maurício de Nassau',
      distance: '3,5Km',
      price: 'A partir de R$250 ou Convênio',
    },
    {
      id: 3216,
      name: 'Clínica Multmedica',
      image: imagemMultmedica,
      address: 'R. Dep. Souto Filho, 53, Maurício de Nassau',
      distance: '4,0Km',
      price: 'A partir de R$250 ou Convênio',
    },
    {
      id: 4855,
      name: 'Centro Médico Maria Gertrudes',
      image: imagemMariaGertrudes,
      address: 'R. Santa Maria da Boa Vista, 85, Boa Vista 2',
      distance: '6,5Km',
      price: 'A partir de R$300',
    },
    {
      id: 8276,
      name: 'Clínica 3 Marias',
      image: imagem3Marias,
      address: 'R. Tropical, 144, Maurício de Nassau',
      distance: '6,5Km',
      price: 'A partir de R$250 ou Convênio',
    },
  ];

  return (
    <Shell>
      <ul className="listWithPrice">
        {clinics.map(({ id, name, image, address, distance, price }) => (
          <li key={id}>
            <Link to={`/especialidades/${id}`}>
              <img
                src={image}
                alt={`Logotipo da clínica ${name}`}
                className="logo"
              />
              <div className="content">
                <h3 className="title">{name}</h3>
                <p>{address}</p>
                <p>
                  {' '}
                  <i className="icon-location" /> {distance}{' '}
                </p>
                <span className="price">{price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export default Clínicas;
