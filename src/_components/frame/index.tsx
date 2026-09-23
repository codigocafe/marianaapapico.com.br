import "@/_components/frame/style.scss";

const Frames = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <>
      <div className="frame_border">
        <div className="frame_border--background">
          <img src={src} alt={alt} className="frame_border--image" />
        </div>
      </div>
    </>
  );
};

export default Frames;
