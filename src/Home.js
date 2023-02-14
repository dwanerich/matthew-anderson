import Masonry from 'react-responsive-masonry';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageContainer from './components/ImageContainer/ImageContainer';
import { images } from './portfolio/index';
import './index.css';

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3, 1024: 4 };

const Home = () => {
  return (
    <div class="w-full mx-auto">
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter={0}>
          {images.map((image, id) => (
            <ImageContainer image={image} id={id} key={id} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default Home;
