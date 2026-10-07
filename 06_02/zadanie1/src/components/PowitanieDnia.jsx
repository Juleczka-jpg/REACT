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
        godzina >= 6 && godzina < 18 ? "Dzień dobry" :
        godzina >= 18 && godzina < 24 ? "Dobry wieczór" :
        "Dobranoc";

    return (
        <div className="powitanie">
            <h1>{powitanie}</h1>
            <p>Aktualna godzina: {godzina}</p>
        </div>
    );
};

export default PowitanieDnia;