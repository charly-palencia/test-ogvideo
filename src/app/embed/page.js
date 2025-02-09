const Video = '/video2';
const Thumbnail = '/video.png';

export default function VideoPage() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <video
        controls
        className="max-w-full h-auto"
        src={"https://gamiapp-prod.b-cdn.net/gami-prod-storage/uploads/2024/12/11/srhE7X6B_Test1.mp4"}
        style={{
          width: "793px",
          height: "446px",
          left: "0px",
          top: "240px",
        }}


        poster={Thumbnail}
      />
    </div>
  );
}
