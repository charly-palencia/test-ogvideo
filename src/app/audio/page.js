const Audio = '/audio.mp3';
const Thumbnail = '/video.png';
const baseUrl = "http://localhost:3001";
export async function generateMetadata({ params }, parent) {
    const title = "My audio";

    const description = "audio example";

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
            audio: {
                    url: Audio,
                    secureUrl: Audio,
                    width: 1200,
                    height: 630,
                    alt: "Preview image for Dan Mugh's Blog",
            },
            type: "website",
            siteName: "Dan Mugh's Blog",
        },
    };
}



export default function VideoPage() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
        Audio preview
    </div>
  );
}
    