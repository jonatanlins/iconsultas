import React from 'react';
import { Link } from 'react-router-dom';

import Shell from '../components/app/Shell';

import doctorImage1 from '../assets/images/dr_luiz_bandim.png';

function Doctors() {
  const doctors = [
    {
      id: 63416,
      crm: 2233,
      image: doctorImage1,
      name: 'Dr. Luiz Bandim',
      specialties: ['Pediatria', 'Alergologia', 'Imunoterapia'],
      price: 'A partir de R$250 ou Convênio',
    },
    {
      id: 32432,
      crm: 2233,
      image: doctorImage1,
      name: 'Dr. Luiz Bandim',
      specialties: ['Pediatria', 'Alergologia', 'Imunoterapia'],
      price: 'A partir de R$250 ou Convênio',
    },
    {
      id: 29879,
      crm: 2233,
      image: doctorImage1,
      name: 'Dr. Luiz Bandim',
      specialties: ['Pediatria', 'Alergologia', 'Imunoterapia'],
      price: 'A partir de R$250 ou Convênio',
    },
  ];

  return (
    <Shell
    >
      <ul className="listWithPrice">
        {doctors.map(({ id, crm, image, name, specialties, price }) => (
          <li key={id}>
            <Link to={`/medico/${id}`}>
              <img src={image} alt="Foto do médico" className="logo" />
              <div className="content">
                <h3 className="title">{name}</h3>
                <p className="emphasis">
                  <em>CRM {crm}</em>
                </p>
                <p>{specialties.join(' / ')}</p>
                <span className="price">{price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export default Doctors;
