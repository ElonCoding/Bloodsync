export default function CampaignsVideos() {
  const videos = [
    { id: 1, title: "Why donate blood?", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Myths vs Facts", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, title: "Eligibility basics", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];
  return (
    <div className="container mx-auto max-w-6xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Awareness Videos</h1>
      <p className="mt-2 text-muted-foreground">Culturally sensitive content to inform and inspire voluntary donation.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {videos.map((v) => (
          <div key={v.id} className="rounded-xl border bg-card p-4 shadow-sm">
            <video className="aspect-video w-full rounded-md" controls src={v.src} />
            <div className="mt-2 text-sm font-medium">{v.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
