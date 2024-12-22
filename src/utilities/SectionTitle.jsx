import PropTypes from 'prop-types';


const SectionTitle = ({title, description}) => {
    return (
        <div className='text-center px-3'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3 md:mb-5'>{title}</h2>
            <p className='max-w-[700px] mx-auto text-md md:text-lg mb-7 md:mb-10'>{description}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SectionTitle;