import classes from './imageContainer.module.css';

const ImageContainer = ({ image, id }) => {
  return (
    <section className={`relative w-full h-auto ${classes.imageContainer}`}>
      <img src={image} alt={`design-${id}`} className={`${classes.image}`} />
      <div className="cursor-pointer">
        <button>View</button>
      </div>
    </section>
  );
};

export default ImageContainer;
