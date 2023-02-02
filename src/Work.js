import Masonry from 'react-responsive-masonry';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageContainer from './components/ImageContainer/ImageContainer';
import { images } from './portfolio/index';

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

const Work = () => {
  return (
    <div class="container">
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter={4}>
          {images.map((image, id) => (
            <ImageContainer image={image} id={id} key={id} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default Work;
