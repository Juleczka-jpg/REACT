import React, { useState, useEffect } from 'react';

const PowitanieDnia = () => {
    const [godzina, setGodzina] = useState(new Date().getHours());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setGodzina(new Date().getHours());
    }, 1000);

    return () => clearInterval(intervalId);
     }, []);

    const powitanie =
        godzina >= 5 && godzina < 12 ? "Dzień dobry" :
        godzina >= 12 && godzina < 18 ? "Dobry wieczór" :
        "Dobranoc";

    return (
        <div className="powitanie">
            <h1>{powitanie}</h1>
            <p>Aktualna godzina: {godzina}</p>
        </div>
    );
};

export default PowitanieDnia;