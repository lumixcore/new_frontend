import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getAllBlogs, getBlogBySlug } from '../../../data/blogs';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Blog post not found — Lumixcore',
      description: 'This post could not be found.',
      alternates: { canonical: '/blogs' },
    };
  }

  const title = `${post.title} — Lumixcore`;
  const description = `${post.category} • ${post.readTimeMinutes} min read`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blogs/${post.slug}`,
      images: [{ url: post.coverImage }],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000313] pt-24">
        <article className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl backdrop-blur overflow-hidden">
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-cyan-300 font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-400">{publishedDate}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{post.readTimeMinutes} min read</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {post.title}
              </h1>

              <div className="mt-8 space-y-6 text-[17px] leading-7 text-gray-300">
                {post.content.map((item, idx) => {
                  switch (item.type) {
                    case 'heading':
                      const HeadingTag = `h${item.level || 2}`;
                      return (
                        <HeadingTag key={idx} className="text-2xl md:text-3xl text-white font-semibold mt-8 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {item.text}
                        </HeadingTag>
                      );
                    case 'paragraph':
                      return (
                        <p key={idx} className="text-gray-300 leading-7">
                          {item.text}
                        </p>
                      );
                    case 'list':
                      return (
                        <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                          {item.items.map((listItem, listIdx) => (
                            <li key={listIdx} className="text-gray-300 leading-7">
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      );
                    case 'callout':
                      return (
                        <div key={idx} className="border-l-4 border-cyan-500 bg-cyan-500/10 p-4 rounded-r-lg my-6">
                          <p className="text-cyan-100 leading-7">
                            {item.text}
                          </p>
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
