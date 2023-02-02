import Masonry from 'react-responsive-masonry';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageContainer from './components/ImageContainer/ImageContainer';
import { images } from './portfolio/index';

// images = [
//   "https://drive.google.com/file/d/1Db9uTAG0sqCK5KIqY4PWTU8LqgYdlPzF/view?usp=share_link",
//   "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
//   "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
// ]

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
