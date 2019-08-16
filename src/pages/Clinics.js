import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as ClinicsActions } from '../store/ducks/clinics';

import Shell from '../components/app/Shell';

function Clínicas() {
  const dispatch = useDispatch();
  const clinics = useSelector(state => state.clinics.data);

  React.useEffect(() => {
    dispatch(ClinicsActions.clinicsRequest());
  }, []);

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
