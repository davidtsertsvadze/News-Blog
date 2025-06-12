import React, { useEffect, useState } from "react";

function FirstBlogSection() {
    const [posts, setposts] = useState([]);

    useEffect(() => {
    fetch('http://david.local/wp-json/wp/v2/posts?_embed')

      .then(function(responce) {
        return responce.json();
      })

      .then(function(data) {
        setposts(data);
      }) 

      .catch(function(error) {
        console.error('Error fetching posts:', error);  
      });

  }, []);

  const firstPost = posts[0];
  const secondPost = posts[1];  

    return (
        <div class="w-full border-y border-black min-h-[440px] flex flex-row">

            {/* First Post */}
            {firstPost && (
                <div class="w-3/4 h-full p-5 border-r border-[color:var(--color-primary)] flex flex-row">
                    <img class="aspect-[530/400] w-[530px]" src={firstPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''} alt={firstPost.title.rendered}/>
                    <div class="pl-5">
                        <span></span>
                        <h3 class="text-[color:var(--color-black500)] text-3xl text-left font-normal" dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}></h3>
                        <p class="text-[color:var(--color-black500)] text-sm text-left mt-[110px]" dangerouslySetInnerHTML={{ __html: firstPost.excerpt.rendered }}></p>
                    </div>
                </div>
            )}

            {/* Second Post */}
            {secondPost && (
                <div class="w-1/4 h-full p-5">
                    <img class="aspect-[324/243] w-[324px] mb-5" src={secondPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''} alt={secondPost.title.rendered} />
                    <h3 class="text-[color:var(--color-black500)] text-3xl text-left font-normal" dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}></h3>
                    <span></span>
                </div> 
            )}   
        </div>
    )
}

export default FirstBlogSection;