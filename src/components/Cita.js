import React from 'react';

const Cita = ({cita, eliminarCita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre humano:</span> {cita.propietario}</p>
            <p className="card-text"><span>Fecha cita:</span> {cita.fecha}</p>
            <p className="card-text"><span>Hora cita:</span> {cita.hora}</p>
            <p className="card-text"><span>Sintomas:</span> {cita.sintomas}</p>
        </div>
    </div>
);

export default Cita;
