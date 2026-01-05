import React, { useEffect, useState } from "react";

function FirstBlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://david.local/wp-json/wp/v2/posts?_embed=true&per_page=2")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const firstPost = posts[0];
  const secondPost = posts[1];

  const getCategoryName = (post) => {
    const terms = post?._embedded?.["wp:term"];
    if (!terms) return "";

    const categories = terms.find(
      termGroup => termGroup[0]?.taxonomy === "category"
    );

    return categories?.[0]?.name || "";
  };

  return (
    <div className="w-full border-y border-black flex flex-row">

      {/* First Post */}
      {firstPost && (
        <div className="w-3/4 p-5 flex flex-row">
          <img
            className="aspect-[530/400] w-[530px]"
            src={firstPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
            alt={firstPost.title.rendered}
          />

          <div className="pl-5">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-[color:var(--color-vividRed)]"></div>
              <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                {getCategoryName(firstPost)}
              </span>
            </div>

            <h3
              className="text-[color:var(--color-black500)] text-3xl text-left font-normal font-anton"
              dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
            />

            <p
              className="text-[color:var(--color-black500)] text-sm text-left font-vollkorn mt-[110px]"
              dangerouslySetInnerHTML={{ __html: firstPost.excerpt.rendered }}
            />
          </div>
        </div>
      )}

    {/* Divider */}
    <div className="w-px bg-[color:var(--color-primary)]"></div>

      {/* Second Post */}
      {secondPost && (
        <div className="w-1/4 p-5">
          <img
            className="aspect-[324/243] w-[324px] mb-5"
            src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
            alt={secondPost.title.rendered}
          />

          <div>
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-[color:var(--color-fresh-green)]"></div>
              <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                {getCategoryName(secondPost)}
              </span>
            </div>

            <h3
              className="text-[color:var(--color-black500)] text-3xl text-left font-normal font-anton"
              dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstBlogSection;
