const Video = '/video.mp4';
const Thumbnail = '/video.png';
const baseUrl = "https://test-ogvideo-sepia.vercel.app";
export async function generateMetadata({ params }, parent) {
    const title = "My video extension";

    const description = "video example";

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        openGraph: {
            title,
            description,
            url: baseUrl,
            images: [
                {
                    url: Thumbnail,
                    secureUrl: Thumbnail,
                    width: 1200,
                    height: 630,
                    alt: "Preview image for Dan Mugh's Blog",
                },
            ],
            videos: [
                {
                    url: Video,
                    secureUrl: Video,
                    width: 1200,
                    height: 630,
                    alt: "Preview image for Dan Mugh's Blog",
                },
            ],
            type: "website",
            siteName: "Dan Mugh's Blog",
        },
    };
}



export default function VideoPage() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
        Video preview

        <div className="mt-4 flex justify-center gap-4">
            <a target="_blank" rel="noreferrer" className="text-white" href={`whatsapp://send?text=${encodeURIComponent(`${new URL(baseUrl).toString()}video.mp3`)}`}>
                Whatsapp
            </a>
        </div>
    </div>
  );
}
    