const Video = '/video2';
const Thumbnail = '/video.png';

export default function VideoPage() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <video
        controls
        src={Video}
        className="max-w-full h-auto"
        poster={Thumbnail}
      />
    </div>
  );
}
