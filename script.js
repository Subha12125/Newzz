tailwind.config = {
    darkMode: "class",
};

var menuBtn = document.querySelector("#menu-btn");
var mobileMenu = document.querySelector("#mobile-menu");

function menubutton() {
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    });
}

var newsContainer = document.querySelector("#news-container");
var searchBtn = document.querySelector("#search-btn");
var searchInput = document.querySelector("#search-input");

async function fetchNews(query = "breaking") {
    const apiKey = "197bc47d4b0f472e82848b456e8aff3a";
    const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=6&apiKey=${apiKey}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        newsContainer.innerHTML = "";
        data.articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4";
            card.innerHTML = `
                <img src="${article.urlToImage || 'https://via.placeholder.com/600x400'}" alt="${article.title}" class="w-full h-48 object-cover rounded-t-lg mb-4">
                <div class="p-4">
                    <h2 class="font-semibold text-lg mb-2">${article.title}</h2>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">${article.description || ''}</p>
                    <a href="${article.url}" target="_blank" class="text-indigo-600 dark:text-indigo-400 hover:underline">Read more</a>
                </div>
            `;
            newsContainer.appendChild(card)
        })
    }
    catch (err) {
        console.error("Error fetching news:", err);
    }
}

searchBtn.addEventListener("click", function(){
    const query = searchInput.ariaValueMax.trim();
    if (query) {
        fetchNews(query);
    } else {
        fetchNews();
    }
});
window.addEventListener("DOMContentLoaded", () => fetchNews());

menubutton();