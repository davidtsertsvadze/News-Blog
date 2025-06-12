import React from "react";

function Header() {
    return (
        <header class="w-full">
            <div>
                <h1 class="text-5xl font-medium font-english-towne text-[color:var(--color-secondary)] py-6">The Honest Stories Teller</h1>
                <nav class="flex items-center justify-center border-y-2 border-[color:var(--color-primary)] py-4">
                    <div class="w-[50rem] flex justify-between">
                        <a href="#news" class="text-xs text-black font-black uppercase">NEWS</a>
                        <a href="#world" class="text-xs text-black font-black uppercase">world</a>
                        <a href="#business" class="text-xs text-black font-black uppercase">buziness</a>
                        <a href="#education" class="text-xs text-black font-black uppercase">education</a>
                        <a href="#health" class="text-xs text-black font-black uppercase">health</a>
                        <a href="#sport" class="text-xs text-black font-black uppercase">Sport</a>
                        <a href="#beauty" class="text-xs text-black font-black uppercase">beauty</a>
                        <a href="#travel" class="text-xs text-black font-black uppercase">travel</a>
                        <a href="#law" class="text-xs text-black font-black uppercase">law</a>
                        <a href="#hitech" class="text-xs text-black font-black uppercase">hitech</a>
                        <a href="#showbiz" class="text-xs text-black font-black uppercase">showbiz</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header