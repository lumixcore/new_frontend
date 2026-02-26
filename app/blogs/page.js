import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllBlogs } from '../../data/blogs';

export const metadata = {
  title: 'Blog — Lumixcore',
  description: 'News, tutorials, and updates from Lumixcore.',
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    title: 'Blog — Lumixcore',
    description: 'News, tutorials, and updates from Lumixcore.',
    url: '/blogs',
    images: [{ url: '/images/back.png' }],
    type: 'website',
  },
};

export default function BlogsPage() {
  const posts = getAllBlogs();

  const formatDate = (isoDate) => {
    try {
      return new Date(isoDate).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      });
    } catch {
      return isoDate;
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000313] pt-24 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(900px 600px at 50% -10%, rgba(168,85,247,0.18) 0%, rgba(0,0,0,0) 60%), repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0) 12px, rgba(255,255,255,0) 24px)',
            maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Blog Grid</h1>
            <div className="mt-2 text-xs text-gray-500">
              <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-gray-400">Blog Grid</span>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/5 hover:bg-white/6 transition-colors">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-black/20 text-gray-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTimeMinutes} min read</span>
                    </div>

                    <h2 className="mt-4 text-white font-semibold text-lg leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-400 leading-6 line-clamp-2">
                      {post.content?.find(item => item.type === 'paragraph')?.text || 'Read the latest from Lumixcore.'}
                    </p>

                    <div className="mt-5 flex items-center gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-7 w-7 rounded-full bg-linear-to-b from-purple-500/30 to-cyan-500/10 border border-white/10"></span>
                        <span className="text-gray-300">Lumixcore</span>
                      </span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 relative z-10">
          <Footer />
        </div>
      </main>
    </>
  );
}
