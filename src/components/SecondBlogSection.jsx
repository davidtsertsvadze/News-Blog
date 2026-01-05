import React, { useEffect, useState } from "react";

function SecondBlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://david.local/wp-json/wp/v2/posts?_embed=true&per_page=2")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("ka-GE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


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

      {/* Left Column */}
      {firstPost && (
        <div className="w-1/3 p-5">
            <div>
                <div className="border-b border-dotted border-[color:var(--color-primary)] pb-6">
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-sky-blue)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-2xl text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>

                    <p
                    className="text-[color:var(--color-black500)] text-sm text-left font-vollkorn mt-[32px]"
                    dangerouslySetInnerHTML={{ __html: firstPost.excerpt.rendered }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-vividRed)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>  
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-earthstone)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-sky-blue)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-fresh-green)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>   
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-vivid-blue)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>  
                </div>
            </div>
            <div className="border border-black my-8 py-10 px-22">
               <img
                  className="aspect-[335/255] w-[335px]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                />
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-vividRed)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>  
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-vividRed)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>  
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-vividRed)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>  
                </div>
                <div>
                    <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[color:var(--color-vividRed)]"></div>
                    <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                        {getCategoryName(firstPost)}
                    </span>
                    </div>

                    <h3
                    className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                    dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}
                    />
                    <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span>  
                </div>
            </div>
        </div>
      )}

      {/* Divider */}
      <div className="w-px bg-[color:var(--color-primary)]"></div>

      {/* Midle Column */}
      {secondPost && (
        <div className="w-1/3 p-5">
          <div className="pb-5">
            <img
              className="aspect-[324/243] mb-5"
              src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
              alt={secondPost.title.rendered}
            />

            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                  {getCategoryName(secondPost)}
                </span>
              </div>

              <h3
                className="text-[color:var(--color-black500)] text-2xl text-left font-normal font-anton"
                dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
              />
            </div>
          </div> 
          <div>
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                  <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                    {getCategoryName(secondPost)}
                  </span>
                </div>

                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                  <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                    {getCategoryName(secondPost)}
                  </span>
                </div>

                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                  <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                    {getCategoryName(secondPost)}
                  </span>
                </div>

                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                  <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                    {getCategoryName(secondPost)}
                  </span>
                </div>

                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
            <div className="border-t border-dotted border-[color:var(--color-primary)] py-5 flex flex-row">
              <div className="w-1/2 mr-5">
                <img
                  className="aspect-[324/243]"
                  src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                  alt={secondPost.title.rendered}
                 />
              </div>
              
              <div className="w-1/2">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-[color:var(--color-amber-orange)]"></div>
                  <span className="text-[color:var(--color-black300)] text-xs font-black pl-2">
                    {getCategoryName(secondPost)}
                  </span>
                </div>

                <h3
                  className="text-[color:var(--color-black500)] text-lg text-left font-normal font-anton"
                  dangerouslySetInnerHTML={{ __html: secondPost.title.rendered }}
                />
                <span className="block text-[color:var(--color-black300)] text-sm text-left font-vollkorn mt-[4px]">
                        {formatDate(firstPost.date)}
                    </span> 
              </div>
            </div> 
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="w-px bg-[color:var(--color-primary)]"></div>

      {/* Right Column */}
      {secondPost && (
        <div className="w-1/3 p-5">
          <img
            className="aspect-[324/243] w-[324px] mb-5"
            src={secondPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
            alt={secondPost.title.rendered}
          />

          <div>
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-[color:var(--color-vividRed)]"></div>
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

export default SecondBlogSection;
