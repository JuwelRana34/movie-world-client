import { useEffect, useState } from "react"
import { useParams } from "react-router"


function DetailBlog() {
    const {id}= useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        // Fetch the blog data from public/blog.json
        fetch("/blog.json")
          .then((res) => res.json())
          .then((data) => {
            // Find the specific post by id
            const blogPost = data.find((item) => item.id === parseInt(id));
            setPost(blogPost);
            console.log(blogPost)
          })
          .catch((error) => console.error("Error fetching blog data:", error));
      }, [id]);
    
      if (!post) {
        return (
          <div className="bg-gray-100">
            <p>Loading...</p>
          </div>
        );
      }
      console.log(post)
  return (
    <div className="bg-gray-100">
    

    {/* Main Content */}
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <section className="space-y-12">
          
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                <p className="mt-4 text-gray-600">{post.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <span>By {post.author}</span> | <span>{post.date}</span>
                </div>
               
              </div>
            </article>
          
        </section>
      </div>
    </main>

   
  </div>
  )
}

export default DetailBlog