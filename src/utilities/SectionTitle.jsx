import PropTypes from 'prop-types';


const SectionTitle = ({title, description}) => {
    return (
        <div className='text-center px-3'>
            <h2 className='text-5xl font-bold mb-5'>{title}</h2>
            <p className='max-w-[700px] mx-auto text-lg mb-10'>{description}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SectionTitle;