const Video = '/embed';
const Thumbnail = '/video.png';
const baseUrl = "https://test-ogvideo-sepia.vercel.app";

export function TwitterPlayerMeta() {
    const metadata = {
      title: 'Awesome Video Content',
      description: 'Check out this amazing video!',
      previewImage: 'https://example.com/video-preview.jpg',
      playerUrl: 'https://example.com/video-embed',
      twitterHandle: '@yourhandle',
      width: 480,
      height: 480
    }
    return metadata;
}

export async function generateMetadata({ params }, parent) {
    const title = "My video without extension";

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
                    url: `${baseUrl}${Video}`,
                    secureUrl: `${baseUrl}${Video}`,
                    width: 1280,
                    height: 720,
                    type: "text/html",
                },
            ],
            twitter: {
                card: "player",
                title,
                site: baseUrl,
                images: [
                    {
                        url: `${baseUrl}${Thumbnail}`,
                        width: 1280,
                        height: 720,
                        alt: "Preview image for Dan Mugh's Blog",
                    },
                ],
                player: {
                    stream: `${baseUrl}${Video}`,
                    width: 1280,
                    height: 720
                }
            },
            type: "video.other",
            siteName: "Dan Mugh's Blog",
        },
    };
}



export default function VideoPage() {
  return (
        <html>
            <head>
                <meta name="twitter:card" content="player" />
                <meta name="twitter:player" content={`${baseUrl}${Video}`} />
                <meta name="twitter:player:stream" content={`${baseUrl}${Video}`} />
                <meta name="twitter:player:width" content="1280" />
                <meta name="twitter:player:height" content="720" />
            </head>
            <body>
                <div className="h-screen bg-black flex justify-center items-center">
                    without extension Video preview

                    <div className="mt-4 flex justify-center gap-4">
                        <a target="_blank" rel="noreferrer" className="text-white" href={`whatsapp://send?text=${encodeURIComponent(`${new URL(baseUrl).toString()}video.mp3`)}`}>
                            Whatsapp
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
