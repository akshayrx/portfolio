import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Akshay Ravikant
      </h1>
      <p className="mb-4">
        {`I work on AI chatbot development, SaaS solutions, and MVP development, helping startups and businesses turn ideas into real, working products. Using React.js, Next.js, and automation tools, I build simple, user-friendly solutions that solve real problems.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
