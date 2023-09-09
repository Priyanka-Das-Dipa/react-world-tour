import './Country.css';
const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, area} = country;
    return (
        <div className='country'>
            <h3>Name:{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population Of the {name?.common} is : {population} </p>
            <p>Area Of the {name?.common} is : {area} </p>
            {/* <img src={flags.svg} alt="" /> */}
        </div>
    );
};

export default Country;